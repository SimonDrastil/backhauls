'use client';

import { useMemo } from 'react';
import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import type { Listing } from '@/data/mockListings';

const geoUrl = 'https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json';

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
        ]
      })),
    [listings]
  );

  return (
    <motion.div
      className="map-container h-full w-full overflow-hidden rounded-3xl bg-white"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <ComposableMap projection="geoAlbersUsa" className="h-full w-full">
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill="#eef2fb"
                stroke="#d4ddf0"
                strokeWidth={0.5}
              />
            ))
          }
        </Geographies>
        {markers.map((marker) => {
          const isActive = marker.id === selectedId;
          return (
            <Marker
              key={marker.id}
              coordinates={marker.coordinates}
              onClick={() => onSelect(marker)}
            >
              <motion.g
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: 'spring', stiffness: 120, damping: 12 }}
              >
                <circle
                  r={isActive ? 12 : 9}
                  className={cn('cursor-pointer fill-accent stroke-white stroke-[3px]', {
                    'fill-accent-dark': isActive
                  })}
                />
                <text
                  textAnchor="middle"
                  y={isActive ? -16 : -14}
                  className="select-none fill-slate-600 text-[10px] font-semibold"
                >
                  {marker.destination.split(',')[0]}
                </text>
              </motion.g>
            </Marker>
          );
        })}
      </ComposableMap>
    </motion.div>
  );
}
