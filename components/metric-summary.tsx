'use client';

import { TrendingUp, DollarSign, Package, RadioTower } from 'lucide-react';

const metrics = [
  {
    title: 'Daily revenue',
    value: '$128,450',
    change: '+18% vs yesterday',
    icon: DollarSign
  },
  {
    title: 'Active shipments',
    value: '62',
    change: '12 in transit • 4 flagged',
    icon: Package
  },
  {
    title: 'Capacity filled',
    value: '86%',
    change: 'goal 92% by EOM',
    icon: TrendingUp
  },
  {
    title: 'Live carrier beacons',
    value: '214',
    change: 'Streaming telematics data',
    icon: RadioTower
  }
];

export function MetricSummary() {
  return (
    <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {metrics.map((metric) => {
        const Icon = metric.icon;
        return (
          <div
            key={metric.title}
            className="relative overflow-hidden rounded-3xl border border-brand/15 bg-white/90 p-6 shadow-lg backdrop-blur"
          >
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand via-accent to-brand-dark" />
            <div className="flex items-center justify-between pt-2">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand/80">
                  {metric.title}
                </p>
                <p className="mt-3 text-2xl font-semibold text-brand-dark">{metric.value}</p>
              </div>
              <div className="rounded-full bg-accent/15 p-3 text-accent">
                <Icon className="h-6 w-6" />
              </div>
            </div>
            <p className="mt-4 text-xs font-semibold uppercase text-slate-500">{metric.change}</p>
          </div>
        );
      })}
    </section>
  );
}
