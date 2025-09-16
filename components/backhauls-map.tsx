'use client';

import { useMemo } from 'react';
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  ZoomableGroup
} from 'react-simple-maps';
import { motion } from 'framer-motion';
import { Plane, Ship, Truck } from 'lucide-react';
import type { Listing } from '@/data/mockListings';
import { formatCurrency, formatCurrencyCompact, toLocaleDate } from '@/lib/utils';

const geoUrl = 'https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json';

const modeIcon = {
  Truck,
  Air: Plane,
  Ocean: Ship
};

type BackhaulsMapProps = {
  listings: Listing[];
  selectedId?: string | null;
  onSelect: (listing: Listing) => void;
};

export function BackhaulsMap({ listings, selectedId, onSelect }: BackhaulsMapProps) {
  const markers = useMemo(
    () =>
      listings.map((listing) => ({
        ...listing,
        coordinates: [listing.coordinates.longitude, listing.coordinates.latitude] as [
          number,
          number
        ],
        city: listing.destination.split(',')[0],
        priceLabel: formatCurrencyCompact(listing.price)
      })),
    [listings]
  );

  return (
    <motion.div
      className="relative h-full w-full overflow-hidden rounded-3xl border border-brand/15 bg-gradient-to-br from-brand/15 via-white to-accent/10 shadow-xl"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(255,255,255,0.75),rgba(11,60,138,0.12)_52%,rgba(47,178,76,0.08))]" />
      <ComposableMap
        projection="geoAlbersUsa"
        projectionConfig={{ scale: 900 }}
        className="relative h-full w-full text-slate-700"
      >
        <ZoomableGroup center={[-99, 39]} zoom={0.95} minZoom={0.75} maxZoom={6}>
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill="#eef4ff"
                  stroke="#b5c7eb"
                  strokeWidth={0.6}
                  style={{
                    default: { outline: 'none' },
                    hover: { outline: 'none', fill: '#d9e7ff' },
                    pressed: { outline: 'none', fill: '#c3d8ff' }
                  }}
                />
              ))
            }
          </Geographies>
          {markers.map((marker) => {
            const isActive = marker.id === selectedId;
            const isBooked = marker.status === 'booked';
            const Icon = modeIcon[marker.equipmentType];
            const bubbleFill = isBooked
              ? 'rgba(100,116,139,0.9)'
              : isActive
                ? '#0B3C8A'
                : 'rgba(255,255,255,0.95)';
            const bubbleStroke = isBooked
              ? 'rgba(71,85,105,0.9)'
              : isActive
                ? '#072B63'
                : 'rgba(11,60,138,0.35)';
            const priceColor = isBooked
              ? '#F8FAFC'
              : isActive
                ? '#E6F4FF'
                : '#0B3C8A';
            const cityColor = isBooked
              ? '#E2E8F0'
              : isActive
                ? '#E6F4FF'
                : '#1E293B';
            const pointerFill = isBooked
              ? 'rgba(71,85,105,0.85)'
              : isActive
                ? '#072B63'
                : 'rgba(255,255,255,0.95)';
            const pointerStroke = isBooked
              ? 'rgba(71,85,105,0.7)'
              : isActive
                ? '#072B63'
                : 'rgba(11,60,138,0.25)';

            return (
              <Marker
                key={marker.id}
                coordinates={marker.coordinates}
                onClick={() => onSelect(marker)}
              >
                <motion.g
                  initial={{ scale: 0.6, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: 'spring', stiffness: 220, damping: 18 }}
                >
                  <rect
                    x={-46}
                    y={-34}
                    width={92}
                    height={36}
                    rx={18}
                    fill={bubbleFill}
                    stroke={bubbleStroke}
                    strokeWidth={2}
                    className="cursor-pointer"
                  />
                  <path
                    d="M0 0 L10 16 L-10 16Z"
                    transform="translate(0,-2)"
                    fill={pointerFill}
                    stroke={pointerStroke}
                    strokeWidth={1.2}
                    className="cursor-pointer"
                  />
                  <text
                    textAnchor="middle"
                    y={-14}
                    fill={priceColor}
                    fontSize={12}
                    fontWeight={700}
                    className="select-none"
                  >
                    {marker.priceLabel}
                  </text>
                  <text
                    textAnchor="middle"
                    y={4}
                    fill={cityColor}
                    fontSize={10}
                    fontWeight={600}
                    className="select-none"
                  >
                    {marker.city}
                  </text>
                  {isActive ? (
                    <foreignObject
                      x={-130}
                      y={-170}
                      width={260}
                      height={124}
                      className="pointer-events-none select-none"
                    >
                      <div className="rounded-2xl border border-brand/15 bg-white/95 p-4 text-left shadow-xl backdrop-blur">
                        <div className="flex items-center justify-between gap-3">
                          <p className="text-sm font-semibold text-brand-dark">
                            {marker.origin.split(',')[0]} → {marker.destination.split(',')[0]}
                          </p>
                          <span className="flex items-center gap-2 rounded-full bg-brand/10 px-2 py-1 text-[10px] font-semibold uppercase tracking-wide text-brand-dark">
                            <Icon className="h-3.5 w-3.5 text-accent" strokeWidth={2} />
                            {marker.equipmentType}
                          </span>
                        </div>
                        <p className="mt-2 text-lg font-bold text-slate-900">
                          {formatCurrency(marker.price)}
                        </p>
                        <p className="text-xs text-slate-500">
                          Ready {toLocaleDate(marker.pickupDate)} • {marker.capacity}
                        </p>
                        <p className="mt-1 text-[11px] font-medium text-accent-dark">
                          Status: {marker.status === 'available' ? 'Open for booking' : 'Recently booked'}
                        </p>
                      </div>
                    </foreignObject>
                  ) : null}
                </motion.g>
              </Marker>
            );
          })}
        </ZoomableGroup>
      </ComposableMap>
      <div className="pointer-events-none absolute left-6 top-6 hidden max-w-xs rounded-2xl border border-brand/25 bg-white/90 p-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-dark shadow-lg backdrop-blur md:block">
        Click a Backhauls beacon to open the lane detail drawer.
      </div>
      <div className="pointer-events-none absolute bottom-6 left-6 right-6 flex flex-wrap items-center gap-3 rounded-2xl border border-brand/15 bg-white/90 px-4 py-3 text-xs text-slate-600 shadow-lg backdrop-blur">
        <span className="font-semibold uppercase tracking-[0.2em] text-brand-dark">Legend</span>
        {(['Truck', 'Air', 'Ocean'] as const).map((mode) => {
          const Icon = modeIcon[mode];
          return (
            <span
              key={mode}
              className="flex items-center gap-2 rounded-full bg-brand/5 px-3 py-1 text-[11px] font-medium uppercase tracking-wide text-brand-dark"
            >
              <Icon className="h-4 w-4 text-accent" strokeWidth={2} />
              {mode}
            </span>
          );
        })}
        <span className="ml-auto text-[11px] font-medium text-slate-500">
          Pricing shown includes Backhauls fees.
        </span>
      </div>
    </motion.div>
  );
}
