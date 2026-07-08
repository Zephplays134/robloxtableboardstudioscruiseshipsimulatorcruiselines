const cruiseLines = [
  {
    id: 'carnival', name: 'Carnival Cruise Line', emoji: '🎉', color: '#00a1de',
    description: 'The world\'s most popular cruise line, known for its "Fun Ship" experience with lively entertainment, diverse dining, and family-friendly activities.',
    ships: [
      { name: 'Carnival Jubilee', year: 2023, class: 'Excel', gt: '183,521', capacity: 5282, length: '1,130 ft', flag: 'Bahamas', emoji: '🚢', desc: 'Third Excel-class ship powered by LNG. Features a roller coaster at sea and six themed zones.' },
      { name: 'Carnival Celebration', year: 2022, class: 'Excel', gt: '183,521', capacity: 5282, length: '1,130 ft', flag: 'Bahamas', emoji: '🚢', desc: 'Sister ship to Mardi Gras with BOLT: the first roller coaster at sea and a stunning Grand Central atrium.' },
      { name: 'Carnival Mardi Gras', year: 2021, class: 'Excel', gt: '183,521', capacity: 5282, length: '1,130 ft', flag: 'Bahamas', emoji: '🚢', desc: 'First LNG-powered ship in North America. Introduced the groundbreaking Excel-class design.' },
      { name: 'Carnival Panorama', year: 2019, class: 'Vista', gt: '133,500', capacity: 4008, length: '1,055 ft', flag: 'Panama', emoji: '🚢', desc: 'West Coast\'s largest cruise ship. Features the SkyZone trampoline park and a water park.' },
      { name: 'Carnival Horizon', year: 2018, class: 'Vista', gt: '133,500', capacity: 3960, length: '1,055 ft', flag: 'Panama', emoji: '🚢', desc: 'Features the IMAX theater, Dr. Seuss WaterWorks, and a soaring sky ride.' },
      { name: 'Carnival Vista', year: 2016, class: 'Vista', gt: '133,500', capacity: 3934, length: '1,055 ft', flag: 'Panama', emoji: '🚢', desc: 'First of the Vista-class with the IMAX Theatre and the thrilling SkyRide.' },
      { name: 'Carnival Dream', year: 2009, class: 'Dream', gt: '130,000', capacity: 3646, length: '1,004 ft', flag: 'Panama', emoji: '🚢', desc: 'First Dream-class ship with the WaterWorks aqua park and Cloud 9 Spa.' },
      { name: 'Carnival Magic', year: 2011, class: 'Dream', gt: '130,000', capacity: 3690, length: '1,004 ft', flag: 'Panama', emoji: '🚢', desc: 'Features the first ropes course at sea and an outdoor sports complex.' },
      { name: 'Carnival Breeze', year: 2012, class: 'Dream', gt: '130,000', capacity: 3690, length: '1,004 ft', flag: 'Panama', emoji: '🚢', desc: 'Last Dream-class ship with the Thrill Theater and a spacious outdoor deck.' },
      { name: 'Carnival Venezia', year: 2023, class: 'Venezia', gt: '135,225', capacity: 4090, length: '1,056 ft', flag: 'Bahamas', emoji: '🚢', desc: 'Former Costa ship rebranded for Carnival with Italian-inspired design and themed areas.' },
      { name: 'Carnival Firenze', year: 2024, class: 'Venezia', gt: '135,225', capacity: 4090, length: '1,056 ft', flag: 'Bahamas', emoji: '🚢', desc: 'Sister to Venezia, bringing Tuscan-inspired charm to Carnival\'s fleet.' },
      { name: 'Carnival Sunshine', year: 2013, class: 'Sunshine', gt: '102,853', capacity: 3006, length: '893 ft', flag: 'Panama', emoji: '🚢', desc: 'Major refurbishment of Carnival Destiny. Features the SportsSquare and Serenity adult retreat.' },
      { name: 'Carnival Sunrise', year: 2019, class: 'Sunshine', gt: '101,509', capacity: 2984, length: '892 ft', flag: 'Bahamas', emoji: '🚢', desc: 'Refurbished Carnival Triumph with new dining, bars, and the WaterWorks park.' },
      { name: 'Carnival Radiance', year: 2021, class: 'Sunshine', gt: '101,509', capacity: 2984, length: '892 ft', flag: 'Bahamas', emoji: '🚢', desc: 'Complete transformation of Carnival Victory with modern amenities and décor.' },
      { name: 'Carnival Liberty', year: 2005, class: 'Conquest', gt: '110,000', capacity: 2974, length: '952 ft', flag: 'Panama', emoji: '🚢', desc: 'Features the Hasbro Game Show and the Alchemy Bar cocktail lounge.' },
      { name: 'Carnival Glory', year: 2003, class: 'Conquest', gt: '110,000', capacity: 2974, length: '952 ft', flag: 'Panama', emoji: '🚢', desc: 'Known for its colorful décor, waterslides, and the Guy\'s Burger Joint.' },
      { name: 'Carnival Conquest', year: 2002, class: 'Conquest', gt: '110,000', capacity: 2974, length: '952 ft', flag: 'Panama', emoji: '🚢', desc: 'The first Conquest-class ship that set the standard for Carnival\'s modern fleet.' },
      { name: 'Carnival Valor', year: 2004, class: 'Conquest', gt: '110,000', capacity: 2974, length: '952 ft', flag: 'Panama', emoji: '🚢', desc: 'Features hero-themed décor and the popular BlueIguana Cantina.' },
      { name: 'Carnival Splendor', year: 2008, class: 'Splendor', gt: '113,300', capacity: 3006, length: '937 ft', flag: 'Panama', emoji: '🚢', desc: 'Only ship in its class with a unique indoor pool area under a glass dome.' },
      { name: 'Carnival Legend', year: 2002, class: 'Spirit', gt: '88,500', capacity: 2124, length: '963 ft', flag: 'Panama', emoji: '🚢', desc: 'Spirit-class ship with legend-themed décor and a large poolside screen.' },
      { name: 'Carnival Miracle', year: 2004, class: 'Spirit', gt: '88,500', capacity: 2124, length: '963 ft', flag: 'Panama', emoji: '🚢', desc: 'Features the Mad Hatter\'s Ball and a whimsical Wonderland-themed décor.' },
      { name: 'Carnival Pride', year: 2002, class: 'Spirit', gt: '88,500', capacity: 2124, length: '963 ft', flag: 'Panama', emoji: '🚢', desc: 'Renaissance-themed décor with the Taj Mahal main show lounge.' },
      { name: 'Carnival Spirit', year: 2001, class: 'Spirit', gt: '88,500', capacity: 2124, length: '963 ft', flag: 'Panama', emoji: '🚢', desc: 'The first Spirit-class ship, designed for longer voyages and Alaska cruises.' },
      { name: 'Carnival Elation', year: 1998, class: 'Fantasy', gt: '70,367', capacity: 2190, length: '855 ft', flag: 'Panama', emoji: '🚢', desc: 'First cruise ship with diesel-electric propulsion. Recently refurbished.' },
      { name: 'Carnival Paradise', year: 1998, class: 'Fantasy', gt: '70,367', capacity: 2190, length: '855 ft', flag: 'Panama', emoji: '🚢', desc: 'Originally a smoke-free ship, now fully refurbished with modern amenities.' },
      { name: 'Carnival Luminosa', year: 2009, class: 'Spirit', gt: '91,000', capacity: 2260, length: '963 ft', flag: 'Bahamas', emoji: '🚢', desc: 'Previously Costa Luminosa, joined Carnival in 2022 with a mix of Italian and Carnival style.' },
    ]
  },
  {
    id: 'disney', name: 'Disney Cruise Line', emoji: '🏰', color: '#0057b8',
    description: 'Magical family cruises with Disney characters, Broadway-caliber shows, themed dining, and exceptional service for all ages.',
    ships: [
      { name: 'Disney Wish', year: 2022, class: 'Wish', gt: '144,000', capacity: 4000, length: '1,119 ft', flag: 'Bahamas', emoji: '🚢', desc: 'First Wish-class ship with an AquaMouse water coaster, immersive Frozen dining, and a Star Wars lounge.' },
      { name: 'Disney Treasure', year: 2024, class: 'Wish', gt: '144,000', capacity: 4000, length: '1,119 ft', flag: 'Bahamas', emoji: '🚢', desc: 'Adventure-themed sister to Wish featuring a Jungle Cruise-inspired dining experience.' },
      { name: 'Disney Destiny', year: 2025, class: 'Wish', gt: '144,000', capacity: 4000, length: '1,119 ft', flag: 'Bahamas', emoji: '🚢', desc: 'Heroes & villains themed Wish-class ship with Black Panther and Incredibles experiences.' },
      { name: 'Disney Dream', year: 2011, class: 'Dream', gt: '128,000', capacity: 4000, length: '1,115 ft', flag: 'Bahamas', emoji: '🚢', desc: 'Features the AquaDuck water coaster, an enchanted art gallery, and the Buena Vista Theatre.' },
      { name: 'Disney Fantasy', year: 2012, class: 'Dream', gt: '128,000', capacity: 4000, length: '1,115 ft', flag: 'Bahamas', emoji: '🚢', desc: 'Sister to Dream with the AquaDuck, a Midship Detective Agency interactive game, and Animator\'s Palate.' },
      { name: 'Disney Magic', year: 1998, class: 'Magic', gt: '84,000', capacity: 2700, length: '984 ft', flag: 'Bahamas', emoji: '🚢', desc: 'The original Disney cruise ship with a classic Art Deco design and the AquaDunk slide.' },
      { name: 'Disney Wonder', year: 1999, class: 'Magic', gt: '84,000', capacity: 2700, length: '984 ft', flag: 'Bahamas', emoji: '🚢', desc: 'Sister to Magic, known for its Tiana-themed dining and Marvel Super Hero Academy.' },
      { name: 'Disney Adventure', year: 2025, class: 'Adventure', gt: '208,000', capacity: 6000, length: '1,142 ft', flag: 'Bahamas', emoji: '🚢', desc: 'Former Global-class ship. Disney\'s largest vessel with Marvel, Disney, and Pixar themed zones across seven districts.' },
    ]
  },
  {
    id: 'royal-caribbean', name: 'Royal Caribbean', emoji: '👑', color: '#fe5000',
    description: 'Innovation leaders with the world\'s largest cruise ships, featuring thrilling attractions like roller coasters, ice rinks, and surf simulators.',
    ships: [
      { name: 'Icon of the Seas', year: 2024, class: 'Icon', gt: '250,800', capacity: 7600, length: '1,198 ft', flag: 'Bahamas', emoji: '🚢', desc: 'The world\'s largest cruise ship with eight neighborhoods, the largest water park at sea, and record-breaking amenities.' },
      { name: 'Utopia of the Seas', year: 2024, class: 'Oasis', gt: '236,860', capacity: 5668, length: '1,188 ft', flag: 'Bahamas', emoji: '🚢', desc: 'First Oasis-class ship designed for short getaways. Features the Ultimate Abyss slide and Central Park.' },
      { name: 'Wonder of the Seas', year: 2022, class: 'Oasis', gt: '235,600', capacity: 6988, length: '1,188 ft', flag: 'Bahamas', emoji: '🚢', desc: 'The former largest ship. Eight neighborhoods including a Suite Sun Zone and the Playmakers sports bar.' },
      { name: 'Symphony of the Seas', year: 2018, class: 'Oasis', gt: '228,081', capacity: 6680, length: '1,188 ft', flag: 'Bahamas', emoji: '🚢', desc: 'Features the Ultimate Abyss (10-story dry slide), a carousel, and the Bionic Bar.' },
      { name: 'Harmony of the Seas', year: 2016, class: 'Oasis', gt: '226,963', capacity: 6680, length: '1,188 ft', flag: 'Bahamas', emoji: '🚢', desc: 'First Oasis-class with waterslides and the Abyss dry slide. Seven vibrant neighborhoods.' },
      { name: 'Allure of the Seas', year: 2010, class: 'Oasis', gt: '225,282', capacity: 6296, length: '1,187 ft', flag: 'Bahamas', emoji: '🚢', desc: 'Sister to Oasis with the AquaTheater, zip line, and a Boardwalk with a carousel.' },
      { name: 'Oasis of the Seas', year: 2009, class: 'Oasis', gt: '225,282', capacity: 6296, length: '1,187 ft', flag: 'Bahamas', emoji: '🚢', desc: 'The revolutionary ship that created the Oasis-class with seven themed neighborhoods.' },
      { name: 'Spectrum of the Seas', year: 2019, class: 'Quantum Ultra', gt: '169,379', capacity: 4246, length: '1,139 ft', flag: 'Bahamas', emoji: '🚢', desc: 'Built for the Asian market with a sky pool, bumper cars, and the Sky Pad virtual reality trampoline.' },
    ]
  },
  {
    id: 'msc', name: 'MSC Cruises', emoji: '🌊', color: '#ffd700',
    description: 'European-style cruising with elegant ships, international dining, and a global itineraries spanning all seven continents.',
    ships: [
      { name: 'MSC World Europa', year: 2022, class: 'World', gt: '215,863', capacity: 6762, length: '1,093 ft', flag: 'Malta', emoji: '🚢', desc: 'First World-class ship with a futuristic Y-shaped design and the stunning World Promenade.' },
      { name: 'MSC Euribia', year: 2023, class: 'World', gt: '215,863', capacity: 6762, length: '1,093 ft', flag: 'Malta', emoji: '🚢', desc: 'Second World-class ship and one of the most energy-efficient cruise ships ever built.' },
      { name: 'MSC Seascape', year: 2022, class: 'Seaside EVO', gt: '157,700', capacity: 4540, length: '1,112 ft', flag: 'Malta', emoji: '🚢', desc: 'Features a stunning船尾 infinity pool, a rock climbing wall, and the MSC Yacht Club.' },
      { name: 'MSC Divina', year: 2012, class: 'Fantasia', gt: '139,072', capacity: 3959, length: '1,095 ft', flag: 'Malta', emoji: '🚢', desc: 'Elegant Italian-designed ship with Swarovski crystal staircases and the Galaxy Restaurant.' },
    ]
  },
  {
    id: 'ncl', name: 'Norwegian Cruise Line', emoji: '🍍', color: '#00b5e2',
    description: 'Pioneer of freestyle cruising with no fixed dining times, vibrant entertainment, and modern ships across the globe.',
    ships: [
      { name: 'Norwegian Prima', year: 2022, class: 'Prima', gt: '143,535', capacity: 3099, length: '994 ft', flag: 'Bahamas', emoji: '🚢', desc: 'First Prima-class ship with a three-deck go-kart track, the Speedway, and an infinity beach.' },
      { name: 'Norwegian Viva', year: 2023, class: 'Prima', gt: '143,535', capacity: 3099, length: '994 ft', flag: 'Bahamas', emoji: '🚢', desc: 'Sister to Prima with the Indulge Food Hall and the largest three-deck go-kart track at sea.' },
      { name: 'Norwegian Encore', year: 2019, class: 'Breakaway Plus', gt: '169,116', capacity: 4004, length: '1,096 ft', flag: 'Bahamas', emoji: '🚢', desc: 'Features the Galaxy Pavilion virtual reality complex, a laser tag arena, and The Cavern Club.' },
      { name: 'Norwegian Bliss', year: 2018, class: 'Breakaway Plus', gt: '168,028', capacity: 4004, length: '1,094 ft', flag: 'Bahamas', emoji: '🚢', desc: 'Alaska-optimized with an observation lounge, go-kart track, and the Q Texas Smokehouse.' },
    ]
  },
  {
    id: 'princess', name: 'Princess Cruises', emoji: '👸', color: '#003b5c',
    description: 'Premium cruise line known for exceptional service, worldwide itineraries, and the iconic Love Boat legacy.',
    ships: [
      { name: 'Sun Princess', year: 2024, class: 'Sphere', gt: '177,882', capacity: 4300, length: '1,131 ft', flag: 'Bermuda', emoji: '🚢', desc: 'First Sphere-class ship with a stunning glass-domed The Dome and the largest Princess Medallion deployment.' },
      { name: 'Star Princess', year: 2025, class: 'Sphere', gt: '177,882', capacity: 4300, length: '1,131 ft', flag: 'Bermuda', emoji: '🚢', desc: 'Second Sphere-class ship continuing Princess\' next-generation design and technology.' },
      { name: 'Discovery Princess', year: 2022, class: 'Royal', gt: '145,281', capacity: 3660, length: '1,083 ft', flag: 'Bermuda', emoji: '🚢', desc: 'Final Royal-class ship with the SeaWalk, Top Deck splash zone, and the Princess Live! studio.' },
      { name: 'Enchanted Princess', year: 2021, class: 'Royal', gt: '145,281', capacity: 3660, length: '1,083 ft', flag: 'Bermuda', emoji: '🚢', desc: 'Features the Take Five jazz lounge and an expanded Hollywood Pool Club.' },
    ]
  },
  {
    id: 'cunard', name: 'Cunard Line', emoji: '👑', color: '#b22222',
    description: 'The legendary White Star Line\'s rival, famous for Transatlantic crossings and timeless ocean liner elegance since 1840.',
    ships: [
      { name: 'Queen Anne', year: 2024, class: 'Queen Anne', gt: '113,000', capacity: 3000, length: '1,017 ft', flag: 'Bermuda', emoji: '🚢', desc: 'Cunard\'s newest ship blending Art Deco heritage with modern luxury and the largest Cunard spa.' },
      { name: 'Queen Mary 2', year: 2004, class: 'QM2', gt: '149,215', capacity: 2691, length: '1,132 ft', flag: 'Bermuda', emoji: '🚢', desc: 'The only true ocean liner in service. Famous for regular Transatlantic crossings and the first Planetarium at sea.' },
      { name: 'Queen Victoria', year: 2007, class: 'Vista', gt: '90,049', capacity: 2081, length: '964 ft', flag: 'Bermuda', emoji: '🚢', desc: 'Elegant mid-sized ship with a traditional two-tiered dining room and the Royal Court Theatre.' },
      { name: 'Queen Elizabeth', year: 2010, class: 'Vista', gt: '90,901', capacity: 2081, length: '964 ft', flag: 'Bermuda', emoji: '🚢', desc: 'Named after the late Queen, featuring classic ocean liner styling and the Yacht Club.' },
    ]
  },
  {
    id: 'celebrity', name: 'Celebrity Cruises', emoji: '✨', color: '#004c97',
    description: 'Modern luxury cruise line with chic design, gourmet dining by Michelin-star chefs, and the iconic Magic Carpet.',
    ships: [
      { name: 'Celebrity Ascent', year: 2023, class: 'Edge', gt: '141,000', capacity: 3260, length: '1,073 ft', flag: 'Malta', emoji: '🚢', desc: 'Latest Edge-class with the Magic Carpet cantilevered platform and a stunning Sunset Bar.' },
      { name: 'Celebrity Beyond', year: 2022, class: 'Edge', gt: '141,000', capacity: 3260, length: '1,073 ft', flag: 'Malta', emoji: '🚢', desc: 'Evolved Edge-class design with expanded suites and the dramatic two-story Grand Plaza.' },
      { name: 'Celebrity Apex', year: 2021, class: 'Edge', gt: '130,818', capacity: 2910, length: '1,004 ft', flag: 'Malta', emoji: '🚢', desc: 'Features the Eden lounge with floor-to-ceiling ocean views and a rooftop garden.' },
      { name: 'Celebrity Edge', year: 2018, class: 'Edge', gt: '130,818', capacity: 2910, length: '1,004 ft', flag: 'Malta', emoji: '🚢', desc: 'Revolutionary design with the Magic Carpet, infinite verandas, and the Eden experience.' },
    ]
  },
  {
    id: 'costa', name: 'Costa Cruises', emoji: '🇮🇹', color: '#003d6b',
    description: 'Italian-style cruising with lively atmosphere, delicious cuisine, and vibrant Mediterranean energy.',
    ships: [
      { name: 'Costa Toscana', year: 2022, class: 'Excellence', gt: '185,010', capacity: 6554, length: '1,106 ft', flag: 'Italy', emoji: '🚢', desc: 'LNG-powered ship celebrating Tuscany with 15 different restaurant concepts and a stunning Colosseum atrium.' },
      { name: 'Costa Smeralda', year: 2019, class: 'Excellence', gt: '185,010', capacity: 6554, length: '1,106 ft', flag: 'Italy', emoji: '🚢', desc: 'Costa\'s first LNG-powered ship inspired by the best of Italian design and food.' },
    ]
  },
  {
    id: 'pando', name: 'P&O Cruises', emoji: '🇬🇧', color: '#002b5e',
    description: 'Britain\'s favorite cruise line with relaxed, contemporary style and family-friendly ships.',
    ships: [
      { name: 'Arvia', year: 2022, class: 'Excellence', gt: '184,700', capacity: 5200, length: '1,130 ft', flag: 'UK', emoji: '🚢', desc: 'P&O\'s largest ship with the SkyDome entertainment venue and a stunning poolside cinema.' },
      { name: 'Iona', year: 2020, class: 'Excellence', gt: '184,089', capacity: 5200, length: '1,130 ft', flag: 'UK', emoji: '🚢', desc: 'First LNG-powered ship for P&O with the SkyDome, a grand atrium, and 13 restaurants.' },
      { name: 'Britannia', year: 2015, class: 'Britannia', gt: '143,730', capacity: 3647, length: '1,082 ft', flag: 'UK', emoji: '🚢', desc: 'P&O\'s largest ship at its launch. Features a cookery club, the Grand Atrium, and Eric Lanlard\'s patisserie.' },
    ]
  },
  {
    id: 'hal', name: 'Holland America Line', emoji: '🌷', color: '#008080',
    description: 'Premium cruising with traditional elegance, world-class culinary programs, and immersive itineraries.',
    ships: [
      { name: 'Rotterdam', year: 2021, class: 'Pinnacle', gt: '99,500', capacity: 2668, length: '984 ft', flag: 'Netherlands', emoji: '🚢', desc: 'Latest Pinnacle-class ship with a music-focused entertainment program and the Rudi\'s Sel de Mer.' },
      { name: 'Nieuw Statendam', year: 2018, class: 'Pinnacle', gt: '99,500', capacity: 2668, length: '984 ft', flag: 'Netherlands', emoji: '🚢', desc: 'Features the Dutch Café and the World Stage, a 270-degree immersive theater.' },
      { name: 'Koningsdam', year: 2016, class: 'Pinnacle', gt: '99,500', capacity: 2668, length: '984 ft', flag: 'Netherlands', emoji: '🚢', desc: 'First Pinnacle-class with the innovative Lincoln Center Stage and Billboard Onboard.' },
    ]
  },
  {
    id: 'virgin', name: 'Virgin Voyages', emoji: '❤️', color: '#e10a2a',
    description: 'Adults-only cruising with a rebellious spirit, incredible dining, and a luxury wellness focus.',
    ships: [
      { name: 'Brilliant Lady', year: 2025, class: 'Lady', gt: '110,000', capacity: 2770, length: '912 ft', flag: 'Bahamas', emoji: '🚢', desc: 'Fourth Virgin ship with the brand\'s signature rock-star design and no kids, no buffets, no curfew.' },
      { name: 'Resilient Lady', year: 2023, class: 'Lady', gt: '110,000', capacity: 2770, length: '912 ft', flag: 'Bahamas', emoji: '🚢', desc: 'Features the Redemption Spa, a tattoo parlor, and over 20 dining options all included.' },
      { name: 'Valiant Lady', year: 2022, class: 'Lady', gt: '110,000', capacity: 2770, length: '912 ft', flag: 'Bahamas', emoji: '🚢', desc: 'Sister ship with a stunning outdoor deck and The Manor nightclub experience.' },
      { name: 'Scarlet Lady', year: 2021, class: 'Lady', gt: '110,000', capacity: 2770, length: '912 ft', flag: 'Bahamas', emoji: '🚢', desc: 'Virgin\'s first ship with a bold design, hammocks on every balcony, and a drag brunch.' },
    ]
  },
];

