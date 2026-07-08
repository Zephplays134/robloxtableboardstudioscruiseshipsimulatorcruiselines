const data = {
  lines: [
    { name: 'Bloxival Cruise Line', icon: '⚓', color: '#0077b6', desc: 'Luxury & adventure cruising with a modern fleet.' },
    { name: 'Bloxney Cruise Line', icon: '✨', color: '#ff4757', desc: 'Magical themed voyages for the whole family.' },
    { name: 'Carnival Cruise Line', icon: '🎉', color: '#00b4d8', desc: 'Fun-filled ships with non-stop entertainment.' },
    { name: 'Royal Caribbean', icon: '👑', color: '#f77f00', desc: 'World-class innovation and adventure at sea.' },
    { name: 'Norwegian Cruise Line', icon: '🌊', color: '#2d6a4f', desc: 'Freestyle cruising with incredible freedom.' },
    { name: 'MSC Cruises', icon: '🇮🇹', color: '#d62828', desc: 'Mediterranean elegance meets global cruising.' },
    { name: 'Princess Cruises', icon: '👸', color: '#9b5de5', desc: 'Premium voyages to breathtaking destinations.' },
    { name: 'Disney Cruise Line', icon: '🐭', color: '#f9c74f', desc: 'Storybook adventures on the high seas.' },
  ],
  ships: [
    { name: 'Bloxival Splendor', line: 'Bloxival', icon: '🚢', desc: 'Flagship of the Bloxival fleet. Features 18 decks, luxury suites, and a grand atrium.' },
    { name: 'Bloxival Horizon', line: 'Bloxival', icon: '🚢', desc: 'Next-generation cruise ship with panoramic ocean views and eco-friendly tech.' },
    { name: 'Bloxival Voyager', line: 'Bloxival', icon: '🚢', desc: 'Adventure-focused ship with rock climbing, surf simulators, and more.' },
    { name: 'Bloxival Serenity', line: 'Bloxival', icon: '🚢', desc: 'Adults-only luxury experience with world-class spas and fine dining.' },
    { name: 'Bloxival Dawn', line: 'Bloxival', icon: '🚢', desc: 'Mid-sized ship perfect for intimate getaways and coastal cruises.' },
    { name: 'Bloxney Dream', line: 'Bloxney', icon: '⛴️', desc: 'Where imagination sets sail. Themed decks and magical entertainment.' },
    { name: 'Bloxney Wonder', line: 'Bloxney', icon: '⛴️', desc: 'Family-friendly ship with character meet-and-greets and fantasy zones.' },
    { name: 'Bloxney Magic', line: 'Bloxney', icon: '⛴️', desc: 'Enchanted voyages with immersive storytelling and deck parties.' },
    { name: 'Bloxney Star', line: 'Bloxney', icon: '⛴️', desc: 'Spectacular Broadway-style shows and gourmet dining at sea.' },
    { name: 'Bloxney Enchantment', line: 'Bloxney', icon: '⛴️', desc: 'A floating fairytale with themed restaurants and kids clubs.' },
    { name: 'Carnival Breeze', line: 'Carnival', icon: '🚢', desc: 'Fun ship with water parks, comedy clubs, and casual dining.' },
    { name: 'Carnival Sunshine', line: 'Carnival', icon: '🚢', desc: 'Refurbished classic with modern amenities and vibrant nightlife.' },
    { name: 'Royal Odyssey', line: 'Royal Caribbean', icon: '🚢', desc: 'Massive ship with neighborhood concepts and unparalleled views.' },
    { name: 'Royal Explorer', line: 'Royal Caribbean', icon: '🚢', desc: 'Expedition ship built for adventure and discovery cruising.' },
    { name: 'NCL Breakaway', line: 'Norwegian', icon: '🚢', desc: 'Freestyle dining and entertainment on a massive modern vessel.' },
    { name: 'NCL Bliss', line: 'Norwegian', icon: '🚢', desc: 'Alaska specialist with stunning observation lounges and outdoor activities.' },
    { name: 'MSC Seaview', line: 'MSC Cruises', icon: '🚢', desc: 'Mediterranean-style cruising with pools and panoramic sea views.' },
    { name: 'MSC Meraviglia', line: 'MSC Cruises', icon: '🚢', desc: 'A stunning ship with a breathtaking indoor promenade and vast amenities.' },
    { name: 'Princess Emerald', line: 'Princess Cruises', icon: '🚢', desc: 'Elegant cruising with exceptional service and destination immersion.' },
    { name: 'Disney Wish', line: 'Disney Cruise Line', icon: '🚢', desc: 'Enchanted ship for all ages with Disney storytelling at sea.' },
  ]
};

function createShipCard(ship) {
  const lineClass = ship.line.toLowerCase().replace(/\s+/g, '');
  return `
    <div class="ship-card" data-line="${ship.line}">
      <div class="ship-icon">${ship.icon}</div>
      <h3>${ship.name}</h3>
      <span class="ship-line ${lineClass}">${ship.line}</span>
      <p>${ship.desc}</p>
    </div>
  `;
}

function createLineCard(line) {
  return `
    <div class="line-card">
      <div class="line-icon">${line.icon}</div>
      <h3>${line.name}</h3>
      <p>${line.desc}</p>
    </div>
  `;
}

function renderShips(containerId, lineFilter) {
  const container = document.getElementById(containerId);
  if (!container) return;
  const ships = lineFilter
    ? data.ships.filter(s => s.line === lineFilter)
    : data.ships;
  container.innerHTML = ships.map(createShipCard).join('');
}

function renderLines() {
  const container = document.getElementById('lines-grid');
  if (!container) return;
  container.innerHTML = data.lines.map(createLineCard).join('');
}

function renderAllShips(filter) {
  const container = document.getElementById('all-ships');
  if (!container) return;
  const ships = filter === 'all'
    ? data.ships
    : data.ships.filter(s => s.line === filter);
  container.innerHTML = ships.map(createShipCard).join('');
}

document.addEventListener('DOMContentLoaded', () => {
  renderShips('bloxival-ships', 'Bloxival');
  renderShips('bloxney-ships', 'Bloxney');
  renderLines();
  renderAllShips('all');

  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderAllShips(btn.dataset.filter);
    });
  });

  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  toggle.addEventListener('click', () => {
    links.classList.toggle('open');
  });

  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      links.classList.remove('open');
    });
  });
});
