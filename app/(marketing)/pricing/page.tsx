import Link from 'next/link';

const plans = [
  {
    name: 'Carrier Basic',
    price: '$0/mo',
    features: [
      'List unlimited lanes',
      'Stripe payouts within 2 business days',
      'Manual load matching'
    ]
  },
  {
    name: 'Carrier Premium',
    price: '$249/mo',
    features: [
      'Priority placement & featured spots',
      'Telematics ingestion & analytics',
      'Auto-match with instant booking'
    ]
  },
  {
    name: 'Enterprise',
    price: 'Talk to us',
    features: [
      'Dedicated CSM & compliance review',
      'Guaranteed payments with bonded escrow',
      'Custom integrations via GraphQL/EDI'
    ]
  }
];

export default function PricingPage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-5xl flex-col gap-12 rounded-3xl border border-brand/20 bg-white/95 px-8 py-16 shadow-2xl backdrop-blur">
      <section className="text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand">Subscription tiers</p>
        <h1 className="mt-4 text-4xl font-semibold text-brand-dark">Scale capacity with intelligent visibility</h1>
        <p className="mt-3 text-base text-slate-600">
          Backhauls carrier subscriptions unlock auto-matching, analytics and API integrations to keep equipment full on every return lane.
        </p>
      </section>
      <section className="grid gap-6 md:grid-cols-3">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className="relative overflow-hidden rounded-3xl border border-brand/15 bg-white/90 p-6 shadow-lg backdrop-blur"
          >
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand via-accent to-brand-dark" />
            <h2 className="mt-4 text-xl font-semibold text-brand-dark">{plan.name}</h2>
            <p className="mt-3 text-3xl font-bold text-brand">{plan.price}</p>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              {plan.features.map((feature) => (
                <li key={feature}>• {feature}</li>
              ))}
            </ul>
            <Link
              href="/"
              className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-accent px-4 py-2 text-sm font-semibold text-white transition hover:bg-accent-dark"
            >
              Choose plan
            </Link>
          </div>
        ))}
      </section>
    </main>
  );
}