const ships = cruiseLines.flatMap(line => line.ships.map(s => ({ ...s, lineId: line.id, lineName: line.name, lineEmoji: line.emoji, lineColor: line.color })));

const maxCapacity = Math.max(...ships.map(s => s.capacity));
const maxGt = Math.max(...ships.map(s => parseFloat(s.gt.replace(/,/g, ''))));

const linesGrid = document.getElementById('linesGrid');
const shipsGrid = document.getElementById('shipsGrid');
const filterTabs = document.getElementById('filterTabs');
const searchInput = document.getElementById('searchInput');
const sortSelect = document.getElementById('sortSelect');
const resultCount = document.getElementById('resultCount');
const modal = document.getElementById('shipModal');
const themeToggle = document.getElementById('themeToggle');
const backToTop = document.getElementById('backToTop');
const heroShip = document.getElementById('heroShip');

let activeLine = null;
let activeFilter = 'all';
let currentView = 'grid';
let currentSort = 'name';

function renderLines() {
  linesGrid.innerHTML = cruiseLines.map(line => `
    <div class="line-card${activeLine === line.id ? ' active' : ''}" data-line="${line.id}">
      <span class="line-emoji">${line.emoji}</span>
      <div class="line-name">${line.name}</div>
      <div class="line-count">${line.ships.length} ships</div>
    </div>
  `).join('');

  document.querySelectorAll('.line-card').forEach(el => {
    el.addEventListener('click', () => {
      const id = el.dataset.line;
      activeLine = activeLine === id ? null : id;
      renderLines();
      renderFilterTabs();
      renderShips();
    });
  });
}

