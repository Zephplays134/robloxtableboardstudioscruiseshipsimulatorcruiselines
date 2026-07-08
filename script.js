const data = {
  lines: [
    { id: 'bloxival', name: 'Bloxival Cruise Line', icon: '\u2693', color: '#0077b6', desc: 'Luxury & adventure on the high seas. Bloxival offers premium cruise experiences with world-class entertainment, gourmet dining, and stunning itineraries across the Roblox ocean.', price: '2,499', ships: 7, decks: 126, founded: '2022', tag: 'bloxival', ceo: 'Captain Blox', hq: 'Bloxport', employees: '4,200', rating: 4.8 },
    { id: 'bloxney', name: 'Bloxney Cruise Line', icon: '\u2728', color: '#f43f5e', desc: 'Magical themed family voyages with enchanting experiences on every deck. Bloxney brings imagination to life with character dining, fantasy suites, and immersive storytelling.', price: '2,899', ships: 7, decks: 118, founded: '2023', tag: 'bloxney', ceo: 'Captain Sparkle', hq: 'Dreamport', employees: '3,800', rating: 4.9 },
    { id: 'carnival', name: 'Carnival Cruise Line', icon: '\uD83C\uDF89', color: '#00b4d8', desc: 'Fun-filled ships with non-stop entertainment, massive water parks, comedy clubs, casual dining, and vibrant nightlife for all ages.', price: '1,899', ships: 3, decks: 42, founded: '2021', tag: 'other', ceo: 'Captain Fun', hq: 'Miamiport', employees: '1,500', rating: 4.2 },
    { id: 'royal', name: 'Royal Caribbean', icon: '\uD83D\uDC51', color: '#f77f00', desc: 'World-class innovation at sea with massive adventure-filled vessels featuring ice rinks, zip lines, surf simulators, and Broadway shows.', price: '3,299', ships: 3, decks: 52, founded: '2020', tag: 'other', ceo: 'Captain Royal', hq: 'Adventure Bay', employees: '2,100', rating: 4.6 },
    { id: 'norwegian', name: 'Norwegian Cruise Line', icon: '\uD83C\uDF0A', color: '#2d6a4f', desc: 'Freestyle cruising with ultimate flexibility and casual elegance. No fixed dining times, no dress codes \u2014 just pure vacation freedom.', price: '2,699', ships: 3, decks: 46, founded: '2021', tag: 'other', ceo: 'Captain Free', hq: 'Freedom Port', employees: '1,800', rating: 4.4 },
    { id: 'msc', name: 'MSC Cruises', icon: '\uD83C\uDDEE\uD83C\uDDF9', color: '#d62828', desc: 'Mediterranean elegance with a global reach. Sophisticated ships with European style, world-class cuisine, and stunning design.', price: '2,199', ships: 3, decks: 44, founded: '2022', tag: 'other', ceo: 'Captain Europa', hq: 'Genoa Port', employees: '1,600', rating: 4.3 },
    { id: 'princess', name: 'Princess Cruises', icon: '\uD83D\uDC78', color: '#9b5de5', desc: 'Premium voyages to breathtaking destinations with exceptional service, enrichment programs, and intimate ship experiences.', price: '2,899', ships: 2, decks: 30, founded: '2021', tag: 'other', ceo: 'Captain Grace', hq: 'Elegance Bay', employees: '1,200', rating: 4.5 },
    { id: 'disney', name: 'Disney Cruise Line', icon: '\uD83D\uDC2D', color: '#f9c74f', desc: 'Storybook adventures on the high seas with Disney magic, character encounters, themed dining, and spectacular entertainment for the whole family.', price: '3,999', ships: 2, decks: 28, founded: '2023', tag: 'other', ceo: 'Captain Magic', hq: 'Enchanted Port', employees: '1,400', rating: 4.7 },
    { id: 'costa', name: 'Costa Cruises', icon: '\uD83C\uDF0D', color: '#fcbf49', desc: 'Italian-style cruising with vibrant energy, authentic cuisine, and warm Mediterranean hospitality on modern vessels.', price: '1,999', ships: 2, decks: 28, founded: '2022', tag: 'other', ceo: 'Captain Italia', hq: 'Veniceport', employees: '1,000', rating: 4.1 },
    { id: 'virgin', name: 'Virgin Voyages', icon: '\uD83D\uDD25', color: '#e63946', desc: 'Adults-only luxury cruises with a modern twist. Redefining the cruise experience with innovative dining, wellness, and nightlife.', price: '3,499', ships: 2, decks: 34, founded: '2023', tag: 'other', ceo: 'Captain Rebel', hq: 'Miamiport', employees: '1,300', rating: 4.6 },
    { id: 'celebrity', name: 'Celebrity Cruises', icon: '\u2B50', color: '#457b9d', desc: 'Modern luxury with a focus on design, culinary excellence, and destination-rich itineraries aboard sleek, contemporary ships.', price: '3,199', ships: 2, decks: 32, founded: '2021', tag: 'other', ceo: 'Captain Luxe', hq: 'Luxury Bay', employees: '1,100', rating: 4.5 },
    { id: 'holland', name: 'Holland America Line', icon: '\uD83C\uDFF4', color: '#1d3557', desc: 'Timeless elegance and traditional seafaring heritage. Mid-sized ships offering enrichment, exploration, and refined experiences.', price: '2,399', ships: 2, decks: 28, founded: '2020', tag: 'other', ceo: 'Captain Heritage', hq: 'Seattleport', employees: '900', rating: 4.3 },
  ],
  ships: [
    { name: 'Bloxival Splendor', line: 'Bloxival Cruise Line', icon: '\uD83D\uDEA2', desc: 'Flagship with 18 decks, luxury suites, grand atrium, sky dome, and the largest spa at sea. The crown jewel of the Bloxival fleet.', decks: 18, capacity: 4200, year: 2022, features: ['Sky Dome', 'Grand Atrium', 'Luxury Spa', 'Gourmet Dining', 'Infinity Pool'] },
    { name: 'Bloxival Horizon', line: 'Bloxival Cruise Line', icon: '\uD83D\uDEA2', desc: 'Next-gen eco-friendly ship with panoramic ocean views, solar panels, infinity pools, and cutting-edge entertainment venues.', decks: 20, capacity: 4800, year: 2023, features: ['Eco Tech', 'Panoramic Views', 'Infinity Pool', 'Virtual Reality', 'Observation Lounge'] },
    { name: 'Bloxival Voyager', line: 'Bloxival Cruise Line', icon: '\uD83D\uDEA2', desc: 'Adventure-focused vessel with rock climbing, surf simulators, zip lines, ropes course, and a sports complex.', decks: 16, capacity: 3800, year: 2022, features: ['Rock Wall', 'Surf Simulator', 'Zip Line', 'Sports Court', 'Adventure Zone'] },
    { name: 'Bloxival Serenity', line: 'Bloxival Cruise Line', icon: '\uD83D\uDEA2', desc: 'Adults-only luxury retreat with world-class spa, fine dining by celebrity chefs, infinity edge pool, and tranquil lounges.', decks: 14, capacity: 2100, year: 2023, features: ['Spa Sanctuary', 'Celebrity Chefs', 'Infinity Edge Pool', 'Wine Cellar', 'Sunset Lounge'] },
    { name: 'Bloxival Dawn', line: 'Bloxival Cruise Line', icon: '\uD83D\uDEA2', desc: 'Mid-sized ship for intimate coastal getaways with scenic cruising, boutique shopping, and personalized service.', decks: 12, capacity: 1800, year: 2024, features: ['Coastal Cruising', 'Boutique Shops', 'Personal Service', 'Scenic Views', 'Intimate Dining'] },
    { name: 'Bloxival Eclipse', line: 'Bloxival Cruise Line', icon: '\uD83D\uDEA2', desc: 'Revolutionary ship with a glass-domed observatory, underwater viewing lounges, and marine biology labs for educational voyages.', decks: 22, capacity: 5200, year: 2025, features: ['Glass Observatory', 'Underwater Lounge', 'Marine Lab', 'Educational Programs', 'Dome Pool'] },
    { name: 'Bloxival Odyssey', line: 'Bloxival Cruise Line', icon: '\uD83D\uDEA2', desc: 'Ultra-luxury world cruiser designed for extended voyages with palatial suites, private verandas, and butler service.', decks: 16, capacity: 2400, year: 2025, features: ['Butler Service', 'Palatial Suites', 'Private Verandas', 'World Cruising', 'Fine Art Gallery'] },
    { name: 'Bloxney Dream', line: 'Bloxney Cruise Line', icon: '\u26F4\uFE0F', desc: 'Where imagination sets sail \u2014 themed decks, dream suites, fantasy zones, and spectacular Broadway-style shows nightly.', decks: 18, capacity: 4100, year: 2023, features: ['Themed Decks', 'Dream Suites', 'Broadway Shows', 'Fantasy Zone', 'Character Dining'] },
    { name: 'Bloxney Wonder', line: 'Bloxney Cruise Line', icon: '\u26F4\uFE0F', desc: 'Family-friendly ship with character meet-and-greets, interactive play areas, splash zones, and family suite options.', decks: 16, capacity: 3900, year: 2023, features: ['Character Meetups', 'Play Zones', 'Splash Area', 'Family Suites', 'Kids Club'] },
    { name: 'Bloxney Magic', line: 'Bloxney Cruise Line', icon: '\u26F4\uFE0F', desc: 'Enchanted voyages with immersive storytelling, illusion shows, magic labs, and a whimsical wonderland promenade.', decks: 17, capacity: 3600, year: 2024, features: ['Magic Lab', 'Illusion Show', 'Storytelling', 'Wonderland Promenade', 'Enchanted Dining'] },
    { name: 'Bloxney Star', line: 'Bloxney Cruise Line', icon: '\u26F4\uFE0F', desc: 'Broadway-caliber productions, gourmet dining by world-renowned chefs, and a stunning observation lounge with 360-degree views.', decks: 15, capacity: 3200, year: 2024, features: ['Broadway Theater', 'Chef Dining', 'Observation Lounge', 'Star Club', 'Gourmet Kitchen'] },
    { name: 'Bloxney Enchantment', line: 'Bloxney Cruise Line', icon: '\u26F4\uFE0F', desc: 'A floating fairytale with themed restaurants, castle suites, royal events, princess tea parties, and knights tournaments.', decks: 16, capacity: 3500, year: 2025, features: ['Castle Suites', 'Royal Events', 'Tea Party', 'Knight Tournament', 'Fairytale Dining'] },
    { name: 'Bloxney Voyager', line: 'Bloxney Cruise Line', icon: '\u26F4\uFE0F', desc: 'Expedition-themed ship with explorer suites, discovery labs, interactive museums, and adventure shore excursions.', decks: 14, capacity: 2800, year: 2024, features: ['Discovery Lab', 'Interactive Museum', 'Explorer Suites', 'Shore Excursions', 'Adventure Deck'] },
    { name: 'Bloxney Harmony', line: 'Bloxney Cruise Line', icon: '\u26F4\uFE0F', desc: 'Wellness-focused ship with yoga decks, meditation gardens, organic dining, spa suites, and holistic health programs.', decks: 12, capacity: 2200, year: 2025, features: ['Yoga Deck', 'Meditation Garden', 'Organic Dining', 'Spa Suites', 'Wellness Programs'] },
    { name: 'Carnival Breeze', line: 'Carnival Cruise Line', icon: '\uD83D\uDEA2', desc: 'Massive water parks, comedy clubs, casual dining venues, and non-stop entertainment for every age group.', decks: 14, capacity: 3600, year: 2021, features: ['Water Park', 'Comedy Club', 'Casual Dining', 'Arcade', 'Pool Deck'] },
    { name: 'Carnival Sunshine', line: 'Carnival Cruise Line', icon: '\uD83D\uDEA2', desc: 'Refurbished classic with vibrant nightlife, new dining concepts, and upgraded staterooms throughout.', decks: 14, capacity: 3400, year: 2022, features: ['Nightclub', 'New Dining', 'Upgraded Rooms', 'Live Music', 'Casino'] },
    { name: 'Carnival Spirit', line: 'Carnival Cruise Line', icon: '\uD83D\uDEA2', desc: 'Exotic itinerary specialist with longer voyages to unique destinations and cultural immersion experiences.', decks: 14, capacity: 3200, year: 2023, features: ['Exotic Routes', 'Cultural Tours', 'Extended Cruises', 'Destination Expert', 'International Dining'] },
    { name: 'Royal Odyssey', line: 'Royal Caribbean', icon: '\uD83D\uDEA2', desc: 'Massive ship with neighborhood concepts, ice skating rink, Broadway shows, and the tallest slide at sea.', decks: 18, capacity: 5500, year: 2021, features: ['Ice Rink', 'Neighborhoods', 'Broadway', 'Ultimate Slide', 'Central Park'] },
    { name: 'Royal Explorer', line: 'Royal Caribbean', icon: '\uD83D\uDEA2', desc: 'Expedition-focused with remote destination cruising, Zodiac landings, and onboard science laboratories.', decks: 16, capacity: 4200, year: 2022, features: ['Expedition', 'Zodiac Landings', 'Science Lab', 'Remote Routes', 'Adventure Team'] },
    { name: 'Royal Navigator', line: 'Royal Caribbean', icon: '\uD83D\uDEA2', desc: 'Quantum-class ship with skydiving simulator, robotic bartenders, and stunning panoramic ocean views.', decks: 18, capacity: 4900, year: 2024, features: ['SkyDive Sim', 'Robot Bar', 'Panoramic Views', 'North Star', 'Tech Deck'] },
    { name: 'NCL Breakaway', line: 'Norwegian Cruise Line', icon: '\uD83D\uDEA2', desc: 'Freestyle dining, massive water slides, open-air dining, and the famous waterfront boardwalk.', decks: 15, capacity: 4000, year: 2021, features: ['Water Slide', 'Waterfront', 'Freestyle Dining', 'Open-Air Dining', 'Entertainment Zone'] },
    { name: 'NCL Bliss', line: 'Norwegian Cruise Line', icon: '\uD83D\uDEA2', desc: 'Alaska specialist with observation lounges, expansive ocean views, and outdoor heated haven.', decks: 15, capacity: 3800, year: 2022, features: ['Alaska Cruising', 'Observation Lounge', 'Heated Haven', 'Outdoor Dining', 'Wildlife Viewing'] },
    { name: 'NCL Prima', line: 'Norwegian Cruise Line', icon: '\uD83D\uDEA2', desc: 'Next-gen ship with infinite decks, outdoor sculpture garden, and the largest race track at sea.', decks: 17, capacity: 3500, year: 2024, features: ['Race Track', 'Sculpture Garden', 'Infinite Decks', 'Oceanwalk', 'Luxury Suites'] },
    { name: 'MSC Seaview', line: 'MSC Cruises', icon: '\uD83D\uDEA2', desc: 'Mediterranean cruising with panoramic sea views, elegant Italian design, and family-friendly amenities.', decks: 14, capacity: 3500, year: 2022, features: ['Mediterranean', 'Italian Design', 'Family Zones', 'Panoramic Views', 'Gelato Bar'] },
    { name: 'MSC Meraviglia', line: 'MSC Cruises', icon: '\uD83D\uDEA2', desc: 'Stunning indoor promenade with shopping, dining, vast amenities, and the longest LED dome at sea.', decks: 14, capacity: 3700, year: 2023, features: ['LED Dome', 'Indoor Promenade', 'Shopping', 'International Dining', 'Aquapark'] },
    { name: 'MSC Euribia', line: 'MSC Cruises', icon: '\uD83D\uDEA2', desc: 'LNG-powered eco-ship with advanced sustainability, stunning Swiss design, and enhanced wellness facilities.', decks: 16, capacity: 4000, year: 2024, features: ['LNG Power', 'Eco Design', 'Swiss Design', 'Wellness Center', 'Green Tech'] },
    { name: 'Princess Emerald', line: 'Princess Cruises', icon: '\uD83D\uDEA2', desc: 'Elegant cruising with exceptional service, gourmet dining, enrichment programs, and the iconic SeaWalk.', decks: 16, capacity: 3600, year: 2022, features: ['SeaWalk', 'Enrichment', 'Gourmet Dining', 'Movies Under Stars', 'Sanctuary'] },
    { name: 'Princess Ruby', line: 'Princess Cruises', icon: '\uD83D\uDEA2', desc: 'Premium ship with boutique staterooms, specialty restaurants, and immersive destination experiences.', decks: 14, capacity: 3200, year: 2023, features: ['Boutique Rooms', 'Chef Table', 'Destination Immersion', 'Art Gallery', 'Vista Lounge'] },
    { name: 'Disney Wish', line: 'Disney Cruise Line', icon: '\uD83D\uDEA2', desc: 'Enchanted ship with Disney storytelling, character dining, immersive zones, and the first Disney attraction at sea.', decks: 14, capacity: 4000, year: 2023, features: ['Disney Attraction', 'Character Dining', 'Immersive Zones', 'Pirate Night', 'Fireworks at Sea'] },
    { name: 'Disney Treasure', line: 'Disney Cruise Line', icon: '\uD83D\uDEA2', desc: 'Adventure-themed ship with exploration zones, jungle cruises, and worlds of wonder for every generation.', decks: 14, capacity: 4000, year: 2024, features: ['Adventure Zones', 'Jungle Cruise', 'Exploration', 'Marvel Landing', 'Star Wars Area'] },
    { name: 'Costa Smeralda', line: 'Costa Cruises', icon: '\uD83D\uDEA2', desc: 'Italian flair with stunning design, authentic cuisine, and warm hospitality on an LNG-powered vessel.', decks: 14, capacity: 3500, year: 2022, features: ['Italian Design', 'Authentic Cuisine', 'LNG Power', 'Piazza Center', 'Wellness'] },
    { name: 'Costa Toscana', line: 'Costa Cruises', icon: '\uD83D\uDEA2', desc: 'Celebrating Italian regions through design, cuisine, and culture with an innovative eco-friendly profile.', decks: 14, capacity: 3600, year: 2023, features: ['Regional Design', 'Italian Cooking', 'Eco Friendly', 'Music Zone', 'Kids Area'] },
    { name: 'Virgin Valiant', line: 'Virgin Voyages', icon: '\uD83D\uDEA2', desc: 'Adults-only ship with bold design, wellness focus, over 20 dining venues, and transformative entertainment.', decks: 17, capacity: 3500, year: 2023, features: ['Adults Only', '20+ Dining', 'Wellness', 'Bold Design', 'Nightlife'] },
    { name: 'Virgin Resilient', line: 'Virgin Voyages', icon: '\uD83D\uDEA2', desc: 'Lady-ship with outdoor gym, tattoo parlor, drag brunch, and the most dining options per passenger at sea.', decks: 15, capacity: 3300, year: 2024, features: ['Outdoor Gym', 'Tattoo Parlor', 'Drag Brunch', 'Dining Variety', 'The Manor'] },
    { name: 'Celebrity Edge', line: 'Celebrity Cruises', icon: '\uD83D\uDEA2', desc: 'Revolutionary ship with the Magic Carpet, infinite verandas, and stunning design-forward aesthetics.', decks: 16, capacity: 3800, year: 2022, features: ['Magic Carpet', 'Infinite Veranda', 'Design Forward', 'Eden', 'Rooftop Garden'] },
    { name: 'Celebrity Beyond', line: 'Celebrity Cruises', icon: '\uD83D\uDEA2', desc: 'Expanded Edge-class with more suites, culinary excellence by Michelin-starred chefs, and spacious design.', decks: 16, capacity: 4000, year: 2023, features: ['Michelin Dining', 'Expanded Suites', 'Spa', 'Sunset Bar', 'Craftsman Design'] },
    { name: 'HAL Rotterdam', line: 'Holland America Line', icon: '\uD83D\uDEA2', desc: 'Pinnacle-class ship with music immersion, culinary excellence, expansive art collection, and traditional warmth.', decks: 14, capacity: 3200, year: 2022, features: ['Music Walk', 'Art Collection', 'Culinary Council', 'World Stage', 'Explorations Cafe'] },
    { name: 'HAL Zuiderdam', line: 'Holland America Line', icon: '\uD83D\uDEA2', desc: 'Mid-sized ship with enrichment programs, cultural cruises, and intimate port access for unique itineraries.', decks: 14, capacity: 2900, year: 2021, features: ['Enrichment', 'Cultural Routes', 'Intimate Ports', 'Library', 'Digital Workshop'] },
  ],
  reviews: [
    { text: 'Bloxival Splendor is absolutely breathtaking! The Sky Dome alone is worth the trip. Best cruise I have ever been on in Roblox.', author: 'CruiseFanatic_22', stars: 5, line: 'Bloxival Cruise Line' },
    { text: 'Bloxney Dream made my daughter so happy. The character dining was magical \u2014 she still talks about it every day!', author: 'FamilyFun_RBLX', stars: 5, line: 'Bloxney Cruise Line' },
    { text: 'Royal Odyssey is MASSIVE. So many things to do, you need a whole week just to explore everything!', author: 'AdventureSeeker', stars: 4, line: 'Royal Caribbean' },
    { text: 'The freestyle dining on NCL Breakaway is genius. Eat whenever, wherever \u2014 no schedules!', author: 'FoodieRoblox', stars: 4, line: 'Norwegian Cruise Line' },
    { text: 'Bloxival Horizon has the best views at sea. The observation lounge at sunset is pure magic.', author: 'SunsetChaser', stars: 5, line: 'Bloxival Cruise Line' },
    { text: 'Disney Wish was incredible \u2014 the fireworks at sea made me tear up. Such amazing detail!', author: 'DisneyFan_RBLX', stars: 5, line: 'Disney Cruise Line' },
    { text: 'Bloxney Harmony wellness deck saved my sanity. Yoga at sunrise over the ocean? Yes please.', author: 'ZenMaster_RBLX', stars: 5, line: 'Bloxney Cruise Line' },
    { text: 'MSC Meraviglia LED dome is stunning. Felt like I was walking through a dream.', author: 'TravelBug_RBLX', stars: 4, line: 'MSC Cruises' },
    { text: 'Virgin Valiant is next level \u2014 adults-only, amazing food, incredible shows. Worth every Robux.', author: 'TrendyTraveler', stars: 5, line: 'Virgin Voyages' },
    { text: 'Celebrity Edge Magic Carpet is genius engineering. Hanging off the side of the ship at dinner is wild!', author: 'DesignLover_RBLX', stars: 5, line: 'Celebrity Cruises' },
    { text: 'Carnival Breeze water park is the best. Spent the whole cruise on the slides!', author: 'WaterParkKing', stars: 4, line: 'Carnival Cruise Line' },
    { text: 'Princess Emerald is pure class. The service is incredible and the food is restaurant quality.', author: 'ClassyCruiser', stars: 5, line: 'Princess Cruises' },
    { text: 'Bloxney Voyager discovery lab is so cool for kids. Interactive science and fun shore excursions!', author: 'ScienceMom_RBLX', stars: 5, line: 'Bloxney Cruise Line' },
    { text: 'HAL Rotterdam music walk is incredible. Live music every night in different venues!', author: 'MusicLover_RBLX', stars: 4, line: 'Holland America Line' },
    { text: 'Bloxival Eclipse underwater lounge is mind-blowing. Watched marine life while sipping a drink.', author: 'OceanExplorer', stars: 5, line: 'Bloxival Cruise Line' },
  ],
  destinations: [
    { name: 'Bloxport Bay', icon: '\uD83C\uDF0A', region: 'Bloxival Routes', desc: 'The home port of Bloxival Cruise Line, featuring a modern terminal with shops, cafes, and a stunning boardwalk.', lines: ['Bloxival Cruise Line', 'Bloxney Cruise Line'] },
    { name: 'Dreamport Island', icon: '\uD83C\uDF34', region: 'Bloxney Routes', desc: 'A magical private island with white sand beaches, character experiences, and family-friendly water activities.', lines: ['Bloxney Cruise Line'] },
    { name: 'Adventure Cove', icon: '\uD83C\uDFDD\uFE0F', region: 'Caribbean', desc: 'Thrilling water sports, zip line adventures, and tropical beach excursions for active cruisers.', lines: ['Bloxival Cruise Line', 'Royal Caribbean', 'Carnival Cruise Line'] },
    { name: 'Elegance Harbor', icon: '\uD83C\uDF0A', region: 'Mediterranean', desc: 'A sophisticated port with historic architecture, fine dining, and luxury shopping experiences.', lines: ['MSC Cruises', 'Costa Cruises', 'Celebrity Cruises'] },
    { name: 'Fantasy Isles', icon: '\u2728', region: 'Bloxney Routes', desc: 'Enchanted islands with mythical creatures, fairy-tale castles, and whimsical gardens to explore.', lines: ['Bloxney Cruise Line'] },
    { name: 'Northern Lights Fjord', icon: '\uD83C\uDF03', region: 'Alaska / Norway', desc: 'Spectacular fjord cruising with aurora borealis views, glacier exploration, and wildlife spotting.', lines: ['Norwegian Cruise Line', 'Holland America Line', 'Bloxival Cruise Line'] },
    { name: 'Sunset Key', icon: '\uD83C\uDF05', region: 'Caribbean', desc: 'Secluded paradise known for breathtaking sunsets, crystal-clear waters, and relaxing beach cabanas.', lines: ['Bloxival Cruise Line', 'Princess Cruises', 'Virgin Voyages'] },
    { name: 'Mystic Harbor', icon: '\uD83D\uDD2E', region: 'Bloxney Routes', desc: 'A mysterious port shrouded in fog, filled with magical shops, fortune tellers, and enchanted forests.', lines: ['Bloxney Cruise Line'] },
    { name: 'Grand Bazaar Port', icon: '\uD83D\uDED2', region: 'Middle East / Asia', desc: 'Vibrant marketplace port with exotic goods, cultural shows, and world-class shopping experiences.', lines: ['MSC Cruises', 'Costa Cruises', 'Royal Caribbean'] },
    { name: 'Serenity Cay', icon: '\uD83C\uDF42', region: 'Private Island', desc: 'Bloxival\'s exclusive private island with overwater bungalows, spa pavilions, and gourmet beach dining.', lines: ['Bloxival Cruise Line'] },
    { name: 'Royal Harbour', icon: '\uD83D\uDC51', region: 'Caribbean', desc: 'Royal Caribbean\'s private destination with the Perfect Day experience, thrill park, and pool complex.', lines: ['Royal Caribbean'] },
    { name: 'Icebreaker Point', icon: '\uD83E\uDDCA', region: 'Antarctica', desc: 'An extreme destination for expedition cruises with iceberg viewing, penguin colonies, and polar research.', lines: ['Bloxival Cruise Line', 'Royal Caribbean'] },
  ],
  timeline: [
    { year: 2020, title: 'Royal Caribbean Launches', desc: 'Royal Caribbean opens its first virtual ship in Roblox, setting the standard for cruise innovation.' },
    { year: 2021, title: 'Carnival & NCL Join the Seas', desc: 'Carnival Cruise Line and Norwegian Cruise Line launch their first Roblox vessels, expanding cruise variety.' },
    { year: 2022, title: 'Bloxival Cruise Line Founded', desc: 'Bloxival launches with the flagship Bloxival Splendor, redefining luxury cruising in the Roblox universe.' },
    { year: 2022, title: 'MSC & Princess Arrive', desc: 'MSC Cruises and Princess Cruises join the CSS lineup, bringing European elegance to the fleet.' },
    { year: 2023, title: 'Bloxney Cruise Line Founded', desc: 'Bloxney launches with the magical Bloxney Dream, introducing themed family cruising to Roblox.' },
    { year: 2023, title: 'Disney Wish Sets Sail', desc: 'Disney Cruise Line arrives with the spectacular Disney Wish, featuring fireworks and character experiences.' },
    { year: 2024, title: 'Next-Gen Ships Debut', desc: 'Bloxival Eclipse, Bloxney Voyager, Royal Navigator, and Virgin Resilient lead a new wave of innovation.' },
    { year: 2025, title: 'Golden Age of CSS', desc: 'Over 12 cruise lines, 38+ ships, and millions of players exploring the seas. Bloxival Odyssey and Bloxney Harmony set new standards for luxury.' },
  ],
  gallery: [
    { name: 'Bloxival Splendor', line: 'bloxival', emoji: '\uD83C\uDF0A' },
    { name: 'Bloxival Horizon', line: 'bloxival', emoji: '\u2600\uFE0F' },
    { name: 'Bloxival Voyager', line: 'bloxival', emoji: '\u26BD' },
    { name: 'Bloxival Serenity', line: 'bloxival', emoji: '\uD83C\uDFDE\uFE0F' },
    { name: 'Bloxival Dawn', line: 'bloxival', emoji: '\uD83C\uDF05' },
    { name: 'Bloxival Eclipse', line: 'bloxival', emoji: '\uD83D\uDD0D' },
    { name: 'Bloxival Odyssey', line: 'bloxival', emoji: '\uD83D\uDCA0' },
    { name: 'Bloxney Dream', line: 'bloxney', emoji: '\u2728' },
    { name: 'Bloxney Wonder', line: 'bloxney', emoji: '\uD83C\uDF89' },
    { name: 'Bloxney Magic', line: 'bloxney', emoji: '\uD83E\uDDE9' },
    { name: 'Bloxney Star', line: 'bloxney', emoji: '\u2B50' },
    { name: 'Bloxney Enchantment', line: 'bloxney', emoji: '\uD83C\uDF70' },
    { name: 'Bloxney Voyager', line: 'bloxney', emoji: '\uD83D\uDD0D' },
    { name: 'Bloxney Harmony', line: 'bloxney', emoji: '\uD83C\uDF3F' },
    { name: 'Royal Odyssey', line: 'other', emoji: '\uD83C\uDFC4' },
    { name: 'Disney Wish', line: 'other', emoji: '\uD83C\uDF1F' },
    { name: 'Virgin Valiant', line: 'other', emoji: '\uD83D\uDD25' },
    { name: 'Celebrity Edge', line: 'other', emoji: '\u2B50' },
  ],
};

