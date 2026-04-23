import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MarketCard } from '@/components/features/market-card';
import { ReportCard } from '@/components/features/report-card';
import { getMarkets, getMarketAnalytics } from '@/services/market';
import { getReports } from '@/services/content';
import { 
  TrendingUp, 
  Globe, 
  Shield, 
  BarChart3,
  ArrowRight,
  Zap,
  Users,
  FileText,
  Scale
} from 'lucide-react';

export default async function HomePage() {
  const [markets, analytics, reports] = await Promise.all([
    getMarkets(),
    getMarketAnalytics(),
    getReports({ pageSize: 3 }),
  ]);

  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 to-background py-20">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4">
              <Zap className="w-3 h-3 mr-1" />
              Open Source Since 2026
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              The Leading <span className="text-primary">iGaming Intelligence</span> Platform
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Open-source research platform delivering real-time online gaming market data, 
              regulatory compliance frameworks, and industry analytics across 20+ global markets.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/reports">
                  <FileText className="w-4 h-4 mr-2" />
                  Explore Research
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="https://github.com/gamehubs-dev/gamehubs-dev">
                  <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                  View on GitHub
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 border-y bg-muted/50">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary">$95B+</div>
              <div className="text-sm text-muted-foreground mt-1">Asia-Pacific Market</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary">20+</div>
              <div className="text-sm text-muted-foreground mt-1">Countries Tracked</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary">500M+</div>
              <div className="text-sm text-muted-foreground mt-1">Players Analyzed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary">6</div>
              <div className="text-sm text-muted-foreground mt-1">Languages</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Comprehensive Gaming Intelligence</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Everything you need to understand, enter, and succeed in the global iGaming market.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardHeader>
                <TrendingUp className="w-10 h-10 text-primary mb-2" />
                <CardTitle>Market Intelligence</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Real-time market sizing, growth analytics, and competitive landscape analysis across all major gaming markets.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Shield className="w-10 h-10 text-primary mb-2" />
                <CardTitle>Regulatory Compliance</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Comprehensive guides for KYC, AML, licensing requirements, and responsible gaming standards by jurisdiction.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Users className="w-10 h-10 text-primary mb-2" />
                <CardTitle>Player Analytics</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Deep insights into player behavior, payment preferences, and engagement patterns across regions.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <BarChart3 className="w-10 h-10 text-primary mb-2" />
                <CardTitle>Industry Reports</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  In-depth research reports, trend analysis, and investment opportunity assessments for industry stakeholders.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Markets Section */}
      <section className="py-20 bg-muted/30">
        <div className="container px-4 mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold">Top Gaming Markets</h2>
              <p className="text-muted-foreground mt-1">
                Comprehensive coverage of {markets.length}+ markets worldwide
              </p>
            </div>
            <Button asChild variant="ghost">
              <Link href="/markets">
                View All Markets
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {markets.slice(0, 6).map((market) => (
              <MarketCard key={market.id} market={market} />
            ))}
          </div>
        </div>
      </section>

      {/* Latest Reports Section */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold">Latest Research</h2>
              <p className="text-muted-foreground mt-1">
                Stay updated with the latest industry insights
              </p>
            </div>
            <Button asChild variant="ghost">
              <Link href="/reports">
                View All Reports
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reports.map((report) => (
              <ReportCard key={report.id} report={report} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container px-4 mx-auto text-center">
          <Scale className="w-12 h-12 mx-auto mb-6 opacity-80" />
          <h2 className="text-3xl font-bold mb-4">Open Source, Community Driven</h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            Join our community of developers, researchers, and gaming industry professionals. 
            Contribute to the most comprehensive iGaming intelligence platform.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild variant="secondary" size="lg">
              <Link href="/contributing">
                Start Contributing
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
              <Link href="/docs">
                Read Documentation
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
