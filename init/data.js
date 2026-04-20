const sampleListings = [
  // ✅ TRENDING
  {
    title: "Cozy Beachfront Cottage",
    description:
      "Wake up to the sound of waves in this stunning beachfront cottage. Featuring floor-to-ceiling windows with panoramic Pacific views, a private deck, and direct beach access. Perfect for couples seeking a romantic coastal escape.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 1500,
    location: "Malibu",
    country: "United States",
    category: "trending",
    geometry: { type: "Point", coordinates: [-118.7798, 34.0259] },
  },
  {
    title: "Historic Villa in Tuscany",
    description:
      "Immerse yourself in the golden hills of Tuscany in this beautifully restored 18th-century villa. Surrounded by vineyards and olive groves, featuring an outdoor terrace, wine cellar, and breathtaking sunset views over Florence.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 2500,
    location: "Florence",
    country: "Italy",
    category: "trending",
    geometry: { type: "Point", coordinates: [11.2558, 43.7696] },
  },
  {
    title: "Desert Oasis in Dubai",
    description:
      "Experience unmatched luxury in this private desert oasis on the outskirts of Dubai. Features an infinity pool overlooking golden dunes, a personal butler, outdoor fire pit, and stargazing deck.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1518684079-3c830dcef090?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 5000,
    location: "Dubai",
    country: "United Arab Emirates",
    category: "trending",
    geometry: { type: "Point", coordinates: [55.2708, 25.2048] },
  },

  // ✅ ROOMS
  {
    title: "Charming Cottage in the Cotswolds",
    description:
      "Retreat to this picture-perfect thatched-roof cottage in the heart of the Cotswolds. With exposed stone walls, a cozy fireplace, and a blooming English garden, this is countryside living at its very finest.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 1200,
    location: "Cotswolds",
    country: "United Kingdom",
    category: "rooms",
    geometry: { type: "Point", coordinates: [-1.8433, 51.8330] },
  },
  {
    title: "Cozy Room in Kyoto Machiya",
    description:
      "Stay in a traditional Japanese townhouse in the heart of Kyoto's historic Gion district. Featuring tatami floors, shoji screens, an inner garden, and a Japanese soaking tub — a serene and authentic cultural experience.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 900,
    location: "Kyoto",
    country: "Japan",
    category: "rooms",
    geometry: { type: "Point", coordinates: [135.7681, 35.0116] },
  },
  {
    title: "Historic Cottage in Charleston",
    description:
      "Experience the charm of the Old South in this lovingly restored antebellum cottage. Located in Charleston's historic district, featuring wide-plank hardwood floors, a wraparound porch, and a lush private garden.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1587381420270-3e1a5b9e6904?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 1600,
    location: "Charleston",
    country: "United States",
    category: "rooms",
    geometry: { type: "Point", coordinates: [-79.9311, 32.7765] },
  },

  // ✅ ICONIC CITIES
  {
    title: "Modern Loft in Downtown Manhattan",
    description:
      "Live like a true New Yorker in this sleek sun-drenched loft in the heart of Manhattan. Floor-to-ceiling windows frame iconic skyline views, while the open-plan interior and designer kitchen make it the perfect urban retreat.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 1200,
    location: "New York City",
    country: "United States",
    category: "iconic cities",
    geometry: { type: "Point", coordinates: [-74.0060, 40.7128] },
  },
  {
    title: "Modern Apartment in Tokyo",
    description:
      "Discover the pulse of Tokyo from this beautifully designed modern apartment in Shinjuku. Moments from world-class dining, shopping, and transport links — the ideal base to explore one of the world's most exciting cities.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1480796927426-f609979314bd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 2000,
    location: "Tokyo",
    country: "Japan",
    category: "iconic cities",
    geometry: { type: "Point", coordinates: [139.6917, 35.6895] },
  },
  {
    title: "Historic Canal House in Amsterdam",
    description:
      "Stay in a beautifully preserved 17th-century canal house in the heart of Amsterdam's UNESCO-listed canal ring. Original wooden beams, tall windows overlooking the water, and a charming houseboat view await you.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 1800,
    location: "Amsterdam",
    country: "Netherlands",
    category: "iconic cities",
    geometry: { type: "Point", coordinates: [4.9041, 52.3676] },
  },
  {
    title: "Luxury Apartment in Paris",
    description:
      "Sip morning coffee with a direct view of the Eiffel Tower from this stunning Haussmann-style apartment in the 7th arrondissement. Ornate moldings, parquet floors, and a private balcony make this quintessentially Parisian.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 2800,
    location: "Paris",
    country: "France",
    category: "iconic cities",
    geometry: { type: "Point", coordinates: [2.3522, 48.8566] },
  },

  // ✅ CASTLES
  {
    title: "Historic Castle in the Scottish Highlands",
    description:
      "Live like royalty in this magnificent 15th-century Scottish castle perched above a misty loch. Featuring a great hall with roaring fireplace, turret bedrooms, whisky library, and spectacular Highland views in every direction.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1585543805890-6051f7829f98?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 4000,
    location: "Inverness",
    country: "United Kingdom",
    category: "castles",
    geometry: { type: "Point", coordinates: [-4.2247, 57.4778] },
  },
  {
    title: "Medieval Castle in Loire Valley",
    description:
      "Sleep within the walls of a genuine medieval castle in France's magical Loire Valley. Surrounded by manicured gardens, a moat, and centuries of history — an extraordinary stay for those who dream of a fairytale escape.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1533619239233-6280475a633a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 3500,
    location: "Loire Valley",
    country: "France",
    category: "castles",
    geometry: { type: "Point", coordinates: [0.6848, 47.3941] },
  },

  // ✅ AMAZING POOLS
  {
    title: "Tropical Villa in Phuket",
    description:
      "Escape to this breathtaking hillside villa on Phuket's west coast, featuring a 20-metre infinity pool that melts into the Andaman Sea horizon. Lush tropical gardens, an outdoor sala, and a private chef make this truly unforgettable.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1470165301023-58dab8118cc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 3000,
    location: "Phuket",
    country: "Thailand",
    category: "amazing pools",
    geometry: { type: "Point", coordinates: [98.3923, 7.8804] },
  },
  {
    title: "Beachfront Bungalow in Bali",
    description:
      "Relax in this stunning beachfront bungalow on Bali's sacred Seminyak shore. The private plunge pool sits just steps from the Indian Ocean, surrounded by frangipani trees and traditional Balinese architecture.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1602391833977-358a52198938?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 1800,
    location: "Bali",
    country: "Indonesia",
    category: "amazing pools",
    geometry: { type: "Point", coordinates: [115.1889, -8.4095] },
  },
  {
    title: "Luxury Villa in the Maldives",
    description:
      "Indulge in the ultimate overwater luxury in this private villa perched above a turquoise Maldivian lagoon. Your personal glass-floor pool, direct ocean access, and butler service ensure an experience beyond imagination.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 6000,
    location: "Malé",
    country: "Maldives",
    category: "amazing pools",
    geometry: { type: "Point", coordinates: [73.5093, 4.1755] },
  },
  {
    title: "Infinity Pool Villa in Santorini",
    description:
      "Perched on the iconic caldera cliffs of Santorini, this stunning cave villa features a private infinity pool that appears to merge with the deep blue Aegean Sea. Watch the world-famous Oia sunset from your own terrace.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 3500,
    location: "Santorini",
    country: "Greece",
    category: "amazing pools",
    geometry: { type: "Point", coordinates: [25.4319, 36.3932] },
  },

  // ✅ CAMPING
  {
    title: "Mountain Retreat in Aspen",
    description:
      "Unplug completely in this secluded log cabin nestled deep in the Aspen wilderness. Surrounded by towering pines and Rocky Mountain peaks, with a wood-burning stove, hiking trails from the door, and star-filled night skies.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 1000,
    location: "Aspen",
    country: "United States",
    category: "camping",
    geometry: { type: "Point", coordinates: [-106.8175, 39.1911] },
  },
  {
    title: "Rustic Cabin by Lake Tahoe",
    description:
      "Spend your days kayaking, fishing, and hiking around the crystal-clear waters of Lake Tahoe. This cozy hand-built cabin features a wraparound deck with lake views, fire pit, and everything for the perfect outdoor escape.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 900,
    location: "Lake Tahoe",
    country: "United States",
    category: "camping",
    geometry: { type: "Point", coordinates: [-120.0324, 39.0968] },
  },
  {
    title: "Wilderness Camp in Patagonia",
    description:
      "Venture to the end of the world at this breathtaking luxury wilderness camp in Chilean Patagonia. Fall asleep to the sound of glaciers calving, wake up to condors soaring over Torres del Paine, and hike some of the world's most dramatic landscapes.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1478827536114-da961b7f86d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 2200,
    location: "Torres del Paine",
    country: "Chile",
    category: "camping",
    geometry: { type: "Point", coordinates: [-72.9270, -51.0000] },
  },

  // ✅ FARMS
  {
    title: "Safari Lodge in the Serengeti",
    description:
      "Witness the raw power of nature from this luxury tented safari lodge on the edge of the Serengeti plains. Watch the Great Migration from your private veranda, with expert game drives, sundowners, and authentic bush dining included.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 4000,
    location: "Serengeti",
    country: "Tanzania",
    category: "farms",
    geometry: { type: "Point", coordinates: [34.8888, -2.1540] },
  },
  {
    title: "Organic Farm Stay in Provence",
    description:
      "Wake up surrounded by lavender fields and olive groves at this working organic farm in the heart of Provence. Enjoy farm-to-table breakfasts, truffle hunting, wine tastings, and the timeless beauty of southern France.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 1200,
    location: "Provence",
    country: "France",
    category: "farms",
    geometry: { type: "Point", coordinates: [5.3698, 43.8367] },
  },
  {
    title: "Vineyard Estate in Napa Valley",
    description:
      "Stay at this magnificent working vineyard estate in the heart of Napa Valley wine country. Stroll through rows of cabernet vines, enjoy private tastings in the barrel room, and dine under the stars on California's finest produce.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 2800,
    location: "Napa Valley",
    country: "United States",
    category: "farms",
    geometry: { type: "Point", coordinates: [-122.2697, 38.2975] },
  },

  // ✅ ARCTIC
  {
    title: "Ski-In/Ski-Out Chalet in Swiss Alps",
    description:
      "Step directly onto the piste from this magnificent ski chalet in world-renowned Verbier resort. Featuring a private sauna, stone fireplace, panoramic alpine views, and ski storage — the ultimate winter luxury experience.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 3000,
    location: "Verbier",
    country: "Switzerland",
    category: "arctic",
    geometry: { type: "Point", coordinates: [7.2270, 46.0961] },
  },
  {
    title: "Ski Chalet in Aspen Snowmass",
    description:
      "Ski in and ski out from this world-class luxury chalet in Aspen Snowmass. Featuring a hot tub on the snow-dusted deck, a gourmet kitchen, roaring fireplace, and ski concierge — après-ski has never looked this good.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 4000,
    location: "Aspen",
    country: "United States",
    category: "arctic",
    geometry: { type: "Point", coordinates: [-106.8175, 39.1911] },
  },
  {
    title: "Aurora Cabin in Norwegian Fjords",
    description:
      "Chase the Northern Lights from this stunning glass-fronted cabin perched above a Norwegian fjord. With a heated outdoor deck, private boat, and front-row seat to nature's greatest light show — this is the Arctic at its most magical.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 2500,
    location: "Tromsø",
    country: "Norway",
    category: "arctic",
    geometry: { type: "Point", coordinates: [18.9553, 69.6496] },
  },

  // ✅ DOMES
  {
    title: "Glass Igloo Under the Northern Lights",
    description:
      "Experience the magic of Finnish Lapland from the warmth of a heated glass igloo, designed to offer unobstructed views of the Aurora Borealis from your bed. Reindeer safaris, ice fishing, and husky sleds await just outside.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 2200,
    location: "Rovaniemi",
    country: "Finland",
    category: "domes",
    geometry: { type: "Point", coordinates: [25.7294, 66.5039] },
  },
  {
    title: "Geodesic Dome in the Scottish Highlands",
    description:
      "Sleep under the stars in this luxury geodesic dome perched on a misty Highland hillside. The 360-degree transparent walls bring the dramatic Scottish landscape inside, with a wood-fired hot tub and gourmet hamper included.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1488462237308-ecaa28b729d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 1500,
    location: "Scottish Highlands",
    country: "United Kingdom",
    category: "domes",
    geometry: { type: "Point", coordinates: [-4.7057, 57.1497] },
  },
  {
    title: "Stargazing Dome in Atacama Desert",
    description:
      "Spend the night in an observatory-style glass dome in the Atacama Desert — the clearest skies on earth. With a personal telescope, astronomer guide, and heated interior, this is the ultimate stargazing experience on the planet.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1509773896068-7fd415d91e2e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 1800,
    location: "San Pedro de Atacama",
    country: "Chile",
    category: "domes",
    geometry: { type: "Point", coordinates: [-68.1993, -22.9087] },
  },

  // ✅ BOAT
  {
    title: "Private Island Retreat in Fiji",
    description:
      "Have an entire tropical island to yourself in this ultra-exclusive Fijian private island retreat. Crystal lagoons, coral reefs, white sand beaches, and a dedicated island crew ensure the most unforgettable escape on earth.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1618140052121-39fc6db33972?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 10000,
    location: "Mamanuca Islands",
    country: "Fiji",
    category: "boat",
    geometry: { type: "Point", coordinates: [177.0500, -17.6500] },
  },
  {
    title: "Luxury Houseboat in Kerala Backwaters",
    description:
      "Drift peacefully through the legendary Kerala backwaters on this beautifully appointed private houseboat. Watch village life unfold from your sun deck as you glide past paddy fields, coconut groves, and temple ghats at golden hour.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 1400,
    location: "Alleppey",
    country: "India",
    category: "boat",
    geometry: { type: "Point", coordinates: [76.3388, 9.4981] },
  },
  {
    title: "Sailing Yacht Charter in Greek Islands",
    description:
      "Explore the turquoise waters of the Aegean on this luxurious private sailing yacht. Island-hop between Mykonos, Santorini, and Paros, anchor in hidden coves, and dine on fresh seafood under a canopy of Mediterranean stars.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 5000,
    location: "Mykonos",
    country: "Greece",
    category: "boat",
    geometry: { type: "Point", coordinates: [25.3290, 37.4467] },
  },

  // ✅ OTHER
  {
    title: "Secluded Treehouse in Portland Forest",
    description:
      "Escape the ordinary in this magical treehouse retreat nestled in an ancient Douglas fir forest outside Portland. Featuring a rope bridge entrance, wood-fired hot tub, stargazing skylight, and total seclusion from the world below.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 800,
    location: "Portland",
    country: "United States",
    category: "other",
    geometry: { type: "Point", coordinates: [-122.6765, 45.5231] },
  },
  {
    title: "Cave House in Cappadocia",
    description:
      "Spend the night inside a real volcanic cave in the magical landscape of Cappadocia, Turkey. Wake up to hot air balloons drifting past your window, explore underground cities, and watch the fairy chimneys glow at sunset.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 1100,
    location: "Cappadocia",
    country: "Turkey",
    category: "other",
    geometry: { type: "Point", coordinates: [34.8307, 38.6431] },
  },
];

module.exports = { data: sampleListings };
