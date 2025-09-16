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
    <main className="mx-auto flex min-h-screen max-w-4xl flex-col gap-12 px-6 py-16">
      <section className="text-center">
        <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Subscription tiers</p>
        <h1 className="mt-3 text-4xl font-semibold text-slate-900">Scale capacity with intelligent visibility</h1>
        <p className="mt-3 text-base text-slate-600">
          Backhauls carrier subscriptions unlock auto-matching, analytics and API integrations to keep equipment full on every return lane.
        </p>
      </section>
      <section className="grid gap-6 md:grid-cols-3">
        {plans.map((plan) => (
          <div key={plan.name} className="rounded-3xl border border-slate-200 bg-white p-6 shadow">
            <h2 className="text-xl font-semibold text-slate-900">{plan.name}</h2>
            <p className="mt-2 text-3xl font-bold text-brand">{plan.price}</p>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              {plan.features.map((feature) => (
                <li key={feature}>• {feature}</li>
              ))}
            </ul>
            <Link
              href="/"
              className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand"
            >
              Choose plan
            </Link>
          </div>
        ))}
      </section>
    </main>
  );
}
