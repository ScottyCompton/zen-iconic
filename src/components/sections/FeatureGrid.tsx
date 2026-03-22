import type { Feature } from "@/content/types";
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

type FeatureGridProps = {
  id?: string;
  title?: string;
  subtitle?: string;
  features: Feature[];
  className?: string;
};

export function FeatureGrid({
  id,
  title,
  subtitle,
  features,
  className,
}: FeatureGridProps) {
  return (
    <section
      id={id}
      className={cn(sectionRule, surfaceBase, sectionY, className)}
      aria-labelledby={title ? "feature-grid-title" : undefined}
    >
      <Container as="div">
        {(title || subtitle) && (
          <div className="max-w-2xl">
            {title && (
              <h2 id="feature-grid-title" className={headingSection}>
                {title}
              </h2>
            )}
            {subtitle && (
              <p className={cn("mt-3", proseBody)}>{subtitle}</p>
            )}
          </div>
        )}
        <ul
          className={cn(
            "grid gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3",
            title || subtitle ? "mt-12" : "",
          )}
        >
          {features.map((feature) => (
            <li key={feature.title} className={cn(card, "p-6 sm:p-7")}>
              <h3 className="text-base font-semibold text-zinc-50">
                {feature.title}
              </h3>
              <p className={cn("mt-3", proseBody)}>{feature.description}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
