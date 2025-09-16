import { describe, expect, it } from 'vitest';
import { formatCurrency, formatCurrencyCompact, toLocaleDate } from '@/lib/utils';
import { getListingSummary, listings } from '@/data/mockListings';

describe('utility formatters', () => {
  it('formats USD currency without cents', () => {
    expect(formatCurrency(1850)).toBe('$1,850');
  });

  it('creates compact currency strings for markers', () => {
    expect(formatCurrencyCompact(1850)).toBe('$1.9K');
    expect(formatCurrencyCompact(925)).toBe('$925');
    expect(formatCurrencyCompact(3_450_000)).toBe('$3.5M');
  });

  it('formats locale dates to month/day', () => {
    expect(toLocaleDate('2024-04-22T08:00:00Z')).toBe('Apr 22');
  });
});

describe('listing summary', () => {
  it('creates a summary for map popovers', () => {
    const summary = getListingSummary(listings[0]);
    expect(summary).toMatchObject({
      id: 'LST-1001',
      route: 'Seattle, WA → Los Angeles, CA',
      price: '$1,850'
    });
  });
});
