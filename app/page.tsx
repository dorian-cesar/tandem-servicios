import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { ServicesSection } from "@/components/services-section";
import { FleetSection } from "@/components/fleet-section";
import { WhyChooseSection } from "@/components/why-choose-section";
import { AboutSection } from "@/components/about-section";
import { FAQSection } from "@/components/faq-section";
import { CotizadorSection } from "@/components/quote-section";
import { StatsSection } from "@/components/stats-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <ServicesSection />
      <WhyChooseSection />
      {/* <StatsSection /> */}
      <FleetSection />
      <AboutSection />
      <CotizadorSection />
      <FAQSection />
      <Footer />
    </main>
  );
}
