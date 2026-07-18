import { PageLayout } from '../components/layout/PageLayout';
import { Hero } from '../components/sections/Hero';
import { TrustBar } from '../components/sections/TrustBar';
import { ServicesBentoGrid } from '../components/sections/ServicesBentoGrid';
import { HowWeWork } from '../components/sections/HowWeWork';
import { ResultsSection } from '../components/sections/ResultsSection';
import { Testimonials } from '../components/sections/Testimonials';
import { InsightsTeaser } from '../components/sections/InsightsTeaser';
import { CTABanner } from '../components/sections/CTABanner';

export default function Home() {
  return (
    <PageLayout>
      <Hero />
      <TrustBar />
      <ServicesBentoGrid />
      <HowWeWork />
      <ResultsSection />
      <Testimonials />
      <InsightsTeaser />
      <CTABanner />
    </PageLayout>
  );
}
