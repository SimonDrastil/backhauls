import { formatCurrency, toLocaleDate } from '@/lib/utils';

export type Listing = {
  id: string;
  carrier: string;
  equipmentType: 'Truck' | 'Air' | 'Ocean';
  origin: string;
  destination: string;
  price: number;
  distance: number;
  capacity: string;
  pickupDate: string;
  dropoffDate: string;
  status: 'available' | 'booked';
  coordinates: {
    latitude: number;
    longitude: number;
  };
};

export const listings: Listing[] = [
  {
    id: 'LST-1001',
    carrier: 'Northern Star Logistics',
    equipmentType: 'Truck',
    origin: 'Seattle, WA',
    destination: 'Los Angeles, CA',
    price: 1850,
    distance: 1135,
    capacity: '53 ft dry van',
    pickupDate: '2024-04-22T08:00:00Z',
    dropoffDate: '2024-04-24T20:00:00Z',
    status: 'available',
    coordinates: { latitude: 47.6062, longitude: -122.3321 }
  },
  {
    id: 'LST-1002',
    carrier: 'Blue Ridge Freight',
    equipmentType: 'Truck',
    origin: 'Atlanta, GA',
    destination: 'Chicago, IL',
    price: 1450,
    distance: 716,
    capacity: '53 ft refrigerated',
    pickupDate: '2024-04-23T10:00:00Z',
    dropoffDate: '2024-04-25T18:30:00Z',
    status: 'available',
    coordinates: { latitude: 33.749, longitude: -84.388 }
  },
  {
    id: 'LST-1003',
    carrier: 'Sunset Air Cargo',
    equipmentType: 'Air',
    origin: 'Dallas, TX',
    destination: 'New York, NY',
    price: 6200,
    distance: 1545,
    capacity: 'Boeing 767 - 42k lbs',
    pickupDate: '2024-04-21T06:00:00Z',
    dropoffDate: '2024-04-21T19:00:00Z',
    status: 'available',
    coordinates: { latitude: 32.7767, longitude: -96.797 }
  },
  {
    id: 'LST-1004',
    carrier: 'Lakeview Maritime',
    equipmentType: 'Ocean',
    origin: 'Port of Oakland, CA',
    destination: 'Port of Seattle, WA',
    price: 8700,
    distance: 678,
    capacity: 'Feeder vessel - 150 TEU',
    pickupDate: '2024-04-26T12:00:00Z',
    dropoffDate: '2024-04-29T03:00:00Z',
    status: 'available',
    coordinates: { latitude: 37.8044, longitude: -122.2711 }
  },
  {
    id: 'LST-1005',
    carrier: 'Great Plains Logistics',
    equipmentType: 'Truck',
    origin: 'Denver, CO',
    destination: 'Salt Lake City, UT',
    price: 980,
    distance: 519,
    capacity: '48 ft flatbed',
    pickupDate: '2024-04-24T09:30:00Z',
    dropoffDate: '2024-04-25T17:00:00Z',
    status: 'available',
    coordinates: { latitude: 39.7392, longitude: -104.9903 }
  },
  {
    id: 'LST-1006',
    carrier: 'Atlantic Breeze Air',
    equipmentType: 'Air',
    origin: 'Miami, FL',
    destination: 'Boston, MA',
    price: 5400,
    distance: 1258,
    capacity: 'Airbus A321 - 28k lbs',
    pickupDate: '2024-04-23T04:00:00Z',
    dropoffDate: '2024-04-23T12:00:00Z',
    status: 'available',
    coordinates: { latitude: 25.7617, longitude: -80.1918 }
  },
  {
    id: 'LST-1007',
    carrier: 'Pacific Horizon Shipping',
    equipmentType: 'Ocean',
    origin: 'Port of Long Beach, CA',
    destination: 'Honolulu, HI',
    price: 11200,
    distance: 2551,
    capacity: 'Container ship - 250 TEU',
    pickupDate: '2024-04-28T15:00:00Z',
    dropoffDate: '2024-05-04T10:00:00Z',
    status: 'available',
    coordinates: { latitude: 33.7701, longitude: -118.1937 }
  },
  {
    id: 'LST-1008',
    carrier: 'Midwest Haulage',
    equipmentType: 'Truck',
    origin: 'Minneapolis, MN',
    destination: 'Detroit, MI',
    price: 1325,
    distance: 690,
    capacity: '53 ft dry van',
    pickupDate: '2024-04-25T11:00:00Z',
    dropoffDate: '2024-04-27T09:00:00Z',
    status: 'available',
    coordinates: { latitude: 44.9778, longitude: -93.265 }
  }
];

export function getListingSummary(listing: Listing) {
  return {
    id: listing.id,
    route: `${listing.origin} → ${listing.destination}`,
    price: formatCurrency(listing.price),
    pickup: toLocaleDate(listing.pickupDate),
    dropoff: toLocaleDate(listing.dropoffDate)
  };
}
