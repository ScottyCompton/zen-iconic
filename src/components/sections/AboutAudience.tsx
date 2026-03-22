import type { HomePoint } from "@/content/types";
import { cn } from "@/lib/cn";
import {
  card,
  eyebrowMuted,
  headingSection,
  proseBody,
  sectionRule,
  sectionY,
  surfaceBase,
} from "@/lib/marketing-styles";

import { Container } from "../layout/Container";

type AboutAudienceProps = {
  kicker: string;
  title: string;
  lead: string;
  points: HomePoint[];
  className?: string;
};

export function AboutAudience({
  kicker: kickerText,
  title,
  lead,
  points,
  className,
}: AboutAudienceProps) {
  return (
    <section
      className={cn(sectionRule, surfaceBase, sectionY, className)}
      aria-labelledby="about-audience-heading"
    >
      <Container as="div">
        <p className={eyebrowMuted}>{kickerText}</p>
        <h2
          id="about-audience-heading"
          className={cn("mt-3 max-w-2xl", headingSection)}
        >
          {title}
        </h2>
        <p className={cn("mt-4 max-w-2xl", proseBody)}>{lead}</p>
        <ul className="mt-12 flex max-w-4xl flex-col gap-5">
          {points.map((point) => (
            <li key={point.title} className={cn(card, "px-5 py-5 sm:px-6 sm:py-6")}>
              <h3 className="text-sm font-semibold text-zinc-100">
                {point.title}
              </h3>
              <p className={cn("mt-2", proseBody)}>{point.text}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
