export const siteConfig = {
  name: 'Trolley Dogs',
  tagline: "Book the trolley. Feed the crowd. Make the event memorable.",
  description: "Northeast's largest food truck vendor. 4 trucks, thousands of events per year. All-beef hot dogs, catering, and public appearances across Greater Boston and New England since 1999.",
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://trolleydogsft.com',
  phone: process.env.NEXT_PUBLIC_BUSINESS_PHONE || '781-888-2930',
  email: process.env.NEXT_PUBLIC_BUSINESS_EMAIL || 'hello@trolleydogsft.com',
  bookingEmail: 'gerald@trolleydogsft.com',
  serviceArea: 'Greater Boston, MetroWest, Central MA & New England',
  established: '1999',
  logo: 'https://static.wixstatic.com/media/095f80_a0d54b2c31c44e6fadd6dcdb62188192~mv2.png/v1/fill/w_180,h_190,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/095f80_a0d54b2c31c44e6fadd6dcdb62188192~mv2.png',
  social: {
    instagram: process.env.NEXT_PUBLIC_INSTAGRAM_URL || 'https://www.instagram.com/trolley_dogs/',
    facebook: process.env.NEXT_PUBLIC_FACEBOOK_URL || 'https://www.facebook.com/BostonTrolleyDogs/',
  },
}

