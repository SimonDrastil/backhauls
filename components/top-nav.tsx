'use client';

import { Menu, Bell, CreditCard, Settings } from 'lucide-react';

export function TopNav() {
  return (
    <header className="flex items-center justify-between rounded-3xl bg-white px-8 py-5 shadow">
      <div className="flex items-center gap-3">
        <button className="rounded-full bg-slate-100 p-2 text-slate-500 hover:bg-slate-200">
          <Menu className="h-5 w-5" />
        </button>
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Backhauls</p>
          <h1 className="text-xl font-semibold text-slate-900">Real-time marketplace</h1>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className="rounded-full bg-slate-100 px-4 py-2 text-xs font-semibold text-slate-600">
          Subscription: Premium
        </div>
        <button className="relative rounded-full bg-slate-100 p-2 text-slate-500 hover:bg-slate-200">
          <Bell className="h-5 w-5" />
          <span className="absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full bg-brand" />
        </button>
        <button className="rounded-full bg-slate-900 p-2 text-white shadow hover:bg-brand">
          <CreditCard className="h-5 w-5" />
        </button>
        <button className="rounded-full border border-slate-200 p-2 text-slate-500 hover:border-brand hover:text-brand">
          <Settings className="h-5 w-5" />
        </button>
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand text-white font-semibold">
          BK
        </div>
      </div>
    </header>
  );
}
