import Hero from "@/components/Hero";
import StatsSection from "@/components/StatsSection";
import PackagesSection from "@/components/PackagesSection";
import ExperiencesSection from "@/components/ExperiencesSection";
import WhySection from "@/components/WhySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <StatsSection />
      <PackagesSection />
      <ExperiencesSection />
      <WhySection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
    </>
  );
}
