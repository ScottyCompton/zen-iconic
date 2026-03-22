import { site } from "@/content/site";
import { cn } from "@/lib/cn";
import {
  heroAmbientSheen,
  kicker,
  pageIntroY,
  pageTitle,
  proseBody,
  sectionRule,
  surfaceBase,
} from "@/lib/marketing-styles";

import { Container } from "../layout/Container";
import { HeroLogoBackdrop } from "./HeroLogoBackdrop";

type PageIntroProps = {
  title: string;
  description: string;
  className?: string;
};

export function PageIntro({ title, description, className }: PageIntroProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden",
        sectionRule,
        surfaceBase,
        pageIntroY,
        className,
      )}
      aria-labelledby="page-title"
    >
      <HeroLogoBackdrop />
      <div className={heroAmbientSheen} aria-hidden />
      <Container as="div" className="relative z-10">
        <p className={kicker}>{site.name}</p>
        <h1 id="page-title" className={cn("mt-4 max-w-3xl", pageTitle)}>
          {title}
        </h1>
        <p className={cn("mt-4 max-w-2xl", proseBody)}>{description}</p>
      </Container>
    </section>
  );
}