function lineId(name) {
  return name.toLowerCase().replace(/[^a-z]/g, '');
}

function lineTag(name) {
  if (name === 'Bloxival Cruise Line') return 'bloxival';
  if (name === 'Bloxney Cruise Line') return 'bloxney';
  return 'other';
}

function getLine(name) {
  return data.lines.find(l => l.name === name);
}

/* ─── Render Cruises ─── */
function renderCruises() {
  const grid = document.getElementById('cruiseGrid');
  grid.innerHTML = data.lines.map(l => `
    <div class="cruise-card" data-reveal-stagger style="--accent: ${l.color}" onclick="scrollToSection('lines')">
      <span class="cruise-icon">${l.icon}</span>
      <h3>${l.name}</h3>
      <span class="cruise-line">${l.ships} ships · ${l.decks} decks · Founded ${l.founded}</span>
      <p>${l.desc}</p>
      <span class="cruise-price">From $${l.price}</span>
    </div>
  `).join('');
}

/* ─── Render Lines Showcase ─── */
function renderLines() {
  const grid = document.getElementById('linesShowcase');
  const featured = data.lines.filter(l => l.id === 'bloxival' || l.id === 'bloxney');
  const others = data.lines.filter(l => l.id !== 'bloxival' && l.id !== 'bloxney');
  const all = [...featured, ...others];

  grid.innerHTML = all.map(l => {
    const isFeatured = l.id === 'bloxival' ? 'featured' : l.id === 'bloxney' ? 'featured-bloxney' : '';
    const lineShips = data.ships.filter(s => s.line === l.name);
    return `
      <div class="line-card ${isFeatured}" data-reveal-stagger>
        <span class="line-icon">${l.icon}</span>
        <h3>${l.name}</h3>
        <span class="line-tag ${l.tag}">${l.ships} ships · ${l.decks} decks · Founded ${l.founded}</span>
        <p>${l.desc}</p>
        <ul class="line-ship-list">
          ${lineShips.map(s => `<li>${s.icon} ${s.name}</li>`).join('')}
        </ul>
      </div>
    `;
  }).join('');
}

