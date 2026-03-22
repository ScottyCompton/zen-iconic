import type { ProcessPhase } from "@/content/types";
import { cn } from "@/lib/cn";
import {
  card,
  proseBody,
  sectionRule,
  sectionYDense,
  surfaceBase,
} from "@/lib/marketing-styles";

import { Container } from "../layout/Container";

type ProcessPhasesProps = {
  phases: ProcessPhase[];
  className?: string;
};

export function ProcessPhases({ phases, className }: ProcessPhasesProps) {
  return (
    <section
      className={cn(sectionRule, surfaceBase, sectionYDense, className)}
      aria-label="Engagement phases"
    >
      <Container as="div">
        <ol className="relative">
          {phases.map((phase, index) => (
            <li
              key={phase.id}
              className="relative scroll-mt-28 pb-14 pl-9 last:pb-0 sm:pl-11 md:pb-16 md:last:pb-2"
            >
              {index < phases.length - 1 && (
                <span
                  className="absolute left-[0.55rem] top-10 bottom-0 w-px bg-gradient-to-b from-white/18 via-white/10 to-transparent sm:left-[0.65rem] md:top-12"
                  aria-hidden
                />
              )}
              <span
                className="absolute left-0 top-1 flex h-7 w-7 items-center justify-center rounded-full border border-emerald-500/30 bg-zinc-950 text-[10px] font-semibold tabular-nums text-emerald-400/95 ring-4 ring-zinc-950 sm:top-0.5 sm:h-8 sm:w-8 sm:text-[11px]"
                aria-hidden
              >
                {String(index + 1).padStart(2, "0")}
              </span>

              <article className={cn(card, "p-6 sm:p-8")}>
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <h2
                    id={`phase-${phase.id}`}
                    className="text-xl font-semibold tracking-tight text-zinc-50 sm:text-2xl"
                  >
                    {phase.title}
                  </h2>
                  <span className="text-xs font-medium uppercase tracking-wider text-zinc-600">
                    Phase {index + 1} of {phases.length}
                  </span>
                </div>
                <p className={cn("mt-4", proseBody)}>{phase.body}</p>
                <div className="mt-6 border-t border-white/[0.06] pt-5">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-emerald-500/85">
                    Phase output
                  </p>
                  <p className="mt-2 text-sm font-medium leading-relaxed text-zinc-200">
                    {phase.output}
                  </p>
                </div>
              </article>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
