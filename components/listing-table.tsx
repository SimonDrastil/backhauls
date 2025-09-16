'use client';

import { useMemo } from 'react';
import { motion } from 'framer-motion';
import type { Listing } from '@/data/mockListings';
import { cn, formatCurrency, toLocaleDate } from '@/lib/utils';

export type ListingTableProps = {
  listings: Listing[];
  onSelect: (listing: Listing) => void;
  selectedId?: string | null;
};

export function ListingTable({ listings, onSelect, selectedId }: ListingTableProps) {
  const rows = useMemo(
    () =>
      listings.map((item) => ({
        ...item,
        pickupLabel: toLocaleDate(item.pickupDate),
        dropoffLabel: toLocaleDate(item.dropoffDate),
        priceLabel: formatCurrency(item.price),
        statusLabel: item.status === 'available' ? 'Open' : 'Booked'
      })),
    [listings]
  );

  return (
    <motion.div
      className="h-full overflow-hidden rounded-3xl bg-white"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center justify-between border-b border-brand/15 bg-brand-dark/5 px-6 py-4">
        <div>
          <h2 className="text-lg font-semibold text-brand-dark">Live backhaul marketplace</h2>
          <p className="text-xs text-slate-500">Filter by mode, lane, pricing model or subscription tier.</p>
        </div>
        <div className="flex gap-2">
          <button className="rounded-full border border-brand/30 px-4 py-2 text-xs font-semibold text-brand transition hover:border-brand hover:bg-brand/5 hover:text-brand-dark">
            Filters
          </button>
          <button className="rounded-full bg-accent px-4 py-2 text-xs font-semibold text-white transition hover:bg-accent-dark">
            Save search
          </button>
        </div>
      </div>
      <div className="max-h-[520px] overflow-y-auto">
        <table className="min-w-full divide-y divide-slate-100 text-sm">
          <thead className="sticky top-0 bg-white/95 backdrop-blur">
            <tr className="text-left">
              <th className="px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-brand/70">Lane</th>
              <th className="px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-brand/70">Carrier</th>
              <th className="px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-brand/70">Pick-up</th>
              <th className="px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-brand/70">Drop-off</th>
              <th className="px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-brand/70">Price</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {rows.map((row) => {
              const isSelected = row.id === selectedId;
              return (
                <tr
                  key={row.id}
                  className={cn('cursor-pointer transition hover:bg-brand/10', isSelected && 'bg-brand/10')}
                  onClick={() => onSelect(row)}
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <span className="rounded-full bg-brand/10 px-2 py-1 text-[10px] font-semibold uppercase tracking-wide text-brand-dark">
                        {row.equipmentType}
                      </span>
                      <div>
                        <div className="font-semibold text-slate-900">
                          {row.origin} → {row.destination}
                        </div>
                        <div className="text-xs text-slate-500">
                          {row.distance} mi • {row.capacity}
                        </div>
                      </div>
                    </div>
                    <div
                      className={cn(
                        'mt-2 text-[11px] font-semibold uppercase tracking-[0.2em]',
                        row.status === 'available' ? 'text-accent-dark' : 'text-slate-400'
                      )}
                    >
                      {row.statusLabel}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-slate-600">{row.carrier}</td>
                  <td className="px-6 py-4 text-slate-600">{row.pickupLabel}</td>
                  <td className="px-6 py-4 text-slate-600">{row.dropoffLabel}</td>
                  <td className="px-6 py-4 text-brand-dark">{row.priceLabel}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
}
