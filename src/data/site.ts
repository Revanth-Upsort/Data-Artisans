export const site = {
  name: 'Data Artisans',
  tagline: 'Turn Your Data Into Decisions',
  email: 'hello@dataartisans.example.com', // PLACEHOLDER
  phone: '+1 (555) 019-2834', // PLACEHOLDER
  address: '100 Market Street, Suite 400, Anytown, USA', // PLACEHOLDER
};

// `to` is a router path; `hash` scrolls to a section on that page. Using router
// links (not raw <a>) keeps navigation working under a GitHub Pages subpath.
export const navLinks: { label: string; to: string; hash?: string }[] = [
  { label: 'Services', to: '/', hash: 'services' },
  { label: 'Case Studies', to: '/case-studies' },
  { label: 'About', to: '/about' },
  { label: 'Insights', to: '/insights' },
  { label: 'Contact', to: '/contact' },
];

export const socialLinks = [
  { label: 'LinkedIn', href: '#', icon: 'linkedin' },
  { label: 'X', href: '#', icon: 'x' },
  { label: 'GitHub', href: '#', icon: 'github' },
] as const;

// Trust-bar stats — PLACEHOLDER figures, replace before launch.
export const stats = [
  { value: '20+', label: 'years combined experience' },
  { value: '75+', label: 'clients served' },
  { value: '99.9%', label: 'avg. uptime delivered' },
];

export const howWeWork = [
  { step: 'Discover', description: 'We learn your business, goals, and constraints before proposing anything.' },
  { step: 'Strategize', description: 'We shape a plan sized to your budget, sequenced by real impact.' },
  { step: 'Build', description: 'We deliver in short cycles so you see progress and steer as we go.' },
  { step: 'Support', description: 'We stay on to monitor, maintain, and evolve what we built.' },
];
