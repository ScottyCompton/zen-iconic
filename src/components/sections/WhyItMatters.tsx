import type { HomePoint } from "@/content/types";
import { cn } from "@/lib/cn";
import {
  card,
  headingSection,
  proseBody,
  sectionRule,
  sectionY,
  surfaceBase,
} from "@/lib/marketing-styles";

import { Container } from "../layout/Container";

type WhyItMattersProps = {
  id?: string;
  title: string;
  lead: string;
  points: HomePoint[];
  className?: string;
};

export function WhyItMatters({
  id,
  title,
  lead,
  points,
  className,
}: WhyItMattersProps) {
  return (
    <section
      id={id}
      className={cn(sectionRule, surfaceBase, sectionY, className)}
      aria-labelledby="why-matters-heading"
    >
      <Container as="div">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <h2 id="why-matters-heading" className={headingSection}>
              {title}
            </h2>
            <p className={cn("mt-5", proseBody)}>{lead}</p>
          </div>
          <ul className="flex flex-col gap-5 lg:col-span-7">
            {points.map((point) => (
              <li key={point.title} className={cn(card, "px-5 py-5 sm:px-6 sm:py-6")}>
                <h3 className="text-sm font-semibold text-zinc-100">
                  {point.title}
                </h3>
                <p className={cn("mt-2", proseBody)}>{point.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
