import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Market } from '@/types/api';
import { formatCurrency, formatCompactNumber, formatPercentage } from '@/lib/utils';
import { TrendingUp, Users, Globe } from 'lucide-react';

interface MarketCardProps {
  market: Market;
}

export function MarketCard({ market }: MarketCardProps) {
  return (
    <Link href={`/markets/${market.slug}`}>
      <Card className="h-full hover:shadow-lg transition-shadow">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-2xl">{market.flagEmoji}</span>
              <CardTitle className="text-lg">{market.name}</CardTitle>
            </div>
            <Badge variant="secondary">{market.region}</Badge>
          </div>
          <CardDescription>{market.countryCode}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {market.marketSize && (
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-muted-foreground" />
                <span className="font-semibold">{formatCurrency(market.marketSize)}</span>
                <span className="text-sm text-muted-foreground">market size</span>
              </div>
            )}
            {market.growthRate && (
              <div className="flex items-center gap-2">
                <svg
                  className={`w-4 h-4 ${
                    market.growthRate >= 0 ? 'text-green-500' : 'text-red-500'
                  }`}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  {market.growthRate >= 0 ? (
                    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                  ) : (
                    <polyline points="23 18 13.5 8.5 8.5 13.5 1 6" />
                  )}
                  <polyline points="17 6 23 6 23 12" />
                </svg>
                <span className={market.growthRate >= 0 ? 'text-green-600' : 'text-red-600'}>
                  {formatPercentage(market.growthRate)} CAGR
                </span>
              </div>
            )}
            {market.playerCount && (
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-muted-foreground" />
                <span>{formatCompactNumber(market.playerCount)}</span>
                <span className="text-sm text-muted-foreground">players</span>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
