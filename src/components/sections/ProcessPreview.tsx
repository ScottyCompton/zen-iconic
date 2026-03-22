import type { ProcessPreviewStep } from "@/content/types";
import { cn } from "@/lib/cn";
import {
  eyebrowMuted,
  headingSection,
  sectionRule,
  surfaceInk,
} from "@/lib/marketing-styles";
import { MarketingButtonLink } from "@/components/ui/MarketingButtonLink";

import { Container } from "../layout/Container";

type ProcessPreviewProps = {
  id?: string;
  /** Small label above the headline. */
  title: string;
  /** Primary section heading. */
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
  const headingId = "process-preview-heading";

  return (
    <section
      id={id}
      className={cn(sectionRule, surfaceInk, "py-20 sm:py-24", className)}
      aria-labelledby={headingId}
    >
      <Container as="div">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <header className="max-w-3xl">
            <p className={cn(eyebrowMuted, "text-zinc-500")}>{title}</p>
            <h2 id={headingId} className={cn("mt-3", headingSection)}>
              {subtitle}
            </h2>
          </header>
          <MarketingButtonLink
            href={cta.href}
            variant="primary"
            className="shrink-0 self-start lg:self-auto"
          >
            {cta.label}
          </MarketingButtonLink>
        </div>

        <ol className="mt-14 list-none space-y-0 sm:mt-16 md:mt-20 xl:grid xl:grid-cols-5 xl:gap-0">
          {steps.map((step, index) => (
            <li
              key={step.title}
              className={cn(
                "pt-12 first:pt-0",
                "border-t border-white/[0.08] first:border-t-0",
                "xl:border-t-0 xl:pt-0",
                index > 0 &&
                  "xl:border-l xl:border-white/[0.08] xl:pl-6 2xl:pl-10",
              )}
            >
              <span
                className="font-mono text-sm font-medium tabular-nums tracking-tight text-lime-400"
                aria-hidden
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 text-base font-semibold leading-snug text-zinc-50 sm:text-lg">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-400 sm:text-base">
                {step.summary}
              </p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
