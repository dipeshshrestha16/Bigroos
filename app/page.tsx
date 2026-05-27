import dynamic from 'next/dynamic';

// Above-fold — loaded immediately
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import WhoWeHelp from '@/components/WhoWeHelp';

// Below-fold — JS split into separate chunks, HTML still pre-rendered
const WhatWeDo       = dynamic(() => import('@/components/WhatWeDo'));
const WhyNeedWebsite = dynamic(() => import('@/components/WhyNeedWebsite'));
const Portfolio      = dynamic(() => import('@/components/Portfolio'));
const Pricing        = dynamic(() => import('@/components/Pricing'));
const HowItWorks     = dynamic(() => import('@/components/HowItWorks'));
const WhyChooseUs    = dynamic(() => import('@/components/WhyChooseUs'));
const BeforeAfter    = dynamic(() => import('@/components/BeforeAfter'));
const TrustBadges    = dynamic(() => import('@/components/TrustBadges'));
const FAQ            = dynamic(() => import('@/components/FAQ'));
const ContactCTA     = dynamic(() => import('@/components/ContactCTA'));
const Footer         = dynamic(() => import('@/components/Footer'));

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
