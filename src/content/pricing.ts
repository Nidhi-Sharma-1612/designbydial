import { PricingTier } from "./types";

export const pricingTiers: PricingTier[] = [
  {
    tierName: "Starter",
    price: "$999",
    cadence: "/project",
    mostPopular: false,
    features: ["Custom UI design (3 pages)", "Mobile responsive", "Basic SEO setup"],
    ctaLabel: "Get Started",
  },
  {
    tierName: "Growth",
    price: "$2,499",
    cadence: "/project",
    mostPopular: true,
    features: [
      "Everything in Starter",
      "Advanced animations",
      "Channel Manager integration",
      "CMS integration",
    ],
    ctaLabel: "Choose Growth",
  },
  {
    tierName: "Pro",
    price: "$4,000",
    cadence: "/project",
    mostPopular: false,
    features: [
      "Everything in Growth",
      "Ongoing SEO management & monthly reporting",
      "ROI & conversion analytics dashboard",
      "Priority support with quarterly strategy calls",
    ],
    ctaLabel: "Choose Pro",
  },
  {
    tierName: "Enterprise",
    price: "Custom",
    cadence: "",
    mostPopular: false,
    features: [
      "Custom web application",
      "Multi-property portfolio & 3D/immersive experiences",
      "24/7 priority support",
    ],
    ctaLabel: "Contact Sales",
  },
];
