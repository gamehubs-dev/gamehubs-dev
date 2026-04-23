import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Report } from '@/types/api';
import { formatDate } from '@/lib/utils';
import { Calendar, Eye, Clock } from 'lucide-react';

interface ReportCardProps {
  report: Report;
}

export function ReportCard({ report }: ReportCardProps) {
  return (
    <Link href={`/reports/${report.slug}`}>
      <Card className="h-full hover:shadow-lg transition-shadow">
        <CardHeader>
          <div className="flex items-start justify-between gap-2">
            <Badge variant="outline">{report.category}</Badge>
            <span className="text-sm text-muted-foreground">{report.region}</span>
          </div>
          <CardTitle className="line-clamp-2">{report.title}</CardTitle>
          <CardDescription className="line-clamp-3">{report.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            {report.publishedAt && (
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <span>{formatDate(report.publishedAt, { year: 'numeric', month: 'short', day: 'numeric' })}</span>
              </div>
            )}
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{report.readingTime} min read</span>
            </div>
            <div className="flex items-center gap-1">
              <Eye className="w-4 h-4" />
              <span>{report.viewCount}</span>
            </div>
          </div>
          {report.tags && report.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-4">
              {report.tags.slice(0, 3).map((tag) => (
                <Badge key={tag} variant="secondary" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </Link>
  );
}