/* ─── Booking ─── */
function populateBookingLines() {
  const sel = document.getElementById('cruiseLine');
  sel.innerHTML = '<option value="">Select a line...</option>';
  data.lines.forEach(l => {
    const opt = document.createElement('option');
    opt.value = l.name;
    opt.textContent = `${l.icon} ${l.name}`;
    sel.appendChild(opt);
  });
}

function populateShips(lineName) {
  const sel = document.getElementById('cruiseShip');
  sel.innerHTML = '<option value="">Select a ship...</option>';
  const ships = data.ships.filter(s => s.line === lineName);
  ships.forEach(s => {
    const opt = document.createElement('option');
    opt.value = s.name;
    opt.textContent = `${s.icon} ${s.name}`;
    sel.appendChild(opt);
  });
}

function updatePrice() {
  const line = document.getElementById('cruiseLine').value;
  const cabin = document.getElementById('cabinClass').value;
  const pax = parseInt(document.getElementById('passengers').value) || 1;
  const el = document.getElementById('priceAmount');
  if (!line) { el.textContent = '$0'; return; }
  const l = getLine(line);
  const basePrice = parseInt(l.price.replace(',', ''));
  const cabinMultipliers = { 'Interior': 1, 'Ocean View': 1.3, 'Balcony': 1.7, 'Suite': 2.2, 'Penthouse': 3 };
  const mult = cabinMultipliers[cabin] || 1;
  const total = Math.round(basePrice * mult * pax);
  el.textContent = '$' + total.toLocaleString();
}

