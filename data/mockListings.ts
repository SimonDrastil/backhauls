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
  },
  {
    id: 'LST-1009',
    carrier: 'Canyon Express',
    equipmentType: 'Truck',
    origin: 'Phoenix, AZ',
    destination: 'San Francisco, CA',
    price: 1680,
    distance: 752,
    capacity: '53 ft dry van',
    pickupDate: '2024-04-24T13:00:00Z',
    dropoffDate: '2024-04-26T08:30:00Z',
    status: 'available',
    coordinates: { latitude: 33.4484, longitude: -112.074 }
  },
  {
    id: 'LST-1010',
    carrier: 'Skyline Charter Air',
    equipmentType: 'Air',
    origin: 'Newark, NJ',
    destination: 'Houston, TX',
    price: 5850,
    distance: 1415,
    capacity: 'Boeing 757 - 34k lbs',
    pickupDate: '2024-04-22T09:00:00Z',
    dropoffDate: '2024-04-22T17:30:00Z',
    status: 'available',
    coordinates: { latitude: 40.7357, longitude: -74.1724 }
  },
  {
    id: 'LST-1011',
    carrier: 'River Delta Freight',
    equipmentType: 'Truck',
    origin: 'Memphis, TN',
    destination: 'Orlando, FL',
    price: 1580,
    distance: 832,
    capacity: '53 ft dry van',
    pickupDate: '2024-04-23T07:00:00Z',
    dropoffDate: '2024-04-25T15:30:00Z',
    status: 'available',
    coordinates: { latitude: 35.1495, longitude: -90.049 }
  },
  {
    id: 'LST-1012',
    carrier: 'Heartland Haulers',
    equipmentType: 'Truck',
    origin: 'Kansas City, MO',
    destination: 'Nashville, TN',
    price: 980,
    distance: 493,
    capacity: '48 ft flatbed',
    pickupDate: '2024-04-25T08:00:00Z',
    dropoffDate: '2024-04-26T19:00:00Z',
    status: 'booked',
    coordinates: { latitude: 39.0997, longitude: -94.5786 }
  },
  {
    id: 'LST-1013',
    carrier: 'Savannah Coastal Lines',
    equipmentType: 'Ocean',
    origin: 'Port of Savannah, GA',
    destination: 'Port of Charleston, SC',
    price: 4300,
    distance: 109,
    capacity: 'Feeder vessel - 120 TEU',
    pickupDate: '2024-04-24T18:00:00Z',
    dropoffDate: '2024-04-25T13:00:00Z',
    status: 'available',
    coordinates: { latitude: 32.0809, longitude: -81.0912 }
  },
  {
    id: 'LST-1014',
    carrier: 'Northern Lights Air Cargo',
    equipmentType: 'Air',
    origin: 'Anchorage, AK',
    destination: 'Seattle, WA',
    price: 7420,
    distance: 1447,
    capacity: 'Boeing 737-800F - 23k lbs',
    pickupDate: '2024-04-27T05:00:00Z',
    dropoffDate: '2024-04-27T13:45:00Z',
    status: 'available',
    coordinates: { latitude: 61.2181, longitude: -149.9003 }
  },
  {
    id: 'LST-1015',
    carrier: 'Midland Express',
    equipmentType: 'Truck',
    origin: 'Chicago, IL',
    destination: 'Denver, CO',
    price: 1725,
    distance: 1006,
    capacity: '53 ft dry van',
    pickupDate: '2024-04-23T12:00:00Z',
    dropoffDate: '2024-04-25T09:00:00Z',
    status: 'available',
    coordinates: { latitude: 41.8781, longitude: -87.6298 }
  },
  {
    id: 'LST-1016',
    carrier: 'Gulf Stream Logistics',
    equipmentType: 'Ocean',
    origin: 'Port of New Orleans, LA',
    destination: 'Port of Tampa, FL',
    price: 5100,
    distance: 487,
    capacity: 'Ro/Ro vessel - 80 units',
    pickupDate: '2024-04-26T16:00:00Z',
    dropoffDate: '2024-04-28T06:00:00Z',
    status: 'booked',
    coordinates: { latitude: 29.9511, longitude: -90.0715 }
  },
  {
    id: 'LST-1017',
    carrier: 'Sun Corridor Freight',
    equipmentType: 'Truck',
    origin: 'San Antonio, TX',
    destination: 'Phoenix, AZ',
    price: 1385,
    distance: 984,
    capacity: '53 ft dry van',
    pickupDate: '2024-04-24T07:30:00Z',
    dropoffDate: '2024-04-26T02:00:00Z',
    status: 'available',
    coordinates: { latitude: 29.4241, longitude: -98.4936 }
  },
  {
    id: 'LST-1018',
    carrier: 'Cascade Transload',
    equipmentType: 'Truck',
    origin: 'Portland, OR',
    destination: 'Reno, NV',
    price: 1495,
    distance: 571,
    capacity: '53 ft dry van',
    pickupDate: '2024-04-25T05:30:00Z',
    dropoffDate: '2024-04-26T20:00:00Z',
    status: 'available',
    coordinates: { latitude: 45.5152, longitude: -122.6784 }
  },
  {
    id: 'LST-1019',
    carrier: 'Piedmont Air Charter',
    equipmentType: 'Air',
    origin: 'Charlotte, NC',
    destination: 'Newark, NJ',
    price: 3980,
    distance: 529,
    capacity: 'Gulfstream G500 - 12k lbs',
    pickupDate: '2024-04-22T11:30:00Z',
    dropoffDate: '2024-04-22T16:00:00Z',
    status: 'available',
    coordinates: { latitude: 35.2271, longitude: -80.8431 }
  },
  {
    id: 'LST-1020',
    carrier: 'Atlantic Tide Marine',
    equipmentType: 'Ocean',
    origin: 'Port of Norfolk, VA',
    destination: 'Port of Jacksonville, FL',
    price: 5400,
    distance: 547,
    capacity: 'ConRo vessel - 90 FEU',
    pickupDate: '2024-04-27T14:00:00Z',
    dropoffDate: '2024-04-29T21:00:00Z',
    status: 'available',
    coordinates: { latitude: 36.8508, longitude: -76.2859 }
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
