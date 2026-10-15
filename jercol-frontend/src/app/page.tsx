'use client';

import { LogoIntroSplash } from '@/components/intro/LogoIntroSplash';
import { Navbar } from '@/components/navbar/Navbar';
import { HeroSection } from '@/components/hero/HeroSection';
import { MarqueeSection } from '@/components/marquees/MarqueeSection';
import { BusinessAnalyticsSection } from '@/components/analytics/BusinessAnalyticsSection';
import { ServicesSection } from '@/components/services/ServicesSection';
import { QuickPackSection } from '@/components/quickpack/QuickPackSection';
import { CaseStudiesSection } from '@/components/cases/CaseStudiesSection';
import { WhyUsSection } from '@/components/whyus/WhyUsSection';
import { FinalCTASection } from '@/components/cta/FinalCTASection';
import { Footer } from '@/components/footer/Footer';

export default function Home() {
  return (
    <>
      {/* Intro Splash Video (Primeros 3 segundos del nuevo logo, fondo negro, sin recuadros) */}
      <LogoIntroSplash />

      <div
        id="main-content"
        className="min-h-screen bg-[#08090d] text-white flex flex-col selection:bg-blue-600/30 selection:text-sky-200 transition-opacity duration-300"
      >
        <Navbar />
        <HeroSection />
        <MarqueeSection />
        <BusinessAnalyticsSection />
        <ServicesSection />
        <QuickPackSection />
        <CaseStudiesSection />
        <WhyUsSection />
        <FinalCTASection />
        <Footer />
      </div>
    </>
  );
}
