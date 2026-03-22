import { cn } from "@/lib/cn";
import {
  card,
  kicker,
  sectionRule,
  sectionY,
  surfaceBase,
} from "@/lib/marketing-styles";
import { MarketingButtonLink } from "@/components/ui/MarketingButtonLink";

import { Container } from "../layout/Container";

type PhilosophyBlockProps = {
  id?: string;
  title: string;
  body: string;
  cta: { href: string; label: string };
  className?: string;
};

export function PhilosophyBlock({
  id,
  title,
  body,
  cta,
  className,
}: PhilosophyBlockProps) {
  return (
    <section
      id={id}
      className={cn(sectionRule, surfaceBase, sectionY, className)}
      aria-labelledby="philosophy-heading"
    >
      <Container as="div">
        <div
          className={cn(
            card,
            "relative mx-auto max-w-3xl overflow-hidden px-8 py-12 sm:px-12 sm:py-14",
          )}
        >
          <div
            className="pointer-events-none absolute -left-20 top-0 h-40 w-40 rounded-full bg-emerald-500/[0.06] blur-3xl"
            aria-hidden
          />
          <p className={kicker}>{title}</p>
          <h2 id="philosophy-heading" className="sr-only">
            {title}
          </h2>
          <p className={cn("relative mt-4 text-lg font-medium text-zinc-100 sm:text-xl")}>
            {body}
          </p>
          <MarketingButtonLink
            href={cta.href}
            variant="secondary"
            className="relative mt-8"
          >
            {cta.label}
          </MarketingButtonLink>
        </div>
      </Container>
    </section>
  );
}
