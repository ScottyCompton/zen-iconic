import type { PricingTier } from "@/content/types";
import { cn } from "@/lib/cn";
import {
  card,
  cardAccent,
  proseBody,
  sectionRule,
  sectionY,
  surfaceBase,
} from "@/lib/marketing-styles";
import { MarketingButtonLink } from "@/components/ui/MarketingButtonLink";

import { Container } from "../layout/Container";

type PricingTableProps = {
  tiers: PricingTier[];
  footnote: string;
  className?: string;
};

function PriceBlock({
  label,
  value,
}: {
  label: string;
  value: string | null;
}) {
  return (
    <div className="mt-5 rounded-xl border border-white/[0.07] bg-zinc-950/50 px-4 py-3">
      <p className="text-[10px] font-semibold uppercase tracking-wider text-zinc-500">
        {label}
      </p>
      <p className="mt-1 text-lg font-semibold tracking-tight text-zinc-50">
        {value ?? "—"}
      </p>
    </div>
  );
}

export function PricingTable({ tiers, footnote, className }: PricingTableProps) {
  return (
    <section
      className={cn(sectionRule, surfaceBase, sectionY, className)}
      aria-label="Pricing"
    >
      <Container as="div">
        <div className="grid gap-6 lg:grid-cols-3 lg:gap-5">
          {tiers.map((tier) => (
            <article
              key={tier.name}
              className={cn(
                "flex flex-col p-6 sm:p-8",
                tier.highlighted ? cardAccent : card,
              )}
            >
              <div className="flex items-baseline justify-between gap-3">
                <h2 className="text-lg font-semibold text-zinc-50">
                  {tier.name}
                </h2>
                {tier.highlighted ? (
                  <span className="rounded-full bg-emerald-400/12 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-emerald-300">
                    Most chosen
                  </span>
                ) : null}
              </div>
              <p className="mt-2 text-sm font-medium leading-snug text-zinc-200">
                {tier.tagline}
              </p>
              <p className={cn("mt-3", proseBody)}>{tier.description}</p>

              <div className="grid grid-cols-2 gap-3">
                <PriceBlock label="Setup" value={tier.setup} />
                <PriceBlock label="Ongoing" value={tier.monthly} />
              </div>
              {tier.billingNote ? (
                <p className="mt-3 text-xs leading-relaxed text-zinc-600">
                  {tier.billingNote}
                </p>
              ) : null}

              <ul className="mt-8 flex-1 space-y-3 border-t border-white/[0.06] pt-6">
                {tier.benefits.map((line) => (
                  <li
                    key={line}
                    className="flex gap-3 text-sm leading-relaxed text-zinc-300"
                  >
                    <span
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400/65"
                      aria-hidden
                    />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
              <MarketingButtonLink
                href="/contact"
                variant={tier.highlighted ? "primary" : "secondary"}
                className="mt-8"
              >
                {tier.cta}
              </MarketingButtonLink>
            </article>
          ))}
        </div>
        <p className="mt-12 max-w-3xl text-sm leading-relaxed text-zinc-500">
          {footnote}
        </p>
      </Container>
    </section>
  );
}
