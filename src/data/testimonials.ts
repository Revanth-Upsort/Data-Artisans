export interface Testimonial {
  quote: string;
  name: string; // role, kept anonymous
  org: string; // anonymized client type
}

// PLACEHOLDER testimonials — replace with attributed, approved quotes.
export const testimonials: Testimonial[] = [
  {
    quote:
      'They cut through years of accumulated complexity and gave us a plan we could actually follow. The first honest technology advice we have had.',
    name: 'Operations Director',
    org: 'Multi-location Healthcare Group',
  },
  {
    quote:
      'The forecasting model paid for the whole engagement within a quarter. What impressed me most was that it kept working after they left.',
    name: 'VP of Supply Chain',
    org: 'National E-commerce Retailer',
  },
  {
    quote:
      'For the first time our whole leadership team is looking at the same numbers and trusting them. That alone changed how we run meetings.',
    name: 'Managing Partner',
    org: 'Regional Logistics Firm',
  },
];
