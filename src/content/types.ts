export type ChannelManager =
  | "Hostaway"
  | "Guesty"
  | "Guesty for Hosts"
  | "Lodgify"
  | "OwnerRez"
  | "Hostfully"
  | "Hospitable"
  | "Other";

export type ResultStat = {
  label: string;
  value: string;
};

export type PortfolioProject = {
  slug: string;
  projectName: string;
  category: string;
  location?: string;
  channelManager?: ChannelManager;
  challenge: string;
  solution: string;
  results: ResultStat[];
  heroImage: string;
  liveUrl?: string;
  featured: boolean;
};

export type Testimonial = {
  authorName: string;
  authorRole: string;
  companyName: string;
  quote: string;
  rating: number;
  serviceLine: "rental-booking";
  featured: boolean;
  highlightStat?: string;
};

export type PricingTier = {
  tierName: string;
  price: string;
  cadence: string;
  mostPopular: boolean;
  features: string[];
  ctaLabel: string;
};

export type FaqItem = {
  question: string;
  answer: string;
  pageContext: ("home" | "faq" | "services" | "pricing")[];
};

export type Stat = {
  label: string;
  value: string;
  suffix?: string;
};