function renderFilterTabs() {
  const classes = [...new Set(cruiseLines.filter(l => !activeLine || l.id === activeLine).flatMap(l => l.ships.map(s => s.class)))].sort();
  const lineName = activeLine ? cruiseLines.find(l => l.id === activeLine).name : 'All Lines';
  filterTabs.innerHTML = `<button class="filter-tab active" data-filter="all">${lineName === 'All Lines' ? 'All Ships' : lineName}</button>` +
    classes.map(c => `<button class="filter-tab" data-filter="${c}">${c}</button>`).join('');

  document.querySelectorAll('.filter-tab').forEach(el => {
    el.addEventListener('click', () => {
      document.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
      el.classList.add('active');
      activeFilter = el.dataset.filter;
      renderShips();
    });
  });
}

function getFilteredShips() {
  const search = searchInput.value.toLowerCase().trim();
  let list = ships.filter(s => {
    if (activeLine && s.lineId !== activeLine) return false;
    if (activeFilter !== 'all' && s.class !== activeFilter) return false;
    if (search && !s.name.toLowerCase().includes(search) && !s.lineName.toLowerCase().includes(search) && !s.class.toLowerCase().includes(search)) return false;
    return true;
  });
  const sort = sortSelect.value;
  list.sort((a, b) => {
    if (sort === 'name') return a.name.localeCompare(b.name);
    if (sort === 'year-desc') return b.year - a.year;
    if (sort === 'year-asc') return a.year - b.year;
    if (sort === 'capacity-desc') return b.capacity - a.capacity;
    if (sort === 'capacity-asc') return a.capacity - b.capacity;
    return 0;
  });
  return list;
}

