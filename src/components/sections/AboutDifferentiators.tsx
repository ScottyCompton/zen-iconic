import type { AboutBlurb } from "@/content/types";
import { cn } from "@/lib/cn";
import {
  card,
  headingSection,
  kicker,
  proseBody,
  sectionRule,
  sectionY,
  surfaceWash,
} from "@/lib/marketing-styles";

import { Container } from "../layout/Container";

type AboutDifferentiatorsProps = {
  kicker: string;
  title: string;
  lead: string;
  items: AboutBlurb[];
  className?: string;
};

export function AboutDifferentiators({
  kicker: kickerText,
  title,
  lead,
  items,
  className,
}: AboutDifferentiatorsProps) {
  return (
    <section
      className={cn(sectionRule, surfaceWash, sectionY, className)}
      aria-labelledby="about-differentiators-heading"
    >
      <Container as="div">
        <p className={kicker}>{kickerText}</p>
        <h2
          id="about-differentiators-heading"
          className={cn("mt-3 max-w-2xl", headingSection)}
        >
          {title}
        </h2>
        <p className={cn("mt-4 max-w-2xl", proseBody)}>{lead}</p>
        <ul className="mt-12 grid gap-5 lg:grid-cols-3 lg:gap-6">
          {items.map((item) => (
            <li key={item.title} className={cn(card, "p-6 sm:p-7")}>
              <h3 className="text-sm font-semibold text-zinc-100">
                {item.title}
              </h3>
              <p className={cn("mt-3", proseBody)}>{item.body}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
