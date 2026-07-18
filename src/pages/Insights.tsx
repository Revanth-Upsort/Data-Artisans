import { motion } from 'framer-motion';
import { PageLayout } from '../components/layout/PageLayout';
import { CTABanner } from '../components/sections/CTABanner';
import { insights } from '../data/insights';

const dateFmt = new Intl.DateTimeFormat('en-US', { month: 'long', day: 'numeric', year: 'numeric' });

export default function Insights() {
  const sorted = [...insights].sort((a, b) => +new Date(b.date) - +new Date(a.date));
  const [featured, ...rest] = sorted;

  return (
    <PageLayout>
      <section className="bg-ink py-16 md:py-20">
        <div className="container-page max-w-3xl">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.18em] text-accent">Insights</p>
          <h1 className="text-hero font-medium text-fg-on-ink">Plain talk on technology</h1>
          <p className="mt-6 text-lg leading-relaxed text-fg-muted">
            No hype, no jargon — practical thinking on the decisions growing businesses actually face.
            Articles below are outlines; full pieces are in progress.{' '}
            <span className="text-accent">PLACEHOLDER</span>
          </p>
        </div>
      </section>

      <section className="bg-paper py-16 md:py-24">
        <div className="container-page">
          {featured && (
            <motion.a
              href="#"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4 }}
              className="group mb-8 grid overflow-hidden rounded-2xl border border-ink/10 bg-white shadow-soft transition-shadow duration-200 hover:shadow-lift md:grid-cols-2"
            >
              <div className="flex min-h-[220px] items-center justify-center bg-ink p-8">
                <span className="text-xs uppercase tracking-[0.18em] text-accent">{featured.category}</span>
              </div>
              <div className="flex flex-col justify-center p-8">
                <p className="text-xs text-ink/50">
                  {dateFmt.format(new Date(featured.date))} · {featured.readingTime}
                </p>
                <h2 className="mt-2 text-2xl font-medium text-ink group-hover:text-accent">{featured.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-ink/70">{featured.excerpt}</p>
                <span className="mt-4 text-sm font-medium text-accent">Read article →</span>
              </div>
            </motion.a>
          )}

          <div className="grid gap-6 md:grid-cols-3">
            {rest.map((post, i) => (
              <motion.a
                key={post.slug}
                href="#"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: (i * 80) / 1000 }}
                whileHover={{ y: -4 }}
                className="group flex flex-col overflow-hidden rounded-card border border-ink/10 bg-white shadow-soft transition-shadow duration-200 hover:shadow-lift"
              >
                <div className="flex aspect-[16/9] items-center justify-center bg-ink">
                  <span className="text-xs uppercase tracking-[0.18em] text-accent">{post.category}</span>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <p className="text-xs text-ink/50">
                    {dateFmt.format(new Date(post.date))} · {post.readingTime}
                  </p>
                  <h3 className="mt-2 text-base font-medium text-ink group-hover:text-accent">{post.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-ink/70">{post.excerpt}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </PageLayout>
  );
}