document.getElementById('cruiseLine').addEventListener('change', function() {
  populateShips(this.value);
  updatePrice();
});
document.getElementById('cabinClass').addEventListener('change', updatePrice);
document.getElementById('passengers').addEventListener('input', updatePrice);

document.getElementById('bookingForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const user = document.getElementById('robloxUser').value.trim();
  const line = document.getElementById('cruiseLine').value;
  const ship = document.getElementById('cruiseShip').value;
  const date = document.getElementById('departDate').value;
  const pax = document.getElementById('passengers').value;
  const cabin = document.getElementById('cabinClass').value;
  const requests = document.getElementById('specialRequests').value.trim();
  if (!user || !line || !ship || !date) return;

  const shipData = data.ships.find(s => s.name === ship);
  const l = getLine(line);

  const conf = document.getElementById('bookingConf');
  conf.classList.add('show');
  document.getElementById('confDetails').innerHTML = `
    <div class="conf-checkmark">✓</div>
    <p>Roblox: <strong>${user}</strong></p>
    <p>Ship: ${shipData ? shipData.icon : '🚢'} ${ship} — ${line}</p>
    <p>Date: ${new Date(date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
    <p>Guests: ${pax} · Cabin: ${cabin}</p>
    ${requests ? `<p>Note: ${requests}</p>` : ''}
    <p>Booking Confirmed! See you on board!</p>
  `;
  fireConfetti();
  showNotification('Booking confirmed! Welcome aboard!');
  this.reset();
  setTimeout(() => populateBookingLines(), 100);
  document.getElementById('priceAmount').textContent = '$0';
  document.getElementById('bookingCard').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('newBookingBtn').addEventListener('click', function() {
  document.getElementById('bookingConf').classList.remove('show');
});

/* ─── Ships ─── */
function renderShips(filter, searchTerm) {
  const grid = document.getElementById('shipGrid');
  let ships = filter === 'all' ? data.ships : data.ships.filter(s => lineId(s.line) === filter);
  if (searchTerm) {
    const t = searchTerm.toLowerCase();
    ships = ships.filter(s => s.name.toLowerCase().includes(t) || s.line.toLowerCase().includes(t) || s.desc.toLowerCase().includes(t));
  }
  grid.innerHTML = ships.map(s => {
    const tag = lineTag(s.line);
    return `
      <div class="ship-card" data-reveal-stagger onclick="openShipModal('${s.name.replace(/'/g, "\\'")}')">
        <span class="ship-icon">${s.icon}</span>
        <h3>${s.name}</h3>
        <span class="ship-line ${tag}">${s.line}</span>
        <p>${s.desc}</p>
        <div class="ship-meta">
          <span>Decks: ${s.decks}</span>
          <span>Capacity: ${(s.capacity / 1000).toFixed(1)}K</span>
          <span>Year: ${s.year}</span>
        </div>
      </div>
    `;
  }).join('');
}

function buildFilters() {
  const row = document.getElementById('filterRow');
  const lines = [...new Set(data.ships.map(s => s.line))];
  const allBtn = row.querySelector('.f-btn');
  allBtn.addEventListener('click', function() {
    document.querySelectorAll('.f-btn').forEach(b => b.classList.remove('active'));
    this.classList.add('active');
    renderShips('all', document.getElementById('fleetSearch').value);
  });
  lines.forEach(name => {
    const btn = document.createElement('button');
    btn.className = 'f-btn';
    btn.dataset.f = lineId(name);
    const line = data.lines.find(l => l.name === name);
    btn.textContent = `${line ? line.icon : '🚢'} ${name.replace(' Cruise Line', '')}`;
    row.appendChild(btn);
    btn.addEventListener('click', function() {
      document.querySelectorAll('.f-btn').forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      renderShips(this.dataset.f, document.getElementById('fleetSearch').value);
    });
  });
}

document.getElementById('fleetSearch').addEventListener('input', function() {
  const active = document.querySelector('.f-btn.active');
  const filter = active ? active.dataset.f : 'all';
  renderShips(filter, this.value);
});

/* ─── Ship Modal ─── */
function openShipModal(shipName) {
  const ship = data.ships.find(s => s.name === shipName);
  if (!ship) return;
  const line = getLine(ship.line);
  const tag = lineTag(ship.line);
  const modal = document.getElementById('modalOverlay');
  const body = document.getElementById('modalBody');
  body.innerHTML = `
    <div class="modal-header">
      <span class="modal-icon">${ship.icon}</span>
      <h2>${ship.name}</h2>
      <span class="modal-line ${tag}" style="background:rgba(${tag === 'bloxival' ? '0,180,216' : tag === 'bloxney' ? '244,63,94' : '255,255,255'},0.06);color:${tag === 'bloxival' ? '#48cae4' : tag === 'bloxney' ? '#fb7185' : '#a0aec0'}">${ship.line}</span>
    </div>
    <div class="modal-body">
      <p>${ship.desc}</p>
      <div class="modal-stats">
        <div class="modal-stat"><strong>${ship.decks}</strong><span>Decks</span></div>
        <div class="modal-stat"><strong>${(ship.capacity / 1000).toFixed(1)}K</strong><span>Capacity</span></div>
        <div class="modal-stat"><strong>${ship.year}</strong><span>Year</span></div>
      </div>
      <h4 style="font-size:0.85rem;font-weight:600;margin-bottom:12px;color:#7890a8;">Key Features</h4>
      <div class="modal-features">
        ${ship.features.map(f => `<span>${f}</span>`).join('')}
      </div>
    </div>
  `;
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('modalOverlay').classList.remove('open');
  document.body.style.overflow = '';
}

document.getElementById('modalClose').addEventListener('click', closeModal);
document.getElementById('modalOverlay').addEventListener('click', function(e) {
  if (e.target === this) closeModal();
});
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') closeModal();
});

