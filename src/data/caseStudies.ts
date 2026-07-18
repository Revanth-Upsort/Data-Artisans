export interface CaseStudy {
  slug: string;
  client: string; // anonymized client type
  industry: string;
  service: string; // service name
  challenge: string;
  /** headline metric — NOTE: PLACEHOLDER figures, replace before launch */
  metric: string;
  metricLabel: string;
  summary: string;
}

// All metric figures are PLACEHOLDER values — swap for verified numbers.
export const caseStudies: CaseStudy[] = [
  {
    slug: 'regional-logistics-firm',
    client: 'Regional Logistics Firm',
    industry: 'Logistics & Transport',
    service: 'Data Engineering',
    challenge:
      'Operations data lived across a shipping platform, an accounting tool, and dozens of spreadsheets, turning any company-wide report into a multi-day manual effort.',
    metric: '38%',
    metricLabel: 'reduction in monthly reporting time',
    summary:
      'We mapped every data source, built an hourly-refreshed warehouse as a single source of truth, and layered automated quality checks so bad records were caught before they reached a report.',
  },
  {
    slug: 'national-ecommerce-retailer',
    client: 'National E-commerce Retailer',
    industry: 'Retail & E-commerce',
    service: 'Artificial Intelligence',
    challenge:
      'Manual weekly forecasting drove chronic overstock on slow items and stockouts on bestsellers across more than 40 regional warehouses.',
    metric: '31%',
    metricLabel: 'reduction in excess inventory',
    summary:
      'We audited the sales data, designed a demand model tuned per-region, and deployed it with a nightly retraining pipeline and live accuracy monitoring.',
  },
  {
    slug: 'multi-location-healthcare-group',
    client: 'Multi-location Healthcare Group',
    industry: 'Healthcare',
    service: 'IT Strategy & Consulting',
    challenge:
      'Fifteen years of piecemeal software purchases left overlapping tools that no single person understood, with no roadmap for growth.',
    metric: '$240K',
    metricLabel: 'in annual software spend eliminated',
    summary:
      'We ran an independent systems and vendor assessment, mapped every tool to the outcome it was meant to serve, and delivered a costed three-year roadmap.',
  },
];
