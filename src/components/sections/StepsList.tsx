import type { Step } from "@/content/types";
import { cn } from "@/lib/cn";
import {
  card,
  headingSection,
  labelUpper,
  proseBody,
  sectionRule,
  sectionYDense,
  surfaceBase,
} from "@/lib/marketing-styles";

import { Container } from "../layout/Container";

type StepsListProps = {
  steps: Step[];
  className?: string;
  /** Prefix before the number, e.g. "Stage" for a funnel. Default: Step */
  sequenceLabel?: string;
  /** Overrides the section's default aria-label. */
  ariaLabel?: string;
  sectionTitle?: string;
  sectionSubtitle?: string;
  /** For aria-labelledby when sectionTitle is set. */
  sectionTitleId?: string;
};

export function StepsList({
  steps,
  className,
  sequenceLabel = "Step",
  ariaLabel = "Process steps",
  sectionTitle,
  sectionSubtitle,
  sectionTitleId = "steps-list-heading",
}: StepsListProps) {
  return (
    <section
      className={cn(sectionRule, surfaceBase, sectionYDense, className)}
      aria-label={sectionTitle ? undefined : ariaLabel}
      aria-labelledby={sectionTitle ? sectionTitleId : undefined}
    >
      <Container as="div">
        {(sectionTitle || sectionSubtitle) && (
          <div className="max-w-2xl">
            {sectionTitle && (
              <h2 id={sectionTitleId} className={headingSection}>
                {sectionTitle}
              </h2>
            )}
            {sectionSubtitle && (
              <p className={cn("mt-3", proseBody)}>{sectionSubtitle}</p>
            )}
          </div>
        )}
        <ol
          className={cn(
            "grid gap-6 sm:gap-8 lg:grid-cols-2",
            sectionTitle || sectionSubtitle ? "mt-12" : "",
          )}
        >
          {steps.map((step, index) => (
            <li key={step.title} className={cn(card, "p-6 sm:p-8")}>
              <span className={labelUpper}>
                {sequenceLabel} {String(index + 1).padStart(2, "0")}
              </span>
              <h2 className="mt-3 text-lg font-semibold text-zinc-50 sm:text-xl">
                {step.title}
              </h2>
              <p className={cn("mt-3", proseBody)}>{step.description}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