function renderShips() {
  const list = getFilteredShips();
  resultCount.textContent = `Showing ${list.length} of ${ships.length} ships`;

  if (list.length === 0) {
    shipsGrid.innerHTML = `<div style="grid-column:1/-1;text-align:center;padding:60px 20px;color:var(--text-dim);font-size:1.1rem">No ships found matching your criteria.</div>`;
    updateStats();
    return;
  }

  shipsGrid.className = `ships-grid${currentView === 'list' ? ' list-view' : ''}`;
  shipsGrid.innerHTML = list.map(s => `
    <div class="ship-card" data-ship="${s.name.replace(/'/g, "\\'")}" style="animation-delay:${Math.random() * 0.3}s">
      <div class="ship-card-visual" style="background:linear-gradient(135deg, ${s.lineColor}33, transparent 70%)">
        ${s.emoji}
      </div>
      <div class="ship-card-body">
        <h3>${s.name}</h3>
        <div class="ship-card-line">${s.lineEmoji} ${s.lineName}</div>
        <div class="ship-specs">
          <div class="ship-spec">
            <span class="ship-spec-label">Year</span>
            <span class="ship-spec-value">${s.year}</span>
          </div>
          <div class="ship-spec">
            <span class="ship-spec-label">Capacity</span>
            <span class="ship-spec-value">${s.capacity.toLocaleString()}</span>
          </div>
          <div class="ship-spec">
            <span class="ship-spec-label">Tonnage</span>
            <span class="ship-spec-value">${s.gt}</span>
          </div>
          <div class="ship-spec">
            <span class="ship-spec-label">Class</span>
            <span class="ship-spec-value">${s.class}</span>
          </div>
        </div>
      </div>
    </div>
  `).join('');

  document.querySelectorAll('.ship-card').forEach(el => {
    el.addEventListener('click', () => {
      const name = el.dataset.ship;
      const ship = ships.find(s => s.name === name);
      if (ship) openModal(ship);
    });
  });

  updateStats();
}

