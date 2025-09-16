# Deployment guide

Backhauls ships as a full-stack Next.js 14 application with a PostgreSQL + Prisma backend, Redis-backed job queues and Stripe for payments + subscriptions. This document outlines how to deploy the stack to the recommended infrastructure providers.

## 1. Prerequisites

- Node.js 20 LTS
- Stripe account in test mode
- GitHub repository hosting this codebase
- Vercel account for the Next.js frontend
- Railway account for PostgreSQL + Node backend + Redis
- Cloudflare account (or any S3-compatible object storage) for document uploads
- Stripe CLI (optional but recommended) for webhook testing

## 2. Environment variables

Copy `.env.example` into `.env` locally and populate secrets. The same variables are required in the hosted environments. Key settings:

| Variable | Description |
| --- | --- |
| `DATABASE_URL` | PostgreSQL connection string provisioned by Railway |
| `REDIS_URL` | Redis connection string from Railway |
| `STRIPE_SECRET_KEY`, `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`, `STRIPE_WEBHOOK_SECRET` | Stripe test keys |
| `CLERK_*` or NextAuth keys | Authentication provider secrets |
| `S3_*` | Cloudflare R2 credentials and bucket |

## 3. Database provisioning on Railway

1. Create a **PostgreSQL** service in Railway and note the connection URL.
2. Create a **Redis** service for BullMQ job queues and grab the connection URL.
3. (Optional) Create a **Node** service if you intend to run the Next.js server on Railway instead of Vercel.
4. Add the `DATABASE_URL`, `DIRECT_URL`, and `REDIS_URL` variables to the service environment.
5. From your local machine run:

   ```bash
   npx prisma migrate deploy
   npm run seed
   ```

   This deploys the schema and seeds demo data into the cloud database.

## 4. Deploying the Next.js frontend to Vercel

1. Import the GitHub repository into Vercel.
2. Configure build settings:
   - Framework preset: **Next.js**
   - Build command: `npm run build`
   - Install command: `npm install`
   - Output directory: `.next`
3. Add the required environment variables in the Vercel project settings (copy from `.env`).
4. Trigger the first deployment. Vercel will automatically install dependencies, run `next build`, and deploy the production build.
5. Configure custom domains or preview branches as needed.

## 5. Deploying the backend with Railway (optional)

If you prefer to run the Next.js server-side rendering backend on Railway:

1. Create a new **Node** service in Railway and connect the GitHub repository.
2. Set the start command to `npm run start` and the build command to `npm run build`.
3. Add the same environment variables used in Vercel.
4. Point your Vercel deployment to use the Railway-hosted API by setting `NEXT_PUBLIC_APP_URL=https://<railway-app>.up.railway.app`.

## 6. Stripe test mode configuration

1. Create Products in Stripe for the `Carrier Premium` subscription and optional add-ons.
2. In the Stripe dashboard enable test mode and grab the test API keys.
3. Run the Stripe CLI to forward webhooks locally for development:

   ```bash
   stripe listen --forward-to localhost:3000/api/stripe/webhook
   ```

4. Configure webhook endpoints in Stripe for production pointing to `https://<domain>/api/stripe/webhook` and use the signing secret as `STRIPE_WEBHOOK_SECRET`.

## 7. Continuous deployment via GitHub Actions

A GitHub Actions workflow (`.github/workflows/ci.yml`) is provided. On each push it will:

- Install dependencies
- Run lint + tests (`npm run lint`, `npm run test`)
- Build the Next.js project (`npm run build`)

You can extend it to deploy to Vercel or Railway using official actions once credentials are configured.

## 8. Observability & monitoring

- Instrument the backend with OpenTelemetry (hooks provided in `app/api` and `lib/telemetry.ts` stubs) and export to your preferred observability stack.
- Configure alerts in Stripe for failed payouts or disputed payments.
- Use Vercel Analytics and Railway metrics for platform monitoring.

## 9. Post-deployment checklist

- [ ] Confirm Stripe webhooks receive events in test mode.
- [ ] Validate Prisma migrations ran successfully on Railway DB.
- [ ] Verify Redis connection and job queue processing.
- [ ] Confirm environment variables are set in both Vercel and Railway.
- [ ] Run end-to-end smoke test following the demo walkthrough.

With these steps your production-ready Backhauls deployment should be live, scalable, and ready for the first cohort of carriers and shippers.
