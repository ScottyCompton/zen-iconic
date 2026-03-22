import Image from "next/image";

import { cn } from "@/lib/cn";

const LOGO_SRC = "/zeniconic-logo.png";

type HeroLogoBackdropProps = {
  className?: string;
  /** Use on the main homepage hero so LCP can prefetch the mark. */
  priority?: boolean;
};

/**
 * Large brand mark for hero bands — kept at ~20% opacity so type stays primary.
 */
export function HeroLogoBackdrop({
  className,
  priority = false,
}: HeroLogoBackdropProps) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden",
        className,
      )}
      aria-hidden
    >
      <div className="absolute -right-4 top-1/2 h-[min(92vw,580px)] w-[min(92vw,580px)] max-h-[640px] min-h-[260px] -translate-y-1/2 sm:-right-8 sm:h-[min(58vw,540px)] sm:w-[min(58vw,540px)] lg:right-0 relative">
        <Image
          src={LOGO_SRC}
          alt=""
          fill
          sizes="(max-width: 640px) 92vw, 580px"
          className="object-contain object-right opacity-20"
          priority={priority}
        />
      </div>
    </div>
  );
}
