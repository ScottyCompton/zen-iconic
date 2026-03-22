import type { Step } from "@/content/types";
import { cn } from "@/lib/cn";
import {
  card,
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
};

export function StepsList({ steps, className }: StepsListProps) {
  return (
    <section
      className={cn(sectionRule, surfaceBase, sectionYDense, className)}
      aria-label="Process steps"
    >
      <Container as="div">
        <ol className="grid gap-6 sm:gap-8 lg:grid-cols-2">
          {steps.map((step, index) => (
            <li key={step.title} className={cn(card, "p-6 sm:p-8")}>
              <span className={labelUpper}>
                Step {String(index + 1).padStart(2, "0")}
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
