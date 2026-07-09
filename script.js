const data = {
  lines: [
    { id: 'bloxival', name: 'Bloxival Cruise Line', icon: '\u2693', color: '#0077b6', desc: 'Luxury & adventure on the high seas with the world\'s most innovative fleet. Bloxival offers premium cruise experiences with world-class entertainment, gourmet dining, and stunning itineraries across every ocean, with award-winning service that keeps guests returning year after year.', price: '2,499', annual: '350K', region: 'Global', ships: 10, decks: 180, founded: '2022', tag: 'bloxival', ceo: 'Captain Blox', hq: 'Bloxport', employees: '4,200', rating: 4.8 },
    { id: 'bloxney', name: 'Bloxney Cruise Line', icon: '\u2728', color: '#f43f5e', desc: 'Magical themed family voyages with enchanting experiences on every deck. Bloxney brings imagination to life with character dining, fantasy suites, immersive storytelling, and spectacular Broadway-caliber productions that transport guests into their favorite stories.', price: '2,899', annual: '310K', region: 'Global', ships: 10, decks: 172, founded: '2023', tag: 'bloxney', ceo: 'Captain Sparkle', hq: 'Dreamport', employees: '3,800', rating: 4.9 },
    { id: 'carnival', name: 'Carnival Cruise Line', icon: '\uD83C\uDF89', color: '#00b4d8', desc: 'Fun-filled ships with non-stop entertainment, massive water parks, comedy clubs, casual dining, vibrant nightlife for all ages, and the famous Carnival atmosphere that has made it the most popular cruise line for families seeking non-stop fun.', price: '1,899', annual: '220K', region: 'Caribbean', ships: 5, decks: 68, founded: '2021', tag: 'other', ceo: 'Captain Fun', hq: 'Miamiport', employees: '1,500', rating: 4.2 },
    { id: 'royal', name: 'Royal Caribbean', icon: '\uD83D\uDC51', color: '#f77f00', desc: 'World-class innovation at sea with massive adventure-filled vessels featuring ice rinks, zip lines, surf simulators, Broadway shows, and the most daring amenities ever conceived for the ultimate family adventure.', price: '3,299', annual: '280K', region: 'Global', ships: 5, decks: 82, founded: '2020', tag: 'other', ceo: 'Captain Royal', hq: 'Adventure Bay', employees: '2,100', rating: 4.6 },
    { id: 'norwegian', name: 'Norwegian Cruise Line', icon: '\uD83C\uDF0A', color: '#2d6a4f', desc: 'Freestyle cruising with ultimate flexibility and casual elegance. No fixed dining times, no dress codes \u2014 just pure vacation freedom with world-class entertainment and innovative ship design.', price: '2,699', annual: '200K', region: 'Global', ships: 5, decks: 76, founded: '2021', tag: 'other', ceo: 'Captain Free', hq: 'Freedom Port', employees: '1,800', rating: 4.4 },
    { id: 'msc', name: 'MSC Cruises', icon: '\uD83C\uDDEE\uD83C\uDDF9', color: '#d62828', desc: 'Mediterranean elegance with a global reach. Sophisticated ships with European style, world-class cuisine, stunning design, and a warm welcome that reflects the best of Italian hospitality and maritime tradition.', price: '2,199', annual: '180K', region: 'Europe', ships: 5, decks: 72, founded: '2022', tag: 'other', ceo: 'Captain Europa', hq: 'Genoa Port', employees: '1,600', rating: 4.3 },
    { id: 'princess', name: 'Princess Cruises', icon: '\uD83D\uDC78', color: '#9b5de5', desc: 'Premium voyages to breathtaking destinations with exceptional service, enrichment programs, and intimate ship experiences that create unforgettable memories for every guest on board.', price: '2,899', annual: '160K', region: 'Global', ships: 4, decks: 56, founded: '2021', tag: 'other', ceo: 'Captain Grace', hq: 'Elegance Bay', employees: '1,200', rating: 4.5 },
    { id: 'disney', name: 'Disney Cruise Line', icon: '\uD83D\uDC2D', color: '#f9c74f', desc: 'Storybook adventures on the high seas with Disney magic, character encounters, themed dining, spectacular entertainment for the whole family, and the unmatched Disney quality that makes every voyage extraordinary.', price: '3,999', annual: '190K', region: 'Global', ships: 4, decks: 56, founded: '2023', tag: 'other', ceo: 'Captain Magic', hq: 'Enchanted Port', employees: '1,400', rating: 4.7 },
    { id: 'costa', name: 'Costa Cruises', icon: '\uD83C\uDF0D', color: '#fcbf49', desc: 'Italian-style cruising with vibrant energy, authentic cuisine, warm Mediterranean hospitality on modern vessels, and a festive atmosphere that brings la dolce vita to the high seas.', price: '1,999', annual: '120K', region: 'Europe', ships: 4, decks: 54, founded: '2022', tag: 'other', ceo: 'Captain Italia', hq: 'Veniceport', employees: '1,000', rating: 4.1 },
    { id: 'virgin', name: 'Virgin Voyages', icon: '\uD83D\uDD25', color: '#e63946', desc: 'Adults-only luxury cruises with a modern twist. Redefining the cruise experience with innovative dining, wellness, nightlife, and a rebellious spirit that challenges every convention of traditional cruising.', price: '3,499', annual: '140K', region: 'Global', ships: 4, decks: 62, founded: '2023', tag: 'other', ceo: 'Captain Rebel', hq: 'Miamiport', employees: '1,300', rating: 4.6 },
    { id: 'celebrity', name: 'Celebrity Cruises', icon: '\u2B50', color: '#457b9d', desc: 'Modern luxury with a focus on design, culinary excellence, and destination-rich itineraries aboard sleek, contemporary ships that redefine what premium cruising means in the modern era.', price: '3,199', annual: '150K', region: 'Global', ships: 4, decks: 60, founded: '2021', tag: 'other', ceo: 'Captain Luxe', hq: 'Luxury Bay', employees: '1,100', rating: 4.5 },
    { id: 'holland', name: 'Holland America Line', icon: '\uD83C\uDFF4', color: '#1d3557', desc: 'Timeless elegance and traditional seafaring heritage. Mid-sized ships offering enrichment, exploration, refined experiences, and a classic cruising atmosphere that honors the golden age of ocean travel.', price: '2,399', annual: '100K', region: 'Alaska/Canada', ships: 4, decks: 54, founded: '2020', tag: 'other', ceo: 'Captain Heritage', hq: 'Seattleport', employees: '900', rating: 4.3 },
    { id: 'crystal', name: 'Crystal Cruises', icon: '\uD83D\uDC8E', color: '#e0b0ff', desc: 'Ultra-luxury cruising with the highest staff-to-guest ratio, all-inclusive amenities, and the most spacious suites at sea for discerning travelers who demand nothing but the absolute best.', price: '4,999', annual: '60K', region: 'Global', ships: 3, decks: 40, founded: '2024', tag: 'other', ceo: 'Captain Crystal', hq: 'Luxury Port', employees: '600', rating: 4.9 },
    { id: 'seabourn', name: 'Seabourn Cruise Line', icon: '\uD83C\uDF0A', color: '#00b4d8', desc: 'Intimate ultra-luxury ships that access hidden harbors and exotic ports larger vessels cannot reach, with personalized service and all-inclusive奢华 that defines the pinnacle of expedition cruising.', price: '5,499', annual: '40K', region: 'Global', ships: 3, decks: 36, founded: '2024', tag: 'other', ceo: 'Captain Seabourn', hq: 'Explorer Bay', employees: '500', rating: 4.8 },
    { id: 'oceania', name: 'Oceania Cruises', icon: '\uD83C\uDF0D', color: '#0077b6', desc: 'Finest cuisine at sea with the Culinary Council of world-renowned chefs, destination-focused itineraries, and mid-sized ships that offer a refined, unhurried cruising experience.', price: '4,299', annual: '50K', region: 'Global', ships: 3, decks: 38, founded: '2023', tag: 'other', ceo: 'Captain Oceania', hq: 'Culinary Port', employees: '550', rating: 4.7 },
    { id: 'regent', name: 'Regent Seven Seas', icon: '\uD83D\uDC51', color: '#9b5de5', desc: 'The most inclusive luxury cruise line with free unlimited shore excursions, fine wines, premium spirits, gratuities, and unforgettable voyages aboard the most elegant ships ever built.', price: '6,499', annual: '35K', region: 'Global', ships: 3, decks: 36, founded: '2024', tag: 'other', ceo: 'Captain Regent', hq: 'Regent Bay', employees: '450', rating: 4.9 },
    { id: 'azamara', name: 'Azamara Cruises', icon: '\uD83C\uDF1F', color: '#f43f5e', desc: 'Destination-immersive cruising with longer port stays, overnight calls, and night touring that lets you truly experience each destination rather than just visiting it briefly.', price: '3,799', annual: '45K', region: 'Global', ships: 3, decks: 34, founded: '2023', tag: 'other', ceo: 'Captain Azamara', hq: 'Discovery Port', employees: '480', rating: 4.6 },
    { id: 'windstar', name: 'Windstar Cruises', icon: '\u26F5', color: '#2d6a4f', desc: 'Small-ship sailing with motorized sailing yachts that access intimate ports, offering a casual yet elegant atmosphere with exceptional service and authentic destination experiences.', price: '3,599', annual: '30K', region: 'Global', ships: 3, decks: 28, founded: '2023', tag: 'other', ceo: 'Captain Windstar', hq: 'Sail Port', employees: '350', rating: 4.5 },
    { id: 'silversea', name: 'Silversea Cruises', icon: '\u2B50', color: '#1d3557', desc: 'All-suite ultra-luxury with butler service for every guest, expedition ships that reach the poles, and an intuitive personalized approach that anticipates every need before you even think of it.', price: '5,999', annual: '30K', region: 'Global', ships: 3, decks: 32, founded: '2024', tag: 'other', ceo: 'Captain Silversea', hq: 'Silver Port', employees: '400', rating: 4.8 },
    { id: 'cunard', name: 'Cunard Line', icon: '\uD83C\uDFF4', color: '#e63946', desc: 'The most famous ocean liners in the world, carrying on a legacy of transatlantic tradition with refined British elegance, white-glove service, and the only regular transatlantic crossings remaining.', price: '4,499', annual: '55K', region: 'Transatlantic', ships: 3, decks: 42, founded: '2022', tag: 'other', ceo: 'Captain Cunard', hq: 'Southampton Port', employees: '700', rating: 4.7 },
  ],
  ships: [
    { name: 'Bloxival Splendor', line: 'Bloxival Cruise Line', icon: '\uD83D\uDEA2', desc: 'Flagship with 18 decks, luxury suites, grand atrium, sky dome, and the largest spa at sea. The crown jewel of the Bloxival fleet.', decks: 18, capacity: 4200, year: 2022, features: ['Sky Dome', 'Grand Atrium', 'Luxury Spa', 'Gourmet Dining', 'Infinity Pool'] },
    { name: 'Bloxival Horizon', line: 'Bloxival Cruise Line', icon: '\uD83D\uDEA2', desc: 'Next-gen eco-friendly ship with panoramic ocean views, solar panels, infinity pools, and cutting-edge entertainment venues.', decks: 20, capacity: 4800, year: 2023, features: ['Eco Tech', 'Panoramic Views', 'Infinity Pool', 'Virtual Reality', 'Observation Lounge'] },
    { name: 'Bloxival Voyager', line: 'Bloxival Cruise Line', icon: '\uD83D\uDEA2', desc: 'Adventure-focused vessel with rock climbing, surf simulators, zip lines, ropes course, and a sports complex.', decks: 16, capacity: 3800, year: 2022, features: ['Rock Wall', 'Surf Simulator', 'Zip Line', 'Sports Court', 'Adventure Zone'] },
    { name: 'Bloxival Serenity', line: 'Bloxival Cruise Line', icon: '\uD83D\uDEA2', desc: 'Adults-only luxury retreat with world-class spa, fine dining by celebrity chefs, infinity edge pool, and tranquil lounges.', decks: 14, capacity: 2100, year: 2023, features: ['Spa Sanctuary', 'Celebrity Chefs', 'Infinity Edge Pool', 'Wine Cellar', 'Sunset Lounge'] },
    { name: 'Bloxival Dawn', line: 'Bloxival Cruise Line', icon: '\uD83D\uDEA2', desc: 'Mid-sized ship for intimate coastal getaways with scenic cruising, boutique shopping, and personalized service.', decks: 12, capacity: 1800, year: 2024, features: ['Coastal Cruising', 'Boutique Shops', 'Personal Service', 'Scenic Views', 'Intimate Dining'] },
    { name: 'Bloxival Eclipse', line: 'Bloxival Cruise Line', icon: '\uD83D\uDEA2', desc: 'Revolutionary ship with a glass-domed observatory, underwater viewing lounges, and marine biology labs for educational voyages.', decks: 22, capacity: 5200, year: 2025, features: ['Glass Observatory', 'Underwater Lounge', 'Marine Lab', 'Educational Programs', 'Dome Pool'] },
    { name: 'Bloxival Odyssey', line: 'Bloxival Cruise Line', icon: '\uD83D\uDEA2', desc: 'Ultra-luxury world cruiser designed for extended voyages with palatial suites, private verandas, and butler service.', decks: 16, capacity: 2400, year: 2025, features: ['Butler Service', 'Palatial Suites', 'Private Verandas', 'World Cruising', 'Fine Art Gallery'] },
    { name: 'Bloxival Majesty', line: 'Bloxival Cruise Line', icon: '\uD83D\uDEA2', desc: 'The largest Bloxival ship ever built with 24 decks, a seven-story atrium, indoor waterfall, and the most expansive entertainment complex in the fleet.', decks: 24, capacity: 5800, year: 2025, features: ['Seven-Story Atrium', 'Indoor Waterfall', 'Mega Theater', 'Sky Track', 'Aqua Park'] },
    { name: 'Bloxival Liberty', line: 'Bloxival Cruise Line', icon: '\uD83D\uDEA2', desc: 'Freedom-class vessel with open-air promenades, al fresco dining venues, and a vibrant boardwalk with carnival games and live street performances.', decks: 18, capacity: 4400, year: 2024, features: ['Boardwalk', 'Al Fresco Dining', 'Street Performances', 'Carnival Games', 'Promenade'] },
    { name: 'Bloxival Dream', line: 'Bloxival Cruise Line', icon: '\uD83D\uDEA2', desc: 'A mid-sized luxury ship focusing on immersive destination experiences, cultural enrichment, and authentic local interactions both onboard and ashore.', decks: 14, capacity: 2600, year: 2024, features: ['Cultural Enrichment', 'Local Interactions', 'Destination Immersion', 'Art Studio', 'Culinary Lab'] },
    { name: 'Bloxney Dream', line: 'Bloxney Cruise Line', icon: '\u26F4\uFE0F', desc: 'Where imagination sets sail \u2014 themed decks, dream suites, fantasy zones, and spectacular Broadway-style shows nightly.', decks: 18, capacity: 4100, year: 2023, features: ['Themed Decks', 'Dream Suites', 'Broadway Shows', 'Fantasy Zone', 'Character Dining'] },
    { name: 'Bloxney Wonder', line: 'Bloxney Cruise Line', icon: '\u26F4\uFE0F', desc: 'Family-friendly ship with character meet-and-greets, interactive play areas, splash zones, and family suite options.', decks: 16, capacity: 3900, year: 2023, features: ['Character Meetups', 'Play Zones', 'Splash Area', 'Family Suites', 'Kids Club'] },
    { name: 'Bloxney Magic', line: 'Bloxney Cruise Line', icon: '\u26F4\uFE0F', desc: 'Enchanted voyages with immersive storytelling, illusion shows, magic labs, and a whimsical wonderland promenade.', decks: 17, capacity: 3600, year: 2024, features: ['Magic Lab', 'Illusion Show', 'Storytelling', 'Wonderland Promenade', 'Enchanted Dining'] },
    { name: 'Bloxney Star', line: 'Bloxney Cruise Line', icon: '\u26F4\uFE0F', desc: 'Broadway-caliber productions, gourmet dining by world-renowned chefs, and a stunning observation lounge with 360-degree views.', decks: 15, capacity: 3200, year: 2024, features: ['Broadway Theater', 'Chef Dining', 'Observation Lounge', 'Star Club', 'Gourmet Kitchen'] },
    { name: 'Bloxney Enchantment', line: 'Bloxney Cruise Line', icon: '\u26F4\uFE0F', desc: 'A floating fairytale with themed restaurants, castle suites, royal events, princess tea parties, and knights tournaments.', decks: 16, capacity: 3500, year: 2025, features: ['Castle Suites', 'Royal Events', 'Tea Party', 'Knight Tournament', 'Fairytale Dining'] },
    { name: 'Bloxney Voyager', line: 'Bloxney Cruise Line', icon: '\u26F4\uFE0F', desc: 'Expedition-themed ship with explorer suites, discovery labs, interactive museums, and adventure shore excursions.', decks: 14, capacity: 2800, year: 2024, features: ['Discovery Lab', 'Interactive Museum', 'Explorer Suites', 'Shore Excursions', 'Adventure Deck'] },
    { name: 'Bloxney Harmony', line: 'Bloxney Cruise Line', icon: '\u26F4\uFE0F', desc: 'Wellness-focused ship with yoga decks, meditation gardens, organic dining, spa suites, and holistic health programs.', decks: 12, capacity: 2200, year: 2025, features: ['Yoga Deck', 'Meditation Garden', 'Organic Dining', 'Spa Suites', 'Wellness Programs'] },
    { name: 'Bloxney Fantasy', line: 'Bloxney Cruise Line', icon: '\u26F4\uFE0F', desc: 'The ultimate fantasy ship with immersive virtual reality zones, holographic entertainment, dreamscape lounges, and a full-scale enchanted forest on deck.', decks: 20, capacity: 4600, year: 2025, features: ['VR Zones', 'Holographic Entertainment', 'Enchanted Forest', 'Dreamscape Lounge', 'Fantasy Suites'] },
    { name: 'Bloxney Celebration', line: 'Bloxney Cruise Line', icon: '\u26F4\uFE0F', desc: 'A festive ship dedicated to celebrations with party decks, live concert venues, street food markets, and the most vibrant nightlife in the Bloxney fleet.', decks: 16, capacity: 3800, year: 2024, features: ['Party Deck', 'Concert Venue', 'Street Food Market', 'Nightlife Complex', 'Celebration Suite'] },
    { name: 'Bloxney Discovery', line: 'Bloxney Cruise Line', icon: '\u26F4\uFE0F', desc: 'Educational adventure vessel with hands-on science labs, planetarium, marine biology center, and interactive learning experiences for curious minds of all ages.', decks: 14, capacity: 3000, year: 2024, features: ['Planetarium', 'Science Labs', 'Marine Center', 'Learning Zones', 'Discovery Theater'] },
    { name: 'Carnival Breeze', line: 'Carnival Cruise Line', icon: '\uD83D\uDEA2', desc: 'Massive water parks, comedy clubs, casual dining venues, and non-stop entertainment for every age group.', decks: 14, capacity: 3600, year: 2021, features: ['Water Park', 'Comedy Club', 'Casual Dining', 'Arcade', 'Pool Deck'] },
    { name: 'Carnival Sunshine', line: 'Carnival Cruise Line', icon: '\uD83D\uDEA2', desc: 'Refurbished classic with vibrant nightlife, new dining concepts, and upgraded staterooms throughout.', decks: 14, capacity: 3400, year: 2022, features: ['Nightclub', 'New Dining', 'Upgraded Rooms', 'Live Music', 'Casino'] },
    { name: 'Carnival Spirit', line: 'Carnival Cruise Line', icon: '\uD83D\uDEA2', desc: 'Exotic itinerary specialist with longer voyages to unique destinations and cultural immersion experiences.', decks: 14, capacity: 3200, year: 2023, features: ['Exotic Routes', 'Cultural Tours', 'Extended Cruises', 'Destination Expert', 'International Dining'] },
    { name: 'Carnival Legend', line: 'Carnival Cruise Line', icon: '\uD83D\uDEA2', desc: 'A ship built for legends with multi-story water slides, a suspended bike track, and dining venues themed after famous world cuisines.', decks: 16, capacity: 4000, year: 2024, features: ['Mega Slide', 'Bike Track', 'World Cuisine', 'Legend Lounge', 'Adventure Golf'] },
    { name: 'Carnival Pride', line: 'Carnival Cruise Line', icon: '\uD83D\uDEA2', desc: 'A ship that takes pride in its art collection, featuring original works, sculpture gardens, and a dedicated gallery space with rotating exhibitions.', decks: 12, capacity: 2800, year: 2023, features: ['Art Gallery', 'Sculpture Garden', 'Rotating Exhibits', 'Artist Studio', 'Creative Workshops'] },
    { name: 'Royal Odyssey', line: 'Royal Caribbean', icon: '\uD83D\uDEA2', desc: 'Massive ship with neighborhood concepts, ice skating rink, Broadway shows, and the tallest slide at sea.', decks: 18, capacity: 5500, year: 2021, features: ['Ice Rink', 'Neighborhoods', 'Broadway', 'Ultimate Slide', 'Central Park'] },
    { name: 'Royal Explorer', line: 'Royal Caribbean', icon: '\uD83D\uDEA2', desc: 'Expedition-focused with remote destination cruising, Zodiac landings, and onboard science laboratories.', decks: 16, capacity: 4200, year: 2022, features: ['Expedition', 'Zodiac Landings', 'Science Lab', 'Remote Routes', 'Adventure Team'] },
    { name: 'Royal Navigator', line: 'Royal Caribbean', icon: '\uD83D\uDEA2', desc: 'Quantum-class ship with skydiving simulator, robotic bartenders, and stunning panoramic ocean views.', decks: 18, capacity: 4900, year: 2024, features: ['SkyDive Sim', 'Robot Bar', 'Panoramic Views', 'North Star', 'Tech Deck'] },
    { name: 'Royal Voyager', line: 'Royal Caribbean', icon: '\uD83D\uDEA2', desc: 'The most innovative ship in the fleet with a fully enclosed sky pool, escape rooms, laser tag arena, and the first at-sea observation wheel.', decks: 20, capacity: 5800, year: 2025, features: ['Sky Pool', 'Escape Rooms', 'Laser Tag', 'Observation Wheel', 'Bionic Bar'] },
    { name: 'Royal Adventurer', line: 'Royal Caribbean', icon: '\uD83D\uDEA2', desc: 'Purpose-built for thrill-seekers with the tallest drop slide at sea, surf simulator, zip line, and a climbing wall complex.', decks: 16, capacity: 4500, year: 2023, features: ['Drop Slide', 'Surf Simulator', 'Zip Line', 'Rock Wall', 'FlowRider'] },
    { name: 'NCL Breakaway', line: 'Norwegian Cruise Line', icon: '\uD83D\uDEA2', desc: 'Freestyle dining, massive water slides, open-air dining, and the famous waterfront boardwalk.', decks: 15, capacity: 4000, year: 2021, features: ['Water Slide', 'Waterfront', 'Freestyle Dining', 'Open-Air Dining', 'Entertainment Zone'] },
    { name: 'NCL Bliss', line: 'Norwegian Cruise Line', icon: '\uD83D\uDEA2', desc: 'Alaska specialist with observation lounges, expansive ocean views, and outdoor heated haven.', decks: 15, capacity: 3800, year: 2022, features: ['Alaska Cruising', 'Observation Lounge', 'Heated Haven', 'Outdoor Dining', 'Wildlife Viewing'] },
    { name: 'NCL Prima', line: 'Norwegian Cruise Line', icon: '\uD83D\uDEA2', desc: 'Next-gen ship with infinite decks, outdoor sculpture garden, and the largest race track at sea.', decks: 17, capacity: 3500, year: 2024, features: ['Race Track', 'Sculpture Garden', 'Infinite Decks', 'Oceanwalk', 'Luxury Suites'] },
    { name: 'NCL Encore', line: 'Norwegian Cruise Line', icon: '\uD83D\uDEA2', desc: 'A showstopper with the largest go-kart track at sea, laser tag, virtual reality complex, and a full-size theater.', decks: 16, capacity: 4200, year: 2023, features: ['Go-Kart Track', 'Laser Tag', 'VR Complex', 'Full Theater', 'Observation Lounge'] },
    { name: 'NCL Escape', line: 'Norwegian Cruise Line', icon: '\uD83D\uDEA2', desc: 'Designed for the ultimate escape with a massive spa complex, adults-only sundeck, and the most complimentary dining options in the fleet.', decks: 16, capacity: 4400, year: 2022, features: ['Mandara Spa', 'Adults Sundeck', 'Complimentary Dining', 'Bourbon Bar', 'Tobacco Road'] },
    { name: 'MSC Seaview', line: 'MSC Cruises', icon: '\uD83D\uDEA2', desc: 'Mediterranean cruising with panoramic sea views, elegant Italian design, and family-friendly amenities.', decks: 14, capacity: 3500, year: 2022, features: ['Mediterranean', 'Italian Design', 'Family Zones', 'Panoramic Views', 'Gelato Bar'] },
    { name: 'MSC Meraviglia', line: 'MSC Cruises', icon: '\uD83D\uDEA2', desc: 'Stunning indoor promenade with shopping, dining, vast amenities, and the longest LED dome at sea.', decks: 14, capacity: 3700, year: 2023, features: ['LED Dome', 'Indoor Promenade', 'Shopping', 'International Dining', 'Aquapark'] },
    { name: 'MSC Euribia', line: 'MSC Cruises', icon: '\uD83D\uDEA2', desc: 'LNG-powered eco-ship with advanced sustainability, stunning Swiss design, and enhanced wellness facilities.', decks: 16, capacity: 4000, year: 2024, features: ['LNG Power', 'Eco Design', 'Swiss Design', 'Wellness Center', 'Green Tech'] },
    { name: 'MSC World', line: 'MSC Cruises', icon: '\uD83D\uDEA2', desc: 'A revolutionary world-class ship with a stunning indoor promenade, world-class spa, and the MSC signature elegance that spans seven continents.', decks: 18, capacity: 4800, year: 2025, features: ['World Promenade', 'Signature Spa', 'Global Dining', 'Entertainment Dome', 'Yacht Club'] },
    { name: 'MSC Grandiosa', line: 'MSC Cruises', icon: '\uD83D\uDEA2', desc: 'A grand-scale ship featuring a sweeping LED promenade, Galleria dining, atelier boutiques, and one of the largest spa facilities at sea.', decks: 16, capacity: 4200, year: 2023, features: ['Galleria', 'LED Promenade', 'Atelier Boutiques', 'Grand Spa', 'MSC Aurea'] },
    { name: 'Princess Emerald', line: 'Princess Cruises', icon: '\uD83D\uDEA2', desc: 'Elegant cruising with exceptional service, gourmet dining, enrichment programs, and the iconic SeaWalk.', decks: 16, capacity: 3600, year: 2022, features: ['SeaWalk', 'Enrichment', 'Gourmet Dining', 'Movies Under Stars', 'Sanctuary'] },
    { name: 'Princess Ruby', line: 'Princess Cruises', icon: '\uD83D\uDEA2', desc: 'Premium ship with boutique staterooms, specialty restaurants, and immersive destination experiences.', decks: 14, capacity: 3200, year: 2023, features: ['Boutique Rooms', 'Chef Table', 'Destination Immersion', 'Art Gallery', 'Vista Lounge'] },
    { name: 'Princess Diamond', line: 'Princess Cruises', icon: '\uD83D\uDEA2', desc: 'A jewel of the fleet featuring a stunning piazza-style atrium, authentic Italian dining, and one of the most comprehensive enrichment programs at sea.', decks: 16, capacity: 3800, year: 2024, features: ['Piazza Atrium', 'Italian Dining', 'Enrichment Program', 'Wellness Studio', 'Photo Gallery'] },
    { name: 'Princess Crown', line: 'Princess Cruises', icon: '\uD83D\uDEA2', desc: 'The crown jewel of Princess with a spectacular two-story spa, crowned with a glass-enclosed pool area and multiple premium dining venues.', decks: 18, capacity: 4200, year: 2025, features: ['Two-Story Spa', 'Glass Pool', 'Premium Dining', 'Crown Lounge', 'Sky Deck'] },
    { name: 'Disney Wish', line: 'Disney Cruise Line', icon: '\uD83D\uDEA2', desc: 'Enchanted ship with Disney storytelling, character dining, immersive zones, and the first Disney attraction at sea.', decks: 14, capacity: 4000, year: 2023, features: ['Disney Attraction', 'Character Dining', 'Immersive Zones', 'Pirate Night', 'Fireworks at Sea'] },
    { name: 'Disney Treasure', line: 'Disney Cruise Line', icon: '\uD83D\uDEA2', desc: 'Adventure-themed ship with exploration zones, jungle cruises, and worlds of wonder for every generation.', decks: 14, capacity: 4000, year: 2024, features: ['Adventure Zones', 'Jungle Cruise', 'Exploration', 'Marvel Landing', 'Star Wars Area'] },
    { name: 'Disney Magic', line: 'Disney Cruise Line', icon: '\uD83D\uDEA2', desc: 'The original Disney cruise ship reimagined with classic Disney elegance, adult-exclusive areas, and the beloved Animator\'s Palate dining experience.', decks: 12, capacity: 2800, year: 2023, features: ['Animator Palate', 'Adult Area', 'Classic Elegance', 'Disney Theater', 'Goofy Sports'] },
    { name: 'Disney Destiny', line: 'Disney Cruise Line', icon: '\uD83D\uDEA2', desc: 'A new chapter in Disney cruising with heroes and villains themed zones, a Marvel super hero area, and the most spectacular Disney dining experience ever created.', decks: 16, capacity: 4400, year: 2025, features: ['Heroes Zone', 'Villains Lounge', 'Marvel Area', 'Disney Dining', 'Superhero Training'] },
    { name: 'Costa Smeralda', line: 'Costa Cruises', icon: '\uD83D\uDEA2', desc: 'Italian flair with stunning design, authentic cuisine, and warm hospitality on an LNG-powered vessel.', decks: 14, capacity: 3500, year: 2022, features: ['Italian Design', 'Authentic Cuisine', 'LNG Power', 'Piazza Center', 'Wellness'] },
    { name: 'Costa Toscana', line: 'Costa Cruises', icon: '\uD83D\uDEA2', desc: 'Celebrating Italian regions through design, cuisine, and culture with an innovative eco-friendly profile.', decks: 14, capacity: 3600, year: 2023, features: ['Regional Design', 'Italian Cooking', 'Eco Friendly', 'Music Zone', 'Kids Area'] },
    { name: 'Costa Deliziosa', line: 'Costa Cruises', icon: '\uD83D\uDEA2', desc: 'A delightful ship focused on the sweet life with a decadent chocolate bar, gelateria, and Italian-themed entertainment throughout.', decks: 12, capacity: 2900, year: 2022, features: ['Chocolate Bar', 'Gelateria', 'Italian Entertainment', 'Squok Club', 'Grand Prix'] },
    { name: 'Costa Favolosa', line: 'Costa Cruises', icon: '\uD83D\uDEA2', desc: 'A fabulous floating palace with crystal-themed design, a stunning theater, and the most extensive wellness area in the Costa fleet.', decks: 14, capacity: 3200, year: 2023, features: ['Crystal Design', 'Grand Theater', 'Wellness Area', 'Fabulous Lounge', 'Pool Complex'] },
    { name: 'Virgin Valiant', line: 'Virgin Voyages', icon: '\uD83D\uDEA2', desc: 'Adults-only ship with bold design, wellness focus, over 20 dining venues, and transformative entertainment.', decks: 17, capacity: 3500, year: 2023, features: ['Adults Only', '20+ Dining', 'Wellness', 'Bold Design', 'Nightlife'] },
    { name: 'Virgin Resilient', line: 'Virgin Voyages', icon: '\uD83D\uDEA2', desc: 'Lady-ship with outdoor gym, tattoo parlor, drag brunch, and the most dining options per passenger at sea.', decks: 15, capacity: 3300, year: 2024, features: ['Outdoor Gym', 'Tattoo Parlor', 'Drag Brunch', 'Dining Variety', 'The Manor'] },
    { name: 'Virgin Brilliant', line: 'Virgin Voyages', icon: '\uD83D\uDEA2', desc: 'A brilliant addition to the fleet with a record-breaking outdoor gym, a stunning wellness spa, and the most innovative dining concepts yet from Virgin.', decks: 17, capacity: 3800, year: 2025, features: ['Record Gym', 'Wellness Spa', 'Innovative Dining', 'Brilliant Lounge', 'Sunset Deck'] },
    { name: 'Virgin Splendid', line: 'Virgin Voyages', icon: '\uD83D\uDEA2', desc: 'The most splendid ship in the fleet with a two-story nightclub, outdoor cinema, and a stunning red-inspired design throughout.', decks: 16, capacity: 3600, year: 2024, features: ['Two-Story Club', 'Outdoor Cinema', 'Red Design', 'Splendid Spa', 'Social Dining'] },
    { name: 'Celebrity Edge', line: 'Celebrity Cruises', icon: '\uD83D\uDEA2', desc: 'Revolutionary ship with the Magic Carpet, infinite verandas, and stunning design-forward aesthetics.', decks: 16, capacity: 3800, year: 2022, features: ['Magic Carpet', 'Infinite Veranda', 'Design Forward', 'Eden', 'Rooftop Garden'] },
    { name: 'Celebrity Beyond', line: 'Celebrity Cruises', icon: '\uD83D\uDEA2', desc: 'Expanded Edge-class with more suites, culinary excellence by Michelin-starred chefs, and spacious design.', decks: 16, capacity: 4000, year: 2023, features: ['Michelin Dining', 'Expanded Suites', 'Spa', 'Sunset Bar', 'Craftsman Design'] },
    { name: 'Celebrity Ascent', line: 'Celebrity Cruises', icon: '\uD83D\uDEA2', desc: 'The latest Edge-class ship with an expanded resort deck, upgraded suites, and a stunning new spa concept.', decks: 16, capacity: 4200, year: 2024, features: ['Resort Deck', 'Upgraded Suites', 'New Spa', 'Ascent Lounge', 'Pool Complex'] },
    { name: 'Celebrity Apex', line: 'Celebrity Cruises', icon: '\uD83D\uDEA2', desc: 'The pinnacle of modern luxury with over 30 dining venues, a spectacular theater, and design inspired by the world\'s most glamorous hotels.', decks: 18, capacity: 4400, year: 2025, features: ['30+ Dining', 'Grand Theater', 'Luxury Design', 'Apex Lounge', 'Canyon Ranch Spa'] },
    { name: 'HAL Rotterdam', line: 'Holland America Line', icon: '\uD83D\uDEA2', desc: 'Pinnacle-class ship with music immersion, culinary excellence, expansive art collection, and traditional warmth.', decks: 14, capacity: 3200, year: 2022, features: ['Music Walk', 'Art Collection', 'Culinary Council', 'World Stage', 'Explorations Cafe'] },
    { name: 'HAL Zuiderdam', line: 'Holland America Line', icon: '\uD83D\uDEA2', desc: 'Mid-sized ship with enrichment programs, cultural cruises, and intimate port access for unique itineraries.', decks: 14, capacity: 2900, year: 2021, features: ['Enrichment', 'Cultural Routes', 'Intimate Ports', 'Library', 'Digital Workshop'] },
    { name: 'HAL Nieuw Amsterdam', line: 'Holland America Line', icon: '\uD83D\uDEA2', desc: 'A tribute to New Amsterdam with a stunning Dutch-inspired design, culinary partnerships, and the signature HAL service.', decks: 14, capacity: 3100, year: 2023, features: ['Dutch Design', 'Culinary Partners', 'Lincoln Center', 'BB Kings', 'Explorations'] },
    { name: 'HAL Westerdam', line: 'Holland America Line', icon: '\uD83D\uDEA2', desc: 'Western elegance meets modern cruising with expansive public spaces, a two-level dining room, and enrichment programs focused on western coastal routes.', decks: 14, capacity: 3000, year: 2022, features: ['Western Routes', 'Two-Level Dining', 'Coastal Enrichment', 'Cinema', 'Observatory'] },
    { name: 'Crystal Serenity', line: 'Crystal Cruises', icon: '\uD83D\uDEA2', desc: 'Ultra-luxury with the highest space-per-guest ratio, six specialty restaurants, and the most spacious suites at sea.', decks: 14, capacity: 1200, year: 2024, features: ['Butler Service', 'Six Restaurants', 'Spacious Suites', 'Crystal Spa', 'Enrichment'] },
    { name: 'Crystal Symphony', line: 'Crystal Cruises', icon: '\uD83D\uDEA2', desc: 'A harmonious blend of luxury and comfort with a stunning casino, theater, and the famous Crystal wine cellar.', decks: 12, capacity: 1000, year: 2024, features: ['Wine Cellar', 'Casino', 'Theater', 'Crystal Dining', 'Pool Deck'] },
    { name: 'Crystal Endeavor', line: 'Crystal Cruises', icon: '\uD83D\uDEA2', desc: 'Ultra-luxury expedition ship with submarine, helicopters, and the most advanced exploration technology combined with Crystal\'s signature elegance.', decks: 10, capacity: 800, year: 2025, features: ['Submarine', 'Helicopter', 'Expedition Tech', 'Polar Capable', 'Exclusive Access'] },
    { name: 'Seabourn Ovation', line: 'Seabourn Cruise Line', icon: '\uD83D\uDEA2', desc: 'Intimate luxury with all-inclusive amenities, complimentary fine wines, open bars, and the renowned Seabourn service.', decks: 12, capacity: 700, year: 2024, features: ['All Inclusive', 'Fine Wines', 'Open Bars', 'Intimate Dining', 'Seabourn Square'] },
    { name: 'Seabourn Quest', line: 'Seabourn Cruise Line', icon: '\uD83D\uDEA2', desc: 'Adventure-capable luxury with expedition teams, Zodiac fleet, and the ability to reach remote polar regions in style.', decks: 12, capacity: 650, year: 2024, features: ['Expedition', 'Zodiac Fleet', 'Polar Capable', 'Adventure Team', 'Marina Deck'] },
    { name: 'Seabourn Venture', line: 'Seabourn Cruise Line', icon: '\uD83D\uDEA2', desc: 'Purpose-built expedition ship with submarines, kayaks, and a team of scientists and naturalists for immersive discovery.', decks: 10, capacity: 550, year: 2025, features: ['Submarines', 'Kayaks', 'Science Team', 'Expedition Gear', 'Polar Suites'] },
    { name: 'Oceania Marina', line: 'Oceania Cruises', icon: '\uD83D\uDEA2', desc: 'Finest cuisine at sea with the Culinary Council, bon appetit! Gourmet dining, enrichment, and spacious suites aboard a mid-sized elegance.', decks: 12, capacity: 1500, year: 2023, features: ['Culinary Council', 'Gourmet Dining', 'Enrichment', 'Canyon Ranch', 'Art Gallery'] },
    { name: 'Oceania Riviera', line: 'Oceania Cruises', icon: '\uD83D\uDEA2', desc: 'Sister to Marina with a focus on European itineraries, culinary excellence, and the relaxed elegance that Oceania is famous for.', decks: 12, capacity: 1500, year: 2024, features: ['European Routes', 'Culinary Focus', 'Relaxed Elegance', 'Private Balconies', 'Library'] },
    { name: 'Oceania Vista', line: 'Oceania Cruises', icon: '\uD83D\uDEA2', desc: 'The newest ship in the fleet with all-veranda suites, a stunning aquamarine spa, and the most extensive culinary program at sea.', decks: 14, capacity: 1800, year: 2025, features: ['All-Veranda', 'Aquamarine Spa', 'Culinary Program', 'Vista Lounge', 'Grand Dining'] },
    { name: 'Regent Splendor', line: 'Regent Seven Seas', icon: '\uD83D\uDEA2', desc: 'The most inclusive luxury ship ever built with free excursions, unlimited beverages, gourmet dining, and the largest suites in the fleet.', decks: 14, capacity: 850, year: 2024, features: ['All Inclusive', 'Free Excursions', 'Gourmet Dining', 'Largest Suites', 'Regent Spa'] },
    { name: 'Regent Explorer', line: 'Regent Seven Seas', icon: '\uD83D\uDEA2', desc: 'A world explorer with immersive itineraries, extended voyages, and the legendary Regent service that anticipates every wish.', decks: 12, capacity: 750, year: 2024, features: ['Immersive Routes', 'Extended Voyages', 'Legendary Service', 'Explorer Lounge', 'Compass Rose'] },
    { name: 'Regent Navigator', line: 'Regent Seven Seas', icon: '\uD83D\uDEA2', desc: 'The most intimate Regent ship with the highest staff-to-guest ratio, perfect for those seeking the ultimate personalized luxury experience.', decks: 10, capacity: 600, year: 2025, features: ['Intimate Luxury', 'Highest Ratio', 'Personalized Service', 'Navigator Lounge', 'Pool Deck'] },
    { name: 'Azamara Journey', line: 'Azamara Cruises', icon: '\uD83D\uDEA2', desc: 'Destination-immersive cruising with extended port stays, overnight calls, and night touring for authentic cultural experiences.', decks: 12, capacity: 900, year: 2023, features: ['Extended Ports', 'Overnight Calls', 'Night Touring', 'Cultural Immersion', 'Destination Expert'] },
    { name: 'Azamara Pursuit', line: 'Azamara Cruises', icon: '\uD83D\uDEA2', desc: 'Pursuing unique destinations with longer stays and inclusive amenities, designed for travelers who want to truly experience each port.', decks: 12, capacity: 900, year: 2024, features: ['Unique Routes', 'Inclusive Amenities', 'Port Immersion', 'White Night', 'Azamazing Evening'] },
    { name: 'Azamara Onward', line: 'Azamara Cruises', icon: '\uD83D\uDEA2', desc: 'Moving onward with refreshed spaces, new dining venues, and the same destination-focused approach that defines the Azamara experience.', decks: 12, capacity: 950, year: 2025, features: ['Refreshed Spaces', 'New Dining', 'Destination Focus', 'Onward Lounge', 'Discovery Expeditions'] },
    { name: 'Windstar Star Breeze', line: 'Windstar Cruises', icon: '\u26F5', desc: 'A motor sailing yacht with 150 guests, unfussy elegance, watersports platform, and access to intimate harbors larger ships miss.', decks: 8, capacity: 350, year: 2023, features: ['Sailing Yacht', 'Intimate Harbors', 'Watersports', 'Open Bridge', 'Casual Elegance'] },
    { name: 'Windstar Star Legend', line: 'Windstar Cruises', icon: '\u26F5', desc: 'Legendary sailing with all-suite accommodations, a watersports marina, and itineraries that explore hidden gems around the world.', decks: 8, capacity: 350, year: 2024, features: ['All-Suite', 'Marina', 'Hidden Gems', 'Sailing Experience', 'Boutique Dining'] },
    { name: 'Windstar Wind Spirit', line: 'Windstar Cruises', icon: '\u26F5', desc: 'The spirit of sailing with four masts, billowing sails, and the most intimate cruising experience available anywhere in the world.', decks: 6, capacity: 250, year: 2023, features: ['Four Masts', 'Intimate Cruising', 'Sail Experience', 'Beach Landings', 'Water Sports'] },
    { name: 'Silversea Silver Moon', line: 'Silversea Cruises', icon: '\uD83D\uDEA2', desc: 'All-suite ultra-luxury with butler service for every guest, eight dining venues, and expedition capabilities to the world\'s most remote destinations.', decks: 12, capacity: 600, year: 2024, features: ['Butler Service', 'Eight Dining', 'Expedition Ready', 'Silver Moon Spa', 'Observation Lounge'] },
    { name: 'Silversea Silver Dawn', line: 'Silversea Cruises', icon: '\uD83D\uDEA2', desc: 'A new dawn in ultra-luxury with expansive suites, global itineraries, and the personalized service that defines the Silversea experience.', decks: 12, capacity: 650, year: 2024, features: ['Expansive Suites', 'Global Routes', 'Personalized Service', 'Dawn Lounge', 'Pool Deck'] },
    { name: 'Silversea Silver Nova', line: 'Silversea Cruises', icon: '\uD83D\uDEA2', desc: 'Revolutionary asymmetrical design with floor-to-ceiling windows, horizontal layout, and unprecedented indoor-outdoor flow for the ultimate luxury experience.', decks: 10, capacity: 550, year: 2025, features: ['Asymmetrical Design', 'Floor-to-Ceiling', 'Horizontal Layout', 'Indoor-Outdoor', 'Nova Spa'] },
    { name: 'Cunard Queen Mary 2', line: 'Cunard Line', icon: '\uD83D\uDEA2', desc: 'The most famous ocean liner in the world, the only ship offering regular transatlantic crossings with a kennel, planetarium, and the largest library at sea.', decks: 16, capacity: 3200, year: 2022, features: ['Transatlantic', 'Kennel', 'Planetarium', 'Largest Library', 'Queen\'s Room'] },
    { name: 'Cunard Queen Victoria', line: 'Cunard Line', icon: '\uD83D\uDEA2', desc: 'Victorian-inspired elegance with a stunning Grand Lobby, authentic afternoon tea, and classic British sophistication throughout.', decks: 12, capacity: 2200, year: 2023, features: ['Grand Lobby', 'Afternoon Tea', 'British Elegance', 'Victorian Design', 'Royal Court'] },
    { name: 'Cunard Queen Elizabeth', line: 'Cunard Line', icon: '\uD83D\uDEA2', desc: 'A tribute to the golden age of ocean travel with art deco design, a traditional gentlemen\'s club, and the finest British service at sea.', decks: 12, capacity: 2300, year: 2024, features: ['Art Deco', 'Gentlemen Club', 'British Service', 'Golden Age', 'Queens Grill'] },
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
    { text: 'Crystal Serenity is worth every penny. Butler service, incredible dining, and the suites are enormous.', author: 'LuxuryLover', stars: 5, line: 'Crystal Cruises' },
    { text: 'Windstar Star Breeze is a dream. Sailing into small ports with just 200 guests feels so exclusive.', author: 'SailAway_RBLX', stars: 5, line: 'Windstar Cruises' },
    { text: 'Azamara Journey stays in port overnight! We got to experience the nightlife in every city.', author: 'NightOwl_RBLX', stars: 4, line: 'Azamara Cruises' },
    { text: 'Regent Splendor is truly all-inclusive. Never pulled out my wallet once!', author: 'AllInclusiveFan', stars: 5, line: 'Regent Seven Seas' },
    { text: 'QM2 transatlantic crossing was the most elegant experience of my life. White glove service!', author: 'ClassicCruiser', stars: 5, line: 'Cunard Line' },
    { text: 'Norwegian Prima race track is so much fun. Go-karts at sea \u2014 who knew!', author: 'SpeedDemon', stars: 4, line: 'Norwegian Cruise Line' },
    { text: 'Costa Smeralda feels like Italy on the water. The pizza and gelato are authentic!', author: 'Italiano_RBLX', stars: 4, line: 'Costa Cruises' },
    { text: 'Silversea Silver Moon butler service is next level. They unpacked my luggage!', author: 'PamperedGuest', stars: 5, line: 'Silversea Cruises' },
    { text: 'Oceania Marina food is the best at sea. I gained 10 pounds and regret nothing!', author: 'FoodieCruiser', stars: 5, line: 'Oceania Cruises' },
    { text: 'Carnival Legend bike track overlooking the ocean is incredible. So exhilarating!', author: 'ThrillSeeker', stars: 4, line: 'Carnival Cruise Line' },
    { text: 'Royal Voyager observation wheel gives the most incredible views of the ship and ocean!', author: 'ViewLover', stars: 5, line: 'Royal Caribbean' },
    { text: 'Bloxival Majesty is UNBELIEVABLE. 24 decks, a waterfall indoors \u2014 this ship is a city!', author: 'MegaShipFan', stars: 5, line: 'Bloxival Cruise Line' },
    { text: 'Disney Treasure Marvel area made my inner child so happy. Thor\'s hammer is real!', author: 'MarvelFan_RBLX', stars: 5, line: 'Disney Cruise Line' },
    { text: 'Seabourn Ovation is so intimate and luxurious. The crew knew my name by day two.', author: 'SeaLover_RBLX', stars: 5, line: 'Seabourn Cruise Line' },
    { text: 'HAL Nieuw Amsterdam Lincoln Center concerts are world-class. Classical music at sea!', author: 'CultureVulture', stars: 4, line: 'Holland America Line' },
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
    { name: 'Tropical Breeze Atoll', icon: '\uD83C\uDF3A', region: 'South Pacific', desc: 'A pristine atoll with crystal-clear lagoons, coral reefs, overwater bungalows, and beachfront dining.', lines: ['Bloxival Cruise Line', 'Princess Cruises'] },
    { name: 'Heritage Harbor', icon: '\uD83C\uDFF4', region: 'Europe', desc: 'A historic port city with cobblestone streets, medieval castles, and authentic local cuisine experiences.', lines: ['Holland America Line', 'Cunard Line', 'Azamara Cruises'] },
    { name: 'Solaris Coast', icon: '\u2600\uFE0F', region: 'Greek Isles', desc: 'Sun-drenched Greek islands with whitewashed buildings, ancient ruins, and stunning turquoise waters.', lines: ['MSC Cruises', 'Celebrity Cruises', 'Costa Cruises'] },
    { name: 'Aurora Glacier Bay', icon: '\uD83E\uDDCA', region: 'Alaska', desc: 'Majestic glaciers calving into crystal waters with whale watching, kayaking, and incredible wildlife encounters.', lines: ['Bloxival Cruise Line', 'Norwegian Cruise Line', 'Holland America Line'] },
  ],
  timeline: [
    { year: 2020, title: 'Royal Caribbean Launches', desc: 'Royal Caribbean opens its first virtual ship in Roblox, setting the standard for cruise innovation.' },
    { year: 2021, title: 'Carnival & NCL Join the Seas', desc: 'Carnival Cruise Line and Norwegian Cruise Line launch their first Roblox vessels, expanding cruise variety.' },
    { year: 2022, title: 'Bloxival Cruise Line Founded', desc: 'Bloxival launches with the flagship Bloxival Splendor, redefining luxury cruising in the Roblox universe.' },
    { year: 2022, title: 'MSC & Princess Arrive', desc: 'MSC Cruises and Princess Cruises join the CSS lineup, bringing European elegance to the fleet.' },
    { year: 2023, title: 'Bloxney Cruise Line Founded', desc: 'Bloxney launches with the magical Bloxney Dream, introducing themed family cruising to Roblox.' },
    { year: 2023, title: 'Disney Wish Sets Sail', desc: 'Disney Cruise Line arrives with the spectacular Disney Wish, featuring fireworks and character experiences.' },
    { year: 2024, title: 'Next-Gen Ships Debut', desc: 'Bloxival Eclipse, Bloxney Voyager, Royal Navigator, and Virgin Resilient lead a new wave of innovation.' },
    { year: 2024, title: 'Ultra-Luxury Expansion', desc: 'Crystal, Seabourn, Oceania, Regent, and Silversea join the CSS fleet, bringing premium cruising to new heights.' },
    { year: 2025, title: 'Golden Age of CSS', desc: 'Over 20 cruise lines, 87+ ships, and millions of players exploring the seas. Bloxival Majesty and Bloxney Fantasy set new standards.' },
    { year: 2025, title: 'Bloxival Bloxney Alliance', desc: 'The two signature lines launch joint itineraries with combined fleet benefits and exclusive cross-line events.' },
    { year: 2026, title: 'Global Expansion Complete', desc: 'CSS reaches every ocean with ports on all seven continents. Windstar and Azamara open new boutique routes.' },
    { year: 2026, title: 'Record-Breaking Year', desc: 'Over 500K bookings in a single month. CSS is officially the largest cruise network in Roblox history.' },
  ],
  gallery: [
    { name: 'Bloxival Splendor', line: 'bloxival', emoji: '\uD83C\uDF0A' },
    { name: 'Bloxival Horizon', line: 'bloxival', emoji: '\u2600\uFE0F' },
    { name: 'Bloxival Voyager', line: 'bloxival', emoji: '\u26BD' },
    { name: 'Bloxival Serenity', line: 'bloxival', emoji: '\uD83C\uDFDE\uFE0F' },
    { name: 'Bloxival Dawn', line: 'bloxival', emoji: '\uD83C\uDF05' },
    { name: 'Bloxival Eclipse', line: 'bloxival', emoji: '\uD83D\uDD0D' },
    { name: 'Bloxival Odyssey', line: 'bloxival', emoji: '\uD83D\uDCA0' },
    { name: 'Bloxival Majesty', line: 'bloxival', emoji: '\uD83D\uDC51' },
    { name: 'Bloxival Liberty', line: 'bloxival', emoji: '\uD83D\uDEE5\uFE0F' },
    { name: 'Bloxival Dream', line: 'bloxival', emoji: '\u2B50' },
    { name: 'Bloxney Dream', line: 'bloxney', emoji: '\u2728' },
    { name: 'Bloxney Wonder', line: 'bloxney', emoji: '\uD83C\uDF89' },
    { name: 'Bloxney Magic', line: 'bloxney', emoji: '\uD83E\uDDE9' },
    { name: 'Bloxney Star', line: 'bloxney', emoji: '\u2B50' },
    { name: 'Bloxney Enchantment', line: 'bloxney', emoji: '\uD83C\uDF70' },
    { name: 'Bloxney Voyager', line: 'bloxney', emoji: '\uD83D\uDD0D' },
    { name: 'Bloxney Harmony', line: 'bloxney', emoji: '\uD83C\uDF3F' },
    { name: 'Bloxney Fantasy', line: 'bloxney', emoji: '\uD83C\uDF1F' },
    { name: 'Bloxney Celebration', line: 'bloxney', emoji: '\uD83C\uDF8A' },
    { name: 'Bloxney Discovery', line: 'bloxney', emoji: '\uD83D\uDD2C' },
    { name: 'Royal Odyssey', line: 'other', emoji: '\uD83C\uDFC4' },
    { name: 'Royal Explorer', line: 'other', emoji: '\uD83D\uDEE1\uFE0F' },
    { name: 'Royal Voyager', line: 'other', emoji: '\uD83C\uDFA1' },
    { name: 'Disney Wish', line: 'other', emoji: '\uD83C\uDF1F' },
    { name: 'Disney Treasure', line: 'other', emoji: '\uD83D\uDC8E' },
    { name: 'Disney Destiny', line: 'other', emoji: '\uD83D\uDD25' },
    { name: 'Virgin Valiant', line: 'other', emoji: '\uD83D\uDD25' },
    { name: 'Virgin Brilliant', line: 'other', emoji: '\u2728' },
    { name: 'Celebrity Edge', line: 'other', emoji: '\u2B50' },
    { name: 'Celebrity Ascent', line: 'other', emoji: '\uD83D\uDE80' },
    { name: 'NCL Prima', line: 'other', emoji: '\uD83C\uDFC1' },
    { name: 'NCL Encore', line: 'other', emoji: '\uD83C\uDFB5' },
    { name: 'Crystal Serenity', line: 'other', emoji: '\uD83D\uDC8E' },
    { name: 'QM2', line: 'other', emoji: '\uD83D\uDEA2' },
  ],
  crew: [
    { name: 'Captain Blox', role: 'CEO & Founder', line: 'Bloxival Cruise Line', avatar: '\u2693', bio: 'Visionary leader who founded Bloxival Cruise Line in 2022, bringing luxury cruising to the Roblox universe.' },
    { name: 'Captain Sparkle', role: 'CEO & Founder', line: 'Bloxney Cruise Line', avatar: '\u2728', bio: 'Creative mastermind behind Bloxney\'s magical themed experiences, making every voyage an enchanting adventure.' },
    { name: 'Admiral Wave', role: 'Fleet Admiral', line: 'Bloxival Cruise Line', avatar: '\uD83C\uDF0A', bio: 'Oversees all Bloxival fleet operations with 20+ years of virtual maritime experience.' },
    { name: 'Commodore Star', role: 'Operations Director', line: 'Bloxney Cruise Line', avatar: '\u2B50', bio: 'Coordinates the magical experiences across all Bloxney ships, ensuring every guest has a fairytale vacation.' },
    { name: 'Captain Fun', role: 'CEO', line: 'Carnival Cruise Line', avatar: '\uD83C\uDF89', bio: 'Knows how to throw the best parties at sea. Carnival is all about fun, and Captain Fun delivers.' },
    { name: 'Captain Royal', role: 'CEO', line: 'Royal Caribbean', avatar: '\uD83D\uDC51', bio: 'Innovation is the name of the game. Captain Royal pushes the boundaries of what\'s possible at sea.' },
    { name: 'Captain Free', role: 'CEO', line: 'Norwegian Cruise Line', avatar: '\uD83C\uDF0A', bio: 'Champion of freestyle cruising. No schedules, no rules \u2014 just pure vacation freedom.' },
    { name: 'Captain Europa', role: 'CEO', line: 'MSC Cruises', avatar: '\uD83C\uDDEE\uD83C\uDDF9', bio: 'Bringing Mediterranean elegance and European sophistication to every MSC vessel.' },
    { name: 'Captain Grace', role: 'CEO', line: 'Princess Cruises', avatar: '\uD83D\uDC78', bio: 'Elegance personified. Captain Grace ensures every Princess voyage is a refined, unforgettable experience.' },
    { name: 'Captain Magic', role: 'CEO', line: 'Disney Cruise Line', avatar: '\uD83D\uDC2D', bio: 'Making dreams come true at sea with Disney magic, character encounters, and spectacular entertainment.' },
    { name: 'Captain Italia', role: 'CEO', line: 'Costa Cruises', avatar: '\uD83C\uDF0D', bio: 'La dolce vita on the high seas! Captain Italia brings Italian passion, cuisine, and style to every voyage.' },
    { name: 'Captain Rebel', role: 'CEO', line: 'Virgin Voyages', avatar: '\uD83D\uDD25', bio: 'Challenging everything about traditional cruising. Virgin Voyages is adults-only, bold, and unapologetically different.' },
    { name: 'Captain Luxe', role: 'CEO', line: 'Celebrity Cruises', avatar: '\u2B50', bio: 'Modern luxury defined. Captain Luxe focuses on design, culinary excellence, and destination-rich itineraries.' },
    { name: 'Captain Heritage', role: 'CEO', line: 'Holland America Line', avatar: '\uD83C\uDFF4', bio: 'Preserving the rich heritage of ocean travel while embracing modern comforts and exploration.' },
    { name: 'Captain Crystal', role: 'CEO', line: 'Crystal Cruises', avatar: '\uD83D\uDC8E', bio: 'Ultra-luxury personified. Every detail matters when you sail with the world\'s most exclusive cruise line.' },
    { name: 'Captain Seabourn', role: 'CEO', line: 'Seabourn Cruise Line', avatar: '\uD83C\uDF0A', bio: 'Intimate luxury and expedition expertise. Captain Seabourn takes guests to the world\'s most remote destinations.' },
    { name: 'Master Chef Marco', role: 'Culinary Director', line: 'Oceania Cruises', avatar: '\uD83C\uDF7D\uFE0F', bio: 'World-renowned chef leading the Culinary Council, creating the finest cuisine at sea for Oceania.' },
    { name: 'Captain Regent', role: 'CEO', line: 'Regent Seven Seas', avatar: '\uD83D\uDC51', bio: 'The most inclusive luxury experience. Every excursion, every drink, every gratuity is included.' },
    { name: 'Captain Azamara', role: 'CEO', line: 'Azamara Cruises', avatar: '\uD83C\uDF1F', bio: 'Destination immersion is the priority. Extended port stays and night touring for authentic experiences.' },
    { name: 'Captain Cunard', role: 'CEO', line: 'Cunard Line', avatar: '\uD83C\uDFF4', bio: 'Carrying on the grand tradition of transatlantic ocean travel with refined British elegance and white-glove service.' },
  ],
  awards: [
    { icon: '\uD83C\uDFC6', title: 'Best Cruise Line Overall', year: 2025, line: 'Bloxival Cruise Line' },
    { icon: '\u2728', title: 'Most Magical Experience', year: 2025, line: 'Bloxney Cruise Line' },
    { icon: '\u2B50', title: 'Best New Cruise Line', year: 2024, line: 'Bloxney Cruise Line' },
    { icon: '\uD83C\uDF1F', title: 'Best Family Cruise Line', year: 2025, line: 'Disney Cruise Line' },
    { icon: '\uD83D\uDC51', title: 'Most Innovative Fleet', year: 2025, line: 'Royal Caribbean' },
    { icon: '\uD83C\uDF7D\uFE0F', title: 'Best Dining at Sea', year: 2025, line: 'Oceania Cruises' },
    { icon: '\uD83D\uDC8E', title: 'Ultra-Luxury Excellence', year: 2025, line: 'Crystal Cruises' },
    { icon: '\uD83C\uDF0A', title: 'Best Service at Sea', year: 2024, line: 'Seabourn Cruise Line' },
    { icon: '\uD83C\uDF89', title: 'Best Entertainment', year: 2024, line: 'Carnival Cruise Line' },
    { icon: '\uD83C\uDF0D', title: 'Best Itineraries', year: 2025, line: 'Azamara Cruises' },
    { icon: '\u26F5', title: 'Best Small-Ship Line', year: 2025, line: 'Windstar Cruises' },
    { icon: '\uD83C\uDF03', title: 'Best Expedition Cruising', year: 2024, line: 'Silversea Cruises' },
    { icon: '\uD83D\uDC51', title: 'Most Inclusive Luxury', year: 2025, line: 'Regent Seven Seas' },
    { icon: '\uD83C\uDFF4', title: 'Best Transatlantic Line', year: 2024, line: 'Cunard Line' },
    { icon: '\u2693', title: 'Fleet of the Year', year: 2025, line: 'Bloxival Cruise Line' },
  ],
  faq: [
    { q: 'How do I book a cruise?', a: 'Head to the Book section, enter your Roblox username, select your preferred cruise line and ship, choose a departure date, pick a cabin class, and submit. You\'ll receive instant confirmation with your reservation details.' },
    { q: 'What is the difference between Bloxival and Bloxney?', a: 'Bloxival focuses on luxury & adventure with premium amenities, while Bloxney offers magical themed family experiences with character dining, fantasy zones, and immersive storytelling.' },
    { q: 'How many cruise lines are available in CSS?', a: 'CSS currently features 20 cruise lines with over 87 ships, ranging from ultra-luxury lines like Crystal and Regent to family favorites like Disney and Carnival.' },
    { q: 'Can I change or cancel my booking?', a: 'Yes! You can modify or cancel your booking up to 48 hours before departure. Contact our support team through the chat or the booking confirmation page.' },
    { q: 'What cabin classes are available?', a: 'We offer Interior, Ocean View, Balcony, Suite, and Penthouse options. Each class provides different amenities, views, and space. Use the booking form to see pricing for each.' },
    { q: 'Are there adults-only cruise options?', a: 'Yes! Virgin Voyages is exclusively adults-only (18+). Bloxival Serenity also offers an adults-only retreat experience within the Bloxival fleet.' },
    { q: 'What dining options are available?', a: 'Dining varies by line. Most offer complimentary main dining rooms, buffets, and casual venues. Premium lines like Oceania, Crystal, and Regent include specialty dining. Check individual ship features for details.' },
    { q: 'How do I earn loyalty rewards?', a: 'Each cruise line has its own loyalty program. Book multiple cruises with the same line to earn status tiers, which unlock perks like cabin upgrades, priority boarding, and exclusive events.' },
    { q: 'What is the best cruise line for families?', a: 'Bloxney Cruise Line leads for family fun with character dining and fantasy zones. Disney Cruise Line is another excellent choice. Carnival offers fantastic value with water parks and kids clubs.' },
    { q: 'What is the best cruise line for luxury?', a: 'For ultra-luxury, consider Crystal Cruises, Regent Seven Seas, or Silversea for all-inclusive experiences with butler service. Seabourn offers intimate luxury, while Oceania leads in culinary excellence.' },
    { q: 'Do I need a Roblox account to book?', a: 'Yes! Your Roblox username is required for booking to confirm your reservation in-game. Make sure to double-check your spelling before submitting.' },
    { q: 'What activities are available on board?', a: 'Activities vary by ship but can include water parks, rock climbing, surf simulators, Broadway shows, comedy clubs, spas, fitness centers, cooking classes, kids clubs, and more.' },
    { q: 'Can I visit the ship before booking?', a: 'You can explore any ship in the Gallery section! Click on ship cards to see detailed information including deck count, capacity, features, and full descriptions.' },
    { q: 'How do I compare different cruise lines?', a: 'Use the Compare section to see all cruise lines side by side with stats on ships, decks, pricing, ratings, and founding year. The comparison bar chart makes it easy to visualize differences.' },
    { q: 'Are there job opportunities in CSS?', a: 'Yes! CSS is always looking for crew members. Check the Crew section to meet our leadership team. Contact us through the chat for information on current openings.' },
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
    <div class="cruise-card" style="--accent: ${l.color}" onclick="scrollToSection('lines')">
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
      <div class="line-card ${isFeatured}">
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
    <p>Roblox: <strong>${user}</strong></p>
    <p>Ship: ${shipData ? shipData.icon : '\uD83D\uDEA2'} ${ship} — ${line}</p>
    <p>Date: ${new Date(date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
    <p>Guests: ${pax} · Cabin: ${cabin}</p>
    ${requests ? `<p>Note: ${requests}</p>` : ''}
    <p>Booking Confirmed! See you on board!</p>
  `;
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
      <div class="ship-card" onclick="openShipModal('${s.name.replace(/'/g, "\\'")}')">
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
    btn.textContent = `${line ? line.icon : '\uD83D\uDEA2'} ${name.replace(' Cruise Line', '')}`;
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

/* ─── Crew ─── */
function renderCrew() {
  const grid = document.getElementById('crewGrid');
  if (!grid) return;
  grid.innerHTML = data.crew.map(c => `
    <div class="crew-card">
      <div class="crew-avatar">${c.avatar}</div>
      <h3>${c.name}</h3>
      <div class="crew-role">${c.role} · ${c.line.replace(' Cruise Line', '')}</div>
      <p class="crew-bio">${c.bio}</p>
    </div>
  `).join('');
}

/* ─── Awards ─── */
function renderAwards() {
  const grid = document.getElementById('awardsGrid');
  if (!grid) return;
  grid.innerHTML = data.awards.map(a => `
    <div class="award-card">
      <div class="award-icon">${a.icon}</div>
      <h3>${a.title}</h3>
      <div class="award-desc">${a.line}</div>
      <div class="award-year">${a.year}</div>
    </div>
  `).join('');
}

/* ─── FAQ ─── */
function renderFAQ() {
  const container = document.getElementById('faqContainer');
  if (!container) return;
  container.innerHTML = data.faq.map((f, i) => `
    <div class="faq-item" onclick="this.classList.toggle('open')">
      <div class="faq-q">
        <span>${f.q}</span>
        <span class="faq-icon">+</span>
      </div>
      <div class="faq-a">${f.a}</div>
    </div>
  `).join('');
}

/* ─── Reviews ─── */
let reviewIndex = 0;

function renderReviews() {
  const track = document.getElementById('reviewsTrack');
  track.innerHTML = data.reviews.map(r => `
    <div class="review-card">
      <div class="review-stars">${'\u2605'.repeat(r.stars)}${'\u2606'.repeat(5 - r.stars)}</div>
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
    <div class="destination-card">
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
          <td>${l.tag === 'bloxival' ? '\u2693 Signature' : l.tag === 'bloxney' ? '\u2728 Signature' : 'Standard'}</td>
        </tr>
      `).join('')}
    </tbody>
  `;
}

function renderCompareBars() {
  const container = document.getElementById('compareBars');
  if (!container) return;
  const max = Math.max(...data.lines.map(l => l.ships));
  container.innerHTML = data.lines.slice(0, 10).map(l => `
    <div class="compare-row">
      <span class="compare-label">${l.icon} ${l.name}</span>
      <div class="compare-bar-track">
        <div class="compare-bar-fill" style="width:${(l.ships / max) * 100}%;background:${l.color}"></div>
      </div>
      <span class="compare-value">${l.ships}</span>
    </div>
  `).join('');
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

/* ─── Loading ─── */
function initLoading() {
  const screen = document.getElementById('loadingScreen');
  setTimeout(() => screen.classList.add('hidden'), 2200);
}

function animateLoadingText() {
  const el = document.getElementById('loadingText');
  const texts = ['Loading fleet data...', 'Charting courses...', 'Preparing cabins...', 'Almost ready...', 'Welcome aboard!'];
  let i = 0;
  const interval = setInterval(() => {
    i = (i + 1) % texts.length;
    if (el) el.textContent = texts[i];
  }, 400);
  setTimeout(() => clearInterval(interval), 2200);
}

/* ─── Theme ─── */
function initTheme() {
  const toggle = document.getElementById('themeToggle');
  const isLight = localStorage.getItem('css-theme') === 'light';
  if (isLight) document.body.classList.add('light');
  toggle.addEventListener('click', () => {
    document.body.classList.toggle('light');
    localStorage.setItem('css-theme', document.body.classList.contains('light') ? 'light' : 'dark');
  });
}

/* ─── Parallax ─── */
function initParallax() {
  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    const hero = document.querySelector('.hero-bg');
    if (hero) hero.style.transform = `translateY(${y * 0.3}px)`;
  });
}

/* ─── Notification ─── */
function showNotification(msg) {
  const el = document.getElementById('notification');
  el.textContent = msg;
  el.classList.add('show');
  clearTimeout(el._t);
  el._t = setTimeout(() => el.classList.remove('show'), 3000);
}

/* ─── Confetti ─── */
function fireConfetti() {
  const container = document.getElementById('confettiContainer');
  const colors = ['#E2231A', '#FFD700', '#00A2FF', '#00FF85', '#ff6b6b', '#f9c74f', '#90e0ef'];
  for (let i = 0; i < 60; i++) {
    const piece = document.createElement('div');
    piece.className = 'confetti-piece';
    piece.style.cssText = `
      left: ${Math.random() * 100}%;
      background: ${colors[Math.floor(Math.random() * colors.length)]};
      width: ${6 + Math.random() * 8}px;
      height: ${6 + Math.random() * 8}px;
      animation-delay: ${Math.random() * 2}s;
      animation-duration: ${2 + Math.random() * 2}s;
      border-radius: ${Math.random() > 0.5 ? '50%' : '2px'};
    `;
    container.appendChild(piece);
  }
  setTimeout(() => container.innerHTML = '', 4000);
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

/* ─── Carousel ─── */
function initSpotlight() {
  const items = document.querySelectorAll('.spotlight-card');
  if (!items.length) return;
  let idx = 0;
  items[0].classList.add('active');
  setInterval(() => {
    items.forEach(i => i.classList.remove('active'));
    idx = (idx + 1) % items.length;
    items[idx].classList.add('active');
  }, 5000);
}

/* ─── Countdown ─── */
function startCountdown() {
  const el = document.getElementById('countdownTimer');
  if (!el) return;
  const target = new Date();
  target.setDate(target.getDate() + (target.getDay() <= 4 ? 4 - target.getDay() : 11 - target.getDay()));
  target.setHours(23, 59, 59, 0);
  function tick() {
    const diff = target - new Date();
    if (diff <= 0) return;
    const d = Math.floor(diff / 86400000);
    const h = Math.floor((diff % 86400000) / 3600000);
    const m = Math.floor((diff % 3600000) / 60000);
    const s = Math.floor((diff % 60000) / 1000);
    el.textContent = `${d}d ${h}h ${m}m ${s}s`;
  }
  tick();
  setInterval(tick, 1000);
}

/* ─── Card Tilt ─── */
function initCardTilt() {
  document.querySelectorAll('.cruise-card, .line-card, .ship-card').forEach(card => {
    card.addEventListener('mousemove', e => {
      const r = card.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      card.style.transform = `perspective(1000px) rotateY(${x * 6}deg) rotateX(${y * -6}deg) translateZ(10px)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg) translateZ(0)';
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
    showNotification('\u2709\uFE0F Subscribed! Welcome aboard!');
    input.value = '';
  });
}

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
    return `Price overview (starting prices):\n${lines}\n\nBloxival starts at $2,499 \u00B7 Bloxney starts at $2,899! Full pricing in the **Compare** section.`;
  },
  bloxival: () => {
    const ships = data.ships.filter(s => s.line === 'Bloxival Cruise Line');
    return `\u2693 **Bloxival Cruise Line** \u2014 Luxury & adventure!\nCEO: ${data.lines[0].ceo} \u00B7 HQ: ${data.lines[0].hq}\nShips (${ships.length}):\n${ships.map(s => `\u2022 ${s.icon} ${s.name} (${s.decks} decks, ${s.capacity} capacity)`).join('\n')}\n\nFlagship: **Bloxival Splendor** \u2014 18 decks of luxury!`;
  },
  bloxney: () => {
    const ships = data.ships.filter(s => s.line === 'Bloxney Cruise Line');
    return `\u2728 **Bloxney Cruise Line** \u2014 Magical themed voyages!\nCEO: ${data.lines[1].ceo} \u00B7 HQ: ${data.lines[1].hq}\nShips (${ships.length}):\n${ships.map(s => `\u2022 ${s.icon} ${s.name} (${s.decks} decks, ${s.capacity} capacity)`).join('\n')}\n\nFlagship: **Bloxney Dream** \u2014 18 decks of magic!`;
  },
  both_lines: () => {
    return '**Bloxival vs Bloxney**\n\u2693 **Bloxival**: 10 ships, 180 total decks, from $2,499 \u2014 luxury & adventure\n\u2728 **Bloxney**: 10 ships, 172 total decks, from $2,899 \u2014 magic & imagination\n\nBoth are signature lines in CSS! Check the **Compare** section for full details.';
  },
  crew: () => {
    const top = data.lines.slice(0, 4).map(l => `${l.icon} ${l.name}: ${l.ceo} (${l.employees} crew)`).join('\n');
    return `Meet the leadership:\n${top}\n\nAsk about a specific line for more!`;
  },
  gallery: () => 'Browse the **Gallery** section above to see all 34 ship renders across Bloxival, Bloxney, and other lines! Click any ship for full details.',
  destination: () => {
    const dests = data.destinations.slice(0, 6).map(d => `${d.icon} ${d.name} (${d.region})`).join('\n');
    return `Popular destinations:\n${dests}\n\nCheck the **Destinations** section for all 16 ports of call!`;
  },
  review: () => {
    const top = data.reviews.slice(0, 3);
    return `Recent reviews:\n${top.map(r => `"${r.text}" \u2014 ${r.author} (${'\u2605'.repeat(r.stars)})`).join('\n')}\n\nSee more in the **Reviews** section!`;
  },
  feature: () => {
    const ships = [...data.ships].sort(() => Math.random() - 0.5).slice(0, 3);
    return `Coolest ship features:\n${ships.map(s => `\u2022 ${s.icon} ${s.name}: ${s.features.slice(0, 2).join(', ')}`).join('\n')}\n\nClick any ship card for all features!`;
  },
  best_line: () => {
    const sorted = [...data.lines].sort((a, b) => b.rating - a.rating || b.ships - a.ships);
    const top3 = sorted.slice(0, 3);
    return `Top cruise lines by rating:\n${top3.map((l, i) => `${i + 1}. ${l.icon} ${l.name} \u2014 ${l.rating} stars, ${l.ships} ships`).join('\n')}\n\nCrystal & Regent lead with 4.9 stars!`;
  },
  best_ship: () => {
    const sorted = [...data.ships].sort((a, b) => b.decks - a.decks || b.capacity - a.capacity);
    const top3 = sorted.slice(0, 3);
    return `Largest ships in the fleet:\n${top3.map(s => `\u2022 ${s.icon} ${s.name} (${s.decks} decks, ${s.capacity} capacity) \u2014 ${s.line}`).join('\n')}\n\nBloxival Majesty leads with 24 decks!`;
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
    return `Ships with most decks:\n${top.map(s => `${s.icon} ${s.name} \u2014 ${s.decks} decks (${s.line})`).join('\n')}\n\nBloxival Majesty leads with 24 decks!`;
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
    return 'TweenService animations:\n```lua\nlocal TweenService = game:GetService("TweenService")\n\nlocal part = workspace.MyPart\nlocal goal = {\n  Position = Vector3.new(10, 5, 0),\n  Size = Vector3.new(6, 1, 3),\n  Transparency = 0.5,\n  Rotation = Vector3.new(0, 180, 0)\n}\nlocal tweenInfo = TweenInfo.new(\n  2,\n  Enum.EasingStyle.Quad,\n  Enum.EasingDirection.Out,\n  0,\n  false,\n  0\n)\nlocal tween = TweenService:Create(part, tweenInfo, goal)\ntween:Play()\n\n-- Common easing styles: Quad, Bounce, Elastic, Back, Exponential\n```\nTry `Enum.EasingStyle.Bounce` for fun effects!';
  },
  coding_gui: () => {
    return 'Creating GUIs:\n```lua\nlocal screenGui = Instance.new("ScreenGui")\nscreenGui.Name = "MyGUI"\nscreenGui.Parent = player:WaitForChild("PlayerGui")\n\nlocal frame = Instance.new("Frame")\nframe.Size = UDim2.new(0, 300, 0, 200)\nframe.Position = UDim2.new(0.5, -150, 0.5, -100)\nframe.BackgroundColor3 = Color3.fromRGB(30, 30, 40)\nframe.BorderColor3 = Color3.fromRGB(226, 35, 26)\nframe.BackgroundTransparency = 0.2\nframe.Parent = screenGui\n\nlocal button = Instance.new("TextButton")\nbutton.Text = "CLICK ME"\nbutton.Size = UDim2.new(0, 200, 0, 50)\nbutton.Position = UDim2.new(0.5, -100, 0.8, -25)\nbutton.Parent = screenGui\n\nbutton.MouseButton1Click:Connect(function()\n  print("Button clicked!")\nend)\n```\nAsk about TextLabels, ScrollingFrames, or UIListLayout!';
  },
  coding_remote: () => {
    return 'RemoteEvents & RemoteFunctions (Client-Server):\n```lua\n-- In ReplicatedStorage, create a RemoteEvent named "MyEvent"\n\n-- SERVER SCRIPT (in ServerScriptService)\nlocal remote = game:GetService("ReplicatedStorage"):WaitForChild("MyEvent")\n\nremote.OnServerEvent:Connect(function(player, arg1, arg2)\n  print(player.Name .. " sent: " .. arg1 .. ", " .. arg2)\n  remote:FireClient(player, "Response from server!")\nend)\n\n-- CLIENT SCRIPT (LocalScript in StarterGui)\nlocal remote = game:GetService("ReplicatedStorage"):WaitForChild("MyEvent")\n\nremote:FireServer("Hello", 42)\n\nremote.OnClientEvent:Connect(function(msg)\n  print("Server says: " .. msg)\nend)\n```\nUse RemoteFunction with :InvokeServer() for returning values!';
  },
  coding_datastore: () => {
    return 'DataStore for saving player data:\n```lua\nlocal DataStoreService = game:GetService("DataStoreService")\nlocal scoreStore = DataStoreService:GetDataStore("PlayerScores")\n\nlocal function saveData(player)\n  local data = {\n    coins = player.leaderstats.Coins.Value,\n    level = player.leaderstats.Level.Value,\n    inventory = {"sword", "potion", "shield"}\n  }\n  local success, err = pcall(function()\n    scoreStore:SetAsync(player.UserId, data)\n  end)\n  if success then print("Saved data for " .. player.Name) end\nend\n\ngame.Players.PlayerAdded:Connect(function(player)\n  local success, data = pcall(function()\n    return scoreStore:GetAsync(player.UserId)\n  end)\n  if success and data then print("Loaded data for " .. player.Name) end\nend)\n```\nAlways wrap in pcall()! 60 requests/min per player limit.';
  },
  coding_module: () => {
    return 'ModuleScript pattern:\n```lua\nlocal ShipManager = {}\n\nlocal ships = {\n  Splendor = {decks = 18, speed = 28},\n  Eclipse = {decks = 22, speed = 26},\n}\n\nfunction ShipManager:GetShip(name)\n  return ships[name]\nend\n\nfunction ShipManager:ListAll()\n  local result = {}\n  for name, data in pairs(ships) do\n    table.insert(result, name .. " (" .. data.decks .. " decks)")\n  end\n  return table.concat(result, ", ")\nend\n\nreturn ShipManager\n\n-- Use: local SM = require(path.to.ShipManager)\n```\nModuleScripts are cached -- require() returns the same instance every time!';
  },
  coding_humanoid: () => {
    return 'Character & Humanoid control:\n```lua\nlocal Players = game:GetService("Players")\nlocal player = Players.LocalPlayer\nlocal char = player.Character or player.CharacterAdded:Wait()\nlocal hum = char:WaitForChild("Humanoid")\nlocal root = char:WaitForChild("HumanoidRootPart")\n\nhum.WalkSpeed = 32\nhum.JumpPower = 70\nhum.MaxHealth = 200\n\nhum.HealthChanged:Connect(function(health)\n  if health <= 0 then print("Player died!") end\nend)\n\nroot.CFrame = CFrame.new(0, 10, 0)\n\nlocal bodyPos = Instance.new("BodyPosition")\nbodyPos.Position = Vector3.new(50, 5, 20)\nbodyPos.MaxForce = Vector3.new(4000, 4000, 4000)\nbodyPos.Parent = root\nDebris:AddItem(bodyPos, 3)\n```\nUse `player.CharacterAdded:Wait()` to safely get character after respawn!';
  },
  coding_raycast: () => {
    return 'Raycasting in Roblox:\n```lua\nlocal Workspace = game:GetService("Workspace")\n\nlocal part = workspace.MyPart\nlocal origin = part.Position\nlocal direction = Vector3.new(0, -50, 0)\n\nlocal raycastParams = RaycastParams.new()\nraycastParams.FilterType = Enum.RaycastFilterType.Blacklist\nraycastParams.FilterDescendantsInstances = {part}\n\nlocal result = Workspace:Raycast(origin, direction, raycastParams)\n\nif result then\n  print("Hit: " .. result.Instance.Name)\n  local marker = Instance.new("Part")\n  marker.Size = Vector3.new(1, 1, 1)\n  marker.Anchored = true\n  marker.Position = result.Position\n  marker.Parent = workspace\nend\n\n-- Spherecast: Workspace:Spherecast(origin, radius, direction, params)\n-- Blockcast: Workspace:Blockcast(origin, size, direction, params)\n```\nCache RaycastParams for performance!';
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
const chatClear = document.getElementById('chatClear');

chatToggle.addEventListener('click', () => {
  chatPanel.classList.add('open');
  chatToggle.classList.add('open');
  chatInput.focus();
});

chatClose.addEventListener('click', () => {
  chatPanel.classList.remove('open');
  chatToggle.classList.remove('open');
});

if (chatClear) {
  chatClear.addEventListener('click', () => {
    const msgs = chatMessages.querySelectorAll('.chat-msg:not(:first-child)');
    msgs.forEach(m => m.remove());
  });
}

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

/* ─── Music Player ─── */
function initMusicToggle() {
  const toggle = document.getElementById('musicToggle');
  const panel = document.getElementById('musicPlayer');
  const closeBtn = document.getElementById('mpClose');
  const playBtn = document.getElementById('mpPlay');
  const prevBtn = document.getElementById('mpPrev');
  const nextBtn = document.getElementById('mpNext');
  const volumeSlider = document.getElementById('mpVolume');
  const trackLabel = document.getElementById('mpTrack');
  const listEl = document.getElementById('mpList');
  if (!toggle || !panel) return;

  let playing = false;
  let trackIndex = 0;
  let audioCtx = null;
  let source = null;
  let gainNode = null;
  let filterNode = null;
  const buffers = [];

  const trackFiles = ['bgm.mp3', 'bgm2.mp3', 'bgm3.mp3', 'bgm4.mp3'];
  const trackNames = [
    'Original Graduation Song',
    'Unstoppable',
    'Another Love',
    'Under Pressure'
  ];

  function buildPlaylist() {
    listEl.innerHTML = '';
    trackNames.forEach((name, i) => {
      const item = document.createElement('div');
      item.className = 'mp-list-item' + (i === trackIndex ? ' active' : '');
      item.textContent = `${i + 1}. ${name}`;
      item.addEventListener('click', () => { if (playing) playTrack(i); else { trackIndex = i; updateUI(); } });
      listEl.appendChild(item);
    });
  }

  function updateUI() {
    trackLabel.textContent = trackNames[trackIndex];
    playBtn.textContent = playing ? '\u23F8' : '\u25B6';
    playBtn.classList.toggle('playing', playing);
    toggle.classList.toggle('playing', playing);
    toggle.textContent = playing ? '\u266B' : '\uD83C\uDFB5';
    document.querySelectorAll('.mp-list-item').forEach((el, i) => el.classList.toggle('active', i === trackIndex));
  }

  async function loadAllTracks() {
    if (buffers.length > 0) return;
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    for (const file of trackFiles) {
      try {
        const resp = await fetch(file);
        const arrayBuf = await resp.arrayBuffer();
        const buf = await audioCtx.decodeAudioData(arrayBuf);
        buffers.push(buf);
      } catch (e) {
        buffers.push(null);
      }
    }
  }

  function playTrack(index) {
    if (source) { source.onended = null; source.stop(); source.disconnect(); source = null; }
    if (!buffers[index] || !audioCtx) return;
    trackIndex = index;
    source = audioCtx.createBufferSource();
    source.buffer = buffers[index];
    source.playbackRate.value = 1.35;
    gainNode = audioCtx.createGain();
    gainNode.gain.value = (volumeSlider ? volumeSlider.value : 50) / 100 * 0.18;
    filterNode = audioCtx.createBiquadFilter();
    filterNode.type = 'highshelf';
    filterNode.frequency.value = 4000;
    filterNode.gain.value = 6;
    source.connect(filterNode);
    filterNode.connect(gainNode);
    gainNode.connect(audioCtx.destination);
    source.onended = () => {
      const next = (trackIndex + 1) % trackFiles.length;
      showNotification(`\u25B6 ${trackNames[next]} ...`);
      playTrack(next);
      updateUI();
    };
    source.start(0);
    updateUI();
  }

  function stopMusic() {
    if (source) { source.onended = null; source.stop(); source.disconnect(); source = null; }
    playing = false;
    updateUI();
  }

  async function startMusic() {
    await loadAllTracks();
    if (buffers.length === 0 || buffers.every(b => b === null)) {
      showNotification('Could not load music files');
      return;
    }
    playing = true;
    showNotification(`\u26A1 Nightcore: ${trackNames[trackIndex]} \uD83C\uDFB5`);
    playTrack(trackIndex);
  }

  toggle.addEventListener('click', () => {
    panel.classList.toggle('open');
    if (panel.classList.contains('open')) { buildPlaylist(); updateUI(); }
  });

  closeBtn.addEventListener('click', () => panel.classList.remove('open'));

  playBtn.addEventListener('click', async () => {
    if (!playing) { await startMusic(); updateUI(); }
    else { stopMusic(); showNotification('Music paused'); }
  });

  prevBtn.addEventListener('click', () => {
    if (!playing) return;
    const prev = (trackIndex - 1 + trackFiles.length) % trackFiles.length;
    showNotification(`\u25B6 ${trackNames[prev]} ...`);
    playTrack(prev);
  });

  nextBtn.addEventListener('click', () => {
    if (!playing) return;
    const next = (trackIndex + 1) % trackFiles.length;
    showNotification(`\u25B6 ${trackNames[next]} ...`);
    playTrack(next);
  });

  volumeSlider.addEventListener('input', () => {
    if (gainNode) gainNode.gain.value = volumeSlider.value / 100 * 0.18;
  });
}

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
  document.querySelectorAll('[data-reveal]').forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 80) {
      el.classList.add('revealed');
    }
  });
}

window.addEventListener('scroll', revealOnScroll);

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
      background: rgba(226,35,26,${0.04 + Math.random() * 0.08});
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
  animateLoadingText();
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
  initSpotlight();
  createParticles();

  startCountdown();

  const today = new Date().toISOString().split('T')[0];
  const dateInput = document.getElementById('departDate');
  if (dateInput) dateInput.setAttribute('min', today);

  setTimeout(animateCounters, 600);
  revealOnScroll();

  initCardTilt();
  initNewsletter();
  initMusicToggle();
});