function specBar(val, max) {
  const pct = Math.min((val / max) * 100, 100);
  return `<div class="spec-bar-wrap"><div class="spec-bar-track"><div class="spec-bar-fill" style="width:${pct}%"></div></div></div>`;
}

function openModal(ship) {
  const gtNum = parseFloat(ship.gt.replace(/,/g, ''));
  const body = modal.querySelector('.modal-body');
  body.innerHTML = `
    <div class="modal-visual">${ship.emoji}</div>
    <h3>${ship.name}</h3>
    <div class="modal-line">${ship.lineEmoji} ${ship.lineName}</div>
    <div class="modal-specs-grid">
      <div class="modal-spec-item">
        <span class="modal-spec-item-label">Year Built</span>
        <span class="modal-spec-item-value">${ship.year}</span>
      </div>
      <div class="modal-spec-item">
        <span class="modal-spec-item-label">Gross Tonnage</span>
        <span class="modal-spec-item-value">${ship.gt}</span>
        ${specBar(gtNum, maxGt)}
      </div>
      <div class="modal-spec-item">
        <span class="modal-spec-item-label">Passenger Capacity</span>
        <span class="modal-spec-item-value">${ship.capacity.toLocaleString()}</span>
        ${specBar(ship.capacity, maxCapacity)}
      </div>
      <div class="modal-spec-item">
        <span class="modal-spec-item-label">Length</span>
        <span class="modal-spec-item-value">${ship.length}</span>
      </div>
      <div class="modal-spec-item">
        <span class="modal-spec-item-label">Class</span>
        <span class="modal-spec-item-value">${ship.class}</span>
      </div>
      <div class="modal-spec-item">
        <span class="modal-spec-item-label">Flag</span>
        <span class="modal-spec-item-value">${ship.flag}</span>
      </div>
    </div>
    <div class="modal-desc">${ship.desc}</div>
    <div style="display:flex;gap:8px;flex-wrap:wrap">
      <span class="modal-class-badge">${ship.class} Class</span>
      <span class="modal-class-badge">${ship.lineName}</span>
    </div>
  `;
  modal.classList.add('open');
}

