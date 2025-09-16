import { NextResponse } from 'next/server';

const mockedTimeline = [
  { status: 'pending', timestamp: '2024-04-19T12:00:00Z' },
  { status: 'confirmed', timestamp: '2024-04-19T12:02:00Z' },
  { status: 'in-transit', timestamp: '2024-04-20T06:15:00Z' }
];

export async function GET(_: Request, { params }: { params: { orderId: string } }) {
  return NextResponse.json({
    data: {
      id: params.orderId,
      status: 'in-transit',
      eta: '2024-04-21T18:00:00Z',
      timeline: mockedTimeline,
      trackingUrl: 'https://tracking.backhauls.example.com/demo'
    }
  });
}