/* ─── Gallery ─── */
function renderGallery(filter) {
  const grid = document.getElementById('galleryGrid');
  const items = filter === 'all' ? data.gallery : data.gallery.filter(g => g.line === filter);
  grid.innerHTML = items.map(g => {
    const ship = data.ships.find(s => s.name === g.name);
    const deckCount = ship ? ship.decks : '?';
    return `
      <div class="gallery-item" onclick="openShipModal('${g.name.replace(/'/g, "\\'")}')">
        <div class="gallery-item-preview" style="background:linear-gradient(135deg, rgba(${g.line === 'bloxival' ? '0,119,182' : g.line === 'bloxney' ? '244,63,94' : '100,100,100'},0.05), rgba(5,10,24,0.5))">
          ${g.emoji}
        </div>
        <div class="gallery-item-overlay">
          <h4>${g.name}</h4>
          <span>${deckCount} decks · ${g.line.charAt(0).toUpperCase() + g.line.slice(1)}</span>
        </div>
      </div>
    `;
  }).join('');
}

document.querySelectorAll('.g-btn').forEach(btn => {
  btn.addEventListener('click', function() {
    document.querySelectorAll('.g-btn').forEach(b => b.classList.remove('active'));
    this.classList.add('active');
    renderGallery(this.dataset.g);
  });
});

/* ─── Timeline ─── */
function renderTimeline() {
  const container = document.getElementById('timelineContainer');
  container.innerHTML = data.timeline.map((t, i) => `
    <div class="timeline-item">
      <div class="timeline-dot"></div>
      <div class="timeline-content">
        <span class="timeline-year">${t.year}</span>
        <h4>${t.title}</h4>
        <p>${t.desc}</p>
      </div>
    </div>
  `).join('');
}

/* ─── Reviews ─── */
let reviewIndex = 0;

function renderReviews() {
  const track = document.getElementById('reviewsTrack');
  track.innerHTML = data.reviews.map(r => `
    <div class="review-card">
      <div class="review-stars">${'★'.repeat(r.stars)}${'☆'.repeat(5 - r.stars)}</div>
      <p class="review-text">"${r.text}"</p>
      <div class="review-author">— ${r.author}</div>
      <div class="review-line">${r.line}</div>
    </div>
  `).join('');
  showReview(0);
}

function showReview(idx) {
  const cards = document.querySelectorAll('.review-card');
  cards.forEach((c, i) => c.classList.toggle('active', i === idx));
  reviewIndex = idx;
}

