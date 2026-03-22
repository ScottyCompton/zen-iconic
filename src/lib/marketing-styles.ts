/**
 * Shared visual tokens for marketing UI — spacing, surfaces, type, controls.
 * Keeps sections and CTAs visually aligned without a heavy design system.
 */

import { cn } from "@/lib/cn";

export const borderHairline = "border-white/[0.06]";

export const sectionRule = `border-b ${borderHairline}`;

/** Standard vertical padding for major sections */
export const sectionY = "py-20 sm:py-24";

/** Inner pages with dense stacked blocks (e.g. long-form process) */
export const sectionYDense = "py-16 sm:py-20";

/** Hero / page title bands */
export const pageIntroY = "pt-20 pb-14 sm:pt-24 sm:pb-16";

export const surfaceBase = "bg-zinc-950";
export const surfaceWash = "bg-zinc-900/25";
export const surfaceSunken = "bg-zinc-900/20";
export const surfacePanel = "bg-zinc-900/30";

export const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/50 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950";

export const focusRingOnPanel =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/45 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-900";

const controlHeight = "inline-flex h-11 min-h-[2.75rem] shrink-0 items-center justify-center rounded-full text-sm font-medium";

export const linkPrimary = cn(
  controlHeight,
  "bg-zinc-100 px-6 text-zinc-950 transition-colors duration-200 hover:bg-white",
  focusRing,
);

export const linkSecondary = cn(
  controlHeight,
  "border border-white/10 bg-transparent px-6 text-zinc-200 transition-[border-color,background-color] duration-200 hover:border-white/[0.16] hover:bg-white/[0.04]",
  focusRing,
);

export const linkPrimaryOnPanel = cn(
  controlHeight,
  "bg-zinc-100 px-6 text-zinc-950 transition-colors duration-200 hover:bg-white",
  focusRingOnPanel,
);

export const linkSecondaryOnPanel = cn(
  controlHeight,
  "border border-white/12 bg-transparent px-6 text-zinc-100 transition-[border-color,background-color] duration-200 hover:border-white/20 hover:bg-white/[0.05]",
  focusRingOnPanel,
);

/** Matches primary CTA for native submit buttons */
export const buttonPrimary = cn(
  controlHeight,
  "cursor-pointer border-0 bg-zinc-100 px-8 text-zinc-950 transition-colors duration-200 hover:bg-white disabled:cursor-not-allowed disabled:opacity-50",
  focusRing,
);

export const kicker = "text-xs font-medium uppercase tracking-[0.2em] text-emerald-400/85";

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

export const proseLead = "text-base leading-relaxed text-zinc-400 sm:text-lg";

export const proseBody = "text-sm leading-relaxed text-zinc-400 sm:text-base";

export const proseOnDarkPanel =
  "text-sm leading-relaxed text-zinc-300 sm:text-base";

export const labelUpper =
  "text-xs font-medium uppercase tracking-wider text-zinc-500";

/** Sentence-friendly small label (section intros, form labels). */
export const eyebrowMuted = "text-xs font-medium tracking-wide text-zinc-500";

/** Default content card */
export const card = "rounded-2xl border border-white/[0.07] bg-white/[0.02]";

export const cardSubtleHover =
  "transition-[border-color,background-color] duration-200 hover:border-white/[0.11] hover:bg-white/[0.035]";

/** Featured / tier highlight */
export const cardAccent =
  "rounded-2xl border border-emerald-500/22 bg-emerald-500/[0.05] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.04)]";

/** Large CTA / philosophy panels */
export const panelElevated =
  "relative overflow-hidden rounded-2xl border border-white/[0.08] bg-gradient-to-br from-emerald-500/[0.08] via-zinc-900/55 to-zinc-950";

export const navLink =
  "text-sm font-medium text-zinc-400 transition-colors duration-200 hover:text-zinc-100 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/50 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950";

/** Form controls (contact, etc.) */
export const inputField =
  "mt-2 w-full rounded-xl border border-white/[0.09] bg-zinc-900/50 px-4 py-3 text-sm text-zinc-100 outline-none transition-[border-color,box-shadow] duration-200 placeholder:text-zinc-600 focus:border-emerald-400/35 focus:ring-2 focus:ring-emerald-400/15";

export const fieldLabel = eyebrowMuted;
