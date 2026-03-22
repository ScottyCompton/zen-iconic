import { cn } from "@/lib/cn";
import {
  eyebrowMuted,
  headingSection,
  proseBody,
  sectionRule,
  sectionY,
  surfaceBase,
} from "@/lib/marketing-styles";

import { Container } from "../layout/Container";

type AboutMissionProps = {
  kicker: string;
  title: string;
  paragraphs: readonly string[];
  className?: string;
};

export function AboutMission({
  kicker: kickerText,
  title,
  paragraphs,
  className,
}: AboutMissionProps) {
  return (
    <section
      className={cn(sectionRule, surfaceBase, sectionY, className)}
      aria-labelledby="about-mission-heading"
    >
      <Container as="div">
        <p className={eyebrowMuted}>{kickerText}</p>
        <h2 id="about-mission-heading" className={cn("mt-3 max-w-3xl", headingSection)}>
          {title}
        </h2>
        <div className="mt-10 max-w-3xl space-y-6">
          {paragraphs.map((paragraph, index) => (
            <p key={index} className={proseBody}>
              {paragraph}
            </p>
          ))}
        </div>
      </Container>
    </section>
  );
}
