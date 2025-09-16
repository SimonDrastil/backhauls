import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export type Coordinates = {
  latitude: number;
  longitude: number;
};

export function formatCurrency(value: number) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0
  }).format(value);
}

export function formatCurrencyCompact(value: number) {
  if (value >= 1_000_000) {
    const compact = value / 1_000_000;
    const decimals = compact >= 10 ? 0 : 1;
    return `$${compact.toFixed(decimals)}M`;
  }

  if (value >= 1_000) {
    const compact = value / 1_000;
    const decimals = compact >= 10 ? 0 : 1;
    return `$${compact.toFixed(decimals)}K`;
  }

  return formatCurrency(value);
}

export function toLocaleDate(value: string | Date) {
  const date = typeof value === 'string' ? new Date(value) : value;
  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric'
  });
}
