import { Prisma, UserRole, SubscriptionPlan, ListingStatus, OrderStatus, PayoutStatus, DisputeStatus } from '@prisma/client';

export const carrierUsers = [
  {
    id: 'usr_carrier_northern',
    email: 'ops@northernstarlogistics.com',
    name: 'Northern Star Logistics',
    role: UserRole.CARRIER,
    organization: 'Northern Star Logistics',
    plan: SubscriptionPlan.PREMIUM
  },
  {
    id: 'usr_carrier_blue',
    email: 'dispatcher@blueridgefreight.com',
    name: 'Blue Ridge Freight',
    role: UserRole.CARRIER,
    organization: 'Blue Ridge Freight',
    plan: SubscriptionPlan.BASIC
  }
];

export const shipperUsers = [
  {
    id: 'usr_shipper_freshmart',
    email: 'sourcing@freshmartgrocers.com',
    name: 'FreshMart Grocers',
    role: UserRole.SHIPPER,
    organization: 'FreshMart Grocers'
  },
  {
    id: 'usr_shipper_photon',
    email: 'logistics@photonelectronics.com',
    name: 'Photon Electronics',
    role: UserRole.SHIPPER,
    organization: 'Photon Electronics'
  }
];

export const adminUsers = [
  {
    id: 'usr_admin_emma',
    email: 'emma@backhauls.io',
    name: 'Emma Taylor',
    role: UserRole.ADMIN,
    organization: 'Backhauls HQ'
  }
];

export const listingsSeed = [
  {
    id: 'lst_seed_truck_1',
    carrierId: 'usr_carrier_northern',
    origin: 'Seattle, WA',
    destination: 'Los Angeles, CA',
    equipment: '53 ft dry van',
    capacity: '44,000 lbs',
    availableAt: new Date('2024-04-22T08:00:00Z'),
    expiresAt: new Date('2024-04-24T20:00:00Z'),
    price: new Prisma.Decimal(1850),
    status: ListingStatus.PUBLISHED,
    vehicleType: 'Truck',
    distance: 1135
  },
  {
    id: 'lst_seed_truck_2',
    carrierId: 'usr_carrier_blue',
    origin: 'Atlanta, GA',
    destination: 'Chicago, IL',
    equipment: '53 ft refrigerated',
    capacity: '42,500 lbs',
    availableAt: new Date('2024-04-23T10:00:00Z'),
    expiresAt: new Date('2024-04-25T18:30:00Z'),
    price: new Prisma.Decimal(1450),
    status: ListingStatus.PUBLISHED,
    vehicleType: 'Truck',
    distance: 716
  }
];

export const ordersSeed = [
  {
    id: 'ord_seed_1',
    listingId: 'lst_seed_truck_1',
    shipperId: 'usr_shipper_freshmart',
    carrierId: 'usr_carrier_northern',
    status: OrderStatus.CONFIRMED,
    total: new Prisma.Decimal(1850),
    paymentId: 'pi_3Nk9l2DgUebP01Z1',
    bookingType: 'INSTANT'
  }
];

export const messagesSeed = [
  {
    id: 'msg_seed_1',
    orderId: 'ord_seed_1',
    senderId: 'usr_carrier_northern',
    body: 'Trailer is staged at dock 12. Ready for loading at 08:15.',
    attachments: [] as string[]
  },
  {
    id: 'msg_seed_2',
    orderId: 'ord_seed_1',
    senderId: 'usr_shipper_freshmart',
    body: 'Copy that. Bill of lading uploaded and temp monitor activated.',
    attachments: [] as string[]
  }
];

export const subscriptionsSeed = [
  {
    id: 'sub_seed_1',
    userId: 'usr_carrier_northern',
    plan: SubscriptionPlan.PREMIUM,
    status: 'active',
    periodEnd: new Date('2024-05-31T23:59:59Z'),
    stripeId: 'sub_1PN9XF2eZvKYlo2Cf'
  }
];

export const payoutsSeed = [
  {
    id: 'payout_seed_1',
    carrierId: 'usr_carrier_northern',
    amount: new Prisma.Decimal(1702),
    status: PayoutStatus.IN_PROGRESS,
    stripeId: 'po_1PN9Yf2eZvKYlo2Cl',
    orderId: 'ord_seed_1'
  }
];

export const flagsSeed = [
  {
    id: 'flag_seed_1',
    orderId: 'ord_seed_1',
    reason: 'Temperature variance exceeded threshold. Verify reefer logs.',
    resolutionNotes: 'Carrier provided telematics proof. Auto-resolved.',
    resolutionStatus: DisputeStatus.RESOLVED
  }
];
