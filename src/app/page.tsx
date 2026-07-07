import { Hero } from "@/components/sections/Hero";
import { StatsBar } from "@/components/sections/StatsBar";
import { ChannelManagerTrustBar } from "@/components/sections/ChannelManagerTrustBar";
import { ServicesSnapshot } from "@/components/sections/ServicesSnapshot";
import { PortfolioHighlight } from "@/components/sections/PortfolioHighlight";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { SavingsCalculator } from "@/components/sections/SavingsCalculator";
import { TestimonialCarousel } from "@/components/sections/TestimonialCarousel";
import { FaqPreview } from "@/components/sections/FaqPreview";
import { FinalCtaBand } from "@/components/sections/FinalCtaBand";

export default function Home() {
  return (
    <>
      <Hero />
      <StatsBar />
      <ChannelManagerTrustBar />
      <ServicesSnapshot />
      <PortfolioHighlight />
      <ProcessTimeline />
      <SavingsCalculator />
      <TestimonialCarousel />
      <FaqPreview />
      <FinalCtaBand />
    </>
  );
}
