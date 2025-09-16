'use client';

import Image from 'next/image';
import { Menu, Bell, CreditCard, Settings } from 'lucide-react';

export function TopNav() {
  return (
    <header className="relative overflow-hidden rounded-3xl border border-brand/20 bg-brand-dark px-8 py-6 text-white shadow-xl">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.25),rgba(11,60,138,0.6)_55%,rgba(47,178,76,0.35)_90%)] opacity-90" />
      <div className="relative flex items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <button className="rounded-full bg-white/10 p-2 text-white transition hover:bg-white/20">
            <Menu className="h-5 w-5" />
          </button>
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15 p-2">
              <Image src="/logo.svg" alt="Backhauls logo" width={40} height={40} priority />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/75">Backhauls</p>
              <h1 className="text-xl font-semibold text-white">Real-time marketplace</h1>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="rounded-full bg-white/15 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white">
            Subscription: Premium
          </div>
          <button className="relative rounded-full bg-white/10 p-2 text-white transition hover:bg-white/20">
            <Bell className="h-5 w-5" />
            <span className="absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full bg-accent" />
          </button>
          <button className="rounded-full bg-white p-2 text-brand shadow-lg transition hover:bg-accent hover:text-white">
            <CreditCard className="h-5 w-5" />
          </button>
          <button className="rounded-full border border-white/40 p-2 text-white transition hover:bg-white/15">
            <Settings className="h-5 w-5" />
          </button>
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-white/90 via-accent to-brand text-sm font-semibold uppercase text-brand-dark">
            BK
          </div>
        </div>
      </div>
    </header>
  );
}
