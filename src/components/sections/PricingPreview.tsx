import type { PricingTier } from "@/content/types";
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
  tiers: PricingTier[];
  className?: string;
};

export function PricingPreview({
  id,
  title,
  subtitle,
  footnote,
  cta,
  tiers,
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

        <div className="mt-12 grid gap-4 lg:grid-cols-3 lg:gap-5">
          {tiers.map((tier) => (
            <article
              key={tier.name}
              className={cn(
                "flex flex-col p-6 sm:p-7",
                tier.highlighted ? cardAccent : card,
              )}
            >
              <div className="flex items-baseline justify-between gap-2">
                <h3 className="text-sm font-semibold text-zinc-50">
                  {tier.name}
                </h3>
                {tier.highlighted ? (
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-emerald-400/90">
                    Most chosen
                  </span>
                ) : null}
              </div>
              <p className="mt-2 text-xs font-medium leading-snug text-zinc-300">
                {tier.tagline}
              </p>
              <p className="mt-2 flex-1 text-xs leading-relaxed text-zinc-500">
                {tier.description}
              </p>
              <div className="mt-4 space-y-2 border-t border-white/[0.06] pt-4 text-xs">
                <p>
                  <span className="text-zinc-600">Setup </span>
                  <span className="font-medium text-zinc-200">
                    {tier.setup ?? "—"}
                  </span>
                </p>
                <p>
                  <span className="text-zinc-600">Ongoing </span>
                  <span className="font-medium text-zinc-200">
                    {tier.monthly ?? "—"}
                  </span>
                </p>
              </div>
              <ul className="mt-4 space-y-2">
                {tier.benefits.slice(0, 2).map((line) => (
                  <li
                    key={line}
                    className="flex gap-2 text-xs leading-relaxed text-zinc-400"
                  >
                    <span
                      className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-zinc-600"
                      aria-hidden
                    />
                    {line}
                  </li>
                ))}
              </ul>
              <MarketingButtonLink
                href="/contact"
                variant={tier.highlighted ? "primary" : "secondary"}
                className="mt-6"
              >
                {tier.cta}
              </MarketingButtonLink>
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
