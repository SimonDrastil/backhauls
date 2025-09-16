'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Truck, Ship, Plane } from 'lucide-react';
import type { Listing } from '@/data/mockListings';
import { formatCurrency, toLocaleDate } from '@/lib/utils';

const modeIcon = {
  Truck,
  Ocean: Ship,
  Air: Plane
};

type ListingDetailProps = {
  listing: Listing | null;
};

export function ListingDetail({ listing }: ListingDetailProps) {
  if (!listing) {
    return (
      <div className="flex h-full items-center justify-center rounded-3xl border border-dashed border-slate-300 bg-white p-12 text-center">
        <p className="max-w-sm text-sm text-slate-500">
          Select a backhaul opportunity on the map to view pricing, equipment, transit ETAs and booking actions.
        </p>
      </div>
    );
  }

  const Icon = modeIcon[listing.equipmentType];

  const statusLabel = listing.status === 'available' ? 'Open for booking' : 'Recently booked';

  return (
    <motion.div
      key={listing.id}
      className="flex h-full flex-col gap-6 rounded-3xl border border-brand/15 bg-white/95 p-8 shadow-xl backdrop-blur"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand">Lane overview</p>
          <h2 className="mt-3 text-3xl font-semibold text-brand-dark">
            {listing.origin} <ArrowRight className="inline h-6 w-6 text-accent" /> {listing.destination}
          </h2>
          <p className="mt-2 text-sm text-slate-500">{listing.distance} miles • {listing.capacity}</p>
        </div>
        <div className="flex flex-col items-end gap-2">
          <span
            className={
              listing.status === 'available'
                ? 'inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/15 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-accent-dark'
                : 'inline-flex items-center gap-2 rounded-full border border-slate-300 bg-slate-200/80 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-600'
            }
          >
            {statusLabel}
          </span>
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-brand/10 text-brand">
            <Icon className="h-7 w-7" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 text-sm">
        <div className="rounded-2xl bg-gradient-to-br from-white to-brand/10 p-4 shadow-sm ring-1 ring-brand/10">
          <p className="text-xs font-semibold uppercase tracking-wide text-brand">Pick up</p>
          <p className="mt-1 text-lg font-semibold text-slate-900">{toLocaleDate(listing.pickupDate)}</p>
          <p className="text-xs text-slate-500">Ready at 08:00 local</p>
        </div>
        <div className="rounded-2xl bg-gradient-to-br from-white to-accent/10 p-4 shadow-sm ring-1 ring-accent/15">
          <p className="text-xs font-semibold uppercase tracking-wide text-accent-dark">Drop off</p>
          <p className="mt-1 text-lg font-semibold text-slate-900">{toLocaleDate(listing.dropoffDate)}</p>
          <p className="text-xs text-slate-500">Includes live tracking updates</p>
        </div>
      </div>

      <div className="rounded-2xl bg-brand/95 p-6 text-white shadow-lg">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/70">All-in price</p>
        <p className="mt-3 text-4xl font-bold">{formatCurrency(listing.price)}</p>
        <p className="mt-1 text-xs text-white/80">Backhauls service fee of 8% already included.</p>
      </div>

      <div className="grid gap-3 md:grid-cols-2">
        <button className="flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-accent-dark">
          Instant book & issue docs
          <ArrowRight className="h-4 w-4" />
        </button>
        <button className="flex items-center justify-center gap-2 rounded-full border border-brand/30 px-6 py-3 text-sm font-semibold text-brand transition hover:border-brand hover:text-brand-dark">
          Chat with carrier
        </button>
      </div>

      <div className="rounded-2xl border border-brand/15 bg-white/90 p-6 shadow-sm">
        <h3 className="text-base font-semibold text-brand-dark">Carrier highlights</h3>
        <ul className="mt-3 space-y-2 text-sm text-slate-600">
          <li>• On-time rating: 98% across 450+ completed backhauls</li>
          <li>• Smart telematics connected for live tracking & temperature logs</li>
          <li>• Stripe verified payouts with instant settlement</li>
        </ul>
      </div>
    </motion.div>
  );
}
