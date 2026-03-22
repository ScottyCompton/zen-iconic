import { MarketingButtonLink } from "@/components/ui/MarketingButtonLink";
import { cn } from "@/lib/cn";
import {
  displayHero,
  kicker,
  proseLead,
  sectionRule,
  surfaceBase,
} from "@/lib/marketing-styles";

type HeroProps = {
  eyebrow: string;
  headline: string;
  subhead: string;
  primaryCta: { href: string; label: string };
  secondaryCta: { href: string; label: string };
  className?: string;
};

export function Hero({
  eyebrow,
  headline,
  subhead,
  primaryCta,
  secondaryCta,
  className,
}: HeroProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden",
        sectionRule,
        surfaceBase,
        className,
      )}
      aria-labelledby="hero-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(16,185,129,0.12),transparent)]"
        aria-hidden
      />
      <div className="relative mx-auto max-w-6xl px-6 pb-20 pt-16 sm:px-8 sm:pb-24 sm:pt-20 lg:px-12 lg:pb-28 lg:pt-24">
        <p className={kicker}>{eyebrow}</p>
        <h1 id="hero-heading" className={cn("mt-5 max-w-3xl", displayHero)}>
          {headline}
        </h1>
        <p className={cn("mt-6 max-w-2xl", proseLead)}>{subhead}</p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
          <MarketingButtonLink href={primaryCta.href} variant="primary">
            {primaryCta.label}
          </MarketingButtonLink>
          <MarketingButtonLink href={secondaryCta.href} variant="secondary">
            {secondaryCta.label}
          </MarketingButtonLink>
        </div>
      </div>
    </section>
  );
}
