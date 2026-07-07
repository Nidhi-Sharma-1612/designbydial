import { FaqItem } from "./types";

export const faqs: FaqItem[] = [
  {
    question: "What makes your websites different from template-based websites?",
    answer:
      "Our websites are fully custom-designed around your brand, property, and guest experience. Unlike generic templates, your site will be unique, professionally structured, and built to reflect your business identity on your own domain.",
    pageContext: ["home", "faq"],
  },
  {
    question: "Will the website integrate with my current Channel Manager (Hostaway, Guesty, Lodgify, etc.)?",
    answer:
      "Yes. We integrate directly with your existing Channel Manager, so your availability, pricing, and bookings stay synchronized automatically in real time.",
    pageContext: ["home", "faq", "services"],
  },
  {
    question: "Do I need to stop using my current Channel Manager?",
    answer:
      "No. You can continue using your current Channel Manager exactly as you do now. The website simply connects to it and works alongside your existing system.",
    pageContext: ["faq", "services"],
  },
  {
    question: "Will I be able to receive direct bookings on my website?",
    answer:
      "Yes. Your website will allow guests to check availability and book directly through your integrated booking system, providing a smooth and professional experience.",
    pageContext: ["home", "faq"],
  },
  {
    question: "Will my website be on my own domain name?",
    answer:
      "Yes. Your website will be built on your own domain, which helps strengthen your brand identity and gives your business a more professional presence online.",
    pageContext: ["faq"],
  },
  {
    question: "Will my website be optimized for Google search?",
    answer:
      "Yes. We structure your website with proper content, layout, and technical setup so search engines can recognize and index your business effectively.",
    pageContext: ["home", "faq", "services"],
  },
  {
    question: "How long does it take to build the website?",
    answer:
      "Most websites are completed within 2–4 weeks, depending on the number of properties, content availability, and customization requirements.",
    pageContext: ["home", "faq", "pricing"],
  },
  {
    question: "Will my website work on mobile devices?",
    answer:
      "Yes. Every website we build is fully responsive, meaning it works smoothly on mobile phones, tablets, and desktops.",
    pageContext: ["faq"],
  },
  {
    question: "Can I update content or add new properties in the future?",
    answer:
      "Yes. You'll be able to update property details through your Channel Manager, and those changes will automatically reflect on your website. We also provide you with a proper Content Management System (CMS).",
    pageContext: ["faq", "services"],
  },
  {
    question: "Do you provide ongoing support after the website is completed?",
    answer:
      "Yes. We provide ongoing technical support and assistance to ensure your website continues to run smoothly.",
    pageContext: ["faq", "pricing"],
  },
  {
    question: "Why is having a custom website important for vacation rental businesses?",
    answer:
      "A custom website helps establish your brand, provides a professional online presence, and gives guests a centralized place to learn about and book your property.",
    pageContext: ["home", "faq"],
  },
];

export function getFaqsForPage(page: FaqItem["pageContext"][number]) {
  return faqs.filter((f) => f.pageContext.includes(page));
}