document.getElementById('reviewPrev').addEventListener('click', () => {
  const cards = document.querySelectorAll('.review-card');
  const next = (reviewIndex - 1 + cards.length) % cards.length;
  showReview(next);
});

document.getElementById('reviewNext').addEventListener('click', () => {
  const cards = document.querySelectorAll('.review-card');
  const next = (reviewIndex + 1) % cards.length;
  showReview(next);
});

setInterval(() => {
  const cards = document.querySelectorAll('.review-card');
  if (cards.length) showReview((reviewIndex + 1) % cards.length);
}, 6000);

/* ─── Destinations ─── */
function renderDestinations() {
  const grid = document.getElementById('destinationsGrid');
  grid.innerHTML = data.destinations.map(d => `
    <div class="destination-card" data-reveal-stagger>
      <span class="dest-icon">${d.icon}</span>
      <h3>${d.name}</h3>
      <span class="dest-region">${d.region}</span>
      <p>${d.desc}</p>
      <div class="dest-lines">
        ${d.lines.map(l => `<span>${l.replace(' Cruise Line', '')}</span>`).join('')}
      </div>
    </div>
  `).join('');
}

/* ─── Compare Table ─── */
function renderCompare() {
  const table = document.getElementById('compareTable');
  table.innerHTML = `
    <thead>
      <tr>
        <th>Line</th>
        <th>Ships</th>
        <th>Decks</th>
        <th>Founded</th>
        <th>Price</th>
        <th>Rating</th>
        <th>Employees</th>
        <th>Type</th>
      </tr>
    </thead>
    <tbody>
      ${data.lines.map(l => `
        <tr>
          <td>${l.icon} ${l.name}</td>
          <td class="${l.ships >= 5 ? 'c-highlight' : ''}">${l.ships}</td>
          <td>${l.decks}</td>
          <td>${l.founded}</td>
          <td>$${l.price}</td>
          <td class="${l.rating >= 4.5 ? 'c-highlight' : ''}">${l.rating}</td>
          <td>${l.employees}</td>
          <td>${l.tag === 'bloxival' ? '⚓ Signature' : l.tag === 'bloxney' ? '✨ Signature' : 'Standard'}</td>
        </tr>
      `).join('')}
    </tbody>
  `;
}

/* ─── SpotLight Carousel ─── */
let spotlightIndex = 0;
const spotlightShips = ['Bloxival Splendor', 'Bloxney Dream', 'Bloxival Eclipse', 'Bloxney Magic', 'Royal Odyssey'];

function renderSpotlight() {
  const wrap = document.getElementById('spotlightWrap');
  const s = spotlightShips.map(n => data.ships.find(sh => sh.name === n)).filter(Boolean);
  wrap.innerHTML = `
    <div class="spotlight-card" id="spotlightCard">
      <span class="spotlight-ship-icon">${s[spotlightIndex].icon}</span>
      <h3>${s[spotlightIndex].name}</h3>
      <span class="spotlight-line">${s[spotlightIndex].line} · ${s[spotlightIndex].year}</span>
      <p>${s[spotlightIndex].desc}</p>
      <div class="spotlight-stats">
        <div class="spotlight-stat"><strong>${s[spotlightIndex].decks}</strong><span>Decks</span></div>
        <div class="spotlight-stat"><strong>${(s[spotlightIndex].capacity / 1000).toFixed(1)}K</strong><span>Capacity</span></div>
        <div class="spotlight-stat"><strong>${s[spotlightIndex].features.length}</strong><span>Features</span></div>
      </div>
      <div class="spotlight-nav">${s.map((_, i) => `<button class="spotlight-dot ${i === spotlightIndex ? 'active' : ''}" data-si="${i}"></button>`).join('')}</div>
    </div>
  `;
  wrap.querySelectorAll('.spotlight-dot').forEach(d => {
    d.addEventListener('click', function() {
      spotlightIndex = parseInt(this.dataset.si);
      renderSpotlight();
    });
  });
  setTimeout(() => {
    spotlightIndex = (spotlightIndex + 1) % s.length;
    renderSpotlight();
  }, 6000);
}

/* ─── Countdown Timer ─── */
function startCountdown() {
  function update() {
    const now = new Date();
    const next = new Date(now);
    next.setDate(next.getDate() + (7 - next.getDay() || 7));
    next.setHours(12, 0, 0, 0);
    if (next < now) next.setDate(next.getDate() + 7);
    const diff = next - now;
    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const m = Math.floor((diff / (1000 * 60)) % 60);
    const s = Math.floor((diff / 1000) % 60);
    const el = document.getElementById('countdownTimer');
    if (el) el.textContent = `${d.toString().padStart(2, '0')}d ${h.toString().padStart(2, '0')}h ${m.toString().padStart(2, '0')}m ${s.toString().padStart(2, '0')}s`;
  }
  update();
  setInterval(update, 1000);
}

/* ─── Theme Toggle ─── */
function initTheme() {
  const saved = localStorage.getItem('css-theme');
  if (saved === 'light') document.body.classList.add('light');
  document.getElementById('themeToggle').addEventListener('click', () => {
    document.body.classList.toggle('light');
    localStorage.setItem('css-theme', document.body.classList.contains('light') ? 'light' : 'dark');
  });
}

/* ─── Notification System ─── */
function showNotification(msg, duration) {
  const el = document.getElementById('notification');
  el.textContent = msg;
  el.classList.add('show');
  clearTimeout(el._t);
  el._t = setTimeout(() => el.classList.remove('show'), duration || 3000);
}

/* ─── Confetti ─── */
function fireConfetti() {
  const container = document.getElementById('confettiContainer');
  const colors = ['#0077b6', '#00b4d8', '#90e0ef', '#48cae4', '#f43f5e', '#fb7185', '#f9c74f', '#90e0ef'];
  for (let i = 0; i < 60; i++) {
    const piece = document.createElement('div');
    piece.className = 'confetti-piece';
    piece.style.cssText = `
      left: ${Math.random() * 100}%;
      width: ${4 + Math.random() * 8}px;
      height: ${4 + Math.random() * 8}px;
      background: ${colors[Math.floor(Math.random() * colors.length)]};
      animation-duration: ${1.5 + Math.random() * 2}s;
      animation-delay: ${Math.random() * 0.5}s;
      border-radius: ${Math.random() > 0.5 ? '50%' : '2px'};
    `;
    container.appendChild(piece);
  }
  setTimeout(() => container.innerHTML = '', 5000);
}

/* ─── Parallax Mouse ─── */
function initParallax() {
  document.addEventListener('mousemove', e => {
    const x = (e.clientX / window.innerWidth - 0.5) * 10;
    const y = (e.clientY / window.innerHeight - 0.5) * 10;
    document.querySelectorAll('.parallax').forEach(el => {
      const speed = parseFloat(el.dataset.speed) || 0.2;
      el.style.transform = `translate(${x * speed}px, ${y * speed}px)`;
    });
  });
}

/* ─── Loading Screen ─── */
function initLoading() {
  const ls = document.getElementById('loadingScreen');
  setTimeout(() => ls.classList.add('hidden'), 1800);
}

/* ─── Visual Comparison Bars ─── */
function renderCompareBars() {
  const tableWrap = document.querySelector('.compare-table-wrap');
  const vis = document.createElement('div');
  vis.className = 'compare-visual';
  vis.innerHTML = '<h3>Fleet Size by Ships</h3>';
  const sorted = [...data.lines].sort((a, b) => b.ships - a.ships);
  const max = sorted[0].ships;
  vis.innerHTML += sorted.map(l => `
    <div class="compare-bar-row">
      <span class="compare-bar-label">${l.icon} ${l.name.replace(' Cruise Line', '')}</span>
      <div class="compare-bar-track">
        <div class="compare-bar-fill" style="width:${(l.ships / max) * 100}%"></div>
      </div>
      <span class="compare-bar-value">${l.ships}</span>
    </div>
  `).join('');
  tableWrap.parentNode.appendChild(vis);
}

/* ─── Hero Stats Counter ─── */
function animateCounters() {
  const totalShips = data.ships.length;
  const totalLines = data.lines.length;
  const totalDecks = data.ships.reduce((sum, s) => sum + s.decks, 0);
  const totalCabins = data.ships.reduce((sum, s) => sum + Math.round(s.capacity / 2), 0);

  function animate(el, target) {
    let current = 0;
    const step = Math.max(1, Math.ceil(target / 40));
    const interval = setInterval(() => {
      current += step;
      if (current >= target) { current = target; clearInterval(interval); }
      el.textContent = current;
    }, 35);
  }

  animate(document.getElementById('statLines'), totalLines);
  animate(document.getElementById('statShips'), totalShips);
  animate(document.getElementById('statDecks'), totalDecks);
  animate(document.getElementById('statCabins'), totalCabins);
}

