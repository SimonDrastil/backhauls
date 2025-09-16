import { PrismaClient } from '@prisma/client';
import {
  adminUsers,
  carrierUsers,
  shipperUsers,
  listingsSeed,
  ordersSeed,
  messagesSeed,
  subscriptionsSeed,
  payoutsSeed,
  flagsSeed
} from './seed-data';

const prisma = new PrismaClient();

async function main() {
  await prisma.flag.deleteMany();
  await prisma.payout.deleteMany();
  await prisma.message.deleteMany();
  await prisma.order.deleteMany();
  await prisma.listing.deleteMany();
  await prisma.subscription.deleteMany();
  await prisma.user.deleteMany();

  await prisma.user.createMany({ data: [...carrierUsers, ...shipperUsers, ...adminUsers] });
  await prisma.listing.createMany({ data: listingsSeed });
  await prisma.order.createMany({ data: ordersSeed });
  await prisma.message.createMany({ data: messagesSeed });
  await prisma.subscription.createMany({ data: subscriptionsSeed });
  await prisma.payout.createMany({ data: payoutsSeed });
  await prisma.flag.createMany({ data: flagsSeed });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
