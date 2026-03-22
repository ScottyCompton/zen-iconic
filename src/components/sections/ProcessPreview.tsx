import type { ProcessPreviewStep } from "@/content/types";
import { cn } from "@/lib/cn";
import {
  card,
  headingSection,
  proseBody,
  sectionRule,
  sectionY,
  surfaceSunken,
} from "@/lib/marketing-styles";
import { MarketingButtonLink } from "@/components/ui/MarketingButtonLink";

import { Container } from "../layout/Container";

type ProcessPreviewProps = {
  id?: string;
  title: string;
  subtitle: string;
  cta: { href: string; label: string };
  steps: ProcessPreviewStep[];
  className?: string;
};

export function ProcessPreview({
  id,
  title,
  subtitle,
  cta,
  steps,
  className,
}: ProcessPreviewProps) {
  return (
    <section
      id={id}
      className={cn(sectionRule, surfaceSunken, sectionY, className)}
      aria-labelledby="process-preview-heading"
    >
      <Container as="div">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div className="max-w-xl">
            <h2 id="process-preview-heading" className={headingSection}>
              {title}
            </h2>
            <p className={cn("mt-3", proseBody)}>{subtitle}</p>
          </div>
          <MarketingButtonLink
            href={cta.href}
            variant="primary"
            className="self-start lg:self-auto"
          >
            {cta.label}
          </MarketingButtonLink>
        </div>

        <ol className="mt-14 grid gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 xl:gap-3">
          {steps.map((step, index) => (
            <li key={step.title} className={cn(card, "p-5 sm:p-6 xl:p-5")}>
              <span className="font-mono text-[10px] font-medium tabular-nums text-emerald-500/75">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-2 text-sm font-semibold text-zinc-50">
                {step.title}
              </h3>
              <p className={cn("mt-2", proseBody)}>{step.summary}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
