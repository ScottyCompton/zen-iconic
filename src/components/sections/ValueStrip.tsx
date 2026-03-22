import type { Feature } from "@/content/types";
import { cn } from "@/lib/cn";
import {
  eyebrowMuted,
  headingSection,
  sectionRule,
  surfaceInk,
} from "@/lib/marketing-styles";

import { Container } from "../layout/Container";

type ValueStripProps = {
  id?: string;
  /** Small label above the headline (e.g. “How we think about the work”). */
  title: string;
  /** Primary section heading. */
  subtitle?: string;
  items: Feature[];
  className?: string;
};

export function ValueStrip({
  id,
  title,
  subtitle,
  items,
  className,
}: ValueStripProps) {
  const headingId = "value-strip-heading";

  return (
    <section
      id={id}
      className={cn(sectionRule, surfaceInk, "py-20 sm:py-24", className)}
      aria-labelledby={headingId}
    >
      <Container as="div">
        <header className="max-w-3xl">
          {subtitle ? (
            <>
              <p className={cn(eyebrowMuted, "text-zinc-500")}>{title}</p>
              <h2 id={headingId} className={cn("mt-3", headingSection)}>
                {subtitle}
              </h2>
            </>
          ) : (
            <h2 id={headingId} className={headingSection}>
              {title}
            </h2>
          )}
        </header>

        <ul className="mt-14 grid gap-0 sm:mt-16 md:mt-20 md:grid-cols-3">
          {items.map((item, index) => (
            <li
              key={item.title}
              className={cn(
                "pt-12 first:pt-0",
                "border-t border-white/[0.08] first:border-t-0",
                "md:border-t-0 md:pt-0",
                index > 0 && "md:border-l md:border-white/[0.08] md:pl-10 lg:pl-12",
              )}
            >
              <span
                className="font-mono text-sm font-medium tabular-nums tracking-tight text-lime-400"
                aria-hidden
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 text-base font-semibold leading-snug text-zinc-50 sm:text-lg">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-400 sm:text-base">
                {item.description}
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
