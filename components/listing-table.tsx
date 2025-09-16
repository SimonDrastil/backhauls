'use client';

import { useMemo } from 'react';
import { motion } from 'framer-motion';
import type { Listing } from '@/data/mockListings';
import { formatCurrency, toLocaleDate } from '@/lib/utils';

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
        priceLabel: formatCurrency(item.price)
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
      <div className="flex items-center justify-between border-b border-slate-200 px-6 py-4">
        <div>
          <h2 className="text-lg font-semibold text-slate-900">Live backhaul marketplace</h2>
          <p className="text-xs text-slate-500">Filter by mode, lane, pricing model or subscription tier.</p>
        </div>
        <div className="flex gap-2">
          <button className="rounded-full border border-slate-200 px-4 py-2 text-xs font-semibold text-slate-600 transition hover:border-brand hover:text-brand">
            Filters
          </button>
          <button className="rounded-full bg-slate-900 px-4 py-2 text-xs font-semibold text-white transition hover:bg-brand">
            Save search
          </button>
        </div>
      </div>
      <div className="max-h-[520px] overflow-y-auto">
        <table className="min-w-full divide-y divide-slate-100 text-sm">
          <thead className="sticky top-0 bg-white">
            <tr className="text-left">
              <th className="px-6 py-3 font-semibold text-slate-500">Listing</th>
              <th className="px-6 py-3 font-semibold text-slate-500">Carrier</th>
              <th className="px-6 py-3 font-semibold text-slate-500">Pick-up</th>
              <th className="px-6 py-3 font-semibold text-slate-500">Drop-off</th>
              <th className="px-6 py-3 font-semibold text-slate-500">Price</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {rows.map((row) => {
              const isSelected = row.id === selectedId;
              return (
                <tr
                  key={row.id}
                  className={
                    'cursor-pointer transition hover:bg-slate-50' +
                    (isSelected ? ' bg-slate-50' : '')
                  }
                  onClick={() => onSelect(row)}
                >
                  <td className="px-6 py-4">
                    <div className="font-semibold text-slate-900">
                      {row.origin} → {row.destination}
                    </div>
                    <div className="text-xs text-slate-500">
                      {row.distance} mi • {row.capacity}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-slate-600">{row.carrier}</td>
                  <td className="px-6 py-4 text-slate-600">{row.pickupLabel}</td>
                  <td className="px-6 py-4 text-slate-600">{row.dropoffLabel}</td>
                  <td className="px-6 py-4 text-slate-900">{row.priceLabel}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
}
