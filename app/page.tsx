export const dynamic = 'force-dynamic';

import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import WhoWeHelp from '@/components/WhoWeHelp';
import WhatWeDo from '@/components/WhatWeDo';
import WhyNeedWebsite from '@/components/WhyNeedWebsite';
import Portfolio from '@/components/Portfolio';
import Pricing from '@/components/Pricing';
import HowItWorks from '@/components/HowItWorks';
import WhyChooseUs from '@/components/WhyChooseUs';
import BeforeAfter from '@/components/BeforeAfter';
import TrustBadges from '@/components/TrustBadges';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Navigation />
      <Hero />
      <WhoWeHelp />
      <WhatWeDo />
      <WhyNeedWebsite />
      <Portfolio />
      <Pricing />
      <HowItWorks />
      <WhyChooseUs />
      <BeforeAfter />
      <TrustBadges />
      <FAQ />
      <ContactCTA />
      <Footer />
    </main>
  );
}
