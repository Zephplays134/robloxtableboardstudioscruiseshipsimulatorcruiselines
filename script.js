const data = {
  lines: [
    { id: 'bloxival', name: 'Bloxival Cruise Line', icon: '\u2693', color: '#0077b6', desc: 'Luxury & adventure on the high seas with the world\'s most innovative fleet. Bloxival offers premium cruise experiences with world-class entertainment, gourmet dining, and stunning itineraries across every ocean, with award-winning service that keeps guests returning year after year.', price: '2,499', annual: '350K', region: 'Global', ships: 10, decks: 180, founded: '2022', tag: 'bloxival', ceo: 'Captain Blox', hq: 'Bloxport', employees: '4,200', rating: 4.8 },
    { id: 'bloxney', name: 'Bloxney Cruise Line', icon: '\u2728', color: '#f43f5e', desc: 'Magical themed family voyages with enchanting experiences on every deck. Bloxney brings imagination to life with character dining, fantasy suites, immersive storytelling, and spectacular Broadway-caliber productions that transport guests into their favorite stories.', price: '2,899', annual: '310K', region: 'Global', ships: 10, decks: 172, founded: '2023', tag: 'bloxney', ceo: 'Captain Sparkle', hq: 'Dreamport', employees: '3,800', rating: 4.9 },
    { id: 'carnival', name: 'Carnival Cruise Line', icon: '\uD83C\uDF89', color: '#00b4d8', desc: 'Fun-filled ships with non-stop entertainment, massive water parks, comedy clubs, casual dining, vibrant nightlife for all ages, and the famous Carnival atmosphere that has made it the most popular cruise line for families seeking non-stop fun.', price: '1,899', annual: '220K', region: 'Caribbean', ships: 5, decks: 68, founded: '2021', tag: 'other', ceo: 'Captain Fun', hq: 'Miamiport', employees: '1,500', rating: 4.2 },
    { id: 'royal', name: 'Royal Caribbean', icon: '\uD83D\uDC51', color: '#f77f00', desc: 'World-class innovation at sea with massive adventure-filled vessels featuring ice rinks, zip lines, surf simulators, Broadway shows, robotic bartenders, and the most ambitious ship designs ever conceived. Royal Caribbean pushes the boundaries of what is possible at sea.', price: '3,299', annual: '280K', region: 'Global', ships: 5, decks: 80, founded: '2020', tag: 'other', ceo: 'Captain Royal', hq: 'Adventure Bay', employees: '2,100', rating: 4.6 },
    { id: 'norwegian', name: 'Norwegian Cruise Line', icon: '\uD83C\uDF0A', color: '#2d6a4f', desc: 'Freestyle cruising with ultimate flexibility and casual elegance. No fixed dining times, no dress codes \u2014 just pure vacation freedom with world-class entertainment, innovative dining venues, and the relaxed luxury Norwegian is famous for.', price: '2,699', annual: '200K', region: 'Global', ships: 5, decks: 74, founded: '2021', tag: 'other', ceo: 'Captain Free', hq: 'Freedom Port', employees: '1,800', rating: 4.4 },
    { id: 'msc', name: 'MSC Cruises', icon: '\uD83C\uDDEE\uD83C\uDDF9', color: '#d62828', desc: 'Mediterranean elegance with a global reach. Sophisticated ships with European style, world-class cuisine, stunning design, family-friendly amenities, and a commitment to environmental sustainability with next-generation LNG-powered vessels.', price: '2,199', annual: '190K', region: 'Europe / Global', ships: 5, decks: 72, founded: '2022', tag: 'other', ceo: 'Captain Europa', hq: 'Genoa Port', employees: '1,600', rating: 4.3 },
    { id: 'princess', name: 'Princess Cruises', icon: '\uD83D\uDC78', color: '#9b5de5', desc: 'Premium voyages to breathtaking destinations with exceptional service, enrichment programs, intimate ship experiences, world-class dining, and the iconic Movies Under the Stars that has become a signature of the Princess brand.', price: '2,899', annual: '160K', region: 'Global', ships: 4, decks: 56, founded: '2021', tag: 'other', ceo: 'Captain Grace', hq: 'Elegance Bay', employees: '1,200', rating: 4.5 },
    { id: 'disney', name: 'Disney Cruise Line', icon: '\uD83D\uDC2D', color: '#f9c74f', desc: 'Storybook adventures on the high seas with Disney magic, character encounters, themed dining, spectacular entertainment for the whole family, immersive Marvel and Star Wars zones, and the only fireworks displays at sea.', price: '3,999', annual: '180K', region: 'Global', ships: 4, decks: 56, founded: '2023', tag: 'other', ceo: 'Captain Magic', hq: 'Enchanted Port', employees: '1,400', rating: 4.7 },
    { id: 'costa', name: 'Costa Cruises', icon: '\uD83C\uDF0D', color: '#fcbf49', desc: 'Italian-style cruising with vibrant energy, authentic cuisine, warm Mediterranean hospitality on modern vessels, and a festive atmosphere that celebrates the best of Italian culture, music, and gastronomy at sea.', price: '1,999', annual: '150K', region: 'Europe / S. America', ships: 4, decks: 56, founded: '2022', tag: 'other', ceo: 'Captain Italia', hq: 'Veniceport', employees: '1,000', rating: 4.1 },
    { id: 'virgin', name: 'Virgin Voyages', icon: '\uD83D\uDD25', color: '#e63946', desc: 'Adults-only luxury cruises with a modern twist. Redefining the cruise experience with innovative dining, wellness, nightlife, over 20 eateries on every ship, and a rebellious spirit that challenges every convention of traditional cruising.', price: '3,499', annual: '140K', region: 'Caribbean / Europe', ships: 4, decks: 62, founded: '2023', tag: 'other', ceo: 'Captain Rebel', hq: 'Miamiport', employees: '1,300', rating: 4.6 },
    { id: 'celebrity', name: 'Celebrity Cruises', icon: '\u2B50', color: '#457b9d', desc: 'Modern luxury with a focus on design, culinary excellence, destination-rich itineraries aboard sleek contemporary ships, and the revolutionary Magic Carpet concept that redefines the relationship between ship and sea.', price: '3,199', annual: '145K', region: 'Global', ships: 4, decks: 60, founded: '2021', tag: 'other', ceo: 'Captain Luxe', hq: 'Luxury Bay', employees: '1,100', rating: 4.5 },
    { id: 'holland', name: 'Holland America Line', icon: '\uD83C\uDFF4', color: '#1d3557', desc: 'Timeless elegance and traditional seafaring heritage. Mid-sized ships offering enrichment, exploration, refined experiences, world-class music programming, and access to smaller ports that larger ships cannot reach.', price: '2,399', annual: '120K', region: 'Alaska / Global', ships: 4, decks: 54, founded: '2020', tag: 'other', ceo: 'Captain Heritage', hq: 'Seattleport', employees: '900', rating: 4.3 },
    { id: 'crystal', name: 'Crystal Cruises', icon: '\uD83D\uDC8E', color: '#e0b1ff', desc: 'Ultra-luxury cruising with the highest staff-to-guest ratio, all-inclusive amenities, world-renowned service, and exceptionally spacious ships designed for sophisticated travelers.', price: '4,299', ships: 3, decks: 40, founded: '2023', tag: 'other', ceo: 'Captain Crystal', hq: 'Luxury Port', employees: '800', rating: 4.8, annual: '80K', region: 'Global' },
    { id: 'seabourn', name: 'Seabourn Cruise Line', icon: '\uD83C\uDF0A', color: '#00b4d8', desc: 'Intimate ultra-luxury expeditions aboard small ships with personalized service, gourmet dining, and unparalleled access to remote and exotic destinations worldwide.', price: '4,899', ships: 3, decks: 36, founded: '2023', tag: 'other', ceo: 'Captain Intimate', hq: 'Exclusive Bay', employees: '600', rating: 4.7, annual: '60K', region: 'Expedition / Global' },
    { id: 'oceania', name: 'Oceania Cruises', icon: '\uD83C\uDF7D\uFE0F', color: '#e76f51', desc: 'Culinary-focused cruising with the finest cuisine at sea. Mid-sized ships offering destination-rich itineraries, enrichment programs, and a relaxed yet refined onboard atmosphere.', price: '3,799', ships: 3, decks: 40, founded: '2022', tag: 'other', ceo: 'Captain Gourmet', hq: 'Culinary Port', employees: '700', rating: 4.5, annual: '75K', region: 'Global' },
    { id: 'regent', name: 'Regent Seven Seas', icon: '\uD83C\uDF1F', color: '#ffd60a', desc: 'The most inclusive luxury cruise line \u2014 everything from suites to shore excursions is included. All-suite accommodations with butler service and gourmet dining.', price: '5,499', ships: 3, decks: 38, founded: '2024', tag: 'other', ceo: 'Captain Regal', hq: 'Regal Port', employees: '650', rating: 4.8, annual: '55K', region: 'Global' },
    { id: 'azamara', name: 'Azamara Cruises', icon: '\uD83C\uDF0D', color: '#2a9d8f', desc: 'Destination-immersive cruising with longer port stays, overnight calls, and cultural immersion. Small ships designed for travelers who want to deeply explore each destination.', price: '2,999', ships: 3, decks: 36, founded: '2023', tag: 'other', ceo: 'Captain Explore', hq: 'Discovery Port', employees: '550', rating: 4.4, annual: '50K', region: 'Global' },
    { id: 'windstar', name: 'Windstar Cruises', icon: '\u26F5', color: '#0077b6', desc: 'Small ship sailing with an intimate, casual atmosphere. Motor and sailing yachts that access hidden harbors and small ports that larger ships cannot reach.', price: '2,699', ships: 2, decks: 24, founded: '2024', tag: 'other', ceo: 'Captain Sail', hq: 'Windward Port', employees: '400', rating: 4.3, annual: '35K', region: 'Mediterranean / Caribbean' },
    { id: 'silversea', name: 'Silversea Cruises', icon: '\u2B50', color: '#9b5de5', desc: 'All-inclusive ultra-luxury with the smallest ships and the largest suites. Expedition capabilities with Zodiac landings, butler service, and the finest Champagne and caviar at sea.', price: '5,999', ships: 3, decks: 34, founded: '2024', tag: 'other', ceo: 'Captain Silver', hq: 'Silverport', employees: '500', rating: 4.7, annual: '40K', region: 'Expedition / Global' },
    { id: 'cunard', name: 'Cunard Line', icon: '\uD83D\uDEC4', color: '#1d3557', desc: 'Iconic ocean liner tradition with the legendary Transatlantic Crossing. White Star Service, grand ballrooms, afternoon tea, and the most storied name in ocean travel.', price: '3,599', ships: 3, decks: 44, founded: '2020', tag: 'other', ceo: 'Captain Heritage', hq: 'Southampton Port', employees: '900', rating: 4.5, annual: '100K', region: 'Transatlantic / Global' },
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
    { name: 'Bloxival Majesty', line: 'Bloxival Cruise Line', icon: '\uD83D\uDEA2', desc: 'The grandest Bloxival ship ever built with a royal court theater, crystal promenade, sky deck observatory, luxury penthouses, and an exclusive VIP enclave with private butler service.', decks: 24, capacity: 5800, year: 2026, features: ['Royal Court Theater', 'Crystal Promenade', 'Sky Deck Observatory', 'VIP Enclave', 'Butler Service', 'Grand Ballroom', 'Gourmet Market'] },
    { name: 'Bloxival Pioneer', line: 'Bloxival Cruise Line', icon: '\uD83D\uDEA2', desc: 'Expedition-class vessel designed for polar and remote destination cruising with ice-strengthened hull, Zodiac fleet, onboard research lab, heated observation dome, and expedition team.', decks: 14, capacity: 1800, year: 2026, features: ['Ice-Strengthened Hull', 'Zodiac Fleet', 'Research Lab', 'Heated Observation Dome', 'Expedition Team', 'Polar Suites', 'Adventure Center'] },
    { name: 'Bloxival Crown', line: 'Bloxival Cruise Line', icon: '\uD83D\uDEA2', desc: 'Ultra-premium boutique ship with only 200 suites, private butler for every guest, a two-story spa sanctuary, Michelin-starred dining concepts, and an exclusive champagne bar with ocean views.', decks: 12, capacity: 800, year: 2026, features: ['All-Suite Accommodation', 'Personal Butler', 'Spa Sanctuary', 'Michelin Dining', 'Champagne Bar', 'Private Lounge', 'Concierge Service'] },
    { name: 'Bloxney Fantasy', line: 'Bloxney Cruise Line', icon: '\u26F4\uFE0F', desc: 'A floating dreamscape with enchanted forest decks, fairy tale castles, a magical carousel, interactive storybook adventures, and whimsical dining experiences that change with every visit.', decks: 20, capacity: 4800, year: 2026, features: ['Enchanted Forest', 'Fairy Tale Castle', 'Magical Carousel', 'Storybook Adventure', 'Whimsical Dining', 'Fantasy Pool', 'Dream Suite'] },
    { name: 'Bloxney Spirit', line: 'Bloxney Cruise Line', icon: '\u26F4\uFE0F', desc: 'Celebration-themed ship with festival zones, parade decks, costume workshops, a grand carnival ballroom, immersive cultural performances, and the most spectacular party at sea.', decks: 18, capacity: 4400, year: 2026, features: ['Festival Zone', 'Parade Deck', 'Costume Workshop', 'Carnival Ballroom', 'Cultural Performances', 'Party Deck', 'Fireworks Lounge'] },
    { name: 'Bloxney Destiny', line: 'Bloxney Cruise Line', icon: '\u26F4\uFE0F', desc: 'Adventure-filled ship with an indoor rainforest, treetop ropes course, waterfall grotto, starlit amphitheater, hero training academy, and an immersive jungle expedition experience.', decks: 16, capacity: 4000, year: 2026, features: ['Indoor Rainforest', 'Treetop Course', 'Waterfall Grotto', 'Starlit Amphitheater', 'Hero Academy', 'Jungle Expedition', 'Adventure Dining'] },
    { name: 'Carnival Sunrise', line: 'Carnival Cruise Line', icon: '\uD83D\uDEA2', desc: 'A brand-new fun ship with the biggest water park at sea, a thrilling roller coaster, family harbor cabins, Guy Fieri\'s burger joint, and the ultimate pool party experience.', decks: 16, capacity: 4200, year: 2025, features: ['Mega Water Park', 'Roller Coaster', 'Family Harbor', 'Guy\'s Burgers', 'Pool Party Deck', 'Comedy Club', 'Arcade Zone'] },
    { name: 'Carnival Jubilee', line: 'Carnival Cruise Line', icon: '\uD83D\uDEA2', desc: 'Celebration-class ship with a grand atrium, retro arcade, tiki bar, seafood market, piano lounge, and an expansive serenity adults-only retreat with ocean views.', decks: 16, capacity: 4400, year: 2025, features: ['Grand Atrium', 'Retro Arcade', 'Tiki Bar', 'Seafood Market', 'Piano Lounge', 'Serenity Retreat', 'Carnival Kitchen'] },
    { name: 'Royal Voyager', line: 'Royal Caribbean', icon: '\uD83D\uDEA2', desc: 'Revolutionary ship featuring the first at-sea amusement park with a full-sized ferris wheel, aqua theater, escape rooms, laser tag arena, and a multi-story adventure zone.', decks: 22, capacity: 6200, year: 2025, features: ['Ferris Wheel', 'Aqua Theater', 'Escape Room', 'Laser Tag', 'Adventure Zone', 'Royal Suite', 'Wonderland Dining'] },
    { name: 'Royal Quest', line: 'Royal Caribbean', icon: '\uD83D\uDEA2', desc: 'Expedition-focused vessel with deep-sea submersibles, underwater viewing pods, marine biology center, helicopter landing pad, and luxury expedition suites for the ultimate adventure.', decks: 18, capacity: 3800, year: 2026, features: ['Deep-Sea Submersible', 'Underwater Pods', 'Marine Center', 'Helipad', 'Expedition Suites', 'Polar Lounge', 'Submersible Dock'] },
    { name: 'NCL Viva', line: 'Norwegian Cruise Line', icon: '\uD83D\uDEA2', desc: 'Next-generation Prima-class ship with expanded infinity decks, a three-deck go-kart track, outdoor sculpture garden, oceanwalk promenade, and the largest luxury suite complex in the NCL fleet.', decks: 18, capacity: 4000, year: 2025, features: ['Go-Kart Track', 'Infinity Decks', 'Sculpture Garden', 'Oceanwalk', 'Suite Complex', 'Indulge Food Hall', 'Speedway'] },
    { name: 'NCL Aqua', line: 'Norwegian Cruise Line', icon: '\uD83D\uDEA2', desc: 'Waterfront-focused vessel with stunning ocean views from every public space, a two-story spa, outdoor dining promenade, revolutionary thermal suite, and the most open deck space at sea.', decks: 18, capacity: 4200, year: 2026, features: ['Waterfront Views', 'Two-Story Spa', 'Outdoor Promenade', 'Thermal Suite', 'Open Deck Space', 'Aqua Park', 'Teppanyaki Dining'] },
    { name: 'MSC World America', line: 'MSC Cruises', icon: '\uD83D\uDEA2', desc: 'MSC\'s largest ship with a stunning world promenade, seven distinct districts, a sprawling aquapark, Broadway-style theater, and the most advanced environmental technology in the fleet.', decks: 20, capacity: 5200, year: 2025, features: ['World Promenade', 'Seven Districts', 'Mega Aquapark', 'Broadway Theater', 'Green Tech', 'MSC Yacht Club', 'Panoramic Lounge'] },
    { name: 'MSC World Asia', line: 'MSC Cruises', icon: '\uD83D\uDEA2', desc: 'Asian-inspired ship with a zen garden, bamboo relaxation areas, authentic Asian cuisine venues, a tea ceremony lounge, and feng shui design throughout the vessel.', decks: 20, capacity: 5000, year: 2026, features: ['Zen Garden', 'Bamboo Lounge', 'Asian Cuisine', 'Tea Ceremony', 'Feng Shui Design', 'Sky Pool', 'Sushi Bar'] },
    { name: 'Princess Sapphire', line: 'Princess Cruises', icon: '\uD83D\uDEA2', desc: 'Elegant ship with a stunning glass-domed atrium, enhanced Movies Under the Stars with 4K projection, a culinary institute, and the most luxurious suites in the Princess fleet.', decks: 18, capacity: 4200, year: 2025, features: ['Glass Atrium', 'Movies Under Stars', 'Culinary Institute', 'Luxury Suites', 'Sanctuary Deck', 'Vines Wine Bar', 'Ocean Terrace'] },
    { name: 'Princess Diamond', line: 'Princess Cruises', icon: '\uD83D\uDEA2', desc: 'Premium mid-sized ship designed for world cruising with an around-the-world lounge, global cuisine marketplace, enrichment center, and a stunning two-story library and internet cafe.', decks: 16, capacity: 3600, year: 2026, features: ['World Cruise Lounge', 'Global Cuisine', 'Enrichment Center', 'Two-Story Library', 'International Cafe', 'Art Gallery', 'Destination Cinema'] },
    { name: 'Disney Adventure', line: 'Disney Cruise Line', icon: '\uD83D\uDEA2', desc: 'Hero-themed ship with Marvel Superhero zones, a Wakanda-inspired pool deck, Avengers training academy, Stark Industries tech lab, and spectacular superhero shows at sea.', decks: 16, capacity: 4500, year: 2025, features: ['Marvel Zone', 'Wakanda Pool', 'Avengers Training', 'Stark Lab', 'Superhero Show', 'Hero Dining', 'Comic Gallery'] },
    { name: 'Disney Destiny', line: 'Disney Cruise Line', icon: '\uD83D\uDEA2', desc: 'Fate-themed ship with a grand ballroom inspired by Beauty and the Beast, a mystical fortunes lounge, enchanted art gallery, villain-themed restaurant, and fairy godmother makeover studio.', decks: 16, capacity: 4500, year: 2026, features: ['Grand Ballroom', 'Fortunes Lounge', 'Enchanted Gallery', 'Villain Restaurant', 'Makeover Studio', 'Royal Suite', 'Sorcerer\'s Workshop'] },
    { name: 'Costa Firenze', line: 'Costa Cruises', icon: '\uD83D\uDEA2', desc: 'A tribute to the Renaissance city with Florentine-inspired design, Tuscan cooking school, Italian art gallery, piazza central with nightly entertainment, and authentic regional cuisine.', decks: 16, capacity: 3800, year: 2025, features: ['Florentine Design', 'Tuscan Cooking', 'Italian Gallery', 'Piazza Central', 'Regional Cuisine', 'Squok Club', 'Gelateria'] },
    { name: 'Costa Venezia', line: 'Costa Cruises', icon: '\uD83D\uDEA2', desc: 'Venice-inspired ship with a grand canal promenade, St. Mark\'s Square atrium, gondola-themed lounge, Murano glass gallery, authentic Venetian dining, and a carnival masquerade ballroom.', decks: 16, capacity: 4000, year: 2026, features: ['Canal Promenade', 'St. Mark\'s Atrium', 'Gondola Lounge', 'Murano Gallery', 'Venetian Dining', 'Masquerade Ball', 'Bridge of Sights'] },
    { name: 'Virgin Brilliant', line: 'Virgin Voyages', icon: '\uD83D\uDEA2', desc: 'The boldest Virgin ship yet with a rooftop nightclub under the stars, a two-story tattoo parlor, luxury wellness spa, outdoor movie amphitheater, and the most dining variety in the fleet.', decks: 18, capacity: 4000, year: 2025, features: ['Rooftop Club', 'Tattoo Parlor', 'Wellness Spa', 'Outdoor Cinema', 'Dining Variety', 'Gym & Studio', 'The Dock'] },
    { name: 'Virgin Bold', line: 'Virgin Voyages', icon: '\uD83D\uDEA2', desc: 'Adventure-focused adults-only ship with a racing simulator, virtual reality arena, extreme sports deck, drag show theater, and a speakeasy lounge hidden behind a vintage arcade.', decks: 18, capacity: 4200, year: 2026, features: ['Racing Simulator', 'VR Arena', 'Extreme Deck', 'Drag Show', 'Speakeasy Lounge', 'Bold Suites', 'Test Kitchen'] },
    { name: 'Celebrity Ascent', line: 'Celebrity Cruises', icon: '\uD83D\uDEA2', desc: 'The latest Edge-series vessel with an expanded Magic Carpet, redesigned infinite verandas, a stunning rooftop garden, luxurious thermal suites, and the finest cuisine from Michelin-starred chefs.', decks: 18, capacity: 4200, year: 2025, features: ['Magic Carpet Plus', 'Infinite Veranda', 'Rooftop Garden', 'Thermal Suite', 'Michelin Dining', 'Sunset Bar', 'Eden Lounge'] },
    { name: 'Celebrity Xcel', line: 'Celebrity Cruises', icon: '\uD83D\uDEA2', desc: 'Revolutionary ship with a glass-enclosed solarium, a futuristic wellness center with AI-powered fitness, hydroponic garden-to-table dining, and next-generation luxury accommodations.', decks: 18, capacity: 4400, year: 2026, features: ['Glass Solarium', 'AI Wellness', 'Hydroponic Dining', 'Next-Gen Suites', 'Virtual Views', 'The Retreat', 'Design Studio'] },
    { name: 'HAL Amsterdam', line: 'Holland America Line', icon: '\uD83D\uDEA2', desc: 'Pinnacle-class ship inspired by Dutch heritage with a stunning art collection, music walk with multiple live venues, exploratory culinary center, and traditional afternoon tea in the oceanview lounge.', decks: 16, capacity: 3600, year: 2025, features: ['Dutch Heritage', 'Art Collection', 'Music Walk', 'Culinary Center', 'Afternoon Tea', 'World Stage', 'Explorations Cafe'] },
    { name: 'HAL Oosterdam', line: 'Holland America Line', icon: '\uD83D\uDEA2', desc: 'Mid-sized ship offering grand world voyages with enrichment lectures, a digital workshop, expansive libraries, cultural performances, and a peaceful retreat for mature travelers seeking discovery.', decks: 14, capacity: 3100, year: 2026, features: ['World Voyages', 'Enrichment Lectures', 'Digital Workshop', 'Libraries', 'Cultural Shows', 'Retreat Spa', 'Alaska Cruising'] },
    { name: 'Crystal Serenity', line: 'Crystal Cruises', icon: '\uD83D\uDEA2', desc: 'Crystal\'s flagship with the highest space-per-guest ratio in the industry,奢华的 all-suite accommodations, world-class entertainment, and the most personalized service at sea.', decks: 14, capacity: 980, year: 2023, features: ['All-Suite', 'Space Ratio', 'Personalized Service', 'Fine Dining', 'Entertainment', 'Spa', 'Paddle Tennis'] },
    { name: 'Crystal Endeavor', line: 'Crystal Cruises', icon: '\uD83D\uDEA2', desc: 'Ultra-luxury expedition ship designed for remote adventure with ice-class hull, two helicopters, a submersible, and luxury expedition suites with butler service.', decks: 10, capacity: 600, year: 2024, features: ['Ice-Class Hull', 'Helicopter', 'Submersible', 'Expedition Suites', 'Butler Service', 'Zodiac Fleet', 'Expedition Team'] },
    { name: 'Crystal Symphony', line: 'Crystal Cruises', icon: '\uD83D\uDEA2', desc: 'Intimate luxury ship with a Forbes five-star spa, specialty restaurants by Michelin-starred chefs, casino, and a stunning observation lounge with panoramic ocean views.', decks: 12, capacity: 920, year: 2024, features: ['Five-Star Spa', 'Michelin Dining', 'Casino', 'Observation Lounge', 'Boutique Shops', 'Computer University', 'Fitness Center'] },
    { name: 'Seabourn Sojourn', line: 'Seabourn Cruise Line', icon: '\uD83D\uDEA2', desc: 'Intimate luxury yacht with all-inclusive dining, open bars, a stunning spa, and an unparalleled service ratio of almost one crew member per guest for the most pampered experience at sea.', decks: 12, capacity: 600, year: 2023, features: ['All-Inclusive', 'Open Bars', 'Spa', 'Service Ratio', 'Veranda Suites', 'Gourmet Dining', 'Marina Platform'] },
    { name: 'Seabourn Venture', line: 'Seabourn Cruise Line', icon: '\uD83D\uDEA2', desc: 'Expedition vessel combining ultra-luxury with adventure, featuring two submarines, 24 Zodiacs, kayaks, a discovery center, and remote destination access with all the comforts of Seabourn.', decks: 10, capacity: 504, year: 2024, features: ['Submarines', 'Zodiac Fleet', 'Kayaks', 'Discovery Center', 'Expedition', 'Observation Lounge', 'Spa'] },
    { name: 'Seabourn Pursuit', line: 'Seabourn Cruise Line', icon: '\uD83D\uDEA2', desc: 'Sister ship to Venture with enhanced expedition capabilities, a two-level spa, expedition lounge, and access to the world\'s most remote waters in extraordinary comfort and style.', decks: 10, capacity: 504, year: 2025, features: ['Expedition Pro', 'Two-Level Spa', 'Expedition Lounge', 'Remote Access', 'Butler Service', 'Pool Deck', 'Specialty Dining'] },
    { name: 'Oceania Vista', line: 'Oceania Cruises', icon: '\uD83D\uDEA2', desc: 'The first Allura-class ship with a stunning Bon Appetit Culinary Center, artist loft, spa with thermal suites, and the most expansive standard veranda staterooms in the industry.', decks: 14, capacity: 1200, year: 2024, features: ['Culinary Center', 'Artist Loft', 'Thermal Spa', 'Veranda Staterooms', 'Grand Dining', 'Polo Grill', 'Waves Grill'] },
    { name: 'Oceania Marina', line: 'Oceania Cruises', icon: '\uD83D\uDEA2', desc: 'Culinary-focused mid-sized ship with a hands-on cooking school, wine cellar with 10,000 bottles, a two-story library, and destination-inspired menus crafted by master chefs.', decks: 14, capacity: 1250, year: 2023, features: ['Cooking School', 'Wine Cellar', 'Two-Story Library', 'Destination Menus', 'Canyon Ranch Spa', 'Martini Bar', 'Barista Cafe'] },
    { name: 'Oceania Allura', line: 'Oceania Cruises', icon: '\uD83D\uDEA2', desc: 'The newest Oceania ship with reimagined public spaces, a gourmet market buffet with live stations, expanded spa facilities, and the finest culinary experiences in the Oceania fleet.', decks: 14, capacity: 1250, year: 2026, features: ['Gourmet Market', 'Live Stations', 'Expanded Spa', 'Reimagined Spaces', 'Specialty Dining', 'Aquamar Spa', 'Library'] },
    { name: 'Regent Explorer', line: 'Regent Seven Seas', icon: '\uD83D\uDEA2', desc: 'The most inclusive ship ever built with all-suite, all-balcony accommodations, complimentary unlimited shore excursions, fine wines and spirits, pre-cruise hotel packages, and gratuities included.', decks: 14, capacity: 1250, year: 2024, features: ['All-Inclusive', 'All-Suite', 'Unlimited Excursions', 'Fine Wines', 'Pre-Cruise Hotel', 'Butler Service', 'Prime 7 Steakhouse'] },
    { name: 'Regent Splendor', line: 'Regent Seven Seas', icon: '\uD83D\uDEA2', desc: 'The epitome of luxury with the largest standard suites at sea, a three-story theater, 13 unique dining venues, a stunning spa, and the most opulent public spaces ever designed for cruising.', decks: 14, capacity: 1100, year: 2025, features: ['Largest Suites', 'Three-Story Theater', '13 Dining Venues', 'Opulent Design', 'Canyon Ranch Spa', 'Observation Lounge', 'Connoisseur Club'] },
    { name: 'Regent Grandeur', line: 'Regent Seven Seas', icon: '\uD83D\uDEA2', desc: 'The newest Regent ship featuring a two-story Panorama Lounge, six specialty restaurants, the largest spa in the fleet, and cutting-edge design that sets a new standard for ultra-luxury cruising.', decks: 14, capacity: 1100, year: 2026, features: ['Panorama Lounge', 'Specialty Dining', 'Grand Spa', 'Cutting-Edge Design', 'All Balcony', 'Pacific Rim', 'Chartreuse'] },
    { name: 'Azamara Journey', line: 'Azamara Cruises', icon: '\uD83D\uDEA2', desc: 'Destination-focused ship with extended port times, overnight stays, and immersive cultural experiences. Intimate enough to dock in city centers and small harbors for true exploration.', decks: 10, capacity: 680, year: 2023, features: ['Extended Ports', 'Overnight Stays', 'Cultural Immersion', 'City Center Docking', 'White Nights', 'AzAmazing Evening', 'Windows Cafe'] },
    { name: 'Azamara Pursuit', line: 'Azamara Cruises', icon: '\uD83D\uDEA2', desc: 'Sister ship to Journey with enhanced destination immersion, a specialty dining venue, refreshed staterooms, and the same intimate access to the world\'s most fascinating ports.', decks: 10, capacity: 680, year: 2024, features: ['Destination Focus', 'Specialty Dining', 'Refreshed Rooms', 'Intimate Ports', 'Living Room Lounge', 'Prime C', 'Aqualina'] },
    { name: 'Azamara Onward', line: 'Azamara Cruises', icon: '\uD83D\uDEA2', desc: 'The newest Azamara ship with a modernized design, expanded spa facilities, a new pool deck, and continued commitment to destination-immersive cruising with longer stays in port.', decks: 10, capacity: 684, year: 2025, features: ['Modern Design', 'Expanded Spa', 'New Pool Deck', 'Port Immersion', 'Discoveries Dining', 'Mosaic Cafe', 'Cabaret Lounge'] },
    { name: 'Windstar Star Breeze', line: 'Windstar Cruises', icon: '\uD83D\uDEA2', desc: 'All-suite sailing yacht with 50% more space after stretching, a pool with retractable roof, new dining venues, and the ability to access hidden coves and small harbors worldwide.', decks: 8, capacity: 312, year: 2024, features: ['All-Suite Yacht', 'Retractable Pool', 'Sailing Experience', 'Hidden Harbors', 'Water Sports Platform', 'AmphorA Dining', 'The Veranda'] },
    { name: 'Windstar Wind Spirit', line: 'Windstar Cruises', icon: '\uD83D\uDEA2', desc: 'True sailing cruise ship with four majestic masts, only 148 guests, exceptional crew-to-guest ratio, and the ability to sail directly into the heart of the world\'s most beautiful destinations.', decks: 6, capacity: 296, year: 2023, features: ['Four Masts', 'Intimate Capacity', 'Sailing Ship', 'Direct Docking', 'Water Platform', 'Star Lounge', 'Outdoor Dining'] },
    { name: 'Silversea Moon', line: 'Silversea Cruises', icon: '\uD83D\uDEA2', desc: 'All-suite, all-veranda luxury ship with a beautiful pool deck, Zagat-rated dining, butler service for every suite, and an elegant atmosphere that defines the ultra-luxury segment.', decks: 14, capacity: 596, year: 2023, features: ['All-Suite', 'All-Veranda', 'Butler Service', 'Zagat Dining', 'Pool Deck', 'Spa', 'Connoisseur Lounge'] },
    { name: 'Silversea Dawn', line: 'Silversea Cruises', icon: '\uD83D\uDEA2', desc: 'Elegant ultra-luxury ship with an expanded Otium spa, eight dining venues including S.A.L.T. Kitchen, and the most spacious standard suites in the Silversea fleet.', decks: 14, capacity: 596, year: 2025, features: ['Otium Spa', 'S.A.L.T. Kitchen', 'Eight Dining', 'Spacious Suites', 'Observation Lounge', 'Dolce Vita', 'Arts Cafe'] },
    { name: 'Silversea Ray', line: 'Silversea Cruises', icon: '\uD83D\uDEA2', desc: 'The newest Silversea ship featuring a stunning S.A.L.T. Lab culinary experience, a forward-facing observation lounge, the largest spa suites at sea, and next-generation ultra-luxury design.', decks: 14, capacity: 596, year: 2026, features: ['S.A.L.T. Lab', 'Observation Lounge', 'Spa Suites', 'Next-Gen Luxury', 'Pool & Whirlpools', 'La Terrazza', 'Silver Note'] },
    { name: 'Queen Mary 2', line: 'Cunard Line', icon: '\uD83D\uDEA2', desc: 'The only true ocean liner in service, carrying on the transatlantic tradition with elegance, grand ballrooms, afternoon tea, planetarium, and the most refined experience on the Atlantic.', decks: 16, capacity: 2690, year: 2020, features: ['Ocean Liner', 'Transatlantic', 'Grand Ballroom', 'Afternoon Tea', 'Planetarium', 'Kings Court', 'Commodore Club'] },
    { name: 'Queen Victoria', line: 'Cunard Line', icon: '\uD83D\uDEA2', desc: 'Mid-sized Cunard liner with traditional British elegance, a stunning two-story library, royal court theater, thermal suite, and the grandest afternoon tea service at sea.', decks: 14, capacity: 2080, year: 2021, features: ['British Elegance', 'Two-Story Library', 'Royal Court', 'Thermal Suite', 'Afternoon Tea', 'Lido Pool', 'Yacht Club'] },
    { name: 'Queen Anne', line: 'Cunard Line', icon: '\uD83D\uDEA2', desc: 'Cunard\'s newest liner blending tradition with modernity, featuring a stunning art collection, wellness center, multiple dining options from pub to gourmet, and the signature White Star Service.', decks: 16, capacity: 2500, year: 2024, features: ['Tradition & Modern', 'Art Collection', 'Wellness Center', 'White Star Service', 'Panorama Pool', 'Dining Variety', 'Britannia Club'] },
  ],
  crew: [
    { name: 'Captain Blox', role: 'CEO & Founder', icon: '\uD83D\uDC51', bio: 'The visionary behind Bloxival Cruise Line. Captain Blox has sailed every ocean and designed the most innovative ships in CSS history.', line: 'Bloxival Cruise Line' },
    { name: 'Captain Sparkle', role: 'CEO & Creative Director', icon: '\u2728', bio: 'The imagination behind Bloxney\'s magical experiences. Captain Sparkle brings storybook dreams to life on the high seas.', line: 'Bloxney Cruise Line' },
    { name: 'Captain Fun', role: 'Chief Entertainment Officer', icon: '\uD83C\uDF89', bio: 'Keeping the party going 24/7 across the Carnival fleet. Captain Fun knows every game, show, and dance move on the ocean.', line: 'Carnival Cruise Line' },
    { name: 'Captain Royal', role: 'Adventure Architect', icon: '\uD83D\uDC51', bio: 'Designer of the world\'s most innovative ships. Captain Royal pushes the limits of what\'s possible at sea with bold new concepts.', line: 'Royal Caribbean' },
    { name: 'Captain Free', role: 'Freedom Officer', icon: '\uD83C\uDF0A', bio: 'Champion of freestyle cruising. Captain Free ensures every guest enjoys ultimate flexibility and casual elegance aboard NCL.', line: 'Norwegian Cruise Line' },
    { name: 'Captain Europa', role: 'Mediterranean Director', icon: '\uD83C\uDDEE\uD83C\uDDF9', bio: 'Bringing European elegance and style to the global stage. Captain Europa oversees MSC\'s growing worldwide fleet.', line: 'MSC Cruises' },
    { name: 'Captain Grace', role: 'Hospitality Director', icon: '\uD83D\uDC78', bio: 'Setting the standard for premium service and enrichment. Captain Grace ensures every Princess voyage is unforgettable.', line: 'Princess Cruises' },
    { name: 'Captain Magic', role: 'Storytelling Officer', icon: '\uD83D\uDC2D', bio: 'Weaving Disney magic into every voyage. Captain Magic creates enchanting experiences for guests of all ages.', line: 'Disney Cruise Line' },
    { name: 'Captain Italia', role: 'Italian Hospitality Director', icon: '\uD83C\uDF0D', bio: 'Sharing the warmth of Italian culture at sea. Captain Italia brings authentic Mediterranean flair to Costa Cruises.', line: 'Costa Cruises' },
    { name: 'Captain Rebel', role: 'Innovation Officer', icon: '\uD83D\uDD25', bio: 'Challenging every convention of cruising. Captain Rebel designs bold adult-only experiences that redefine luxury travel.', line: 'Virgin Voyages' },
    { name: 'Captain Luxe', role: 'Design Director', icon: '\u2B50', bio: 'Curating modern luxury experiences with cutting-edge design. Captain Luxe ensures Celebrity remains at the forefront of style.', line: 'Celebrity Cruises' },
    { name: 'Captain Heritage', role: 'Traditions Officer', icon: '\uD83C\uDFF4', bio: 'Preserving the timeless elegance of seafaring tradition. Captain Heritage guides Holland America\'s refined voyages.', line: 'Holland America Line' },
    { name: 'Captain Crystal', role: 'Ultra-Luxury Director', icon: '\uD83D\uDC8E', bio: 'Delivering the highest standards of luxury with impeccable service. Captain Crystal leads Crystal\'s award-winning fleet.', line: 'Crystal Cruises' },
    { name: 'Captain Intimate', role: 'Expedition Leader', icon: '\uD83C\uDF0A', bio: 'Expert in small-ship expeditions to the world\'s most remote destinations. Captain Intimate unlocks hidden gems for Seabourn.', line: 'Seabourn Cruise Line' },
    { name: 'Captain Gourmet', role: 'Culinary Director', icon: '\uD83C\uDF7D\uFE0F', bio: 'A world-renowned chef who oversees Oceania\'s culinary program. Captain Gourmet ensures every meal is a masterpiece.', line: 'Oceania Cruises' },
    { name: 'Captain Regal', role: 'Inclusion Officer', icon: '\uD83C\uDF1F', bio: 'Champion of all-inclusive ultra-luxury. Captain Regal ensures every Regent guest enjoys the finest everything, all included.', line: 'Regent Seven Seas' },
    { name: 'Captain Explore', role: 'Immersion Director', icon: '\uD83C\uDF0D', bio: 'Passionate about destination-immersive travel. Captain Explore designs extended port stays for true cultural connection.', line: 'Azamara Cruises' },
    { name: 'Captain Sail', role: 'Wind Navigation Officer', icon: '\u26F5', bio: 'A master sailor who navigates Windstar\'s fleet into hidden harbors. Captain Sail believes the journey is the destination.', line: 'Windstar Cruises' },
    { name: 'Captain Silver', role: 'Ultra-Luxury Expedition Lead', icon: '\u2B50', bio: 'Leading Silversea\'s expedition program with the finest Champagne and Zodiac landings. Captain Silver combines adventure with elegance.', line: 'Silversea Cruises' },
    { name: 'Captain Cunard', role: 'Ocean Liner Historian', icon: '\uD83D\uDEC4', bio: 'Keeping the grand tradition of ocean liner travel alive. Captain Cunard commands the majestic fleet with British pride.', line: 'Cunard Line' },
  ],
  awards: [
    { title: 'Best Cruise Line Innovation', desc: 'Awarded to Bloxival Cruise Line for revolutionary ship designs including the Eclipse\'s underwater lounge and Odyssey\'s world cruiser concept.', icon: '\uD83C\uDFC6', year: '2025', line: 'Bloxival Cruise Line' },
    { title: 'Most Magical Family Experience', desc: 'Bloxney Cruise Line recognized for creating the most enchanting family voyages with character dining, themed decks, and immersive storytelling.', icon: '\u2728', year: '2025', line: 'Bloxney Cruise Line' },
    { title: 'Best Value Cruise Line', desc: 'Carnival Cruise Line wins for affordable family fun with the highest guest satisfaction in the budget-friendly segment.', icon: '\uD83D\uDCB0', year: '2024', line: 'Carnival Cruise Line' },
    { title: 'Largest Ship of the Year', desc: 'Royal Odyssey recognized as the most innovative mega-ship with neighborhood concepts and the tallest slide at sea.', icon: '\uD83D\uDEA2', year: '2024', line: 'Royal Caribbean' },
    { title: 'Best Dining Experience', desc: 'Norwegian Cruise Line wins for freestyle dining innovation, offering the most diverse culinary options with no fixed schedules.', icon: '\uD83C\uDF7D\uFE0F', year: '2024', line: 'Norwegian Cruise Line' },
    { title: 'Environmental Excellence Award', desc: 'MSC Cruises recognized for leadership in sustainable cruising with LNG-powered ships and advanced environmental technology.', icon: '\uD83C\uDF31', year: '2025', line: 'MSC Cruises' },
    { title: 'Best Service Award', desc: 'Princess Cruises honored for exceptional hospitality, enrichment programs, and the signature Princess service that defines premium cruising.', icon: '\uD83D\uDC78', year: '2024', line: 'Princess Cruises' },
    { title: 'Best Family Entertainment', desc: 'Disney Cruise Line wins for spectacular Broadway-style shows, character encounters, and the only fireworks displays at sea.', icon: '\uD83C\uDF1F', year: '2025', line: 'Disney Cruise Line' },
    { title: 'Best Italian Cruise Experience', desc: 'Costa Cruises recognized for authentic Italian cuisine, vibrant atmosphere, and warm Mediterranean hospitality on every voyage.', icon: '\uD83C\uDF0D', year: '2024', line: 'Costa Cruises' },
    { title: 'Most Innovative Design', desc: 'Virgin Voyages awarded for bold adult-only concept with over 20 dining venues, wellness focus, and transformative entertainment.', icon: '\uD83D\uDD25', year: '2025', line: 'Virgin Voyages' },
    { title: 'Best Modern Luxury', desc: 'Celebrity Cruises wins for revolutionary Edge-series ships with Magic Carpet, infinite verandas, and Michelin-starred dining.', icon: '\u2B50', year: '2024', line: 'Celebrity Cruises' },
    { title: 'Best Alaska Cruising', desc: 'Holland America Line recognized for expert Alaska navigation, enrichment programs, and access to smaller ports with unique itineraries.', icon: '\uD83C\uDFF4', year: '2024', line: 'Holland America Line' },
    { title: 'Best Ultra-Luxury Line', desc: 'Crystal Cruises awarded for highest staff-to-guest ratio, all-inclusive amenities, and the most spacious suites in the industry.', icon: '\uD83D\uDC8E', year: '2025', line: 'Crystal Cruises' },
    { title: 'Best Expedition Cruising', desc: 'Silversea Cruises recognized for combining ultra-luxury with genuine expedition capabilities including submarines and Zodiac landings.', icon: '\uD83C\uDF0A', year: '2025', line: 'Silversea Cruises' },
    { title: 'Best Transatlantic Experience', desc: 'Cunard Line honored for maintaining the iconic Transatlantic Crossing tradition with White Star Service and timeless elegance.', icon: '\uD83D\uDEC4', year: '2024', line: 'Cunard Line' },
  ],
  faq: [
    { q: 'What is CSS Cruise Lines?', a: 'CSS (Cruise Ship Simulator) is the ultimate Roblox cruise experience featuring 20+ cruise lines, 60+ ships, detailed destinations, and a fully interactive booking system. Explore luxury liners, family-friendly vessels, and expedition ships across the CSS universe.' },
    { q: 'How do I book a cruise?', a: 'Head to the Book section, enter your Roblox username, select your preferred line and ship, choose a departure date and cabin class, and confirm! Your instant booking confirmation will appear with all the details.' },
    { q: 'Which cruise line is the best?', a: 'It depends on what you\'re looking for! Bloxival offers luxury and adventure, Bloxney is perfect for magical family fun, Carnival is great for budget-friendly parties, and Royal Caribbean has the biggest, most innovative ships.' },
    { q: 'What is the largest ship in CSS?', a: 'Bloxival Eclipse currently holds the record with 22 decks and 5,200 capacity! However, new ships like Bloxival Majesty (24 decks) are joining the fleet soon to claim the title.' },
    { q: 'Are there adults-only cruises?', a: 'Yes! Virgin Voyages is exclusively adults-only with over 20 dining venues, a wellness spa, and vibrant nightlife. Bloxival Serenity also offers an adults-only luxury retreat experience.' },
    { q: 'How much does a cruise cost?', a: 'Prices vary by line. Carnival starts from $1,899, while ultra-luxury lines like Regent ($5,499+) and Silversea ($5,999+) offer premium experiences. Use the Compare section to see all prices!' },
    { q: 'Can I explore the ships before booking?', a: 'Yes! Browse the Ships section to see every vessel with detailed descriptions, deck counts, capacity, and key features. Click any ship card for the full modal view.' },
    { q: 'What destinations are available?', a: 'CSS features 16+ destinations including Caribbean islands, Mediterranean harbors, Alaskan fjords, Antarctic ice fields, and exclusive private islands. Check the Destinations section for the full list!' },
    { q: 'Do new ships get added regularly?', a: 'Absolutely! The CSS team constantly updates the fleet. Recent additions include Bloxival Majesty, Bloxney Fantasy, Carnival Sunrise, Royal Voyager, and many more exciting new vessels.' },
    { q: 'What cabin types are available?', a: 'We offer Interior, Ocean View, Balcony, Suite, and Penthouse cabins. Each class offers different amenities and views. Use the booking form to compare prices across cabin types!' },
    { q: 'Can I compare different cruise lines?', a: 'Yes! The Compare section has a detailed table showing ships, decks, founded year, price, rating, and employees for all 20+ lines. There\'s also a visual bar chart for fleet size comparison.' },
    { q: 'What features do the ships have?', a: 'Features vary by ship but include pools, spas, water parks, rock climbing walls, Broadway theaters, ice rinks, go-kart tracks, zip lines, surf simulators, and much more! Click any ship for its full feature list.' },
    { q: 'Are there loyalty programs?', a: 'While CSS doesn\'t have a formal loyalty program yet, frequent cruisers can explore new ships and lines with each visit. Watch for special limited-time events and new vessel launches!' },
    { q: 'How can I see guest reviews?', a: 'The Reviews section showcases authentic feedback from CSS cruisers. You can scroll through ratings and testimonials to help choose your perfect cruise experience.' },
    { q: 'What is the best time to cruise?', a: 'CSS cruises sail year-round! Caribbean routes are popular all year, Alaska is best in summer, and Mediterranean cruises shine in spring and fall. New ships launch throughout the year.' },
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
    { text: 'Crystal Serenity is pure perfection. Every detail is thought of, from the butler service to the gourmet dining. Worth every Robux!', author: 'LuxuryLover_RBLX', stars: 5, line: 'Crystal Cruises' },
    { text: 'Bloxival Majesty is absolutely mind-blowing. The Royal Court Theater is the best entertainment I have seen at sea!', author: 'TheaterFanatic', stars: 5, line: 'Bloxival Cruise Line' },
    { text: 'Seabourn Venture took us to places I never dreamed of. The submarine experience was incredible!', author: 'ExplorerRoblox', stars: 5, line: 'Seabourn Cruise Line' },
    { text: 'Bloxney Fantasy is pure magic for kids. My little one still talks about the enchanted forest deck.', author: 'HappyParent_RBLX', stars: 5, line: 'Bloxney Cruise Line' },
    { text: 'Royal Voyager ferris wheel at sea is crazy. Who thinks of these things? Amazing!', author: 'ThemeParkFan', stars: 5, line: 'Royal Caribbean' },
    { text: 'Costa Venezia is so beautiful. The canal promenade makes you feel like you are in Venice.', author: 'ItalianDreamer', stars: 4, line: 'Costa Cruises' },
    { text: 'NCL Viva go-kart track is awesome. Racing with ocean views is an unforgettable experience.', author: 'SpeedRacer_RBLX', stars: 4, line: 'Norwegian Cruise Line' },
    { text: 'Queen Mary 2 is a true legend. The afternoon tea service is elegant and the planetarium is unique.', author: 'ClassicTraveler', stars: 5, line: 'Cunard Line' },
    { text: 'MSC World America is a floating city. The world promenade and seven districts are incredible.', author: 'WorldTraveler', stars: 5, line: 'MSC Cruises' },
    { text: 'Disney Adventure Marvel zone is the best. My kids spent hours in the Avengers training academy.', author: 'MarvelFan_RBLX', stars: 5, line: 'Disney Cruise Line' },
    { text: 'Oceania Vista cuisine is restaurant quality. The culinary center cooking class was a highlight.', author: 'FoodieAdventure', stars: 5, line: 'Oceania Cruises' },
    { text: 'Regent Explorer is so inclusive. Everything is included and the suite is enormous.', author: 'AllInclusiveFan', stars: 5, line: 'Regent Seven Seas' },
    { text: 'Virgin Brilliant rooftop club is incredible. Dancing under the stars on the ocean is unbeatable.', author: 'PartyGoer_RBLX', stars: 5, line: 'Virgin Voyages' },
    { text: 'Azamara Journey overnight port stays let us truly experience each destination. No rushing!', author: 'CultureSeeker', stars: 4, line: 'Azamara Cruises' },
    { text: 'Windstar Star Breeze sailing experience is intimate and special. Hidden harbors others cannot reach.', author: 'SailAway_RBLX', stars: 5, line: 'Windstar Cruises' },
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
    { name: 'Crystal Cove', icon: '\uD83D\uDC8E', region: 'Ultra-Luxury', desc: 'An exclusive enclave for ultra-luxury cruising with private yacht charters, champagne bars, and designer boutiques.', lines: ['Crystal Cruises', 'Regent Seven Seas', 'Silversea Cruises'] },
    { name: 'Culinary Quay', icon: '\uD83C\uDF7D\uFE0F', region: 'Gourmet Routes', desc: 'A food lover\'s paradise port with cooking schools, wine tastings, gourmet market stalls, and Michelin-starred pop-up restaurants.', lines: ['Oceania Cruises', 'Celebrity Cruises', 'Cunard Line'] },
    { name: 'Windward Anchorage', icon: '\u26F5', region: 'Small Ship Routes', desc: 'A secluded anchorage accessible only by small ships and sailing yachts, offering pristine beaches and untouched nature.', lines: ['Windstar Cruises', 'Seabourn Cruise Line', 'Azamara Cruises'] },
    { name: 'Transatlantic Pier', icon: '\uD83D\uDEC4', region: 'Transatlantic', desc: 'The historic gateway for transatlantic crossings, featuring a grand terminal, maritime museum, and departure point for epic ocean voyages.', lines: ['Cunard Line'] },
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
    { year: 2020, title: 'Cunard Line Heritage Begins', desc: 'Cunard Line joins CSS with the legendary Queen Mary 2, bringing transatlantic tradition and White Star Service to Roblox.' },
    { year: 2024, title: 'Ultra-Luxury Expansion', desc: 'Crystal Cruises, Seabourn, Oceania, and Regent Seven Seas launch their first ships, bringing ultra-luxury cruising to CSS.' },
    { year: 2025, title: 'Fleet Milestone', desc: 'The CSS fleet surpasses 60 ships with 20+ cruise lines operating worldwide. New mega-ships debut including Bloxival Majesty and Royal Voyager.' },
    { year: 2026, title: 'The Golden Era', desc: 'CSS enters its golden era with 20+ cruise lines, 60+ ships, and millions of players exploring the seas every month. Bloxival Pioneer and Bloxney Fantasy lead a new wave of innovation.' },
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
    { name: 'Bloxival Majesty', line: 'bloxival', emoji: '\uD83D\uDC51' },
    { name: 'Bloxival Pioneer', line: 'bloxival', emoji: '\uD83E\uDDCA' },
    { name: 'Bloxival Crown', line: 'bloxival', emoji: '\uD83D\uDC8E' },
    { name: 'Bloxney Fantasy', line: 'bloxney', emoji: '\uD83E\uDDE9' },
    { name: 'Bloxney Spirit', line: 'bloxney', emoji: '\uD83C\uDF89' },
    { name: 'Bloxney Destiny', line: 'bloxney', emoji: '\u2B50' },
    { name: 'Royal Voyager', line: 'other', emoji: '\uD83C\uDFA1' },
    { name: 'Disney Destiny', line: 'other', emoji: '\u2728' },
    { name: 'Virgin Brilliant', line: 'other', emoji: '\uD83D\uDD25' },
    { name: 'Celebrity Xcel', line: 'other', emoji: '\u2B50' },
    { name: 'MSC World America', line: 'other', emoji: '\uD83C\uDF0D' },
    { name: 'Queen Mary 2', line: 'other', emoji: '\uD83D\uDEC4' },
    { name: 'Regent Explorer', line: 'other', emoji: '\uD83C\uDF1F' },
    { name: 'Silversea Moon', line: 'other', emoji: '\uD83C\uDF19' },
    { name: 'Crystal Serenity', line: 'other', emoji: '\uD83D\uDC8E' },
    { name: 'Carnival Sunrise', line: 'other', emoji: '\uD83C\uDF05' },
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

/* ─── Crew ─── */
function renderCrew() {
  const grid = document.getElementById('crewGrid');
  if (!grid) return;
  grid.innerHTML = data.crew.map(c => `
    <div class="crew-card" data-reveal-stagger>
      <span class="crew-icon">${c.icon}</span>
      <h4>${c.name}</h4>
      <span class="crew-role">${c.role}</span>
      <p>${c.bio}</p>
      <span class="crew-line">${c.line}</span>
    </div>
  `).join('');
}

/* ─── Awards ─── */
function renderAwards() {
  const grid = document.getElementById('awardsGrid');
  if (!grid) return;
  grid.innerHTML = data.awards.map(a => `
    <div class="award-card" data-reveal-stagger>
      <span class="award-icon">${a.icon}</span>
      <span class="award-year">${a.year}</span>
      <h4>${a.title}</h4>
      <p>${a.desc}</p>
      <span class="award-line">${a.line}</span>
    </div>
  `).join('');
}

/* ─── FAQ ─── */
function renderFAQ() {
  const container = document.getElementById('faqContainer');
  if (!container) return;
  container.innerHTML = data.faq.map(f => `
    <div class="faq-item" data-reveal-stagger>
      <div class="faq-question" onclick="this.parentElement.classList.toggle('open')">
        <span>${f.q}</span>
        <span class="faq-toggle">+</span>
      </div>
      <div class="faq-answer">
        <p>${f.a}</p>
      </div>
    </div>
  `).join('');
}

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

/* ─── Loading Texts ─── */
const loadingTexts = [
  'Charting the course...',
  'Warming up the engines...',
  'Polishing the brass rails...',
  'Stocking the gourmet kitchens...',
  'Inflating the lifeboats...',
  'Tuning the Broadway show...',
  'Chilling the Champagne...',
  'Preparing the midnight buffet...',
  'Hoisting the anchor...',
  'Setting sail for adventure...',
];

function animateLoadingText() {
  const el = document.getElementById('loadingText');
  if (!el) return;
  let i = 0;
  el.textContent = loadingTexts[0];
  setInterval(() => {
    i = (i + 1) % loadingTexts.length;
    el.textContent = loadingTexts[i];
  }, 400);
}

/* ─── Loading Screen ─── */
function initLoading() {
  const ls = document.getElementById('loadingScreen');
  animateLoadingText();
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
  awards: ['award','awards','prize','prizes','winner','winning','accolade','honor'],
  faq: ['faq','question','questions','frequently asked','how do i','what is','what are'],
  luxury: ['luxury','luxurious','ultra luxury','premium','high end','upscale','exclusive','butler','fine dining'],
  family: ['family','kids','children','kid friendly','family friendly','child','teen','toddler'],
  large: ['largest','biggest','larger','bigger','mega','enormous','massive','huge','giant'],
  new_ships: ['new ship','newest','latest','brand new','recently','just launched','new vessel','new fleet'],
  lua: ['lua','script','scripting','code','coding','program','programming','function','variable','loop','table','string','number','boolean','nil','if then','end'],
  roblox_dev: ['roblox studio','studio','developer','developing','building','create','creator','game dev','game development','dev'],
  luau: ['luau','type','typed','type check','strict','typeof'],
  part: ['part','brick','block','mesh','model','terrain','baseplate','spawn','workspace'],
  tween: ['tween','tweening','animate','animation','lerp','smooth','move','slide','fade'],
  gui: ['gui','screen gui','frame','text label','text button','image label','ui','interface','hud','button','label'],
  remote: ['remote','remoteevent','remotefunction','server','client','replication','fire','invoke'],
  datastore: ['datastore','save','load','data','persist','saved','key','player data'],
  module: ['module','modulescript','require','import','class','library','utility'],
  humanoid: ['humanoid','humanoidrootpart','health','walk','run','jump','character','player character'],
  raycast: ['raycast','ray','intersect','hit','touching','collision','detect'],
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
  if (chatDB.awards.some(w => m.includes(w))) return 'awards';
  if (chatDB.faq.some(w => m.includes(w))) return 'faq';
  if (chatDB.luxury.some(w => m.includes(w))) return 'luxury';
  if (chatDB.family.some(w => m.includes(w))) return 'family';
  if (chatDB.large.some(w => m.includes(w)) && chatDB.ships.some(w => m.includes(w))) return 'large';
  if (chatDB.new_ships.some(w => m.includes(w))) return 'new_ships';
  if (chatDB.lua.some(w => m.includes(w)) || chatDB.roblox_dev.some(w => m.includes(w)) || chatDB.luau.some(w => m.includes(w))) return 'coding_general';
  if (chatDB.part.some(w => m.includes(w))) return 'coding_parts';
  if (chatDB.tween.some(w => m.includes(w))) return 'coding_tween';
  if (chatDB.gui.some(w => m.includes(w))) return 'coding_gui';
  if (chatDB.remote.some(w => m.includes(w))) return 'coding_remote';
  if (chatDB.datastore.some(w => m.includes(w))) return 'coding_datastore';
  if (chatDB.module.some(w => m.includes(w))) return 'coding_module';
  if (chatDB.humanoid.some(w => m.includes(w))) return 'coding_humanoid';
  if (chatDB.raycast.some(w => m.includes(w))) return 'coding_raycast';
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
  roblox: () => {
    const tips = [
      'Your **Roblox username** is needed when booking to confirm your reservation. Double-check the spelling before submitting!',
      'I can also help with **Roblox Lua scripting**! Ask me about parts, GUIs, tweens, remotes, datastores, or any coding topic! Type "help code" to get started.',
    ];
    return tips[Math.floor(Math.random() * tips.length)];
  },
  help: () => {
    const h = [
      'I can help with:\n\u2022 Ships & fleet info\n\u2022 Cruise line details\n\u2022 Price comparisons\n\u2022 Booking guidance\n\u2022 Destinations\n\u2022 Reviews & ratings\n\u2022 Ship features & amenities\n\n**\uD83D\uDCBB AI Coding Assistant:** Ask me about Roblox Lua scripting!\nTry: "write a script", "how do I make a GUI", "tween example", "datastore save"\n\nJust ask naturally!',
      '**Cruise info** \u2014 ships, lines, prices, bookings, destinations, reviews, awards, crew\n**\uD83D\uDCBB Roblox Coding** \u2014 parts, GUIs, tweens, remotes, datastores, modules, raycasts, humanoids\n\nTry "help script" or "show me Lua code"!'
    ];
    return h[Math.floor(Math.random() * h.length)];
  },
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
  awards: () => {
    const top = data.awards.slice(0, 5);
    return `**CSS Awards & Accolades:**\n${top.map(a => `${a.icon} **${a.title}** (${a.year}) \u2014 ${a.line}`).join('\n')}\n\nCheck the **Awards** section for all 15+ honors!`;
  },
  faq: () => {
    const top = data.faq.slice(0, 3);
    return `**Frequently Asked Questions:**\n${top.map(f => `\u2022 **${f.q}**\n  ${f.a.split('.')[0]}.`).join('\n')}\n\nSee the **FAQ** section for all 15 Q&As!`;
  },
  luxury: () => {
    const lux = data.lines.filter(l => parseInt(l.price.replace(',', '')) >= 3000);
    const top = lux.slice(0, 5);
    return `**Luxury Cruise Lines:**\n${top.map(l => `${l.icon} ${l.name} \u2014 from $${l.price}, ${l.rating} stars, ${l.region}`).join('\n')}\n\nFor the ultimate luxury, try Crystal, Regent, or Silversea!`;
  },
  family: () => {
    const fam = ['Bloxney Cruise Line', 'Disney Cruise Line', 'Carnival Cruise Line', 'Royal Caribbean'];
    const lines = fam.map(n => data.lines.find(l => l.name === n)).filter(Boolean);
    return `**Best Family Cruise Lines:**\n${lines.map(l => `${l.icon} ${l.name} \u2014 ${l.ships} ships, ${l.rating} stars`).join('\n')}\n\nBloxney leads with magical themed experiences for all ages!`;
  },
  large: () => {
    const big = [...data.ships].sort((a, b) => b.decks - a.decks || b.capacity - a.capacity).slice(0, 5);
    return `**Largest Ships in CSS:**\n${big.map(s => `${s.icon} ${s.name} \u2014 ${s.decks} decks, ${(s.capacity / 1000).toFixed(1)}K capacity (${s.line})`).join('\n')}\n\nBloxival Majesty leads with 24 decks!`;
  },
  new_ships: () => {
    const recent = [...data.ships].sort((a, b) => b.year - a.year || b.decks - a.decks).slice(0, 6);
    return `**Latest Ships:**\n${recent.map(s => `${s.icon} ${s.name} \u2014 ${s.year}, ${s.decks} decks (${s.line})`).join('\n')}\n\nBloxival Majesty, Bloxney Fantasy, and Royal Voyager are the newest additions!`;
  },
  /* ─── AI Coding Assistant (Roblox Lua) ─── */
  coding_general: () => {
    const tips = [
      'Here\'s a basic LocalScript template:\n```lua\nlocal Players = game:GetService("Players")\nlocal player = Players.LocalPlayer\nlocal char = player.Character or player.CharacterAdded:Wait()\nlocal hum = char:WaitForChild("Humanoid")\n\nprint("Hello, " .. player.Name .. "!")\nhum.WalkSpeed = 24\n```\nI can help with parts, GUIs, tweens, remotes, datastores, and more!',
      'Lua quick reference:\n```lua\n-- Variables\nlocal x = 10\nlocal name = "Bloxival"\n\n-- Tables (arrays)\nlocal ships = {"Splendor", "Eclipse", "Majesty"}\n\n-- Loops\nfor i, ship in ipairs(ships) do\n  print(ship)\nend\n\n-- Conditionals\nif x > 5 then\n  print("Big number!")\nend\n```\nAsk about specific topics like parts, GUIs, or datastores!',
      'Roblox LocalScript vs Script:\n- **LocalScript** runs on the client (player\'s computer) - use for UI, controls, camera\n- **Script** runs on the server - use for game logic, rewards, enemies\n- **ModuleScript** is shared code that both can `require()`\n\nTip: Put LocalScripts in StarterPlayerScripts or StarterGui, Scripts in ServerScriptService.',
      'Common Roblox services:\n```lua\nlocal Players = game:GetService("Players")\nlocal ReplicatedStorage = game:GetService("ReplicatedStorage")\nlocal ServerScriptService = game:GetService("ServerScriptService")\nlocal Workspace = game:GetService("Workspace")\nlocal TweenService = game:GetService("TweenService")\nlocal Debris = game:GetService("Debris")\nlocal DataStoreService = game:GetService("DataStoreService")\n```\nUse `:GetService()` instead of `game.ServerScriptService` \u2014 it\'s safer & faster!'
    ];
    return tips[Math.floor(Math.random() * tips.length)];
  },
  coding_parts: () => {
    return 'Working with Parts:\n```lua\nlocal part = Instance.new("Part")\npart.Name = "MyPart"\npart.BrickColor = BrickColor.new("Bright red")\npart.Size = Vector3.new(4, 1, 2)\npart.Position = Vector3.new(0, 5, 0)\npart.Material = Enum.Material.SmoothPlastic\npart.Anchored = true\npart.Parent = workspace\n\n-- Union/CSG operations\nlocal union = part1:UnionAsync(part2)\n\n-- Welding parts together\nlocal weld = Instance.new("WeldConstraint")\nweld.Part0 = part1\nweld.Part1 = part2\nweld.Parent = part1\n```\nAsk about meshes, models, terrain, or unions!';
  },
  coding_tween: () => {
    return 'TweenService animations:\n```lua\nlocal TweenService = game:GetService("TweenService")\n\nlocal part = workspace.MyPart\nlocal goal = {\n  Position = Vector3.new(10, 5, 0),\n  Size = Vector3.new(6, 1, 3),\n  Transparency = 0.5,\n  Rotation = Vector3.new(0, 180, 0)\n}\nlocal tweenInfo = TweenInfo.new(\n  2,                          -- duration (seconds)\n  Enum.EasingStyle.Quad,      -- style: Linear, Quad, Bounce, Elastic\n  Enum.EasingDirection.Out,   -- direction: In, Out, InOut\n  0,                          -- repeat count (-1 = infinite)\n  false,                      -- reverses?\n  0                           -- delay\n)\nlocal tween = TweenService:Create(part, tweenInfo, goal)\ntween:Play()\n\n-- Common easing styles: Quad, Bounce, Elastic, Back, Exponential\n```\nTry `Enum.EasingStyle.Bounce` for fun effects!';
  },
  coding_gui: () => {
    return 'Creating GUIs:\n```lua\nlocal screenGui = Instance.new("ScreenGui")\nscreenGui.Name = "MyGUI"\nscreenGui.Parent = player:WaitForChild("PlayerGui")\n\nlocal frame = Instance.new("Frame")\nframe.Size = UDim2.new(0, 300, 0, 200)\nframe.Position = UDim2.new(0.5, -150, 0.5, -100)\nframe.BackgroundColor3 = Color3.fromRGB(30, 30, 40)\nframe.BorderColor3 = Color3.fromRGB(226, 35, 26)\nframe.BackgroundTransparency = 0.2\nframe.Parent = screenGui\n\nlocal button = Instance.new("TextButton")\nbutton.Text = "CLICK ME"\nbutton.Size = UDim2.new(0, 200, 0, 50)\nbutton.Position = UDim2.new(0.5, -100, 0.8, -25)\nbutton.Parent = screenGui\n\nbutton.MouseButton1Click:Connect(function()\n  print("Button clicked!")\nend)\n```\nAsk about TextLabels, ScrollingFrames, or UIListLayout!';
  },
  coding_remote: () => {
    return 'RemoteEvents & RemoteFunctions (Client-Server):\n```lua\n-- In ReplicatedStorage, create a RemoteEvent named "MyEvent"\n\n-- SERVER SCRIPT (in ServerScriptService)\nlocal remote = game:GetService("ReplicatedStorage"):WaitForChild("MyEvent")\n\nremote.OnServerEvent:Connect(function(player, arg1, arg2)\n  print(player.Name .. " sent: " .. arg1 .. ", " .. arg2)\n  -- Send back to client\n  remote:FireClient(player, "Response from server!")\nend)\n\n-- CLIENT SCRIPT (LocalScript in StarterGui)\nlocal remote = game:GetService("ReplicatedStorage"):WaitForChild("MyEvent")\n\n-- Fire to server\nremote:FireServer("Hello", 42)\n\n-- Listen for response\nremote.OnClientEvent:Connect(function(msg)\n  print("Server says: " .. msg)\nend)\n\n-- Use RemoteFunction for returning values\nlocal result = remoteFunc:InvokeServer("data")\n```\nKeep security in mind \u2014 never trust the client!';
  },
  coding_datastore: () => {
    return 'DataStore for saving player data:\n```lua\nlocal DataStoreService = game:GetService("DataStoreService")\nlocal scoreStore = DataStoreService:GetDataStore("PlayerScores")\n\n-- Save data (on player leave or after game update)\nlocal function saveData(player)\n  local data = {\n    coins = player.leaderstats.Coins.Value,\n    level = player.leaderstats.Level.Value,\n    inventory = {"sword", "potion", "shield"}\n  }\n  local success, err = pcall(function()\n    scoreStore:SetAsync(player.UserId, data)\n  end)\n  if success then\n    print("Saved data for " .. player.Name)\n  else\n    warn("Save failed: " .. err)\n  end\nend\n\n-- Load data (on player join)\ngame.Players.PlayerAdded:Connect(function(player)\n  local success, data = pcall(function()\n    return scoreStore:GetAsync(player.UserId)\n  end)\n  if success and data then\n    print("Loaded data for " .. player.Name)\n    -- Apply data to player\n  end\nend)\n\n-- ALWAYS wrap in pcall() for error handling!\n```\nDataStore limits: 60 requests/min per player, 5M per game. Use OrderedDataStore for leaderboards!';
  },
  coding_module: () => {
    return 'ModuleScript pattern:\n```lua\n-- In a ModuleScript named "ShipManager"\nlocal ShipManager = {}\n\nlocal ships = {\n  Splendor = {decks = 18, speed = 28},\n  Eclipse = {decks = 22, speed = 26},\n  Majesty = {decks = 24, speed = 24}\n}\n\nfunction ShipManager:GetShip(name)\n  return ships[name]\nend\n\nfunction ShipManager:ListAll()\n  local result = {}\n  for name, data in pairs(ships) do\n    table.insert(result, name .. " (" .. data.decks .. " decks)")\n  end\n  return table.concat(result, ", ")\nend\n\nfunction ShipManager.new(name, decks)\n  return setmetatable({ name = name, decks = decks }, { __index = ShipManager })\nend\n\nreturn ShipManager\n\n-- Use via require:\n-- local ShipManager = require(path.to.ShipManager)\n-- print(ShipManager:ListAll())\n-- local myShip = ShipManager.new("Custom", 10)\n```\nModuleScripts are cached \u2014 require() returns the same instance every time!';
  },
  coding_humanoid: () => {
    return 'Character & Humanoid control:\n```lua\nlocal Players = game:GetService("Players")\nlocal player = Players.LocalPlayer\n\n-- Wait for character\nlocal char = player.Character or player.CharacterAdded:Wait()\nlocal hum = char:WaitForChild("Humanoid")\nlocal root = char:WaitForChild("HumanoidRootPart")\n\n-- Modify character\nhum.WalkSpeed = 32      -- default is 16\nhum.JumpPower = 70      -- default is 50\nhum.MaxHealth = 200\n\n-- Detect damage\nhum.HealthChanged:Connect(function(health)\n  print("Health: " .. health)\n  if health <= 0 then\n    print("Player died!")\n  end\n})\n\n-- Teleport\nroot.CFrame = CFrame.new(0, 10, 0)\n\n-- Smooth movement using BodyPosition\nlocal bodyPos = Instance.new("BodyPosition")\nbodyPos.Position = Vector3.new(50, 5, 20)\nbodyPos.MaxForce = Vector3.new(4000, 4000, 4000)\nbodyPos.Parent = root\nDebris:AddItem(bodyPos, 3)\n```\nUse `player.CharacterAdded:Wait()` to safely get the character after respawn!';
  },
  coding_raycast: () => {
    return 'Raycasting in Roblox:\n```lua\nlocal Workspace = game:GetService("Workspace")\n\n-- Simple raycast from part position downward\nlocal part = workspace.MyPart\nlocal origin = part.Position\nlocal direction = Vector3.new(0, -50, 0)\n\nlocal raycastParams = RaycastParams.new()\nraycastParams.FilterType = Enum.RaycastFilterType.Blacklist\nraycastParams.FilterDescendantsInstances = {part, workspace.IgnoreFolder}\n\nlocal result = Workspace:Raycast(origin, direction, raycastParams)\n\nif result then\n  print("Hit: " .. result.Instance.Name)\n  print("Position: " .. result.Position)\n  print("Normal: " .. result.Normal)\n  \n  -- Create an effect at the hit point\n  local marker = Instance.new("Part")\n  marker.Size = Vector3.new(1, 1, 1)\n  marker.Anchored = true\n  marker.Position = result.Position\n  marker.BrickColor = BrickColor.new("Bright red")\n  marker.Parent = workspace\nend\n\n-- For sphere/cylinder casting:\n-- Workspace:Spherecast(origin, radius, direction, params)\n-- Workspace:Blockcast(origin, size, direction, params)\n```\nRaycastParams are reusable \u2014 cache them for performance!';
  },
  fallback: () => {
    const f = [
      'Not sure about that! Try asking about Bloxival, Bloxney, ships, booking, destinations, or reviews.',
      'Hmm, I don\'t have info on that. Try "Tell me about Bloxney" or "Show me ships"',
      'I didn\'t catch that. I know all about CSS cruise lines, ships, prices, destinations, awards, and more!',
      'Try asking: "Compare Bloxival and Bloxney", "Best cruise lines", or "Show destinations"',
      'You can ask about features, crew, awards, gallery, reviews, or the best ships in the fleet!',
      'Check the Awards section or ask about luxury lines, family cruises, or the newest ships!',
      'Need Roblox Lua help? Try: "show me a tween script", "how to make a GUI", "datastore example", or "part script"!',
      'I\'m also a **Roblox coding assistant**! Ask me about Lua scripts, parts, GUIs, tweens, remotes, or datastores!',
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
  const rendered = text.replace(/```lua\n?([\s\S]*?)```/g, '<pre class="code-block"><code>$1</code></pre>').replace(/\n/g, '<br>');
  div.innerHTML = `
    <div class="msg-avatar">${isUser ? '\uD83D\uDC64' : '\u2693'}</div>
    <div class="msg-bubble">${rendered}</div>
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

/* ─── Card Tilt Effect ─── */
function initCardTilt() {
  document.querySelectorAll('.cruise-card, .ship-card, .line-card, .destination-card').forEach(card => {
    card.addEventListener('mousemove', e => {
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      card.style.transform = `perspective(600px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(600px) rotateY(0deg) rotateX(0deg)';
    });
  });
}

/* ─── Newsletter ─── */
function initNewsletter() {
  const form = document.getElementById('newsletterForm');
  if (!form) return;
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    const input = this.querySelector('input');
    if (!input.value.trim()) return;
    showNotification('Subscribed to CSS Cruise News! Welcome aboard!');
    input.value = '';
  });
}