/* ─── Footer ─── */
function renderFooter() {
  const ul = document.getElementById('footerLines');
  ul.innerHTML = data.lines.slice(0, 6).map(l => `<li>${l.icon} ${l.name}</li>`).join('');
}

/* ─── Scroll Progress ─── */
function updateScrollProgress() {
  const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrolled = (winScroll / height) * 100;
  document.getElementById('scrollProgress').style.width = scrolled + '%';
}

/* ─── Back to Top ─── */
window.addEventListener('scroll', () => {
  const btn = document.getElementById('backToTop');
  btn.classList.toggle('visible', window.scrollY > 600);
});

document.getElementById('backToTop').addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

/* ─── Chatbot ─── */
const chatDB = {
  greetings: ['hi','hello','hey','yo','sup','howdy','greetings','ahoy'],
  ships: ['ship','ships','vessel','vessels','boat','boats','fleet'],
  lines: ['line','lines','cruise line','cruise lines','company','companies'],
  bloxival: ['bloxival','bloxi'],
  bloxney: ['bloxney','bloxney'],
  booking: ['book','booking','reserve','reservation','reservations','booked'],
  price: ['price','cost','pricing','how much','expensive','cheap','fare','fares','costs'],
  roblox: ['roblox','username','user','game','platform'],
  help: ['help','what can you do','commands','what do you do','options','capabilities'],
  compare: ['compare','comparison','vs','versus','difference'],
  decks: ['deck','decks','floors','levels'],
  gallery: ['gallery','picture','photo','image','visual','looks','render','art'],
  destination: ['destination','port','island','beach','excursion','shore','stop','route'],
  review: ['review','rating','feedback','testimonial','say','opinion'],
  feature: ['feature','amenity','activity','thing to do','entertain','pool','spa','dining','restaurant'],
  best: ['best','top','greatest','favorite','number one','leading','premier'],
  crew: ['crew','staff','employee','captain','ceo','team'],
};

function matchIntent(msg) {
  const m = msg.toLowerCase();
  if (chatDB.greetings.some(w => m.includes(w))) return 'greeting';
  if (m.includes('thank') || m.includes('thanks') || m.includes('ty')) return 'thanks';
  if (m.includes('bye') || m.includes('goodbye') || m.includes('cya')) return 'bye';
  if (chatDB.booking.some(w => m.includes(w))) return 'booking';
  if (chatDB.price.some(w => m.includes(w))) return 'price';
  if (chatDB.bloxival.some(w => m.includes(w)) && chatDB.bloxney.some(w => m.includes(w))) return 'both_lines';
  if (chatDB.bloxival.some(w => m.includes(w))) return 'bloxival';
  if (chatDB.bloxney.some(w => m.includes(w))) return 'bloxney';
  if (chatDB.crew.some(w => m.includes(w))) return 'crew';
  if (chatDB.gallery.some(w => m.includes(w))) return 'gallery';
  if (chatDB.destination.some(w => m.includes(w))) return 'destination';
  if (chatDB.review.some(w => m.includes(w))) return 'review';
  if (chatDB.feature.some(w => m.includes(w))) return 'feature';
  if (chatDB.best.some(w => m.includes(w)) && chatDB.lines.some(w => m.includes(w))) return 'best_line';
  if (chatDB.best.some(w => m.includes(w)) && chatDB.ships.some(w => m.includes(w))) return 'best_ship';
  if (chatDB.compare.some(w => m.includes(w))) return 'compare';
  if (chatDB.decks.some(w => m.includes(w))) return 'decks';
  if (chatDB.ships.some(w => m.includes(w)) && chatDB.lines.some(w => m.includes(w))) return 'ships_lines';
  if (chatDB.lines.some(w => m.includes(w))) return 'lines';
  if (chatDB.ships.some(w => m.includes(w))) return 'ships';
  return 'fallback';
}

const responses = {
  greeting: () => {
    const g = ['Ahoy! Ready to set sail with Bloxival or Bloxney?', 'Welcome aboard, Captain! Ask me anything about CSS!', 'Hello! Bloxival, Bloxney, or any line \u2014 I know them all!', 'Hey there! Your cruise companion is here! Ask me about ships, destinations, or booking!'];
    return g[Math.floor(Math.random() * g.length)];
  },
  thanks: () => 'Happy cruising! Come back anytime!',
  bye: () => 'Fair winds and following seas! See you on the next voyage!',
  booking: () => 'To book: head to the **Book** section, enter your Roblox username, pick your line & ship, choose a date, select a cabin class, and confirm! For an instant price estimate, fill in the form above!',
  price: () => {
    const lines = data.lines.slice(0, 6).map(l => `${l.icon} ${l.name}: from **$${l.price}**`).join('\n');
    return `Price overview (starting prices):\n${lines}\n\nBloxival starts at $2,499 · Bloxney starts at $2,899! Full pricing in the **Compare** section.`;
  },
  bloxival: () => {
    const ships = data.ships.filter(s => s.line === 'Bloxival Cruise Line');
    return `\u2693 **Bloxival Cruise Line** \u2014 Luxury & adventure!\nCEO: ${data.lines[0].ceo} · HQ: ${data.lines[0].hq}\nShips (${ships.length}):\n${ships.map(s => `\u2022 ${s.icon} ${s.name} (${s.decks} decks, ${s.capacity} capacity)`).join('\n')}\n\nFlagship: **Bloxival Splendor** \u2014 18 decks of luxury!`;
  },
  bloxney: () => {
    const ships = data.ships.filter(s => s.line === 'Bloxney Cruise Line');
    return `\u2728 **Bloxney Cruise Line** \u2014 Magical themed voyages!\nCEO: ${data.lines[1].ceo} · HQ: ${data.lines[1].hq}\nShips (${ships.length}):\n${ships.map(s => `\u2022 ${s.icon} ${s.name} (${s.decks} decks, ${s.capacity} capacity)`).join('\n')}\n\nFlagship: **Bloxney Dream** \u2014 18 decks of magic!`;
  },
  both_lines: () => {
    return '**Bloxival vs Bloxney**\n\u2693 **Bloxival**: 7 ships, 126 total decks, from $2,499 \u2014 luxury & adventure\n\u2728 **Bloxney**: 7 ships, 118 total decks, from $2,899 \u2014 magic & imagination\n\nBoth are signature lines in CSS! Check the **Compare** section for full details.';
  },
  crew: () => {
    const top = data.lines.slice(0, 4).map(l => `${l.icon} ${l.name}: ${l.ceo} (${l.employees} crew)`).join('\n');
    return `Meet the leadership:\n${top}\n\nAsk about a specific line for more!`;
  },
  gallery: () => 'Browse the **Gallery** section above to see all 18+ ship renders across Bloxival, Bloxney, and other lines! Click any ship for full details.',
  destination: () => {
    const dests = data.destinations.slice(0, 6).map(d => `${d.icon} ${d.name} (${d.region})`).join('\n');
    return `Popular destinations:\n${dests}\n\nCheck the **Destinations** section for all 12+ ports of call!`;
  },
  review: () => {
    const top = data.reviews.slice(0, 3);
    return `Recent reviews:\n${top.map(r => `"${r.text}" \u2014 ${r.author} (${'★'.repeat(r.stars)})`).join('\n')}\n\nSee more in the **Reviews** section!`;
  },
  feature: () => {
    const ships = [...data.ships].sort(() => Math.random() - 0.5).slice(0, 3);
    return `Coolest ship features:\n${ships.map(s => `\u2022 ${s.icon} ${s.name}: ${s.features.slice(0, 2).join(', ')}`).join('\n')}\n\nClick any ship card for all features!`;
  },
  best_line: () => {
    const sorted = [...data.lines].sort((a, b) => b.rating - a.rating || b.ships - a.ships);
    const top3 = sorted.slice(0, 3);
    return `Top cruise lines by rating:\n${top3.map((l, i) => `${i + 1}. ${l.icon} ${l.name} \u2014 ${l.rating} stars, ${l.ships} ships`).join('\n')}\n\nBloxney leads with 4.9 stars!`;
  },
  best_ship: () => {
    const sorted = [...data.ships].sort((a, b) => b.decks - a.decks || b.capacity - a.capacity);
    const top3 = sorted.slice(0, 3);
    return `Largest ships in the fleet:\n${top3.map(s => `\u2022 ${s.icon} ${s.name} (${s.decks} decks, ${s.capacity} capacity) \u2014 ${s.line}`).join('\n')}\n\nBloxival Eclipse leads with 22 decks!`;
  },
  roblox: () => 'Your **Roblox username** is needed when booking to confirm your reservation. Double-check the spelling before submitting!',
  help: () => 'I can help with:\n\u2022 Ships & fleet info\n\u2022 Cruise line details\n\u2022 Price comparisons\n\u2022 Booking guidance\n\u2022 Destinations\n\u2022 Reviews & ratings\n\u2022 Ship features & amenities\n\nJust ask naturally!',
  compare: () => {
    const top = data.lines.slice(0, 6);
    return `Quick comparison:\n${top.map(l => `${l.icon} ${l.name}: ${l.ships} ships, ${l.decks} decks, ${l.rating} stars, from $${l.price}`).join('\n')}\n\nFull table in the **Compare** section!`;
  },
  decks: () => {
    const top = [...data.ships].sort((a, b) => b.decks - a.decks).slice(0, 5);
    return `Ships with most decks:\n${top.map(s => `${s.icon} ${s.name} \u2014 ${s.decks} decks (${s.line})`).join('\n')}\n\nBloxival Eclipse leads with 22 decks!`;
  },
  lines: () => `All **${data.lines.length}** cruise lines:\n${data.lines.map(l => `${l.icon} ${l.name} (${l.ships} ships, ${l.rating} stars)`).join('\n')}\n\nWhich one interests you?`,
  ships: () => {
    const byLine = [...new Set(data.ships.map(s => s.line))].map(l => {
      const count = data.ships.filter(s => s.line === l).length;
      return `${l}: ${count} ships`;
    }).join('\n');
    return `**${data.ships.length}** ships total:\n${byLine}\n\nAsk about a specific line or ship for details!`;
  },
  ships_lines: () => {
    const byLine = [...new Set(data.ships.map(s => s.line))].map(l => {
      const names = data.ships.filter(s => s.line === l).map(s => `${s.icon} ${s.name}`).join(', ');
      return `**${l.replace(' Cruise Line', '')}**: ${names}`;
    }).join('\n');
    return `Every ship by line:\n${byLine}`;
  },
  fallback: () => {
    const f = [
      'Not sure about that! Try asking about Bloxival, Bloxney, ships, booking, destinations, or reviews.',
      'Hmm, I don\'t have info on that. Try "Tell me about Bloxney" or "Show me ships"',
      'I didn\'t catch that. I know all about CSS cruise lines, ships, prices, destinations, and more!',
      'Try asking: "Compare Bloxival and Bloxney", "Best cruise lines", or "Show destinations"',
      'You can ask about features, crew, gallery images, reviews, or the best ships in the fleet!',
    ];
    return f[Math.floor(Math.random() * f.length)];
  }
};