export const navLinks = [
  { label: 'Menu', href: '/menu' },
  { label: 'Events', href: '/events' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export const stats = [
  { value: '1999', label: 'Est.' },
  { value: '4', label: 'Trucks' },
  { value: '1,000s', label: 'Events Per Year' },
  { value: '#1', label: 'Northeast Food Truck Vendor' },
]

export const services = [
  {
    title: 'Corporate Events',
    description: 'Office lunches, company parties, client events, and team celebrations. We handle groups of 25 to 5,000+.',
  },
  {
    title: 'Film & TV Production',
    description: 'On-set catering for film and television productions. Current and past clients include major FX productions.',
  },
  {
    title: 'Private Events',
    description: 'Birthdays, graduations, weddings, and community gatherings. We bring the full experience to your venue.',
  },
  {
    title: 'Concerts & Venues',
    description: 'Vendor partnerships with major venues including the Worcester Palladium. We know how to serve a crowd.',
  },
  {
    title: 'Schools & Colleges',
    description: 'School events, college fairs, sporting tournaments, and campus activities across New England.',
  },
  {
    title: 'Public Appearances',
    description: 'Find the trolley at festivals, farmer\'s markets, and community events throughout Massachusetts.',
  },
]

export const menuCategories = [
  {
    name: 'Signature Dogs',
    description: 'Gigantic · Hand Made · Natural Casing · All Beef · Served on a Toasted Sub Roll',
    items: [
      { name: 'The Original', description: 'Plain, or your way. Build your dog however you like.' },
      { name: 'The Duke', description: 'Relish, diced onion, deli mustard.' },
      { name: 'The Duchess', description: 'Our signature caramelized onion sauce.' },
      { name: 'Chicago', description: 'Relish, diced onion, deli mustard, pickle, tomato, sport pepper.' },
      { name: 'California', description: 'Our house chili and nacho cheese.' },
      { name: 'New Yorker', description: 'Sauerkraut and deli mustard.' },
      { name: 'Western', description: 'BBQ sauce, diced onion, nacho cheese.' },
      { name: 'Tex-Mex', description: 'House salsa, diced onion, nacho cheese, jalapeño rings.' },
    ],
  },
  {
    name: 'The Dog Bowl',
    description: 'Any Trolley Dog, a different way.',
    items: [
      { name: 'Dog Bowl', description: 'Any Trolley Dog, chopped and served on a bed of golden fries. Topped with your choice of fixings. Same price as the dog.' },
    ],
  },
  {
    name: 'Chicken',
    description: 'Crispy and satisfying.',
    items: [
      { name: "Duke's Chicken Sandwich", description: 'Tomato, pickle, diced onion, hot honey & Gigi\'s sauce.' },
      { name: "Duke's Chicken Tenders", description: 'Served with your choice of buffalo, sweet & sour, or BBQ dipping sauce.' },
    ],
  },
  {
    name: 'Sides',
    description: 'The perfect addition to any dog.',
    items: [
      { name: 'Golden Fries', description: 'Grade A potatoes, cooked to order and salted. Made in 100% canola oil.' },
      { name: 'Specialty Fries', description: 'Choose from chili n\' cheese, nacho, or Western style.' },
    ],
  },
  {
    name: 'Drinks',
    description: 'Cold and refreshing.',
    items: [
      { name: 'Hand Crafted Lemonade', description: 'Fresh-squeezed. Available as Raspberry Rickey, Sea Breeze, or One Happy Island specialty blend.' },
      { name: 'Bottled Water', description: 'Iced cold.' },
    ],
  },
]

export const menuFeatured = [
  menuCategories[0].items[0], // The Original
  menuCategories[0].items[3], // Chicago
  menuCategories[0].items[4], // California
  menuCategories[3].items[0], // Golden Fries
  menuCategories[2].items[0], // Duke's Chicken Sandwich
  menuCategories[4].items[0], // Hand Crafted Lemonade
]

export const testimonials = [
  {
    quote: "Trolley Dogs has been our go-to for every company event for years. They always show up on time, the food is great, and the crew is professional.",
    author: "Sarah M.",
    role: "Corporate Event Planner",
  },
  {
    quote: "We had them at our daughter's graduation party — every single person came back for seconds. The setup was incredible and the staff was awesome.",
    author: "Tom R.",
    role: "Private Event",
  },
  {
    quote: "We've used Trolley Dogs for multiple productions. They're reliable, professional, and the crew loves them.",
    author: "Production Manager",
    role: "Film & TV Production",
  },
]

export const bookingEventTypes = [
  'Corporate Event',
  'Private Party',
  'Film / TV Production',
  'School / College Event',
  'Sporting Tournament',
  'Concert / Venue',
  'Festival',
  'Wedding',
  'Other',
]

export const seo = {
  home: {
    title: "Trolley Dogs | Food Truck Catering — Boston & New England",
    description: "Northeast's largest food truck vendor. All-beef hot dogs, full catering service, public events. 4 trucks, 1,000s of events since 1999. Book for your next event.",
  },
  menu: {
    title: "Hot Dog Menu | Trolley Dogs Food Truck Catering Boston",
    description: "All-beef hot dogs, specialty dogs, fries, chicken, and fresh-squeezed lemonade. Explore what Trolley Dogs serves at events across Greater Boston and New England.",
  },
  events: {
    title: "Upcoming Events | Trolley Dogs Food Truck — Greater Boston",
    description: "See where Trolley Dogs food trucks are appearing next. Festivals, markets, and public events across Greater Boston, MetroWest, and Central Massachusetts.",
  },
  about: {
    title: "About Trolley Dogs | Since 1999, Northeast's #1 Food Truck",
    description: "Started in 1999 with a refurbished horse-drawn trolley replica. Now the northeast's largest food truck vendor with 4 trucks and thousands of events per year.",
  },
  book: {
    title: "Book Trolley Dogs | Food Truck Catering Boston & New England",
    description: "Request food truck catering for your event. Corporate, private parties, film & TV, schools, and more. Serving Greater Boston and New England. Get in touch today.",
  },
  gallery: {
    title: "Gallery | Trolley Dogs Events & Food Truck Photos",
    description: "Photos of Trolley Dogs food trucks, events, and catering setups across Greater Boston and New England. 25+ years of events — see the trolley in action.",
  },
  contact: {
    title: "Contact Trolley Dogs | Greater Boston Food Truck Catering",
    description: "Get in touch with Trolley Dogs. Call 781-888-2930, email, or send a message. Serving Greater Boston, MetroWest, Central MA, and all of New England. Book today.",
  },
}
