import type { Industry } from "@/content/types";
import { cn } from "@/lib/cn";
import {
  card,
  cardSubtleHover,
  headingSection,
  proseBody,
  sectionRule,
  sectionY,
  surfaceBase,
} from "@/lib/marketing-styles";
import { MarketingButtonLink } from "@/components/ui/MarketingButtonLink";

import { Container } from "../layout/Container";

type IndustriesServedProps = {
  id?: string;
  headline: string;
  supporting: string;
  industries: Industry[];
  cta: { href: string; label: string };
  className?: string;
};

export function IndustriesServed({
  id,
  headline,
  supporting,
  industries,
  cta,
  className,
}: IndustriesServedProps) {
  return (
    <section
      id={id}
      className={cn(sectionRule, surfaceBase, sectionY, className)}
      aria-labelledby="industries-heading"
    >
      <Container as="div">
        <div className="max-w-2xl">
          <h2 id="industries-heading" className={headingSection}>
            {headline}
          </h2>
          <p className={cn("mt-3", proseBody)}>{supporting}</p>
        </div>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry) => (
            <li key={industry.slug}>
              <article
                className={cn(
                  card,
                  cardSubtleHover,
                  "flex h-full flex-col p-5 sm:p-6",
                )}
              >
                <h3 className="text-sm font-semibold text-zinc-50">
                  {industry.title}
                </h3>
                <p className={cn("mt-2 flex-1", proseBody)}>
                  {industry.context}
                </p>
                <p className="mt-4 border-t border-white/[0.06] pt-4 text-xs leading-relaxed text-zinc-500">
                  <span className="text-zinc-600">Focus: </span>
                  {industry.priorities[0]}
                </p>
              </article>
            </li>
          ))}
        </ul>

        <div className="mt-10">
          <MarketingButtonLink href={cta.href} variant="secondary">
            {cta.label}
          </MarketingButtonLink>
        </div>
      </Container>
    </section>
  );
}
