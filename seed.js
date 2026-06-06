require('dotenv').config();
const mongoose = require('mongoose');

const MONGO_URI = process.env.MONGO_URI;

const postSchema = new mongoose.Schema({
  heading: String,
  paragraph: String,
  createdAt: { type: Date, default: Date.now },
});

const Post = mongoose.model('Post', postSchema);

const posts = [
  { heading: 'What is an Air Ambulance?', paragraph: 'An air ambulance is a specially equipped aircraft used for emergency medical transport. It carries medical staff and life-saving equipment to help patients during critical situations where ground transport is too slow.' },
  { heading: 'How Charter Flights Work', paragraph: 'Charter flights are private air travel arrangements where you hire an entire aircraft for your journey. Unlike scheduled airlines, charter flights operate on your schedule and route, offering flexibility and comfort.' },
  { heading: 'Top 10 Airports in the World', paragraph: 'The worlds best airports are ranked by size, passenger volume, facilities, and overall experience. Airports like Changi in Singapore and Hamad in Qatar consistently top global rankings for their outstanding amenities.' },
  { heading: 'Private Jet Booking Guide', paragraph: 'Booking a private jet involves selecting the right aircraft size, verifying operator safety records, and confirming availability. Platforms like JetsonSky simplify this process with instant quotes and verified operators.' },
  { heading: 'Air Ambulance Services in India', paragraph: 'India has a growing network of air ambulance services covering major cities like Delhi, Mumbai, Bangalore, and Chennai. These services provide critical care transport for patients needing urgent hospital transfer.' },
  { heading: 'Airport Ground Handling Explained', paragraph: 'Ground handling refers to the services provided to aircraft on the ground including refueling, baggage handling, catering, and passenger assistance. FBOs and MROs play a key role in these operations.' },
  { heading: 'What is an FBO at an Airport?', paragraph: 'A Fixed Base Operator (FBO) is a business at an airport that provides services to general aviation aircraft. Services include fuel, hangar space, pilot lounges, and aircraft maintenance support.' },
  { heading: 'Medical Tourism and Air Ambulance', paragraph: 'Medical tourism combined with air ambulance services allows patients to travel internationally for treatments while having emergency evacuation cover. Countries like India and Thailand are popular medical tourism destinations.' },
  { heading: 'Understanding MRO Services', paragraph: 'Maintenance, Repair, and Overhaul (MRO) services ensure aircraft remain airworthy and compliant with aviation regulations. MRO providers handle everything from routine checks to major structural repairs.' },
  { heading: 'Airport Car Rental Tips', paragraph: 'Renting a car at an airport is convenient but often pricier than off-airport rentals. Booking in advance, comparing rates, and checking for hidden fees like insurance and fuel charges can save you money.' },
  { heading: 'Air Cargo Services Overview', paragraph: 'Air cargo services transport goods rapidly across the globe. Freight carriers, belly cargo on passenger flights, and dedicated freighters form the backbone of international trade and supply chains.' },
  { heading: 'Wayanad Resort Guide', paragraph: 'Wayanad in Kerala is a lush green hill station with stunning resorts nestled among tea and coffee plantations. Visitors enjoy wildlife safaris, trekking to Edakkal Caves, and boating at Banasura Sagar Dam.' },
  { heading: 'Banasura Sagar Dam – A Hidden Gem', paragraph: 'Banasura Sagar Dam in Wayanad is one of the largest earthen dams in India. The surrounding reservoir and hills make it a picturesque spot for boating and nature photography.' },
  { heading: 'Edakkal Caves History', paragraph: 'Edakkal Caves in Wayanad contain ancient petroglyphs believed to be thousands of years old. These rock carvings offer a rare glimpse into prehistoric human civilization in Kerala.' },
  { heading: 'Charter Flights for Medical Emergencies', paragraph: 'Charter flights configured for medical emergencies carry ICU-level equipment and trained medical crews. They are used when patients need rapid inter-hospital transfer that commercial airlines cannot accommodate.' },
  { heading: 'SEO for Aviation Websites', paragraph: 'Aviation websites benefit from location-specific SEO strategies. Creating pages targeting individual airports, cities, and services with proper schema markup helps these sites rank higher in Google search results.' },
  { heading: 'Google My Business for Airports', paragraph: 'Airports and airport service providers can leverage Google My Business listings to appear in local search results and Maps. Keeping information updated and collecting reviews boosts visibility significantly.' },
  { heading: 'Building High DA Backlinks', paragraph: 'High Domain Authority backlinks from trusted aviation directories, news sites, and government portals signal credibility to search engines. White hat link building involves earning these links through quality content.' },
  { heading: 'Next.js for SEO-First Web Apps', paragraph: 'Next.js is a React framework that supports Server-Side Rendering and Static Site Generation, making it the top choice for SEO-critical web applications. Pages are pre-rendered so Google can index them instantly.' },
  { heading: 'Core Web Vitals Explained', paragraph: 'Core Web Vitals are Googles key metrics for page experience including Largest Contentful Paint, First Input Delay, and Cumulative Layout Shift. Optimizing these directly improves search rankings.' },
  { heading: 'What is Schema Markup?', paragraph: 'Schema markup is structured data added to web pages that helps search engines understand the content. For aviation sites, schemas like Flight, LocalBusiness, and FAQPage can generate rich search results.' },
  { heading: 'Train Ambulance Services', paragraph: 'Train ambulance services offer a cost-effective alternative to air ambulances for non-critical long-distance patient transport. They are equipped with basic medical support and are widely used across India.' },
  { heading: 'Air Ambulance in Africa', paragraph: 'Africa has a growing demand for air ambulance services due to vast distances between medical facilities. Services operating across Kenya, Nigeria, and South Africa provide critical links in the healthcare chain.' },
  { heading: 'Karapuzha Dam – Wayanad Travel', paragraph: 'Karapuzha Dam is a serene reservoir in Wayanad surrounded by forests and farmland. It is a peaceful getaway for nature lovers and is less crowded compared to other tourist spots in the region.' },
  { heading: 'How APIs Power Travel Platforms', paragraph: 'Travel platforms use APIs to connect booking engines, inventory systems, payment gateways, and third-party vendors in real time. A well-designed API ecosystem allows businesses to scale and integrate rapidly.' },
  { heading: 'Airport Directory World Platform', paragraph: 'Airport Directory World is a comprehensive database of global airports listing terminal details, airlines, ground services, lounges, hotels, and emergency contacts for airports worldwide.' },
  { heading: 'Digital Marketing for Aviation', paragraph: 'Digital marketing for aviation involves SEO, paid ads, social media campaigns, and email marketing. Aviation brands need a multi-channel approach to reach both B2C travelers and B2B corporate clients.' },
  { heading: 'Pookode Lake Wayanad', paragraph: 'Pookode Lake is a freshwater lake in Wayanad surrounded by thick forests. Boating on the lake at sunrise with misty mountains in the background is one of the most memorable experiences in Kerala.' },
  { heading: 'Flutter for Cross-Platform Apps', paragraph: 'Flutter by Google allows developers to build a single codebase that runs natively on Android and iOS. For transport apps needing real-time GPS tracking and push notifications Flutter is an excellent choice.' },
  { heading: 'PostgreSQL vs MongoDB for Bookings', paragraph: 'PostgreSQL is ideal for structured booking data with complex relationships like users, vendors, and payments. MongoDB works well for flexible content like airport listings and unstructured service data.' },
];

async function seed() {
  await mongoose.connect(MONGO_URI, { tls: true });
  await Post.deleteMany({});
  await Post.insertMany(posts);
  console.log(`Seeded ${posts.length} posts successfully.`);
  await mongoose.disconnect();
}

seed().catch(err => {
  console.error('Seed failed:', err.message);
  process.exit(1);
});
