import type { PricingFaqItem } from "@/content/types";
import { cn } from "@/lib/cn";
import {
  card,
  headingSection,
  proseBody,
  sectionRule,
  sectionY,
  surfaceSunken,
} from "@/lib/marketing-styles";

import { Container } from "../layout/Container";

type PricingFaqProps = {
  title: string;
  items: PricingFaqItem[];
  className?: string;
};

export function PricingFaq({ title, items, className }: PricingFaqProps) {
  return (
    <section
      className={cn(sectionRule, surfaceSunken, sectionY, className)}
      aria-labelledby="pricing-faq-heading"
    >
      <Container as="div">
        <h2 id="pricing-faq-heading" className={headingSection}>
          {title}
        </h2>
        <div className="mt-10 flex max-w-3xl flex-col gap-3">
          {items.map((item) => (
            <details
              key={item.question}
              className={cn(
                card,
                "group px-5 py-4 transition-[border-color] duration-200 open:border-white/[0.1]",
              )}
            >
              <summary className="cursor-pointer list-none text-sm font-medium text-zinc-100 outline-none marker:hidden [&::-webkit-details-marker]:hidden">
                <span className="flex items-start justify-between gap-4">
                  {item.question}
                  <span
                    className="mt-0.5 shrink-0 text-zinc-500 transition-transform duration-200 group-open:rotate-45"
                    aria-hidden
                  >
                    +
                  </span>
                </span>
              </summary>
              <p className={cn("mt-3 border-t border-white/[0.06] pt-3", proseBody)}>
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
