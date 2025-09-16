import { NextResponse } from 'next/server';
import { listings } from '@/data/mockListings';

export async function GET() {
  return NextResponse.json({ data: listings });
}
