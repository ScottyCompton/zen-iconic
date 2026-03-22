import { cn } from "@/lib/cn";
import {
  headingSection,
  panelElevated,
  proseOnDarkPanel,
  sectionRule,
  sectionY,
  surfaceBase,
} from "@/lib/marketing-styles";
import { MarketingButtonLink } from "@/components/ui/MarketingButtonLink";

import { Container } from "../layout/Container";

type CTASectionProps = {
  id?: string;
  title: string;
  body: string;
  primaryCta: { href: string; label: string };
  secondaryCta: { href: string; label: string };
  className?: string;
  headingId?: string;
};

export function CTASection({
  id,
  title,
  body,
  primaryCta,
  secondaryCta,
  className,
  headingId = "cta-heading",
}: CTASectionProps) {
  return (
    <section
      id={id}
      className={cn(sectionRule, surfaceBase, sectionY, className)}
      aria-labelledby={headingId}
    >
      <Container as="div">
        <div
          className={cn(
            panelElevated,
            "px-8 py-12 sm:px-12 sm:py-14",
          )}
        >
          <div
            className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-emerald-400/[0.08] blur-3xl"
            aria-hidden
          />
          <div className="relative max-w-2xl">
            <h2 id={headingId} className={headingSection}>
              {title}
            </h2>
            <p className={cn("mt-4", proseOnDarkPanel)}>{body}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <MarketingButtonLink
                href={primaryCta.href}
                variant="primaryOnPanel"
              >
                {primaryCta.label}
              </MarketingButtonLink>
              <MarketingButtonLink
                href={secondaryCta.href}
                variant="secondaryOnPanel"
              >
                {secondaryCta.label}
              </MarketingButtonLink>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
