import prisma from '@/lib/prisma';
import { cache } from '@/lib/cache';
import readingTime from 'reading-time';

export interface ReportData {
  id: string;
  slug: string;
  title: string;
  description: string;
  content: string;
  category: string;
  region: string;
  author: string | null;
  publishedAt: Date;
  viewCount: number;
  tags: string[];
}

/**
 * Get all reports with pagination
 */
export async function getReports(params: {
  page?: number;
  pageSize?: number;
  category?: string;
  region?: string;
  search?: string;
}): Promise<{ reports: ReportData[]; total: number }> {
  const { page = 1, pageSize = 10, category, region, search } = params;
  const skip = (page - 1) * pageSize;
  
  const cacheKey = `reports:list:${page}:${pageSize}:${category}:${region}:${search}`;
  
  return cache.getOrSet(cacheKey, async () => {
    const where: Record<string, unknown> = {};
    
    if (category) where.category = category;
    if (region) where.region = region;
    if (search) {
      where.OR = [
        { title: { contains: search, mode: 'insensitive' } },
        { description: { contains: search, mode: 'insensitive' } },
      ];
    }
    
    const [reports, total] = await Promise.all([
      prisma.report.findMany({
        where,
        orderBy: { publishedAt: 'desc' },
        skip,
        take: pageSize,
        include: {
          tags: true,
        },
      }),
      prisma.report.count({ where }),
    ]);
    
    return {
      reports: reports.map((r) => ({
        id: r.id,
        slug: r.slug,
        title: r.title,
        description: r.description,
        content: r.content,
        category: r.category,
        region: r.region,
        author: r.author,
        publishedAt: r.publishedAt,
        viewCount: r.viewCount,
        tags: r.tags.map((t) => t.name),
        readingTime: Math.ceil(readingTime(r.content).minutes),
      })),
      total,
    };
  }, 1800); // Cache for 30 minutes
}

/**
 * Get report by slug
 */
export async function getReportBySlug(slug: string): Promise<ReportData | null> {
  const cacheKey = `report:${slug}`;
  
  return cache.getOrSet(cacheKey, async () => {
    const report = await prisma.report.findUnique({
      where: { slug },
      include: {
        tags: true,
      },
    });
    
    if (!report) return null;
    
    // Increment view count
    await prisma.report.update({
      where: { id: report.id },
      data: { viewCount: { increment: 1 } },
    });
    
    return {
      id: report.id,
      slug: report.slug,
      title: report.title,
      description: report.description,
      content: report.content,
      category: report.category,
      region: report.region,
      author: report.author,
      publishedAt: report.publishedAt,
      viewCount: report.viewCount + 1,
      tags: report.tags.map((t) => t.name),
      readingTime: Math.ceil(readingTime(report.content).minutes),
    };
  }, 1800);
}

/**
 * Get report categories
 */
export async function getReportCategories(): Promise<string[]> {
  const cacheKey = 'reports:categories';
  
  return cache.getOrSet(cacheKey, async () => {
    const categories = await prisma.report.findMany({
      select: { category: true },
      distinct: ['category'],
    });
    return categories.map((c) => c.category);
  }, 3600);
}
