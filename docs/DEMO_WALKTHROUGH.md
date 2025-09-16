# Demo walkthrough script

Use the following script to demo the Backhauls MVP to stakeholders. The flow highlights the core marketplace experience for both carriers and shippers plus admin oversight.

## 1. Landing on the marketplace map (2 minutes)

1. Navigate to `http://localhost:3000`.
2. Point out the hero dashboard: live revenue metrics, subscription badge and quick navigation.
3. Showcase the Zillow-style interactive US map populated with Backhauls blue + green price tags across 20 sample lanes.
4. Click on a marker (e.g. Seattle → Los Angeles) to open the detailed booking drawer with status and mode badges.
5. Discuss the instant pricing, capacity, ETA cards and booking CTA.

## 2. Exploring listings & filtering (2 minutes)

1. Scroll down to the live listings table.
2. Highlight the ability to sort/filter (mock UI) by mode, lane, pricing.
3. Click a different listing in the table and show how the map + detail drawer synchronize.
4. Emphasize status badges and subscription upsell for premium visibility.

## 3. Booking flow simulation (3 minutes)

1. From the detail pane press **Instant book & issue docs** (no backend mutation for demo).
2. Explain how Stripe collects payment, retains the 8% platform fee, and triggers a payout to the carrier via Stripe Connect.
3. Reference API route `POST /api/orders` returning a mocked order payload for prototypes.
4. Mention future enhancements: escrow wallets, milestone-based payouts, dynamic bidding.

## 4. Messaging & tracking (2 minutes)

1. Describe the in-app chat (see Prisma seed messages for sample transcripts).
2. Reference API route `GET /api/orders/:id` returning real-time tracking + timeline mock.
3. Call out optional telematics integration via BullMQ jobs streaming into Redis.

## 5. Admin operations (1 minute)

1. Show the metrics cards summarizing revenue, active shipments, filled capacity and live carrier beacons.
2. Explain how admins can review dispute flags (see Prisma `Flag` seed) and trigger refunds from the dashboard.

## 6. Subscription upsell (1 minute)

1. Visit `/pricing` to outline Basic vs Premium tiers.
2. Note that Stripe Billing will handle recurring charges, seat counts and analytics.

## 7. Next steps

- Configure Clerk or NextAuth to enable email + OAuth login for carriers/shippers.
- Connect Stripe webhooks to transition order states automatically.
- Deploy to Vercel + Railway following the deployment guide.

This walkthrough should help prospects understand how Backhauls eliminates deadhead miles through a modern, data-driven marketplace experience.
