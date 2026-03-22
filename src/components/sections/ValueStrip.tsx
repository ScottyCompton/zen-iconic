import type { Feature } from "@/content/types";
import { cn } from "@/lib/cn";
import {
  eyebrowMuted,
  proseBody,
  sectionRule,
  surfaceSunken,
  titleLead,
} from "@/lib/marketing-styles";

import { Container } from "../layout/Container";

type ValueStripProps = {
  id?: string;
  title: string;
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
  return (
    <section
      id={id}
      className={cn(
        sectionRule,
        surfaceSunken,
        "py-16 sm:py-20",
        className,
      )}
      aria-labelledby="value-strip-heading"
    >
      <Container as="div">
        <div className="max-w-2xl">
          <h2 id="value-strip-heading" className={eyebrowMuted}>
            {title}
          </h2>
          {subtitle ? (
            <p className={cn("mt-3", titleLead)}>{subtitle}</p>
          ) : null}
        </div>
        <ul className="mt-10 grid gap-8 divide-y divide-white/[0.06] md:mt-12 md:grid-cols-3 md:gap-10 md:divide-x md:divide-y-0 md:px-0">
          {items.map((item, index) => (
            <li
              key={item.title}
              className="pt-8 first:pt-0 md:pt-0 md:pl-10 md:first:pl-0"
            >
              <span
                className="font-mono text-[10px] font-medium tabular-nums text-emerald-500/80"
                aria-hidden
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-2 text-sm font-semibold text-zinc-50">
                {item.title}
              </h3>
              <p className={cn("mt-2", proseBody)}>{item.description}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
