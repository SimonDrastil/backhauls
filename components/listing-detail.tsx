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

  return (
    <motion.div
      key={listing.id}
      className="flex h-full flex-col gap-6 rounded-3xl bg-white p-8 shadow-xl"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-brand/70">Featured Backhaul</p>
          <h2 className="mt-2 text-3xl font-semibold text-slate-900">
            {listing.origin} <ArrowRight className="inline h-6 w-6 text-accent" /> {listing.destination}
          </h2>
          <p className="mt-2 text-sm text-slate-500">{listing.distance} miles • {listing.capacity}</p>
        </div>
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-brand/10 text-brand">
          <Icon className="h-7 w-7" />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 text-sm">
        <div className="rounded-2xl bg-slate-50 p-4">
          <p className="text-xs font-semibold uppercase text-slate-400">Pick up</p>
          <p className="mt-1 text-lg font-semibold text-slate-900">{toLocaleDate(listing.pickupDate)}</p>
          <p className="text-xs text-slate-500">Ready at 08:00 local</p>
        </div>
        <div className="rounded-2xl bg-slate-50 p-4">
          <p className="text-xs font-semibold uppercase text-slate-400">Drop off</p>
          <p className="mt-1 text-lg font-semibold text-slate-900">{toLocaleDate(listing.dropoffDate)}</p>
          <p className="text-xs text-slate-500">Includes live tracking updates</p>
        </div>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
        <p className="text-xs font-semibold uppercase text-slate-500">All-in price</p>
        <p className="mt-2 text-4xl font-bold text-slate-900">{formatCurrency(listing.price)}</p>
        <p className="mt-1 text-xs text-slate-500">Backhauls service fee of 8% already included.</p>
      </div>

      <div className="flex flex-col gap-3 md:flex-row">
        <button className="flex-1 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-brand-dark">
          Instant book & issue docs
        </button>
        <button className="flex-1 rounded-full border border-brand/30 px-6 py-3 text-sm font-semibold text-brand transition hover:border-brand hover:text-brand-dark">
          Chat with carrier
        </button>
      </div>

      <div className="rounded-2xl border border-slate-200 p-6">
        <h3 className="text-base font-semibold text-slate-900">Carrier highlights</h3>
        <ul className="mt-3 space-y-2 text-sm text-slate-600">
          <li>• On-time rating: 98% across 450+ completed backhauls</li>
          <li>• Smart telematics connected for live tracking & temperature logs</li>
          <li>• Stripe verified payouts with instant settlement</li>
        </ul>
      </div>
    </motion.div>
  );
}
