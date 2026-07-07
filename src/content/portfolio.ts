import { PortfolioProject } from "./types";

export const portfolioProjects: PortfolioProject[] = [
  {
    slug: "our-whistler-retreat",
    projectName: "Our Whistler Retreat",
    category: "Mountain Retreat",
    location: "Whistler, BC",
    channelManager: "Guesty",
    challenge:
      "A boutique mountain retreat relying entirely on OTA listings, with no branded web presence and no way to capture direct bookings.",
    solution:
      "A custom-designed direct booking site synced in real time to their Guesty calendar, with a warm, editorial feel that matches the property's premium positioning.",
    results: [{ label: "Client feedback", value: "Stands out in a crowded STR market" }],
    heroImage: "/images/portfolio/our-whistler-retreat.jpg",
    liveUrl: "https://ourwhistlerretreat.com/",
    featured: true,
  },
  {
    slug: "harriscove",
    projectName: "Harriscove",
    category: "Coastal Properties",
    location: "Coastal New England",
    channelManager: "Hostaway",
    challenge:
      "Harris Cove was fully dependent on OTA traffic and wanted a performance-driven website to build a direct revenue channel.",
    solution:
      "A fast, elegant booking site with Hostaway integration, built around a clear guest journey from search to inquiry.",
    results: [{ label: "Direct inquiries", value: "+40% within 90 days" }],
    heroImage: "/images/portfolio/harriscove.jpg",
    liveUrl: "https://harriscove.com/",
    featured: true,
  },
  {
    slug: "laquell",
    projectName: "Laquell",
    category: "Brand Website",
    channelManager: "Other",
    challenge:
      "Laquell needed more than a website — a brand experience that could serve as a long-term direct booking asset.",
    solution:
      "A custom brand identity paired with a conversion-focused booking flow, designed to be a durable revenue channel rather than a one-off project.",
    results: [{ label: "Client feedback", value: "Built us a direct booking asset, not just a website" }],
    heroImage: "/images/portfolio/laquell.jpg",
    liveUrl: "https://laquell.com/",
    featured: true,
  },
  {
    slug: "qh-stays",
    projectName: "QH Stays",
    category: "Vacation Rentals",
    channelManager: "Other",
    challenge: "QH Stays wanted a website that did more than look good — one built specifically to drive bookings.",
    solution:
      "A conversion-first rebuild focused on a clear, frictionless path from landing page to booking inquiry.",
    results: [{ label: "Client feedback", value: "A website that actually drives bookings" }],
    heroImage: "/images/portfolio/qh-stays.jpg",
    liveUrl: "https://qhstays.com/",
    featured: false,
  },
];

export function getFeaturedPortfolioProjects() {
  return portfolioProjects.filter((p) => p.featured);
}

export function getPortfolioProjectBySlug(slug: string) {
  return portfolioProjects.find((p) => p.slug === slug);
}
