import Redis from 'ioredis';
import { isServer } from '@/lib/utils';

const globalForRedis = globalThis as unknown as {
  redis: Redis | undefined;
};

// Create Redis client
function createRedisClient(): Redis {
  const redisUrl = process.env.REDIS_URL;
  
  if (!redisUrl) {
    console.warn('REDIS_URL not set, using in-memory cache');
    // Return a mock client for development
    return new Redis({ lazyConnect: true });
  }
  
  return new Redis(redisUrl, {
    maxRetriesPerRequest: 3,
    retryDelayOnFailover: 100,
    enableReadyCheck: true,
    connectTimeout: 10000,
  });
}

export const redis = globalForRedis.redis ?? createRedisClient();

if (!isServer) {
  globalForRedis.redis = redis;
}

/**
 * Cache service using Redis
 */
export const cache = {
  /**
   * Get cached value
   */
  async get<T>(key: string): Promise<T | null> {
    try {
      const value = await redis.get(key);
      return value ? JSON.parse(value) : null;
    } catch {
      return null;
    }
  },
  
  /**
   * Set cached value
   */
  async set(key: string, value: unknown, ttlSeconds: number = 3600): Promise<void> {
    try {
      await redis.setex(key, ttlSeconds, JSON.stringify(value));
    } catch (error) {
      console.error('Cache set error:', error);
    }
  },
  
  /**
   * Delete cached value
   */
  async del(key: string): Promise<void> {
    try {
      await redis.del(key);
    } catch (error) {
      console.error('Cache delete error:', error);
    }
  },
  
  /**
   * Get or set cached value
   */
  async getOrSet<T>(
    key: string,
    factory: () => Promise<T>,
    ttlSeconds: number = 3600
  ): Promise<T> {
    const cached = await this.get<T>(key);
    if (cached !== null) {
      return cached;
    }
    
    const value = await factory();
    await this.set(key, value, ttlSeconds);
    return value;
  },
  
  /**
   * Clear all cache (use with caution)
   */
  async flush(): Promise<void> {
    try {
      await redis.flushdb();
    } catch (error) {
      console.error('Cache flush error:', error);
    }
  },
  
  /**
   * Get cache stats
   */
  async stats(): Promise<{ hits: number; misses: number }> {
    const info = await redis.info('stats');
    const lines = info.split('\r\n');
    
    let hits = 0;
    let misses = 0;
    
    lines.forEach((line) => {
      if (line.startsWith('keyspace_hits:')) {
        hits = parseInt(line.split(':')[1], 10);
      }
      if (line.startsWith('keyspace_misses:')) {
        misses = parseInt(line.split(':')[1], 10);
      }
    });
    
    return { hits, misses };
  },
};

export default redis;
