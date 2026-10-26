const u = (id, w = 1600) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`

export const images = {
  hero: [
    u('1501339847302-ac426a4a7cbb', 2000),
    u('1495474472287-4d71bcdd2085', 2000),
    u('1442512595331-e89e73853f31', 2000),
  ],
  interior: u('1554118811-1e0d58224f24'),
  interior2: u('1453614512568-c4024d13c247'),
  interior3: u('1521017432531-fbd92d768814'),
  interior4: u('1525610553991-2bede1a236e2'),
  barista: u('1442975631115-c4f7b05b8a2c'),
  barista2: u('1580933073521-dc49ac0d4e6a'),
  beans: u('1447933601403-0c6688de566e'),
  roasting: u('1559056199-641a0ac8b55e'),
  latteArt: u('1509042239860-f550ce710b93'),
  pour: u('1497935586351-b67a49e012bf'),
  cupDark: u('1511920170033-f8396924c348'),
  pastries: u('1555507036-ab1f4038808a'),
  cafe: u('1559925393-8be0ec4767c8'),
  cafe2: u('1600093463592-8e36ae95ef56'),
}

export const signatures = [
  {
    name: 'Zoe’s Velvet Latte',
    desc: 'Double ristretto, steamed oat milk, a whisper of Ceylon cinnamon and wild honey.',
    price: 1650,
    img: u('1541167760496-1628856ab772', 900),
    tag: 'House Favourite',
  },
  {
    name: 'Kandy Highland Pour-Over',
    desc: 'Single-origin Sri Lankan arabica, hand-poured. Notes of jaggery, citrus and cocoa.',
    price: 1850,
    img: u('1514432324607-a09d9b4aefdd', 900),
    tag: 'Single Origin',
  },
  {
    name: 'Cold Brew Tonic',
    desc: '18-hour cold brew over artisan tonic, king coconut ice and a twist of orange.',
    price: 1750,
    img: u('1461988091159-192b6df7054f', 900),
    tag: 'Refreshing',
  },
  {
    name: 'Classic Cappuccino',
    desc: 'Velvety micro-foam, our signature espresso blend and a dusting of dark cocoa.',
    price: 1350,
    img: u('1572442388796-11668a67e53d', 900),
    tag: 'Timeless',
  },
]

export const menu = {
  Coffee: [
    { name: 'Espresso', desc: 'Signature house blend, rich crema', price: 850, img: u('1461023058943-07fcbe16d735', 600) },
    { name: 'Americano', desc: 'Espresso lengthened with hot water', price: 950, img: u('1495474472287-4d71bcdd2085', 600) },
    { name: 'Flat White', desc: 'Double ristretto, silky micro-foam', price: 1350, img: u('1509042239860-f550ce710b93', 600) },
    { name: 'Cappuccino', desc: 'Equal parts espresso, milk & foam', price: 1350, img: u('1572442388796-11668a67e53d', 600) },
    { name: 'Velvet Latte', desc: 'Oat milk, Ceylon cinnamon, wild honey', price: 1650, img: u('1541167760496-1628856ab772', 600) },
    { name: 'Mocha Noir', desc: '70% dark chocolate, espresso, cream', price: 1650, img: u('1511920170033-f8396924c348', 600) },
    { name: 'Highland Pour-Over', desc: 'Single-origin Sri Lankan arabica', price: 1850, img: u('1514432324607-a09d9b4aefdd', 600) },
    { name: 'Affogato', desc: 'Vanilla bean gelato drowned in espresso', price: 1550, img: u('1442550528053-c431ecb55509', 600) },
  ],
  'Cold Drinks': [
    { name: 'Cold Brew', desc: '18-hour slow steeped, served over ice', price: 1450, img: u('1461988091159-192b6df7054f', 600) },
    { name: 'Cold Brew Tonic', desc: 'Tonic, king coconut ice, orange', price: 1750, img: u('1517701604599-bb29b565090c', 600) },
    { name: 'Iced Caramel Latte', desc: 'House salted caramel, espresso, milk', price: 1550, img: u('1517959105821-eaf2591984ca', 600) },
    { name: 'Tropical Iced Tea', desc: 'Ceylon black tea, passion fruit, mint', price: 1250, img: u('1556679343-c7306c1976bc', 600) },
  ],
  Tea: [
    { name: 'Ceylon High-Grown', desc: 'Nuwara Eliya black tea, brewed loose leaf', price: 950, img: u('1544787219-7f47ccb76574', 600) },
    { name: 'Matcha Latte', desc: 'Ceremonial grade matcha, steamed milk', price: 1550, img: u('1576092768241-dec231879fc3', 600) },
    { name: 'Masala Chai', desc: 'Spiced Ceylon tea, slow-simmered', price: 1150, img: u('1498804103079-a6351b050096', 600) },
  ],
  'Bakery & Desserts': [
    { name: 'Butter Croissant', desc: 'Laminated daily, French butter', price: 850, img: u('1555507036-ab1f4038808a', 600) },
    { name: 'Belgian Chocolate Cake', desc: 'Layered ganache, cocoa sponge', price: 1450, img: u('1578985545062-69928b1d9587', 600) },
    { name: 'Pâtisserie Selection', desc: 'Chef’s choice of three petit fours', price: 1950, img: u('1486427944299-d1955d23e34d', 600) },
    { name: 'Glazed Doughnuts', desc: 'Brioche dough, seasonal glazes', price: 750, img: u('1551024601-bec78aea704b', 600) },
    { name: 'Lounge Breakfast', desc: 'Sourdough, eggs, avocado & greens', price: 2850, img: u('1504754524776-8f4f37790ca0', 600) },
    { name: 'Cookie Trio', desc: 'Chocolate chunk, oat & sea salt', price: 950, img: u('1499636136210-6f4ee915583e', 600) },
  ],
}

export const testimonials = [
  {
    name: 'Anushka Perera',
    role: 'Food Blogger, Colombo',
    text: 'Easily the most elegant café in Colombo. The Velvet Latte is unreal, and the space feels like a quiet escape from the city.',
  },
  {
    name: 'James Whitfield',
    role: 'Traveller from London',
    text: 'I’ve had coffee across Europe, and this pour-over held its own. Beautiful interiors, warm staff, and pastries worth the trip.',
  },
  {
    name: 'Dilini Fernando',
    role: 'Regular Guest',
    text: 'My go-to for client meetings and slow Sunday mornings. Impeccable service, and every cup is crafted with real care.',
  },
  {
    name: 'Rehan Jayawardena',
    role: 'Architect',
    text: 'The design, the lighting, the music — everything is considered. Brew Lounge sets a new standard for cafés in Sri Lanka.',
  },
]

export const gallery = [
  images.interior,
  images.latteArt,
  images.pastries,
  images.interior3,
  images.barista,
  images.cafe,
  images.beans,
  images.interior4,
]

export const galleryItems = [
  { src: images.interior, cat: 'Interior', title: 'The Main Lounge' },
  { src: u('1497636577773-f1231844b336'), cat: 'Coffee', title: 'Rosetta Latte Art' },
  { src: images.pastries, cat: 'Food', title: 'Morning Croissants' },
  { src: u('1504627298434-2119d6928e93'), cat: 'Coffee', title: 'Chemex Pour-Over' },
  { src: u('1559305616-3f99cd43e353'), cat: 'Interior', title: 'Coffee Bar' },
  { src: u('1529156069898-49953e39b3ac'), cat: 'Moments', title: 'Good Company' },
  { src: images.latteArt, cat: 'Coffee', title: 'Velvet Foam' },
  { src: u('1578985545062-69928b1d9587'), cat: 'Food', title: 'Chocolate Indulgence' },
  { src: u('1507914372368-b2b085b925a1'), cat: 'Moments', title: 'Behind the Bar' },
  { src: images.interior3, cat: 'Interior', title: 'Reading Corner' },
  { src: u('1486427944299-d1955d23e34d'), cat: 'Food', title: 'Pâtisserie' },
  { src: images.beans, cat: 'Coffee', title: 'Fresh Roast' },
  { src: u('1493857671505-72967e2e2760'), cat: 'Interior', title: 'Industrial Charm' },
  { src: u('1519671482749-fd09be7ccebf'), cat: 'Moments', title: 'Celebrations' },
  { src: u('1509440159596-0249088772ff'), cat: 'Food', title: 'Artisan Breads' },
  { src: images.barista, cat: 'Coffee', title: 'The Perfect Pour' },
]

export const events = [
  {
    title: 'Jazz & Java Evenings',
    date: 'Every Friday',
    time: '7:00 PM – 10:00 PM',
    desc: 'Live jazz from Colombo’s finest musicians, paired with our evening coffee and dessert menu.',
    img: u('1511671782779-c97d3d27a1d4', 900),
    tag: 'Live Music',
  },
  {
    title: 'Coffee Cupping Masterclass',
    date: 'First Saturday Monthly',
    time: '10:00 AM – 12:00 PM',
    desc: 'Taste, smell and score single-origin coffees with our head barista. Includes a take-home bag of beans.',
    img: u('1504627298434-2119d6928e93', 900),
    tag: 'Workshop',
  },
  {
    title: 'Latte Art Workshop',
    date: 'Every Sunday',
    time: '3:00 PM – 5:00 PM',
    desc: 'Learn to pour hearts, tulips and rosettas. Small groups, hands-on with our espresso machines.',
    img: u('1497636577773-f1231844b336', 900),
    tag: 'Workshop',
  },
  {
    title: 'Ceylon Tea Tasting',
    date: 'Third Wednesday Monthly',
    time: '4:00 PM – 6:00 PM',
    desc: 'A guided journey through Sri Lanka’s seven tea regions, from Nuwara Eliya to Ruhuna.',
    img: u('1544787219-7f47ccb76574', 900),
    tag: 'Tasting',
  },
]

export const faqs = [
  ['Do I need a reservation?', 'Walk-ins are always welcome. We recommend reserving for groups of 6 or more, weekend brunch and Friday evenings.'],
  ['Do you offer vegan and gluten-free options?', 'Yes. We offer oat, almond and soy milk, and a daily selection of vegan and gluten-free pastries.'],
  ['Is there parking available?', 'Complimentary valet parking is available for guests during opening hours.'],
  ['Can I host a private event?', 'Absolutely. Our private lounge seats up to 30 guests and the full venue up to 80. See our Events page for details.'],
  ['Is Wi-Fi available?', 'Yes, high-speed Wi-Fi is free for all guests, with power outlets at most seats.'],
]

export const contact = {
  address: 'No. 25, Flower Road, Colombo 07, Sri Lanka',
  phone: '+94 77 123 4567',
  email: 'hello@brewlounge.lk',
  hours: [
    ['Monday – Friday', '7:00 AM – 10:00 PM'],
    ['Saturday', '8:00 AM – 11:00 PM'],
    ['Sunday', '8:00 AM – 10:00 PM'],
  ],
}
