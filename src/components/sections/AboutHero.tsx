import { cn } from "@/lib/cn";
import {
  displayHeroSm,
  heroAmbientSheen,
  kicker,
  proseBody,
  sectionRule,
  surfaceBase,
} from "@/lib/marketing-styles";
import { MarketingButtonLink } from "@/components/ui/MarketingButtonLink";

import { HeroLogoBackdrop } from "./HeroLogoBackdrop";

type AboutHeroProps = {
  eyebrow: string;
  headline: string;
  subhead: string;
  primaryCta: { href: string; label: string };
  secondaryCta: { href: string; label: string };
  className?: string;
};

export function AboutHero({
  eyebrow,
  headline,
  subhead,
  primaryCta,
  secondaryCta,
  className,
}: AboutHeroProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden",
        sectionRule,
        surfaceBase,
        className,
      )}
      aria-labelledby="about-hero-heading"
    >
      <HeroLogoBackdrop />
      <div className={heroAmbientSheen} aria-hidden />
      <div className="relative z-10 mx-auto max-w-6xl px-6 pb-16 pt-14 sm:px-8 sm:pb-20 sm:pt-16 lg:px-12 lg:pb-24 lg:pt-20">
        <p className={kicker}>{eyebrow}</p>
        <h1
          id="about-hero-heading"
          className={cn("mt-4 max-w-3xl", displayHeroSm)}
        >
          {headline}
        </h1>
        <p className={cn("mt-5 max-w-2xl", proseBody)}>{subhead}</p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
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
