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
    instagram: process.env.NEXT_PUBLIC_INSTAGRAM_URL || '#',
    facebook: process.env.NEXT_PUBLIC_FACEBOOK_URL || '#',
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
    name: 'Signature Hot Dogs',
    description: 'Large all-beef dogs served on toasted sub rolls.',
    items: [
      { name: 'Classic All-Beef Dog', description: 'Our signature all-beef dog on a toasted sub roll. Dress it your way.' },
      { name: 'Chicago Style', description: 'Yellow mustard, neon relish, tomato, sport peppers, pickles, celery salt. No ketchup.' },
      { name: 'Chili Cheese Dog', description: 'House chili, shredded cheddar, diced white onion.' },
      { name: 'BBQ Dog', description: 'Smoky BBQ sauce, crispy onion strings, coleslaw.' },
    ],
  },
  {
    name: 'Specialty Dogs',
    description: 'Bold flavors and creative builds.',
    items: [
      { name: 'New England Dog', description: 'Cream cheese, cucumber, everything bagel seasoning.' },
      { name: 'Bacon Cheese Dog', description: 'Crispy bacon, American cheese, deli mustard.' },
      { name: 'Spicy Dog', description: 'Jalapeños, pepper jack, sriracha mayo, diced onion.' },
    ],
  },
  {
    name: 'Sides',
    description: 'The perfect addition to any dog.',
    items: [
      { name: 'Classic Fries', description: 'Crispy golden fries, seasoned and served hot.' },
      { name: 'Loaded Fries', description: 'Fries topped with chili, cheddar, sour cream, and scallions.' },
      { name: 'Chili Cheese Fries', description: 'House chili and melted cheddar over a full order of fries.' },
    ],
  },
  {
    name: 'Chicken',
    description: 'For those who prefer poultry.',
    items: [
      { name: 'Chicken Tenders', description: 'Crispy golden tenders served with your choice of dipping sauce.' },
      { name: 'Chicken Sandwich', description: 'Crispy chicken breast, pickles, house sauce on a toasted bun.' },
    ],
  },
  {
    name: 'Drinks',
    description: 'Cold and refreshing.',
    items: [
      { name: 'Fresh Lemonade', description: 'Fresh-squeezed lemonade. Seasonal flavors available.' },
      { name: 'Bottled Water', description: 'Ice-cold bottled water.' },
      { name: 'Canned Soda', description: 'Assorted sodas.' },
    ],
  },
]

export const menuFeatured = [
  menuCategories[0].items[0],
  menuCategories[0].items[1],
  menuCategories[0].items[2],
  menuCategories[2].items[0],
  menuCategories[3].items[0],
  menuCategories[4].items[0],
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
    title: "Menu | Trolley Dogs Food Truck & Catering",
    description: "All-beef hot dogs, specialty dogs, fries, chicken, and fresh lemonade. Explore what Trolley Dogs serves at events across Greater Boston and New England.",
  },
  events: {
    title: "Upcoming Events | Find Trolley Dogs Near You",
    description: "See where Trolley Dogs food trucks are appearing next. Festivals, markets, and public events across Greater Boston, MetroWest, and Central Massachusetts.",
  },
  about: {
    title: "About Trolley Dogs | Since 1999, Northeast's #1 Food Truck",
    description: "Started in 1999 with a refurbished horse-drawn trolley replica. Now the northeast's largest food truck vendor with 4 trucks and thousands of events per year.",
  },
  book: {
    title: "Book Trolley Dogs | Catering Inquiry",
    description: "Request catering for your event. Corporate, private parties, film & TV, schools, and more. Serving Greater Boston and New England. Get in touch today.",
  },
  gallery: {
    title: "Gallery | Trolley Dogs Events & Food Truck Photos",
    description: "Photos of Trolley Dogs food trucks, events, and catering across Greater Boston and New England. See the trolley in action.",
  },
  contact: {
    title: "Contact Trolley Dogs | 781-888-2930",
    description: "Get in touch with Trolley Dogs. Call, email, or send a message. Serving Greater Boston, MetroWest, Central MA, and all of New England.",
  },
}
