import { Testimonial } from "./types";

export const testimonials: Testimonial[] = [
  {
    authorName: "Dean",
    authorRole: "Director",
    companyName: "Stay Four Peaks",
    quote:
      "DesignByDial completely transformed our online presence. Within the first 60 days of launch, we saw a +32% increase in direct bookings and a noticeable drop in OTA reliance. The website feels premium, loads quickly, and most importantly, converts. It's no longer just a website — it's a core revenue channel for our business.",
    rating: 5,
    serviceLine: "rental-booking",
    featured: true,
    highlightStat: "+32% direct bookings in 60 days",
  },
  {
    authorName: "Yvotte",
    authorRole: "Director",
    companyName: "Harris Cove",
    quote:
      "The website DesignByDial built is both elegant and performance-driven. Within 90 days, we saw a +40% increase in direct inquiries and a much higher conversion rate compared to our previous setup.",
    rating: 5,
    serviceLine: "rental-booking",
    featured: true,
    highlightStat: "+40% direct inquiries in 90 days",
  },
  {
    authorName: "Mitch",
    authorRole: "Director",
    companyName: "Salt Mount Properties",
    quote:
      "The website DesignByDial built for us is elegant, fast, and designed to convert high-value guests. Exactly what we needed.",
    rating: 5,
    serviceLine: "rental-booking",
    featured: true,
  },
  {
    authorName: "Elena Rodriguez",
    authorRole: "Director",
    companyName: "Aura",
    quote:
      "The team at DesignByDial understood our vision immediately and created a refined, high-converting website tailored to our STR business.",
    rating: 5,
    serviceLine: "rental-booking",
    featured: true,
  },
  {
    authorName: "Juliano",
    authorRole: "Director",
    companyName: "Cohostays",
    quote:
      "Zack and the team created a seamless booking journey for our guests. We've seen a significant improvement in direct inquiries since launch.",
    rating: 5,
    serviceLine: "rental-booking",
    featured: true,
  },
  {
    authorName: "Sarah Jenkins",
    authorRole: "CMO",
    companyName: "TechFlow",
    quote:
      "DesignByDial delivered a truly premium website experience. The design reflects the quality of our properties and has significantly improved our direct bookings.",
    rating: 5,
    serviceLine: "rental-booking",
    featured: false,
  },
  {
    authorName: "David Chen",
    authorRole: "Founder",
    companyName: "Orbit",
    quote:
      "We were looking for something beyond a standard template, and DesignByDial exceeded expectations. The final website feels like a luxury hospitality brand.",
    rating: 5,
    serviceLine: "rental-booking",
    featured: false,
  },
  {
    authorName: "Todd",
    authorRole: "Director",
    companyName: "King Rental Homes",
    quote:
      "From start to finish, Steven was professional, strategic, and detail-oriented. Our new website has become a key part of our growth.",
    rating: 5,
    serviceLine: "rental-booking",
    featured: false,
  },
  {
    authorName: "Joe",
    authorRole: "Director",
    companyName: "Laquell",
    quote:
      "Steve and the team delivered more than just a website — they built a direct booking asset for our business.",
    rating: 5,
    serviceLine: "rental-booking",
    featured: false,
  },
  {
    authorName: "Avigail",
    authorRole: "Director",
    companyName: "Poconos Paradise",
    quote:
      "Steve understood that we weren't looking for a template — we needed a brand experience. The final result exceeded expectations.",
    rating: 5,
    serviceLine: "rental-booking",
    featured: false,
  },
  {
    authorName: "Briee",
    authorRole: "Director",
    companyName: "Our Whistler Retreat",
    quote:
      "Dave delivered a custom website that stands out in a crowded STR market. It's elegant, fast, and clearly built with conversions in mind.",
    rating: 5,
    serviceLine: "rental-booking",
    featured: false,
  },
  {
    authorName: "Tyler",
    authorRole: "Director",
    companyName: "Signature Stays",
    quote:
      "Tyler elevated our online presence completely. The website feels polished, modern, and built specifically for high-value guests.",
    rating: 5,
    serviceLine: "rental-booking",
    featured: false,
  },
  {
    authorName: "Thomas",
    authorRole: "Director",
    companyName: "QHstays",
    quote: "Finally a website that actually drives bookings, not just looks good.",
    rating: 5,
    serviceLine: "rental-booking",
    featured: false,
  },
];

export function getFeaturedTestimonials() {
  return testimonials.filter((t) => t.featured);
}
