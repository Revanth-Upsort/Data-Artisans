import { services } from '../../data/services';
import { ServiceCard } from '../ui/ServiceCard';
import { SectionHeading } from '../ui/SectionHeading';

// Featured services (AI, IT Strategy) first so they take the large tiles and,
// on mobile, appear at the top of the stack.
const ordered = [...services].sort((a, b) => Number(b.featured) - Number(a.featured));

export function ServicesBentoGrid() {
  return (
    <section id="services" className="scroll-mt-20 bg-paper py-16 md:py-24">
      <div className="container-page">
        <SectionHeading
          eyebrow="What we do"
          title="Seven services, one accountable team"
          intro="From the data foundation up to the AI on top — pick the piece you need now, and add the rest as you grow."
          className="mb-10"
        />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {ordered.map((service, i) => (
            <ServiceCard key={service.slug} service={service} index={i} variant="bento" />
          ))}
        </div>
      </div>
    </section>
  );
}
