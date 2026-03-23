import type { PricingPreviewCard } from "@/content/types";
import { cn } from "@/lib/cn";
import {
  card,
  cardAccent,
  headingSection,
  proseBody,
  sectionRule,
  sectionY,
  surfaceWash,
} from "@/lib/marketing-styles";
import { MarketingButtonLink } from "@/components/ui/MarketingButtonLink";

import { Container } from "../layout/Container";

type PricingPreviewProps = {
  id?: string;
  title: string;
  subtitle: string;
  footnote: string;
  cta: { href: string; label: string };
  cards: readonly PricingPreviewCard[];
  /** Index of the card to highlight (e.g. monthly plan). */
  highlightIndex?: number;
  className?: string;
};

export function PricingPreview({
  id,
  title,
  subtitle,
  footnote,
  cta,
  cards,
  highlightIndex = 1,
  className,
}: PricingPreviewProps) {
  return (
    <section
      id={id}
      className={cn(sectionRule, surfaceWash, sectionY, className)}
      aria-labelledby="pricing-preview-heading"
    >
      <Container as="div">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <h2 id="pricing-preview-heading" className={headingSection}>
              {title}
            </h2>
            <p className={cn("mt-3", proseBody)}>{subtitle}</p>
          </div>
          <MarketingButtonLink
            href={cta.href}
            variant="secondary"
            className="self-start lg:self-auto"
          >
            {cta.label}
          </MarketingButtonLink>
        </div>

        <div className="mt-12 grid gap-4 lg:grid-cols-2 lg:gap-5">
          {cards.map((cardItem, index) => (
            <article
              key={cardItem.title}
              className={cn(
                "flex flex-col p-6 sm:p-7",
                index === highlightIndex ? cardAccent : card,
              )}
            >
              <h3 className="text-sm font-semibold text-zinc-50">{cardItem.title}</h3>
              <p className="mt-3 text-lg font-semibold tracking-tight text-zinc-50">
                {cardItem.priceLine}
              </p>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-400">
                {cardItem.description}
              </p>
            </article>
          ))}
        </div>

        <p className="mt-10 max-w-2xl text-xs leading-relaxed text-zinc-600">
          {footnote}
        </p>
      </Container>
    </section>
  );
}
