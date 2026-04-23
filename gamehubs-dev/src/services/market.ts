/**
 * Market Data Service
 * Handles market data retrieval and caching
 */

import prisma from '@/lib/prisma';
import { cache } from '@/lib/cache';

export interface MarketData {
  id: string;
  slug: string;
  name: string;
  region: string;
  countryCode: string;
  flagEmoji: string;
  marketSize: number | null;
  growthRate: number | null;
  playerCount: number | null;
}

export interface MarketAnalytics {
  totalMarketSize: number;
  averageGrowthRate: number;
  topMarkets: MarketData[];
  regionBreakdown: Record<string, number>;
}

/**
 * Get all active markets
 */
export async function getMarkets(): Promise<MarketData[]> {
  const cacheKey = 'markets:all';
  
  return cache.getOrSet(cacheKey, async () => {
    const markets = await prisma.market.findMany({
      where: { isActive: true },
      orderBy: { marketSize: 'desc' },
      select: {
        id: true,
        slug: true,
        name: true,
        region: true,
        countryCode: true,
        flagEmoji: true,
        marketSize: true,
        growthRate: true,
        playerCount: true,
      },
    });
    
    return markets.map((m) => ({
      ...m,
      marketSize: m.marketSize ? Number(m.marketSize) : null,
      growthRate: m.growthRate ? Number(m.growthRate) : null,
    }));
  }, 3600); // Cache for 1 hour
}

/**
 * Get market by slug
 */
export async function getMarketBySlug(slug: string): Promise<MarketData | null> {
  const cacheKey = `market:${slug}`;
  
  return cache.getOrSet(cacheKey, async () => {
    const market = await prisma.market.findUnique({
      where: { slug },
      select: {
        id: true,
        slug: true,
        name: true,
        region: true,
        countryCode: true,
        flagEmoji: true,
        marketSize: true,
        growthRate: true,
        playerCount: true,
      },
    });
    
    if (!market) return null;
    
    return {
      ...market,
      marketSize: market.marketSize ? Number(market.marketSize) : null,
      growthRate: market.growthRate ? Number(market.growthRate) : null,
    };
  }, 3600);
}

/**
 * Get market analytics
 */
export async function getMarketAnalytics(): Promise<MarketAnalytics> {
  const cacheKey = 'market:analytics';
  
  return cache.getOrSet(cacheKey, async () => {
    const markets = await getMarkets();
    
    const totalMarketSize = markets.reduce(
      (sum, m) => sum + (m.marketSize || 0),
      0
    );
    
    const marketsWithGrowth = markets.filter((m) => m.growthRate !== null);
    const averageGrowthRate =
      marketsWithGrowth.length > 0
        ? marketsWithGrowth.reduce((sum, m) => sum + (m.growthRate || 0), 0) /
          marketsWithGrowth.length
        : 0;
    
    const regionBreakdown = markets.reduce((acc, m) => {
      acc[m.region] = (acc[m.region] || 0) + (m.marketSize || 0);
      return acc;
    }, {} as Record<string, number>);
    
    return {
      totalMarketSize,
      averageGrowthRate,
      topMarkets: markets.slice(0, 5),
      regionBreakdown,
    };
  }, 3600);
}

/**
 * Search markets
 */
export async function searchMarkets(query: string): Promise<MarketData[]> {
  const markets = await getMarkets();
  
  const lowerQuery = query.toLowerCase();
  return markets.filter(
    (m) =>
      m.name.toLowerCase().includes(lowerQuery) ||
      m.countryCode.toLowerCase().includes(lowerQuery) ||
      m.region.toLowerCase().includes(lowerQuery)
  );
}
