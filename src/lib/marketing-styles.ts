/**
 * Shared visual tokens for marketing UI — spacing, surfaces, type, controls.
 * Keeps sections and CTAs visually aligned without a heavy design system.
 */

import { cn } from "@/lib/cn";

/** Page canvas — keep ring-offset in sync for focus visibility */
export const surfaceCanvas = "bg-[#152922]";

export const borderHairline = "border-white/[0.09]";

export const sectionRule = `border-b ${borderHairline}`;

/** Standard vertical padding for major sections */
export const sectionY = "py-20 sm:py-24";

/** Inner pages with dense stacked blocks (e.g. long-form process) */
export const sectionYDense = "py-16 sm:py-20";

/** Hero / page title bands */
export const pageIntroY = "pt-20 pb-14 sm:pt-24 sm:pb-16";

export const surfaceBase = surfaceCanvas;
/** Alternate section band — slightly lifted with a green cast */
export const surfaceWash = "bg-[#1a322a]/92";
export const surfaceSunken = "bg-black/12";
export const surfacePanel = "bg-[#1f3d32]/58";

export const surfaceHeader = "bg-[#152922]/86 backdrop-blur-md";
export const surfacePopover = "bg-[#152922]/96 backdrop-blur-md";

export const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-400/45 focus-visible:ring-offset-2 focus-visible:ring-offset-[#152922]";

export const focusRingOnPanel =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-400/40 focus-visible:ring-offset-2 focus-visible:ring-offset-[#152922]";

const controlHeight = "inline-flex h-11 min-h-[2.75rem] shrink-0 items-center justify-center rounded-full text-sm font-medium";

export const linkPrimary = cn(
  controlHeight,
  "bg-lime-300 px-6 font-medium text-[#0c1412] transition-colors duration-200 hover:bg-lime-200",
  focusRing,
);

export const linkSecondary = cn(
  controlHeight,
  "border border-lime-400/18 bg-transparent px-6 text-zinc-200 transition-[border-color,background-color] duration-200 hover:border-lime-400/28 hover:bg-lime-400/[0.05]",
  focusRing,
);

export const linkPrimaryOnPanel = cn(
  controlHeight,
  "bg-lime-300 px-6 font-medium text-[#0c1412] transition-colors duration-200 hover:bg-lime-200",
  focusRingOnPanel,
);

export const linkSecondaryOnPanel = cn(
  controlHeight,
  "border border-emerald-400/22 bg-transparent px-6 text-zinc-100 transition-[border-color,background-color] duration-200 hover:border-lime-400/30 hover:bg-lime-400/[0.06]",
  focusRingOnPanel,
);

/** Matches primary CTA for native submit buttons */
export const buttonPrimary = cn(
  controlHeight,
  "cursor-pointer border-0 bg-lime-300 px-8 font-medium text-[#0c1412] transition-colors duration-200 hover:bg-lime-200 disabled:cursor-not-allowed disabled:opacity-50",
  focusRing,
);

export const kicker =
  "text-xs font-medium uppercase tracking-[0.2em] text-lime-400/88";

export const displayHero =
  "text-4xl font-semibold tracking-tight text-zinc-50 sm:text-5xl lg:text-6xl lg:leading-[1.05]";

export const displayHeroSm =
  "text-3xl font-semibold tracking-tight text-zinc-50 sm:text-4xl lg:text-5xl lg:leading-[1.08]";

export const pageTitle =
  "text-3xl font-semibold tracking-tight text-zinc-50 sm:text-4xl";

export const headingSection =
  "text-2xl font-semibold tracking-tight text-zinc-50 sm:text-3xl";

/** Supporting title under a kicker (e.g. value strip). */
export const titleLead =
  "text-lg font-semibold tracking-tight text-zinc-100 sm:text-xl";

export const proseLead = "text-base leading-relaxed text-zinc-300 sm:text-lg";

export const proseBody = "text-sm leading-relaxed text-zinc-300 sm:text-base";

export const proseOnDarkPanel =
  "text-sm leading-relaxed text-zinc-300 sm:text-base";

export const labelUpper =
  "text-xs font-medium uppercase tracking-wider text-zinc-400";

/** Sentence-friendly small label (section intros, form labels). */
export const eyebrowMuted = "text-xs font-medium tracking-wide text-zinc-400";

/** Default content card */
export const card =
  "rounded-2xl border border-emerald-400/10 bg-white/[0.05]";

export const cardSubtleHover =
  "transition-[border-color,background-color] duration-200 hover:border-lime-400/20 hover:bg-lime-400/[0.04]";

/** Featured / tier highlight */
export const cardAccent =
  "rounded-2xl border border-lime-400/25 bg-gradient-to-b from-lime-400/[0.07] to-emerald-600/[0.04] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)]";

/** Large CTA / philosophy panels */
export const panelElevated =
  "relative overflow-hidden rounded-2xl border border-lime-400/15 bg-gradient-to-br from-lime-400/[0.11] via-emerald-800/22 to-[#152922]";

export const navLink =
  "text-sm font-medium text-zinc-400 transition-colors duration-200 hover:text-zinc-50 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-400/45 focus-visible:ring-offset-2 focus-visible:ring-offset-[#152922]";

/** Soft light wash behind hero type (above logo watermark). */
export const heroAmbientSheen =
  "pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_92%_62%_at_50%_-26%,rgba(163,230,53,0.15)_0%,rgba(52,211,153,0.09)_45%,transparent_78%)]";

/** Form controls (contact, etc.) */
export const inputField =
  "mt-2 w-full rounded-xl border border-emerald-400/12 bg-[#1c342c]/72 px-4 py-3 text-sm text-zinc-100 outline-none transition-[border-color,box-shadow] duration-200 placeholder:text-zinc-500 focus:border-lime-400/35 focus:ring-2 focus:ring-lime-400/12";

export const fieldLabel = eyebrowMuted;
