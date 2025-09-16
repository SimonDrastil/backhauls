# Backhauls

Backhauls is a digital logistics marketplace that eliminates deadhead trips by matching carriers with empty return capacity to shippers that need urgent and affordable transport. The MVP ships as a Next.js 14 dashboard featuring a Zillow-style interactive map of the United States with live capacity beacons, instant booking stubs, messaging, Stripe-ready payments, and an admin-friendly analytics layer.

## Tech stack

- **Frontend**: Next.js 14 (App Router), TypeScript, Tailwind CSS, Framer Motion, react-simple-maps
- **Backend**: Node.js, Prisma ORM, PostgreSQL, Redis (BullMQ-ready job queues)
- **Auth**: Clerk or NextAuth (bring-your-own keys)
- **Payments**: Stripe (transactions + subscriptions)
- **Infrastructure**: Vercel (frontend), Railway (Postgres/Redis/backend), Cloudflare R2 (document storage)
- **CI/CD**: GitHub Actions

## Getting started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Generate Prisma client and apply migrations:

   ```bash
   npx prisma migrate dev
   npm run seed
   ```

3. Run the development server:

   ```bash
   npm run dev
   ```

4. Visit `http://localhost:3000` to explore the marketplace map and listings table.

Additional resources:

- [`docs/DEPLOYMENT.md`](docs/DEPLOYMENT.md) – Vercel + Railway deployment instructions
- [`docs/DEMO_WALKTHROUGH.md`](docs/DEMO_WALKTHROUGH.md) – Guided pitch/demo script
- [`prisma/schema.prisma`](prisma/schema.prisma) – Database schema covering users, listings, orders, payouts, disputes

## Testing

The project ships with Vitest + Testing Library for unit tests:

```bash
npm run test
```

## Docker

A production-ready Dockerfile and docker-compose stack are provided:

```bash
docker compose up --build
```

This launches the Next.js app alongside PostgreSQL and Redis services.

## Vanilla map demo

A static demo located at [`vanilla-demo/`](vanilla-demo/) mirrors the Zillow-like map experience without any build tooling. Open `vanilla-demo/index.html` in your browser to view the branded price tags, 20 sample lanes, and booking drawer powered by plain JavaScript.

## License

Proprietary – © Backhauls 2024. All rights reserved.
