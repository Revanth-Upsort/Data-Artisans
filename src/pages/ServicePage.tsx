import { useParams, Link, Navigate } from 'react-router-dom';
import { Check } from 'lucide-react';
import { getService, services } from '../data/services';
import { PageLayout } from '../components/layout/PageLayout';
import { SectionHeading } from '../components/ui/SectionHeading';
import { ProcessStep } from '../components/ui/ProcessStep';
import { FAQAccordion } from '../components/ui/FAQAccordion';
import { ServiceCard } from '../components/ui/ServiceCard';
import { CTAButton } from '../components/ui/CTAButton';
import { CTABanner } from '../components/sections/CTABanner';
import { Reveal } from '../components/ui/Reveal';

export default function ServicePage() {
  const { slug } = useParams();
  const service = getService(slug);

  // Unknown slug → send home
  if (!service) return <Navigate to="/" replace />;

  const { name, icon: Icon, heroHeadline, heroSubhead, overview, capabilities, process, caseStudy, faqs } =
    service;
  const related = service.relatedSlugs
    .map((s) => services.find((x) => x.slug === s))
    .filter((x): x is (typeof services)[number] => Boolean(x));

  return (
    <PageLayout>
      {/* Breadcrumb + Hero */}
      <section className="bg-ink">
        <div className="container-page pb-16 pt-8 md:pb-20 md:pt-10">
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex flex-wrap items-center gap-1.5 text-sm text-fg-muted">
              <li>
                <Link to="/" className="transition-colors hover:text-fg-on-ink">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link to={{ pathname: '/', hash: 'services' }} className="transition-colors hover:text-fg-on-ink">
                  Services
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-fg-on-ink" aria-current="page">
                {name}
              </li>
            </ol>
          </nav>

          <div className="max-w-2xl">
            <span
              className="mb-5 inline-grid h-12 w-12 place-items-center rounded-card bg-accent/20 text-accent"
              aria-hidden="true"
            >
              <Icon size={26} strokeWidth={1.6} />
            </span>
            <h1 className="text-hero font-medium text-fg-on-ink">{heroHeadline}</h1>
            <p className="mt-6 text-base leading-relaxed text-fg-muted sm:text-lg">{heroSubhead}</p>
            <div className="mt-8">
              <CTAButton to="/contact">Book a Consultation</CTAButton>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="bg-paper py-16 md:py-20">
        <div className="container-page grid gap-8 md:grid-cols-[1fr_1.6fr]">
          <SectionHeading eyebrow="Overview" title="Who this is for" />
          <Reveal>
            <p className="text-lg leading-relaxed text-ink">{overview}</p>
          </Reveal>
        </div>
      </section>

      {/* Capabilities */}
      <section className="bg-paper-dim py-16 md:py-24">
        <div className="container-page">
          <SectionHeading eyebrow="Capabilities" title="What we deliver" className="mb-10" />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((cap, i) => (
              <Reveal
                key={cap.title}
                delay={i * 70}
                className="rounded-card border border-ink/10 bg-white p-6 shadow-soft"
              >
                <span
                  className="grid h-9 w-9 place-items-center rounded-md bg-accent/15 text-accent"
                  aria-hidden="true"
                >
                  <Check size={18} />
                </span>
                <h3 className="mt-4 text-base font-medium text-ink">{cap.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/70">{cap.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-paper py-16 md:py-24">
        <div className="container-page">
          <SectionHeading
            eyebrow="Our process"
            title={`How a ${name.toLowerCase()} engagement runs`}
            className="mb-12"
          />
          <ol className="relative grid gap-8 md:grid-cols-4 md:gap-6">
            {process.map((s, i) => (
              <ProcessStep
                key={s.step}
                index={i}
                total={process.length}
                step={s.step}
                description={s.description}
              />
            ))}
          </ol>
        </div>
      </section>

      {/* Case study */}
      <section className="bg-ink py-16 md:py-24">
        <div className="container-page">
          <SectionHeading
            eyebrow="Case study"
            title="What this looks like in practice"
            onInk
            className="mb-10"
          />
          <Reveal className="grid gap-8 rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-10 md:grid-cols-[1.4fr_1fr]">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.14em] text-accent">
                {caseStudy.client}
              </p>
              <p className="mt-4 text-lg leading-relaxed text-fg-on-ink">{caseStudy.challenge}</p>
            </div>
            <div className="flex flex-col justify-center border-t border-white/10 pt-6 md:border-l md:border-t-0 md:pl-8 md:pt-0">
              <p className="text-lg font-medium leading-snug text-fg-on-ink">{caseStudy.metric}</p>
              <p className="mt-3 text-xs text-accent">Illustrative — replace before launch</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-paper py-16 md:py-24">
        <div className="container-page grid gap-8 md:grid-cols-[1fr_1.6fr]">
          <SectionHeading eyebrow="FAQ" title="Common questions" />
          <Reveal>
            <FAQAccordion faqs={faqs} />
          </Reveal>
        </div>
      </section>

      {/* Related services */}
      <section className="bg-paper-dim py-16 md:py-20">
        <div className="container-page">
          <SectionHeading eyebrow="Keep exploring" title="Related services" className="mb-8" />
          <div className="grid gap-4 sm:grid-cols-2">
            {related.map((rel, i) => (
              <ServiceCard key={rel.slug} service={rel} index={i} variant="related" />
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </PageLayout>
  );
}
