/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  
  // Compression
  compress: true,
  
  // Image optimization
  images": {
    domains: ['gamehubs.top', 'images.unsplash.com'],
    formats: ['image/avif', 'image/webp'],
  },
  
  // Content source
  contentSources: {
    // Allow loading content from various sources
  },
  
  // Headers for security and SEO
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
        ],
      },
      {
        source: '/api/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, s-maxage=3600, stale-while-revalidate=86400',
          },
        ],
      },
    ];
  },
  
  // Redirects for SEO
  async redirects() {
    return [
      {
        source: '/reports',
        destination: '/reports/asia-pacific-market-2026',
        permanent: false,
      },
      {
        source: '/trends',
        destination: '/trends/mobile-gaming-trends-2026',
        permanent: false,
      },
    ];
  },
  
  // Experimental features
  experimental: {
    optimizePackageImports: ['lucide-react', 'recharts'],
  },
  
  // Webpack configuration
  webpack: (config, { isServer }) => {
    // Optimize bundles
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      net: false,
      tls: false,
    };
    
    return config;
  },
};

module.exports = nextConfig;
