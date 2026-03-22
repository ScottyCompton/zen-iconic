import { cn } from "@/lib/cn";
import {
  headingSection,
  proseBody,
  sectionRule,
  sectionYDense,
  surfacePanel,
} from "@/lib/marketing-styles";
import { MarketingButtonLink } from "@/components/ui/MarketingButtonLink";

import { Container } from "../layout/Container";

type TeaserBandProps = {
  title: string;
  body: string;
  cta: { href: string; label: string };
  className?: string;
};

export function TeaserBand({ title, body, cta, className }: TeaserBandProps) {
  return (
    <section
      className={cn(sectionRule, surfacePanel, sectionYDense, className)}
      aria-labelledby="teaser-title"
    >
      <Container as="div">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl space-y-3">
            <h2 id="teaser-title" className={headingSection}>
              {title}
            </h2>
            <p className={proseBody}>{body}</p>
          </div>
          <MarketingButtonLink
            href={cta.href}
            variant="secondary"
            className="shrink-0 lg:mb-0.5"
          >
            {cta.label}
          </MarketingButtonLink>
        </div>
      </Container>
    </section>
  );
}