function closeModal() {
  modal.classList.remove('open');
}

document.querySelector('.modal-close').addEventListener('click', closeModal);
document.querySelector('.modal-backdrop').addEventListener('click', closeModal);
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

function updateStats() {
  const list = getFilteredShips();
  document.getElementById('statShips').textContent = list.length;
  document.getElementById('statClasses').textContent = [...new Set(list.map(s => s.class))].length;
  document.getElementById('statYear').textContent = list.length ? Math.round(list.reduce((a, s) => a + s.year, 0) / list.length) : 0;
  document.getElementById('statCapacity').textContent = list.length ? list.reduce((a, s) => a + s.capacity, 0).toLocaleString() : 0;
}

searchInput.addEventListener('input', renderShips);
sortSelect.addEventListener('change', renderShips);

// VIEW TOGGLE
document.querySelectorAll('.view-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.view-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentView = btn.dataset.view;
    renderShips();
  });
});

// THEME TOGGLE
function setTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
  themeToggle.textContent = theme === 'dark' ? '🌙' : '☀️';
}

themeToggle.addEventListener('click', () => {
  const current = document.documentElement.getAttribute('data-theme');
  setTheme(current === 'dark' ? 'light' : 'dark');
});

const savedTheme = localStorage.getItem('theme') || 'dark';
setTheme(savedTheme);

