import { pricingPageSections } from "@/content/pricing";
import { cn } from "@/lib/cn";
import {
  card,
  cardAccent,
  headingSection,
  proseBody,
  sectionRule,
  sectionY,
  surfaceBase,
  surfaceWash,
} from "@/lib/marketing-styles";
import { MarketingButtonLink } from "@/components/ui/MarketingButtonLink";

import { Container } from "../layout/Container";

type PricingPlanSectionsProps = {
  data: typeof pricingPageSections;
  className?: string;
};

function SetupBandCard({
  label,
  pageRange,
  price,
}: {
  label: string;
  pageRange: string;
  price: string;
}) {
  return (
    <article className={cn("flex flex-col p-5 sm:p-6", card)}>
      <h3 className="text-sm font-semibold text-zinc-50">{label}</h3>
      <p className="mt-1 text-xs font-medium uppercase tracking-wider text-zinc-500">
        {pageRange}
      </p>
      <p className="mt-4 text-xl font-semibold tracking-tight text-zinc-50">
        {price}
      </p>
    </article>
  );
}

export function PricingPlanSections({ data, className }: PricingPlanSectionsProps) {
  const { setup, subscription, addOns, value, footnote } = data;

  return (
    <div className={className}>
      <section
        id={setup.id}
        className={cn(sectionRule, surfaceWash, sectionY)}
        aria-labelledby={`${setup.id}-heading`}
      >
        <Container as="div">
          <h2 id={`${setup.id}-heading`} className={headingSection}>
            {setup.title}
          </h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
            {setup.bands.map((band) => (
              <SetupBandCard key={band.label} {...band} />
            ))}
          </div>
          <div className="mt-12 max-w-3xl">
            <h3 className="text-sm font-semibold text-zinc-200">{setup.includesTitle}</h3>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {setup.includes.map((line) => (
                <li
                  key={line}
                  className="flex gap-3 text-sm leading-relaxed text-zinc-300"
                >
                  <span
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-lime-400/70"
                    aria-hidden
                  />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
            <p className={cn("mt-8", proseBody)}>{setup.turnaroundNote}</p>
          </div>
        </Container>
      </section>

      <section
        id={subscription.id}
        className={cn(sectionRule, surfaceBase, sectionY)}
        aria-labelledby={`${subscription.id}-heading`}
      >
        <Container as="div">
          <h2 id={`${subscription.id}-heading`} className={headingSection}>
            {subscription.title}
          </h2>
          <p className={cn("mt-4 max-w-2xl", proseBody)}>{subscription.intro}</p>

          <article className={cn("mt-10 max-w-3xl p-6 sm:p-8", cardAccent)}>
            <div className="flex flex-wrap items-baseline justify-between gap-4">
              <p className="text-sm font-medium text-zinc-200">Monthly subscription</p>
              <p className="text-3xl font-semibold tracking-tight text-zinc-50 sm:text-4xl">
                {subscription.price}
                <span className="text-lg font-medium text-zinc-400">{subscription.cadence}</span>
              </p>
            </div>
            <ul className="mt-8 grid gap-3 border-t border-white/8 pt-8 sm:grid-cols-2">
              {subscription.items.map((line) => (
                <li
                  key={line}
                  className="flex gap-3 text-sm leading-relaxed text-zinc-200"
                >
                  <span
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-lime-400/80"
                    aria-hidden
                  />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
            <p className="mt-8 text-xs leading-relaxed text-zinc-500">
              {subscription.zenLeadsNote}
            </p>
            <MarketingButtonLink href="/contact" variant="primary" className="mt-8">
              Get started
            </MarketingButtonLink>
          </article>
        </Container>
      </section>

      <section
        id={addOns.id}
        className={cn(sectionRule, surfaceWash, sectionY)}
        aria-labelledby={`${addOns.id}-heading`}
      >
        <Container as="div">
          <h2 id={`${addOns.id}-heading`} className={headingSection}>
            {addOns.title}
          </h2>
          <p className={cn("mt-3 max-w-2xl", proseBody)}>{addOns.subtitle}</p>
          <div className={cn("mt-10 max-w-3xl", card, "divide-y divide-white/6 px-0 py-0")}>
            {addOns.rows.map((row) => (
              <div
                key={row.label}
                className="flex flex-wrap items-baseline justify-between gap-4 px-5 py-4 sm:px-6"
              >
                <span className="text-sm text-zinc-200">{row.label}</span>
                <span className="text-sm font-semibold tabular-nums text-zinc-50">
                  {row.price}
                </span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section
        id={value.id}
        className={cn(sectionRule, surfaceBase, sectionY)}
        aria-labelledby={`${value.id}-heading`}
      >
        <Container as="div">
          <h2 id={`${value.id}-heading`} className={headingSection}>
            {value.title}
          </h2>
          <p className={cn("mt-4 max-w-3xl", proseBody)}>{value.body}</p>
          <ul className="mt-8 max-w-3xl space-y-4">
            {value.points.map((point) => (
              <li
                key={point}
                className="flex gap-3 text-sm leading-relaxed text-zinc-300 sm:text-base"
              >
                <span
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400/70"
                  aria-hidden
                />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className={cn(sectionRule, surfaceWash, "py-12 sm:py-14")} aria-label="Note">
        <Container as="div">
          <p className="max-w-3xl text-sm leading-relaxed text-zinc-500">{footnote}</p>
        </Container>
      </section>
    </div>
  );
}
