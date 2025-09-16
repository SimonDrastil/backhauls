'use client';

import { useState } from 'react';
import type { Listing } from '@/data/mockListings';
import { BackhaulsMap } from '@/components/backhauls-map';
import { ListingDetail } from '@/components/listing-detail';
import { ListingTable } from '@/components/listing-table';
import { TopNav } from '@/components/top-nav';
import { MetricSummary } from '@/components/metric-summary';

type MarketplaceShellProps = {
  listings: Listing[];
};

export function MarketplaceShell({ listings }: MarketplaceShellProps) {
  const [selected, setSelected] = useState<Listing | null>(listings[0] ?? null);

  return (
    <main className="mx-auto flex min-h-screen max-w-7xl flex-col gap-6 px-6 py-8">
      <TopNav />
      <MetricSummary />
      <section className="grid flex-1 grid-cols-1 gap-6 xl:grid-cols-[2fr_3fr]">
        <ListingDetail listing={selected} />
        <BackhaulsMap listings={listings} selectedId={selected?.id} onSelect={setSelected} />
      </section>
      <ListingTable listings={listings} selectedId={selected?.id} onSelect={setSelected} />
    </main>
  );
}
