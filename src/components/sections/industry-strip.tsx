import fs from "node:fs";
import path from "node:path";

import Image from "next/image";

import { Container } from "@/components/layout/Container";
import { cn } from "@/lib/cn";
import { surfaceBase, titleLead } from "@/lib/marketing-styles";

/** Card / overlay: smooth deceleration. */
const hoverEase =
  "duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:duration-0";

const IMAGE_EXT = /\.(avif|gif|jpe?g|png|webp)$/i;

const TITLE_ACRONYMS: Record<string, string> = {
  hvac: "HVAC",
  it: "IT",
  seo: "SEO",
  ui: "UI",
  ux: "UX",
};

export type IndustryStripItem = {
  filename: string;
  src: string;
  title: string;
};

function filenameToTitle(filename: string): string {
  const base = filename.replace(/\.[^.]+$/i, "");
  const segments = base.split(/[_-]+/).filter(Boolean);

  return segments
    .map((segment) => {
      const lower = segment.toLowerCase();
      if (TITLE_ACRONYMS[lower]) return TITLE_ACRONYMS[lower];
      return segment.charAt(0).toUpperCase() + segment.slice(1).toLowerCase();
    })
    .join(" ");
}

function readIndustryImageFilenames(): string[] {
  const dir = path.join(process.cwd(), "public", "industry_imgs");
  if (!fs.existsSync(dir)) return [];

  return fs
    .readdirSync(dir)
    .filter(
      (name) => IMAGE_EXT.test(name) && !name.startsWith(".") && name !== ".gitkeep",
    )
    .sort((a, b) => a.localeCompare(b, undefined, { sensitivity: "base" }));
}

export function getIndustryStripItems(): IndustryStripItem[] {
  return readIndustryImageFilenames().map((filename) => ({
    filename,
    src: `/industry_imgs/${filename}`,
    title: filenameToTitle(filename),
  }));
}

type IndustryStripProps = {
  className?: string;
};

/**
 * Horizontal marquee of industry images from `public/industry_imgs`.
 * Filenames drive labels (e.g. `hvac_tech.jpg` → “HVAC Tech”).
 */
export function IndustryStrip({ className }: IndustryStripProps) {
  const items = getIndustryStripItems();
  if (items.length === 0) return null;

  const loopItems = [...items, ...items];

  return (
    <section
      className={cn(
        surfaceBase,
        "border-b border-white/9 py-8 sm:py-10",
        className,
      )}
      aria-labelledby="industry-strip-tagline"
    >
      <Container as="div" className="mb-6 sm:mb-8">
        <p
          id="industry-strip-tagline"
          className={cn(
            titleLead,
            "mx-auto max-w-2xl text-balance text-center text-zinc-200 sm:max-w-3xl",
          )}
        >
          We help local small businesses like yours get more customers
        </p>
      </Container>
      <div className="relative overflow-hidden" aria-label="Industries we work with">
        <div
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-linear-to-r from-[#152922] to-transparent sm:w-20"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-linear-to-l from-[#152922] to-transparent sm:w-20"
          aria-hidden
        />

        <div className="motion-reduce:overflow-x-auto motion-reduce:pb-1">
          <div
            className={cn(
              "flex w-max gap-4 sm:gap-6",
              "animate-industry-strip-marquee motion-reduce:animate-none motion-reduce:px-6",
            )}
          >
            {loopItems.map((item, index) => (
              <figure
                key={`${item.filename}-${index}`}
                className={cn(
                  "industry-strip-card group relative z-0 shrink-0 overflow-hidden rounded-xl border border-white/8 bg-black/15 shadow-[0_1px_0_0_rgba(255,255,255,0.04)_inset]",
                  "transition-[transform,box-shadow]",
                  hoverEase,
                  "group-hover:z-20 group-hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.45)] motion-reduce:group-hover:shadow-none",
                )}
              >
                <Image
                  src={item.src}
                  alt={item.title}
                  width={240}
                  height={228}
                  sizes="(max-width: 640px) 38vw, 168px"
                  className={cn(
                    "industry-strip-card__image h-[138px] w-[146px] object-cover object-center sm:h-[150px] sm:w-[158px]",
                    "brightness-[0.99] group-hover:brightness-100 motion-reduce:brightness-100",
                  )}
                />
                <figcaption
                  className={cn(
                    "pointer-events-none absolute inset-0 flex items-end justify-center bg-linear-to-t from-black/80 via-black/25 to-transparent px-3 pb-3 text-center",
                    "opacity-0 transition-[opacity,transform]",
                    hoverEase,
                    "translate-y-2 group-hover:translate-y-0 group-hover:opacity-100 motion-reduce:translate-y-0",
                  )}
                >
                  <span className="text-xs font-medium tracking-tight text-zinc-50 sm:text-sm">
                    {item.title}
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