/* ─── Music Toggle ─── */
function initMusicToggle() {
  const btn = document.getElementById('musicToggle');
  if (!btn) return;
  let playing = false;
  let audioCtx = null;
  let source = null;
  let gainNode = null;
  let filterNode = null;
  let buffer = null;

  async function initAudio() {
    if (audioCtx) return;
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    try {
      const resp = await fetch('bgm.mp3');
      const arrayBuf = await resp.arrayBuffer();
      buffer = await audioCtx.decodeAudioData(arrayBuf);
    } catch (e) {
      showNotification('Could not load background music file', true);
      audioCtx = null;
    }
  }

  function startMusic() {
    if (!buffer || !audioCtx) return;
    if (source) source.stop();

    source = audioCtx.createBufferSource();
    source.buffer = buffer;

    // Nightcore: speed up 1.35x → pitch rises naturally
    source.playbackRate.value = 1.35;

    // Gain (slightly boosted)
    gainNode = audioCtx.createGain();
    gainNode.gain.value = 0.18;

    // High-shelf boost for bright nightcore shimmer
    filterNode = audioCtx.createBiquadFilter();
    filterNode.type = 'highshelf';
    filterNode.frequency.value = 4000;
    filterNode.gain.value = 6;

    source.connect(filterNode);
    filterNode.connect(gainNode);
    gainNode.connect(audioCtx.destination);

    source.loop = true;
    source.start(0);
  }

  function stopMusic() {
    if (source) { source.stop(); source.disconnect(); source = null; }
  }

  btn.addEventListener('click', async () => {
    playing = !playing;
    btn.classList.toggle('playing', playing);
    if (playing) {
      btn.innerHTML = '\u266B';
      await initAudio();
      startMusic();
      showNotification('\u26A1 Nightcore mode ON \uD83C\uDFB5');
    } else {
      btn.innerHTML = '\uD83C\uDFB5';
      stopMusic();
      showNotification('Music paused');
    }
  });
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
  renderCrew();
  renderAwards();
  renderFAQ();
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

  initCardTilt();
  initNewsletter();
  initMusicToggle();
});
