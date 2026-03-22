import type { ServicesFocusArea } from "@/content/types";
import { cn } from "@/lib/cn";
import {
  card,
  sectionRule,
  sectionYDense,
  surfaceBase,
  surfaceWash,
} from "@/lib/marketing-styles";

import { Container } from "../layout/Container";

type ServiceFocusSectionProps = {
  area: ServicesFocusArea;
  index: number;
  className?: string;
};

export function ServiceFocusSection({
  area,
  index,
  className,
}: ServiceFocusSectionProps) {
  const muted = index % 2 === 1;

  return (
    <section
      id={area.id}
      className={cn(
        "scroll-mt-28",
        sectionRule,
        muted ? surfaceWash : surfaceBase,
        sectionYDense,
        className,
      )}
      aria-labelledby={`${area.id}-heading`}
    >
      <Container as="div">
        <article className={cn(card, "p-6 sm:p-8")}>
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-14 lg:items-start">
          <div className="lg:col-span-5">
            <span
              className="font-mono text-[10px] font-medium tabular-nums text-emerald-500/80"
              aria-hidden
            >
              {String(index + 1).padStart(2, "0")}
            </span>
            <h2
              id={`${area.id}-heading`}
              className="mt-2 text-2xl font-semibold tracking-tight text-zinc-50 sm:text-3xl"
            >
              {area.title}
            </h2>
            <p className="mt-5 text-sm font-medium leading-relaxed text-zinc-200 sm:text-base">
              {area.promise}
            </p>
          </div>
          <div className="lg:col-span-7">
            <p className="text-xs font-medium uppercase tracking-wider text-zinc-600">
              Outcomes
            </p>
            <ul className="mt-4 space-y-4">
              {area.outcomes.map((line) => (
                <li
                  key={line}
                  className="flex gap-3 text-sm leading-relaxed text-zinc-400 sm:text-base"
                >
                  <span
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400/70"
                    aria-hidden
                  />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        </article>
      </Container>
    </section>
  );
}
