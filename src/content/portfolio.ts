import { PortfolioProject } from "./types";

export const portfolioProjects: PortfolioProject[] = [
  {
    slug: "la-conciergerie-del-sol",
    projectName: "La Conciergerie Del Sol",
    category: "Coastal Apartments",
    location: "Torremolinos, Spain",
    channelManager: "Lodgify",
    challenge:
      "A concierge-managed collection of 34 apartments on the Costa del Sol needed one place for guests to browse every property and book direct.",
    solution:
      "A Lodgify-synced direct booking site with location and date search, featured stays, and a concierge-first story that sells the Andalusian experience.",
    results: [],
    heroImage: "/images/portfolio/lcdsol.jpg",
    scrollImage: { src: "/images/portfolio/lcdsol-scroll.jpg", width: 900, height: 3783 },
    liveUrl: "https://www.lcdsol.com/",
    featured: true,
  },
  {
    slug: "rentico",
    projectName: "Rentico Vacation Homes",
    category: "Luxury City Stays",
    location: "Dubai, UAE",
    channelManager: "Guesty",
    challenge:
      "A fast-growing portfolio of 20+ luxury holiday homes across Dubai wanted to win guests away from Airbnb and Booking.com with a premium, book-direct experience.",
    solution:
      "A Guesty-integrated booking site with destination search, a direct-vs-OTA price comparison, and owner-facing pages for property management leads.",
    results: [],
    heroImage: "/images/portfolio/rentico.jpg",
    scrollImage: { src: "/images/portfolio/rentico-scroll.jpg", width: 900, height: 4418 },
    liveUrl: "https://staywithrentico.com/",
    featured: true,
  },
  {
    slug: "king-rental-homes",
    projectName: "King Rental Homes",
    category: "Experiential Stays",
    location: "Massachusetts & Colorado",
    channelManager: "Other",
    challenge:
      "A family-run, multi-property operation spanning Massachusetts, Colorado, and resort partnerships across the Southeast, with bookings scattered across OTAs and no unified brand to bring guests back direct.",
    solution:
      "A warm, nature-forward direct booking site that ties the whole portfolio together under one brand, with a guest search flow built around discovery across all their locations.",
    results: [{ label: "Client feedback", value: "Finally a website that feels like us" }],
    heroImage: "/images/portfolio/kingrentalhomes.jpg",
    scrollImage: { src: "/images/portfolio/kingrentalhomes-scroll.jpg", width: 900, height: 4402 },
    liveUrl: "https://kingrentalhomes.com/",
    featured: true,
  },
  {
    slug: "xscapecation-oasis",
    projectName: "Xscapecation Oasis",
    category: "Urban Retreats",
    location: "Tulsa, OK",
    channelManager: "Other",
    challenge:
      "Three renovated rentals in Tulsa were listed across Airbnb, VRBO, Booking.com, and TripAdvisor, with no owned channel for repeat guests.",
    solution:
      "A photo-driven direct booking site with a property-level availability check, amenities, guest reviews, and a local guide to Tulsa.",
    results: [],
    heroImage: "/images/portfolio/xscapecationoasis.jpg",
    scrollImage: { src: "/images/portfolio/xscapecationoasis-scroll.jpg", width: 900, height: 3885 },
    liveUrl: "https://xscapecationoasis.com/",
    featured: false,
  },
  {
    slug: "vacay-to-the-smokies",
    projectName: "Vacay To The Smokies",
    category: "Cabin Retreats",
    location: "Gatlinburg & Pigeon Forge, TN",
    channelManager: "OwnerRez",
    challenge:
      "A family-run collection of romantic hot-tub cabins needed to stand out in one of the most crowded cabin rental markets in the country.",
    solution:
      "An OwnerRez-synced booking site built around couples' getaways, with cabin search, a Smoky Mountain guide, and a hidden-gems collection for new builds.",
    results: [],
    heroImage: "/images/portfolio/vacaytothesmokies.jpg",
    scrollImage: { src: "/images/portfolio/vacaytothesmokies-scroll.jpg", width: 900, height: 6497 },
    liveUrl: "https://www.vacaytothesmokies.com/",
    featured: false,
  },
  {
    slug: "lahaina-oceanfront-rentals",
    projectName: "Lahaina Oceanfront Rentals",
    category: "Oceanfront Condos",
    location: "Lahaina & Kaanapali, HI",
    channelManager: "Hostaway",
    challenge:
      "Oceanfront condos at The Mahana and Honua Kai needed a direct booking home that carried the hosts' personal Aloha hospitality.",
    solution:
      "A Hostaway-integrated site with live availability, transparent nightly pricing, and a founders' story that turns first-time guests into repeat bookers.",
    results: [],
    heroImage: "/images/portfolio/lahainaoceanfrontrentals.jpg",
    scrollImage: { src: "/images/portfolio/lahainaoceanfrontrentals-scroll.jpg", width: 900, height: 3696 },
    liveUrl: "https://lahainaoceanfrontrentals.com/",
    featured: false,
  },
  {
    slug: "book-vip-homes",
    projectName: "Book VIP Homes",
    category: "Extended Stays",
    location: "Texas",
    channelManager: "Hostaway",
    challenge:
      "A family-run collection of furnished homes across Texas serves vacationers, work crews, and families between homes, all with different booking needs.",
    solution:
      "A Hostaway-integrated direct booking site built around a simple promise, Book Direct. Stay VIP., with listings for short trips and extended stays alike.",
    results: [],
    heroImage: "/images/portfolio/bookviphomes.jpg",
    scrollImage: { src: "/images/portfolio/bookviphomes-scroll.jpg", width: 900, height: 4165 },
    liveUrl: "https://bookviphomes.com/",
    featured: false,
  },
];

export function getFeaturedPortfolioProjects() {
  return portfolioProjects.filter((p) => p.featured);
}

export function getPortfolioProjectBySlug(slug: string) {
  return portfolioProjects.find((p) => p.slug === slug);
}
