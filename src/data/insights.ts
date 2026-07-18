export interface Insight {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string; // ISO
  readingTime: string;
}

// Article stubs — full bodies are PLACEHOLDER pending real editorial content.
export const insights: Insight[] = [
  {
    slug: 'why-ai-pilots-stall',
    title: 'Why most AI pilots never reach production',
    excerpt:
      "The demo works, everyone's impressed, and then nothing ships. Here's the gap between a promising proof-of-concept and a model your business actually runs on.",
    category: 'Artificial Intelligence',
    date: '2026-06-18',
    readingTime: '6 min read',
  },
  {
    slug: 'single-source-of-truth',
    title: "What a 'single source of truth' actually takes",
    excerpt:
      'Everyone wants their numbers to agree. Getting there is less about tools and more about the unglamorous discipline of data engineering.',
    category: 'Data Engineering',
    date: '2026-05-29',
    readingTime: '5 min read',
  },
  {
    slug: 'cloud-bill-shock',
    title: 'Where cloud bills quietly go wrong',
    excerpt:
      "Runaway cloud spend is rarely one big mistake — it's a dozen small defaults nobody revisited. A field guide to the waste we find most often.",
    category: 'Cloud Solutions',
    date: '2026-05-12',
    readingTime: '7 min read',
  },
  {
    slug: 'security-for-smbs',
    title: 'Right-sizing security for a business your size',
    excerpt:
      "You don't need an enterprise security program — you need the handful of controls that stop the attacks that actually happen.",
    category: 'Cyber Security',
    date: '2026-04-24',
    readingTime: '5 min read',
  },
];
