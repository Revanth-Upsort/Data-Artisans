import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { insights } from '../../data/insights';
import { SectionHeading } from '../ui/SectionHeading';
import { CTAButton } from '../ui/CTAButton';

const dateFmt = new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric', year: 'numeric' });

export function InsightsTeaser() {
  const posts = insights.slice(0, 3);
  return (
    <section className="bg-paper py-16 md:py-24">
      <div className="container-page">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <SectionHeading eyebrow="Insights" title="Ideas worth your time" />
          <CTAButton to="/insights" variant="secondary" className="hidden sm:inline-flex">
            All insights
          </CTAButton>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {posts.map((post, i) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: (i * 80) / 1000 }}
              whileHover={{ y: -4 }}
            >
              <Link
                to="/insights"
                className="group flex h-full flex-col overflow-hidden rounded-card border border-ink/10 bg-white shadow-soft transition-shadow duration-200 hover:shadow-lift"
              >
                <div className="flex aspect-[16/9] items-center justify-center bg-ink">
                  <span className="text-xs uppercase tracking-[0.18em] text-accent">{post.category}</span>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <p className="text-xs text-ink/50">
                    {dateFmt.format(new Date(post.date))} · {post.readingTime}
                  </p>
                  <h3 className="mt-2 text-base font-medium text-ink group-hover:text-accent">
                    {post.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-ink/70">{post.excerpt}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
