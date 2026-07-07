import { FaqItem, Testimonial } from "@/content/types";

const SITE_URL = "https://designbydial.com";

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Design By Dial",
    url: SITE_URL,
    logo: `${SITE_URL}/images/logo/logo-full.png`,
    email: "info@designbydial.com",
    telephone: "+1-918-238-7776",
    areaServed: "US",
    sameAs: [],
  };
}

export function professionalServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Design By Dial",
    url: `${SITE_URL}/services`,
    description:
      "Custom direct booking website design, Channel Manager integration, SEO, branding, and ongoing support for vacation rental operators.",
    areaServed: "US",
    priceRange: "$999-$$$$",
  };
}

export function faqPageSchema(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function reviewsSchema(testimonials: Testimonial[]) {
  const ratingValue =
    testimonials.reduce((sum, t) => sum + t.rating, 0) / testimonials.length;

  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Design By Dial",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: ratingValue.toFixed(1),
      reviewCount: testimonials.length,
    },
    review: testimonials.map((t) => ({
      "@type": "Review",
      author: { "@type": "Person", name: t.authorName },
      reviewRating: { "@type": "Rating", ratingValue: t.rating, bestRating: 5 },
      reviewBody: t.quote,
    })),
  };
}
