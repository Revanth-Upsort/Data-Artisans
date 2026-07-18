import { Plus } from 'lucide-react';

interface FAQAccordionProps {
  faqs: { question: string; answer: string }[];
}

/**
 * Native <details>/<summary> accordion, styled with Tailwind. No library and
 * no JS state — the browser handles open/close, which keeps it accessible.
 */
export function FAQAccordion({ faqs }: FAQAccordionProps) {
  return (
    <div className="divide-y divide-ink/10 rounded-card border border-ink/10 bg-white">
      {faqs.map((faq) => (
        <details key={faq.question} className="group px-5">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-left text-[15px] font-medium text-ink [&::-webkit-details-marker]:hidden">
            {faq.question}
            <span
              className="grid h-7 w-7 shrink-0 place-items-center rounded-md bg-paper-dim text-ink transition-transform duration-200 group-open:rotate-45"
              aria-hidden="true"
            >
              <Plus size={16} />
            </span>
          </summary>
          <p className="pb-5 text-sm leading-relaxed text-ink/70">{faq.answer}</p>
        </details>
      ))}
    </div>
  );
}
