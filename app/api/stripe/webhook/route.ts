import { NextResponse } from 'next/server';

export async function POST() {
  // Stripe webhook handler placeholder.
  // In production validate the signature header and update order states.
  return NextResponse.json({ received: true });
}