// BACK TO TOP
window.addEventListener('scroll', () => {
  backToTop.classList.toggle('show', window.scrollY > 600);
  const pct = window.scrollY / (document.body.scrollHeight - window.innerHeight);
  document.getElementById('progressBar').style.transform = `scaleX(${pct})`;
});

backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

// RANDOM SHIP
document.getElementById('randomShipBtn').addEventListener('click', () => {
  const random = ships[Math.floor(Math.random() * ships.length)];
  openModal(random);
});

// REVEAL ON SCROLL
function observeReveals() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.section, .lines-grid, .ships-grid, .stats-wrapper').forEach(el => {
    el.classList.add('reveal');
    observer.observe(el);
  });
}

// HERO COUNTER ANIMATION
function animateCounters() {
  document.querySelectorAll('.hero-num').forEach(el => {
    const target = parseInt(el.dataset.target);
    const suffix = el.dataset.suffix || '';
    const duration = 2000;
    const start = performance.now();
    function update(now) {
      const pct = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - pct, 3);
      el.textContent = Math.floor(eased * target).toLocaleString() + suffix;
      if (pct < 1) requestAnimationFrame(update);
    }
    requestAnimationFrame(update);
  });
}

// NAVBAR HIDE ON SCROLL
let lastScroll = 0;
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  const current = window.scrollY;
  navbar.style.transform = current > lastScroll && current > 100 ? 'translateY(-100%)' : 'translateY(0)';
  lastScroll = current;
});

// ROBLOX API
const robloxApi = {
  async fetch(url) {
    const res = await fetch(url, { headers: { 'Accept': 'application/json' } });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return res.json();
  },
  searchUser(username) {
    return this.fetch(`https://users.roblox.com/v1/users/search?keyword=${encodeURIComponent(username)}&limit=1`);
  },
  getUser(userId) {
    return this.fetch(`https://users.roblox.com/v1/users/${userId}`);
  },
  getAvatar(userIds) {
    return this.fetch(`https://thumbnails.roblox.com/v1/users/avatar-headshot?userIds=${userIds.join(',')}&size=60x60&format=Png`);
  },
  getGame(universeId) {
    return this.fetch(`https://games.roblox.com/v1/games?universeIds=${universeId}`);
  },
  getGameFavorites(universeIds) {
    return this.fetch(`https://games.roblox.com/v1/games/multiget-favorites?universeIds=${universeIds}`);
  },
  getGameIcon(universeId) {
    return this.fetch(`https://thumbnails.roblox.com/v1/games/icons?universeIds=${universeId}&size=512x512&format=Png`);
  },
  async getPresence(userIds) {
    const res = await fetch('https://presence.roblox.com/v1/presence/users', {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userIds })
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return res.json();
  },
  formatNum(n) {
    if (n >= 1e6) return (n / 1e6).toFixed(1) + 'M';
    if (n >= 1e3) return (n / 1e3).toFixed(1) + 'K';
    return n.toString();
  }
};

const userInput = document.getElementById('robloxUserInput');
const userBtn = document.getElementById('robloxUserBtn');
const userResult = document.getElementById('robloxUserResult');
const gameInput = document.getElementById('robloxGameInput');
const gameBtn = document.getElementById('robloxGameBtn');
const gameResult = document.getElementById('robloxGameResult');

