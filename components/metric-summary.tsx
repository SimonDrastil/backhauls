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
          <div key={metric.title} className="rounded-3xl bg-white p-6 shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">{metric.title}</p>
                <p className="mt-2 text-2xl font-semibold text-slate-900">{metric.value}</p>
              </div>
              <div className="rounded-full bg-brand/10 p-3 text-brand">
                <Icon className="h-6 w-6" />
              </div>
            </div>
            <p className="mt-3 text-xs font-semibold uppercase text-slate-400">{metric.change}</p>
          </div>
        );
      })}
    </section>
  );
}
