/**
 * Types for the GameHubs API
 */

export interface ApiResponse<T> {
  success: boolean;
  data: T;
  meta: {
    timestamp: string;
    version: string;
    rateLimit?: {
      remaining: number;
      reset: number;
    };
  };
}

export interface PaginatedResponse<T> extends ApiResponse<T[]> {
  pagination: {
    page: number;
    pageSize: number;
    totalItems: number;
    totalPages: number;
  };
}

export interface Market {
  id: string;
  slug: string;
  name: string;
  region: string;
  countryCode: string;
  flagEmoji: string;
  marketSize: number | null;
  growthRate: number | null;
  playerCount: number | null;
  lastUpdated: string;
}

export interface Regulation {
  id: string;
  marketId: string;
  type: 'KYC' | 'AML' | 'Licensing' | 'ResponsibleGaming';
  title: string;
  description: string;
  content: string;
  regulator: string | null;
  effectiveDate: string | null;
}

export interface PaymentMethod {
  id: string;
  name: string;
  type: 'wallet' | 'bank' | 'card' | 'crypto';
  logo: string | null;
  popularMarkets: string[];
}

export interface Report {
  id: string;
  slug: string;
  title: string;
  description: string;
  category: string;
  region: string;
  author: string | null;
  publishedAt: string;
  viewCount: number;
  readingTime: number;
  tags: string[];
}

export interface Trend {
  id: string;
  slug: string;
  title: string;
  description: string;
  category: string;
  publishedAt: string;
  viewCount: number;
}

export interface GlossaryTerm {
  id: string;
  term: string;
  definition: string;
  category: string;
  relatedTerms: string[];
  examples: string[];
}

export interface MarketAnalytics {
  totalMarketSize: number;
  averageGrowthRate: number;
  topMarkets: Market[];
  regionBreakdown: Record<string, number>;
}

// API Request Types
export interface GetMarketsParams {
  region?: string;
  sort?: 'marketSize' | 'growthRate' | 'name';
  order?: 'asc' | 'desc';
}

export interface GetReportsParams extends GetMarketsParams {
  category?: string;
  search?: string;
  tags?: string[];
}

export interface ApiError {
  code: string;
  message: string;
  details?: Record<string, unknown>;
}
