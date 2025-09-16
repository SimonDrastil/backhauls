const listings = [
  {
    id: 'LST-1001',
    carrier: 'Northern Star Logistics',
    origin: 'Seattle, WA',
    destination: 'Los Angeles, CA',
    price: 1850,
    capacity: '53 ft dry van',
    pickupDate: '2024-04-22T08:00:00Z',
    dropoffDate: '2024-04-24T20:00:00Z',
    coordinates: { latitude: 47.6062, longitude: -122.3321 }
  },
  {
    id: 'LST-1002',
    carrier: 'Blue Ridge Freight',
    origin: 'Atlanta, GA',
    destination: 'Chicago, IL',
    price: 1450,
    capacity: '53 ft refrigerated',
    pickupDate: '2024-04-23T10:00:00Z',
    dropoffDate: '2024-04-25T18:30:00Z',
    coordinates: { latitude: 33.749, longitude: -84.388 }
  },
  {
    id: 'LST-1003',
    carrier: 'Sunset Air Cargo',
    origin: 'Dallas, TX',
    destination: 'New York, NY',
    price: 6200,
    capacity: 'Boeing 767 - 42k lbs',
    pickupDate: '2024-04-21T06:00:00Z',
    dropoffDate: '2024-04-21T19:00:00Z',
    coordinates: { latitude: 32.7767, longitude: -96.797 }
  }
];

function formatCurrency(value) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0
  }).format(value);
}

function toLocaleDate(value) {
  return new Date(value).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric'
  });
}

function updateCard(listing) {
  const card = document.getElementById('listing-card');
  if (!listing) {
    card.classList.add('empty');
    card.innerHTML = '<p>Select a deadhead opportunity on the map to preview capacity.</p>';
    return;
  }

  card.classList.remove('empty');
  card.innerHTML = `
    <h2>${listing.origin} → ${listing.destination}</h2>
    <div class="meta">Carrier: ${listing.carrier}</div>
    <div class="price">${formatCurrency(listing.price)}</div>
    <div class="meta">Capacity: ${listing.capacity}</div>
    <div class="meta">Pickup ${toLocaleDate(listing.pickupDate)} · Drop ${toLocaleDate(listing.dropoffDate)}</div>
  `;
}

async function renderMap() {
  const svg = d3.select('#map');
  const wrapper = document.querySelector('.map-wrapper');
  const width = wrapper.clientWidth;
  const height = wrapper.clientHeight || 640;

  svg.attr('width', width).attr('height', height);

  const projection = d3.geoAlbersUsa().scale(width * 1.1).translate([width / 2, height / 2]);
  const path = d3.geoPath(projection);

  const topology = await fetch('https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json').then((response) =>
    response.json()
  );
  const states = topojson.feature(topology, topology.objects.states);

  svg
    .append('g')
    .selectAll('path')
    .data(states.features)
    .enter()
    .append('path')
    .attr('d', path)
    .attr('fill', '#f8fafc')
    .attr('stroke', '#cbd5f5')
    .attr('stroke-width', 0.8);

  const pinGroup = svg.append('g');

  pinGroup
    .selectAll('circle')
    .data(listings)
    .enter()
    .append('circle')
    .attr('class', 'pin')
    .attr('r', 10)
    .attr('cx', (d) => projection([d.coordinates.longitude, d.coordinates.latitude])[0])
    .attr('cy', (d) => projection([d.coordinates.longitude, d.coordinates.latitude])[1])
    .on('click', (_, d) => updateCard(d));

  pinGroup
    .selectAll('text')
    .data(listings)
    .enter()
    .append('text')
    .attr('class', 'pin-label')
    .attr('x', (d) => projection([d.coordinates.longitude, d.coordinates.latitude])[0])
    .attr('y', (d) => projection([d.coordinates.longitude, d.coordinates.latitude])[1] - 16)
    .text((d) => d.destination.split(',')[0]);

  updateCard(listings[0]);
}

document.addEventListener('DOMContentLoaded', () => {
  renderMap();
  window.addEventListener('resize', () => {
    d3.select('#map').selectAll('*').remove();
    renderMap();
  });
});
