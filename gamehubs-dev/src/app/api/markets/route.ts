import { NextResponse } from 'next/server';
import { getMarkets } from '@/services/market';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const region = searchParams.get('region');
    
    let markets = await getMarkets();
    
    // Filter by region if provided
    if (region) {
      markets = markets.filter((m) => m.region.toLowerCase() === region.toLowerCase());
    }
    
    return NextResponse.json({
      success: true,
      data: markets,
      meta: {
        timestamp: new Date().toISOString(),
        version: '1.0.0',
      },
    });
  } catch (error) {
    console.error('Error fetching markets:', error);
    return NextResponse.json(
      {
        success: false,
        error: {
          code: 'INTERNAL_ERROR',
          message: 'Failed to fetch markets',
        },
      },
      { status: 500 }
    );
  }
}
