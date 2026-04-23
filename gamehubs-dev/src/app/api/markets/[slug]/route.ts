import { NextResponse } from 'next/server';
import { getMarketBySlug } from '@/services/market';

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  try {
    const market = await getMarketBySlug(params.slug);
    
    if (!market) {
      return NextResponse.json(
        {
          success: false,
          error: {
            code: 'NOT_FOUND',
            message: `Market with slug '${params.slug}' not found`,
          },
        },
        { status: 404 }
      );
    }
    
    return NextResponse.json({
      success: true,
      data: market,
      meta: {
        timestamp: new Date().toISOString(),
        version: '1.0.0',
      },
    });
  } catch (error) {
    console.error('Error fetching market:', error);
    return NextResponse.json(
      {
        success: false,
        error: {
          code: 'INTERNAL_ERROR',
          message: 'Failed to fetch market',
        },
      },
      { status: 500 }
    );
  }
}
