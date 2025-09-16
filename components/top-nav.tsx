'use client';

import Image from 'next/image';
import { Menu, Bell, CreditCard, Settings } from 'lucide-react';

export function TopNav() {
  return (
    <header className="flex items-center justify-between rounded-3xl bg-white/95 px-8 py-5 shadow backdrop-blur">
      <div className="flex items-center gap-4">
        <button className="rounded-full bg-slate-100 p-2 text-slate-500 transition hover:bg-slate-200">
          <Menu className="h-5 w-5" />
        </button>
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand/5 p-2">
            <Image src="/logo.svg" alt="Backhauls logo" width={40} height={40} priority />
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-brand">Backhauls</p>
            <h1 className="text-xl font-semibold text-slate-900">Real-time marketplace</h1>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className="rounded-full bg-brand/5 px-4 py-2 text-xs font-semibold text-brand">
          Subscription: Premium
        </div>
        <button className="relative rounded-full bg-slate-100 p-2 text-slate-500 transition hover:bg-slate-200">
          <Bell className="h-5 w-5" />
          <span className="absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full bg-accent" />
        </button>
        <button className="rounded-full bg-brand p-2 text-white shadow transition hover:bg-brand-dark">
          <CreditCard className="h-5 w-5" />
        </button>
        <button className="rounded-full border border-brand/20 p-2 text-brand transition hover:border-brand hover:text-brand-dark">
          <Settings className="h-5 w-5" />
        </button>
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-brand to-accent text-sm font-semibold uppercase text-white">
          BK
        </div>
      </div>
    </header>
  );
}
