import { NextResponse } from 'next/server';
import { z } from 'zod';
import { listings } from '@/data/mockListings';

const payloadSchema = z.object({
  listingId: z.string(),
  shipperId: z.string(),
  paymentIntent: z.string().optional()
});

export async function POST(request: Request) {
  const json = await request.json();
  const parsed = payloadSchema.safeParse(json);

  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });
  }

  const listing = listings.find((item) => item.id === parsed.data.listingId);

  if (!listing) {
    return NextResponse.json({ error: 'Listing not found' }, { status: 404 });
  }

  const order = {
    id: `ORD-${Math.floor(Math.random() * 10_000)}`,
    listingId: listing.id,
    carrierId: listing.carrier,
    shipperId: parsed.data.shipperId,
    status: 'pending',
    total: listing.price,
    paymentIntent: parsed.data.paymentIntent ?? 'stripe_test_intent'
  };

  return NextResponse.json({ data: order }, { status: 201 });
}