/* ─── Chat UI ─── */
const chatToggle = document.getElementById('chatToggle');
const chatPanel = document.getElementById('chatPanel');
const chatClose = document.getElementById('chatClose');
const chatMessages = document.getElementById('chatMessages');
const chatInput = document.getElementById('chatInput');
const chatSend = document.getElementById('chatSend');

chatToggle.addEventListener('click', () => {
  chatPanel.classList.add('open');
  chatToggle.classList.add('open');
  chatInput.focus();
});

chatClose.addEventListener('click', () => {
  chatPanel.classList.remove('open');
  chatToggle.classList.remove('open');
});

function addMessage(text, isUser = false) {
  const div = document.createElement('div');
  div.className = `chat-msg ${isUser ? 'user' : 'bot'}`;
  div.innerHTML = `
    <div class="msg-avatar">${isUser ? '\uD83D\uDC64' : '\u2693'}</div>
    <div class="msg-bubble">${text.replace(/\n/g, '<br>')}</div>
  `;
  chatMessages.appendChild(div);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

function showTyping() {
  const div = document.createElement('div');
  div.className = 'chat-msg bot typing';
  div.id = 'typingInd';
  div.innerHTML = `
    <div class="msg-avatar">\u2693</div>
    <div class="msg-bubble">
      <span class="dot"></span>
      <span class="dot"></span>
      <span class="dot"></span>
    </div>
  `;
  chatMessages.appendChild(div);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

function hideTyping() {
  const el = document.getElementById('typingInd');
  if (el) el.remove();
}

function handleChat() {
  const msg = chatInput.value.trim();
  if (!msg) return;
  addMessage(msg, true);
  chatInput.value = '';
  showTyping();

  setTimeout(() => {
    hideTyping();
    const intent = matchIntent(msg);
    const reply = responses[intent] ? responses[intent]() : responses.fallback();
    addMessage(reply);
  }, 400 + Math.random() * 600);
}

chatSend.addEventListener('click', handleChat);
chatInput.addEventListener('keydown', e => { if (e.key === 'Enter') handleChat(); });

/* ─── Navbar scroll & active links ─── */
window.addEventListener('scroll', () => {
  const nav = document.querySelector('.navbar');
  nav.classList.toggle('scrolled', window.scrollY > 60);

  const links = document.querySelectorAll('.n-link');
  const sections = document.querySelectorAll('section[id]');
  let current = 'home';
  sections.forEach(sec => {
    const top = sec.offsetTop - 200;
    if (window.scrollY >= top) current = sec.id;
  });
  links.forEach(l => {
    l.classList.toggle('active', l.getAttribute('href') === `#${current}`);
  });

  updateScrollProgress();
});

/* ─── Mobile nav ─── */
document.getElementById('navToggle').addEventListener('click', () => {
  document.querySelector('.nav-links').classList.toggle('open');
});

document.querySelectorAll('.n-link').forEach(l => {
  l.addEventListener('click', () => {
    document.querySelector('.nav-links').classList.remove('open');
  });
});

/* ─── Scroll reveal ─── */
function revealOnScroll() {
  ['[data-reveal]','[data-reveal-stagger]','[data-reveal-left]','[data-reveal-right]','[data-reveal-scale]'].forEach(sel => {
    document.querySelectorAll(sel).forEach((el, i) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 80) {
        setTimeout(() => el.classList.add('revealed'), (el.dataset.revealStagger ? i * 80 : 0));
      }
    });
  });
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

/* ─── Particles ─── */
function createParticles() {
  const field = document.getElementById('particleField');
  for (let i = 0; i < 30; i++) {
    const dot = document.createElement('div');
    const size = 1 + Math.random() * 2;
    dot.style.cssText = `
      position: fixed;
      width: ${size}px; height: ${size}px;
      background: rgba(0,180,216,${0.04 + Math.random() * 0.08});
      border-radius: 50%;
      pointer-events: none;
      z-index: 0;
      left: ${Math.random() * 100}%;
      top: ${Math.random() * 100}%;
      animation: float${Math.floor(Math.random() * 3) + 1} ${10 + Math.random() * 20}s ease-in-out infinite;
      animation-delay: ${Math.random() * 10}s;
    `;
    field.appendChild(dot);
  }
}

const styleSheet = document.createElement('style');
styleSheet.textContent = `
  @keyframes float1 { 0%,100% { transform: translateY(0) translateX(0); } 33% { transform: translateY(-30px) translateX(10px); } 66% { transform: translateY(-10px) translateX(-10px); } }
  @keyframes float2 { 0%,100% { transform: translateY(0) translateX(0); } 50% { transform: translateY(-20px) translateX(15px); } }
  @keyframes float3 { 0%,100% { transform: translateY(0) translateX(0); } 40% { transform: translateY(-40px) translateX(-5px); } 80% { transform: translateY(-15px) translateX(10px); } }
`;
document.head.appendChild(styleSheet);

/* ─── Init ─── */
document.addEventListener('DOMContentLoaded', () => {
  initLoading();
  initTheme();
  initParallax();

  renderCruises();
  renderLines();
  populateBookingLines();
  renderShips('all', '');
  buildFilters();
  renderGallery('all');
  renderTimeline();
  renderReviews();
  renderDestinations();
  renderCompare();
  renderCompareBars();
  renderFooter();
  renderSpotlight();
  createParticles();

  startCountdown();

  const today = new Date().toISOString().split('T')[0];
  document.getElementById('departDate').setAttribute('min', today);

  setTimeout(animateCounters, 600);
  revealOnScroll();
});
