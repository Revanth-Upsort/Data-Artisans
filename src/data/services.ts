import {
  BrainCircuit,
  Compass,
  Database,
  BarChart3,
  Cloud,
  Code2,
  ShieldCheck,
  type LucideIcon,
} from 'lucide-react';

export interface ServiceCapability {
  title: string;
  description: string;
}

export interface ProcessStep {
  step: string;
  description: string;
}

export interface Service {
  slug: string;
  name: string;
  icon: LucideIcon;
  featured: boolean;
  /** short line used on the featured bento tile */
  cardDescription: string;
  heroHeadline: string;
  heroSubhead: string;
  /** plain-language "who this is for / what it solves" paragraph */
  overview: string;
  capabilities: ServiceCapability[];
  process: ProcessStep[];
  caseStudy: { client: string; challenge: string; metric: string };
  faqs: { question: string; answer: string }[];
  relatedSlugs: string[];
}

export const services: Service[] = [
  {
    slug: 'artificial-intelligence',
    name: 'Artificial Intelligence',
    icon: BrainCircuit,
    featured: true,
    cardDescription:
      'Predictive models, NLP, and computer vision — built to move past the demo and into daily operations.',
    heroHeadline: 'Build AI That Actually Ships',
    heroSubhead:
      "Most AI projects stall at the proof-of-concept stage. We design, train, and deploy models that survive contact with real data and earn their place in your workflows.",
    overview:
      'Artificial intelligence only pays off when it leaves the notebook and starts making decisions inside your business. We focus on that last, hardest mile: taking a promising model and making it reliable, monitored, and genuinely useful to the people who depend on it. We start by being honest about whether AI is even the right tool — sometimes a simple rule beats a complex model.',
    capabilities: [
      { title: 'Predictive Modeling', description: 'Forecast demand, churn, risk, and revenue with models tuned to your business, not a generic benchmark.' },
      { title: 'Natural Language Processing', description: 'Classify, summarize, and extract meaning from documents, tickets, and conversations at scale.' },
      { title: 'Computer Vision', description: 'Automate inspection, counting, and quality control from images and video streams.' },
      { title: 'MLOps & Deployment', description: "Ship models with monitoring, retraining pipelines, and rollback — so accuracy doesn't quietly decay." },
    ],
    process: [
      { step: 'Data Audit', description: 'We assess what data you have, its quality, and whether the problem is genuinely solvable with ML.' },
      { step: 'Model Design', description: 'We pick the simplest approach that works and define clear success metrics up front.' },
      { step: 'Training & Validation', description: 'We train, test against holdout data, and stress-test for edge cases and bias.' },
      { step: 'Deployment & Monitoring', description: 'We integrate the model into your systems with ongoing performance tracking.' },
    ],
    caseStudy: {
      client: 'National E-commerce Retailer',
      challenge: 'Manual weekly demand forecasting drove chronic overstock on slow items and stockouts on bestsellers across 40+ regional warehouses.',
      metric: 'PLACEHOLDER — 31% reduction in excess inventory within two quarters',
    },
    faqs: [
      { question: 'Do we need a huge dataset to get started?', answer: 'Not always. Some problems need millions of examples; many useful models work well on a few thousand. The Data Audit tells us honestly whether your data is sufficient before you commit budget.' },
      { question: 'Will you use our data to train models for other clients?', answer: 'Never. Your data and any models trained on it are yours exclusively. We work under strict data-handling agreements.' },
      { question: "What if the model's accuracy drops over time?", answer: "That's expected — it's called drift. Our MLOps setup monitors live performance and triggers retraining, so accuracy is maintained rather than assumed." },
      { question: 'Can you integrate with tools we already use?', answer: 'Yes. We deploy models behind APIs or directly into your existing data warehouse, CRM, or application stack.' },
    ],
    relatedSlugs: ['data-engineering', 'business-intelligence'],
  },
  {
    slug: 'it-strategy-consulting',
    name: 'IT Strategy & Consulting',
    icon: Compass,
    featured: true,
    cardDescription:
      'A clear technology roadmap that ties every system, spend, and hire back to a business outcome.',
    heroHeadline: 'A Technology Roadmap You Can Actually Follow',
    heroSubhead:
      'Technology decisions made in isolation pile up into cost and complexity. We give you an independent, vendor-neutral plan that connects your systems, budget, and roadmap to the outcomes you care about.',
    overview:
      'Good IT strategy is mostly about saying no to the right things. Every business we meet is being sold the next platform, the next migration, the next AI add-on. Our job is to sit on your side of the table and figure out which of those actually move your business forward — and in what order. We are independent by design: we do not resell software or earn referral fees.',
    capabilities: [
      { title: 'Technology Roadmapping', description: 'A prioritized 12–24 month plan tied to business goals, not vendor timelines.' },
      { title: 'Systems & Vendor Assessment', description: 'An independent review of what you run today, what it costs, and what to consolidate or replace.' },
      { title: 'Digital Transformation Planning', description: 'A phased path to modernize legacy systems without halting the business.' },
      { title: 'Fractional CTO Advisory', description: 'Senior technical judgment on demand, without a full-time executive hire.' },
    ],
    process: [
      { step: 'Discovery', description: 'We map your current systems, costs, team, and the goals the technology is meant to serve.' },
      { step: 'Assessment', description: 'We identify risks, redundant spend, and the gaps between where you are and where you want to be.' },
      { step: 'Roadmap', description: 'We deliver a prioritized, costed plan you can act on — sequenced by impact and dependency.' },
      { step: 'Advisory', description: 'We stay available to guide execution, review vendors, and adjust the plan as reality shifts.' },
    ],
    caseStudy: {
      client: 'Multi-location Healthcare Group',
      challenge: 'Fifteen years of piecemeal software purchases left overlapping tools no single person understood, with no roadmap for growth.',
      metric: 'PLACEHOLDER — $240K in annual software spend eliminated',
    },
    faqs: [
      { question: 'Are you tied to any particular vendors or platforms?', answer: "No. We're deliberately vendor-neutral. Our only incentive is recommending what actually fits your business, which is exactly why an independent assessment is worth having." },
      { question: "We're a small team — is strategy consulting overkill?", answer: 'Small teams often benefit most, because every technology decision carries more weight. A short engagement can prevent an expensive mistake or unlock a lot of wasted spend.' },
      { question: 'What do we actually walk away with?', answer: 'A written, prioritized roadmap with cost estimates and clear next steps — a document your team can execute against, not a slide deck that gets filed away.' },
      { question: 'Can you help us execute the plan too?', answer: 'Yes. Many clients keep us on in a fractional advisory role or bring in our engineering teams for the build phases identified in the roadmap.' },
    ],
    relatedSlugs: ['cloud-solutions', 'cyber-security'],
  },
  {
    slug: 'data-engineering',
    name: 'Data Engineering',
    icon: Database,
    featured: false,
    cardDescription: 'Reliable pipelines and a single source of truth your whole team can trust.',
    heroHeadline: 'A Data Foundation You Can Build On',
    heroSubhead:
      'Dashboards lie when the data underneath them is messy. We build the pipelines, warehouses, and quality checks that turn scattered, unreliable data into a single source of truth.',
    overview:
      'Every good analytics story, every reliable dashboard, every trustworthy AI model rests on data engineering that nobody sees. When it is done well, people stop arguing about whose numbers are right and start making decisions. We build data foundations pragmatically — the right amount of infrastructure for your scale, with automated testing and monitoring baked in from the start.',
    capabilities: [
      { title: 'Data Pipelines', description: 'Automated ingestion from every source — apps, databases, APIs, and files — with no manual copy-paste.' },
      { title: 'Warehouse & Lakehouse', description: 'A central, query-ready store designed for the way your team actually asks questions.' },
      { title: 'Data Quality & Testing', description: 'Automated checks that catch bad data before it reaches a dashboard or a decision.' },
      { title: 'Integration & Migration', description: 'Move off brittle legacy systems and connect the tools you rely on, safely.' },
    ],
    process: [
      { step: 'Source Mapping', description: 'We catalog every place your data lives and how it currently moves.' },
      { step: 'Architecture', description: 'We design a warehouse and pipeline layout matched to your scale and budget.' },
      { step: 'Build & Test', description: 'We build incrementally with automated tests so problems surface early.' },
      { step: 'Handover & Monitoring', description: 'We document everything and set up alerting so failures never go unnoticed.' },
    ],
    caseStudy: {
      client: 'Regional Logistics Firm',
      challenge: 'Operations data was split across a shipping platform, an accounting tool, and dozens of spreadsheets, making any company-wide report a multi-day manual effort.',
      metric: 'PLACEHOLDER — 38% reduction in monthly reporting time',
    },
    faqs: [
      { question: "We're not sure our data is 'big' enough to need this.", answer: "Data engineering isn't about size — it's about trust and reliability. Even modest data volumes cause real pain when they're scattered and inconsistent. The goal is a foundation you can rely on." },
      { question: 'Will this disrupt the systems we use every day?', answer: 'No. We build alongside your existing tools and cut over carefully. Day-to-day operations keep running throughout.' },
      { question: 'Do we need to replace our current tools?', answer: 'Usually not. Most of our work connects and unifies the tools you already have. We only recommend replacing something when it is genuinely holding you back.' },
    ],
    relatedSlugs: ['business-intelligence', 'cloud-solutions'],
  },
  {
    slug: 'business-intelligence',
    name: 'Business Intelligence',
    icon: BarChart3,
    featured: false,
    cardDescription: 'Dashboards and reporting that answer the questions leaders actually ask.',
    heroHeadline: 'See Your Business Clearly',
    heroSubhead:
      'Reports should answer questions, not create them. We build dashboards and self-serve reporting that give your team the numbers they need, when they need them, without waiting on anyone.',
    overview:
      "Business intelligence isn't about having more charts — it's about having the right answer in front of the right person at the moment they need to act. Too many BI projects produce beautiful dashboards that quietly go unused because they were built around data, not decisions. We work the other way around, starting with the questions your leaders and teams are actually asking.",
    capabilities: [
      { title: 'Executive Dashboards', description: 'The handful of metrics that matter, live and legible at a glance.' },
      { title: 'Self-Serve Reporting', description: 'Let teams answer their own questions without filing a request every time.' },
      { title: 'KPI & Metric Design', description: 'We help define what to measure so the numbers actually drive behavior.' },
      { title: 'Embedded Analytics', description: 'Put insights directly inside the apps and portals your team already uses.' },
    ],
    process: [
      { step: 'Define Metrics', description: 'We work out which numbers actually inform decisions — and which are just noise.' },
      { step: 'Model the Data', description: 'We shape the underlying data so metrics are consistent and fast.' },
      { step: 'Build Dashboards', description: 'We design clear, focused views for each audience, from floor to boardroom.' },
      { step: 'Enable the Team', description: 'We train your people so the tools get used, not abandoned.' },
    ],
    caseStudy: {
      client: 'Franchise Restaurant Group',
      challenge: 'Individual locations reported performance in different formats, making it nearly impossible for leadership to compare sites or spot problems early.',
      metric: 'PLACEHOLDER — 5x faster identification of underperforming sites',
    },
    faqs: [
      { question: 'We already have dashboards nobody looks at. How is this different?', answer: 'Unused dashboards usually try to show everything. We start from the decisions your team needs to make and build only the views that support them — which is why they actually get used.' },
      { question: 'Which BI tools do you work with?', answer: "We work across the major platforms and pick based on your team's skills and budget rather than pushing one product. Often we can build on tools you already license." },
      { question: 'Can non-technical staff use what you build?', answer: "That's the point. We design for the people who'll use it daily and include training so self-serve reporting genuinely works." },
    ],
    relatedSlugs: ['data-engineering', 'artificial-intelligence'],
  },
  {
    slug: 'cloud-solutions',
    name: 'Cloud Solutions',
    icon: Cloud,
    featured: false,
    cardDescription: "Right-sized cloud infrastructure that scales with you and doesn't surprise you on the invoice.",
    heroHeadline: 'Cloud That Scales Without the Surprises',
    heroSubhead:
      'The cloud should lower your costs and raise your reliability — not do the opposite. We design, migrate, and optimize infrastructure that fits your actual usage, with no runaway bills.',
    overview:
      'Cloud done well is almost invisible: things scale when they need to, costs track usage, and outages become rare. Cloud done badly is a source of constant anxiety and month-end bill shock. The difference is almost always in the design and the ongoing tuning. We treat cloud as an engineering discipline, not a checkbox.',
    capabilities: [
      { title: 'Cloud Migration', description: 'Move workloads off legacy hardware with a plan that minimizes downtime and risk.' },
      { title: 'Infrastructure as Code', description: 'Reproducible, version-controlled environments — no more undocumented manual setups.' },
      { title: 'Cost Optimization', description: 'Find and cut the waste that quietly inflates most cloud bills.' },
      { title: 'Reliability & Scaling', description: 'Auto-scaling and redundancy so you stay up during your busiest moments.' },
    ],
    process: [
      { step: 'Assess', description: 'We review your current setup, usage patterns, and the real cost drivers.' },
      { step: 'Design', description: 'We architect an environment sized to your workload, with cost guardrails.' },
      { step: 'Migrate', description: 'We move workloads in careful phases, validating each step before the next.' },
      { step: 'Optimize', description: 'We tune for cost and performance continuously, not just at launch.' },
    ],
    caseStudy: {
      client: 'Growing SaaS Company',
      challenge: 'A rapidly scaling application ran on an over-provisioned cloud setup where costs grew faster than revenue and outages spiked during traffic peaks.',
      metric: 'PLACEHOLDER — 44% reduction in monthly cloud spend',
    },
    faqs: [
      { question: 'Is the cloud actually cheaper than our own servers?', answer: 'It can be, but only when it is sized correctly. Poorly configured cloud is often more expensive. Our cost work exists precisely because the default setup rarely matches your real usage.' },
      { question: 'How do you avoid downtime during migration?', answer: 'We migrate in phases, run old and new in parallel where needed, and validate each workload before cutting over. Business-critical systems move with tested rollback plans.' },
      { question: 'Which cloud provider do you recommend?', answer: 'Whichever fits your workload, team, and budget. We work across the major providers and stay neutral — sometimes the best answer is a mix, or staying partly on-premise.' },
    ],
    relatedSlugs: ['data-engineering', 'cyber-security'],
  },
  {
    slug: 'application-development',
    name: 'Application Development',
    icon: Code2,
    featured: false,
    cardDescription: 'Custom web and internal tools built to fit your workflow, not the other way around.',
    heroHeadline: 'Software Built Around How You Work',
    heroSubhead:
      "When off-the-shelf software forces your team into someone else's workflow, custom is worth it. We build web apps and internal tools that fit your process exactly and grow with you.",
    overview:
      'Off-the-shelf software is the right choice most of the time — but not when a core part of your business runs on a workaround. When your team is bending its process to fit a tool, or holding a critical workflow together with spreadsheets and hope, custom software pays for itself quickly. We build lean, with a working prototype early and mainstream technology any competent developer can maintain.',
    capabilities: [
      { title: 'Custom Web Applications', description: "Purpose-built apps for the workflows generic software can't handle." },
      { title: 'Internal Tools & Portals', description: 'Dashboards, admin panels, and portals that replace fragile spreadsheets.' },
      { title: 'API & System Integration', description: 'Connect the tools you already use so data flows without manual re-entry.' },
      { title: 'Modernization', description: 'Rebuild aging applications on a stack that is maintainable and secure.' },
    ],
    process: [
      { step: 'Scope', description: 'We map the workflow and agree on exactly what the tool must do — and what it should not.' },
      { step: 'Prototype', description: 'We build a working prototype early so you react to something real, not a spec.' },
      { step: 'Build & Iterate', description: 'We ship in short cycles, adjusting to feedback as real users try it.' },
      { step: 'Launch & Support', description: 'We deploy, document, and stay available for fixes and enhancements.' },
    ],
    caseStudy: {
      client: 'Specialty Manufacturing Firm',
      challenge: 'Production scheduling ran on a sprawl of linked spreadsheets that only one employee fully understood, creating a single point of failure and constant errors.',
      metric: 'PLACEHOLDER — 60% fewer scheduling errors per month',
    },
    faqs: [
      { question: "Isn't custom software expensive to maintain?", answer: 'It can be if it is built carelessly. We build on well-supported, mainstream technology and document thoroughly, so maintenance stays affordable and you are never locked to a single developer.' },
      { question: 'How long until we see something working?', answer: "You'll see a working prototype early — often within the first few weeks — because we'd rather have you react to real software than to a document." },
      { question: 'What if our needs change after launch?', answer: "They will, and that's fine. Custom software's advantage is that it can evolve with you. We build so that changes are straightforward rather than risky." },
    ],
    relatedSlugs: ['cloud-solutions', 'artificial-intelligence'],
  },
  {
    slug: 'cyber-security',
    name: 'Cyber Security',
    icon: ShieldCheck,
    featured: false,
    cardDescription: 'Practical, right-sized security that protects the business without slowing it down.',
    heroHeadline: 'Security That Fits Your Business',
    heroSubhead:
      "Small and mid-sized businesses are targeted precisely because attackers assume they're unprotected. We deliver practical, proportionate security that closes real risks without enterprise overhead.",
    overview:
      "Security for a small or mid-sized business isn't a scaled-down version of enterprise security — it's a different problem. You don't need a security operations center; you need the handful of controls that stop the attacks that actually happen, put in place without grinding your team to a halt. We focus relentlessly on risk.",
    capabilities: [
      { title: 'Security Assessment', description: 'A clear-eyed review of where you are genuinely exposed, ranked by real risk.' },
      { title: 'Hardening & Access Control', description: 'Lock down accounts, devices, and systems with sensible, enforceable policies.' },
      { title: 'Compliance Support', description: 'Meet SOC 2, HIPAA, and other requirements without drowning in paperwork.' },
      { title: 'Monitoring & Response', description: 'Detect and respond to threats with alerting matched to your size and risk.' },
    ],
    process: [
      { step: 'Assess', description: 'We evaluate your systems, accounts, and practices against real-world threats.' },
      { step: 'Prioritize', description: 'We rank findings by actual risk so you fix what matters first, not everything at once.' },
      { step: 'Remediate', description: 'We close the highest-risk gaps and put sensible controls in place.' },
      { step: 'Monitor', description: 'We set up ongoing monitoring and a plan for when something does go wrong.' },
    ],
    caseStudy: {
      client: 'Professional Services Firm',
      challenge: 'A new enterprise client required SOC 2 compliance within 90 days, but the firm had no formal security controls, policies, or monitoring in place.',
      metric: 'PLACEHOLDER — audit-ready in 90 days, on schedule',
    },
    faqs: [
      { question: "We're small — are we really a target?", answer: 'Yes, and often more so. Most attacks are automated and indiscriminate; smaller businesses are hit precisely because they are assumed to be under-protected. Proportionate security dramatically lowers that risk.' },
      { question: 'Will security measures slow our team down?', answer: "Good security shouldn't. We favor controls that are strong but low-friction — the goal is protection your team can actually live with, not rules they'll route around." },
      { question: 'Can you help us pass a client security review or audit?', answer: 'Yes. We regularly help firms meet SOC 2, HIPAA, and client-driven security requirements, from the controls themselves through to the documentation auditors expect.' },
    ],
    relatedSlugs: ['cloud-solutions', 'it-strategy-consulting'],
  },
];

export const getService = (slug?: string): Service | undefined =>
  services.find((s) => s.slug === slug);