userBtn.addEventListener('click', searchRobloxUser);
userInput.addEventListener('keydown', e => { if (e.key === 'Enter') searchRobloxUser(); });

gameBtn.addEventListener('click', loadRobloxGame);
gameInput.addEventListener('keydown', e => { if (e.key === 'Enter') loadRobloxGame(); });

async function searchRobloxUser() {
  const username = userInput.value.trim();
  if (!username) return;
  userResult.innerHTML = '<div class="roblox-loading">Searching...</div>';
  try {
    const searchData = await robloxApi.searchUser(username);
    if (!searchData.data || searchData.data.length === 0) {
      userResult.innerHTML = `<div class="roblox-error">User "${username}" not found</div>`;
      return;
    }
    const userInfo = searchData.data[0];
    const userId = userInfo.id;

    let avatarData, fullUser, presenceData;
    try {
      [fullUser, avatarData, presenceData] = await Promise.all([
        robloxApi.getUser(userId),
        robloxApi.getAvatar([userId]),
        robloxApi.getPresence([userId]).catch(() => null)
      ]);
    } catch {
      fullUser = userInfo;
      avatarData = null;
    }

    const isOnline = presenceData?.userPresences?.[0]?.userPresenceType === 2;
    const avatarUrl = avatarData?.data?.[0]?.imageUrl || '';
    const created = new Date(fullUser.created || userInfo.created).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
    const displayName = fullUser.displayName || userInfo.displayName || userInfo.name;

    userResult.innerHTML = `
      <div class="roblox-user-card">
        <div class="roblox-avatar">${avatarUrl ? `<img src="${avatarUrl}" alt="${userInfo.name}">` : userInfo.name[0].toUpperCase()}</div>
        <div class="roblox-user-info">
          <h4>${displayName}</h4>
          <div class="rbx-display">@${userInfo.name}</div>
          ${fullUser.description ? `<div class="rbx-bio">${fullUser.description}</div>` : ''}
          <div class="roblox-user-meta">
            <span class="rbx-meta-item">ID: <strong>${userId}</strong></span>
            <span class="rbx-meta-item">Joined: <strong>${created}</strong></span>
            <span class="rbx-meta-item">Status: <strong style="color:${isOnline ? '#4ade80' : '#8aa4bc'}">${isOnline ? '● Online' : '○ Offline'}</strong></span>
          </div>
        </div>
      </div>
    `;
  } catch (err) {
    userResult.innerHTML = `<div class="roblox-error">Error: ${err.message}</div>`;
  }
}

async function loadRobloxGame() {
  const universeId = gameInput.value.trim();
  if (!universeId || isNaN(universeId)) {
    gameResult.innerHTML = '<div class="roblox-error">Please enter a valid numeric Universe ID</div>';
    return;
  }
  gameResult.innerHTML = '<div class="roblox-loading">Loading game data...</div>';
  try {
    const [gameData, iconData] = await Promise.all([
      robloxApi.getGame(universeId),
      robloxApi.getGameIcon(universeId).catch(() => null)
    ]);

    if (!gameData.data || gameData.data.length === 0) {
      gameResult.innerHTML = `<div class="roblox-error">No game found with Universe ID ${universeId}</div>`;
      return;
    }

    const game = gameData.data[0];
    const favData = await robloxApi.getGameFavorites(universeId).catch(() => null);
    const favorites = favData?.data?.[0]?.favoritesCount ?? 0;
    const iconUrl = iconData?.data?.[0]?.imageUrl || '';

    gameResult.innerHTML = `
      <div class="roblox-game-card">
        ${iconUrl ? `<img src="${iconUrl}" alt="${game.name}" style="width:80px;height:80px;border-radius:12px;margin-bottom:12px;border:2px solid var(--glass-border)">` : '<div style="font-size:3rem;margin-bottom:8px">🎮</div>'}
        <h4>${game.name}</h4>
        <div class="rbx-game-creator">by ${game.creator?.name || 'Unknown'}</div>
        <div class="roblox-game-stats">
          <div class="roblox-game-stat">
            <div class="roblox-game-stat-label">Visits</div>
            <div class="roblox-game-stat-value">${robloxApi.formatNum(game.visits || 0)}</div>
          </div>
          <div class="roblox-game-stat">
            <div class="roblox-game-stat-label">Playing</div>
            <div class="roblox-game-stat-value" style="color:#4ade80">${robloxApi.formatNum(game.playing || 0)}</div>
          </div>
          <div class="roblox-game-stat">
            <div class="roblox-game-stat-label">Favorites</div>
            <div class="roblox-game-stat-value" style="color:#ffd700">${robloxApi.formatNum(favorites)}</div>
          </div>
          <div class="roblox-game-stat">
            <div class="roblox-game-stat-label">Max Players</div>
            <div class="roblox-game-stat-value">${game.maxPlayers || 0}</div>
          </div>
        </div>
      </div>
    `;
  } catch (err) {
    gameResult.innerHTML = `<div class="roblox-error">Error: ${err.message}</div>`;
  }
}

// INIT
renderLines();
renderFilterTabs();
renderShips();
observeReveals();
animateCounters();
