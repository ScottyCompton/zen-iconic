import Link from "next/link";
import type { ComponentProps } from "react";

import { cn } from "@/lib/cn";
import {
  linkPrimary,
  linkPrimaryOnPanel,
  linkSecondary,
  linkSecondaryOnPanel,
} from "@/lib/marketing-styles";

export type MarketingButtonVariant =
  | "primary"
  | "secondary"
  | "primaryOnPanel"
  | "secondaryOnPanel";

const variantClass: Record<MarketingButtonVariant, string> = {
  primary: linkPrimary,
  secondary: linkSecondary,
  primaryOnPanel: linkPrimaryOnPanel,
  secondaryOnPanel: linkSecondaryOnPanel,
};

export type MarketingButtonLinkProps = Omit<
  ComponentProps<typeof Link>,
  "className"
> & {
  variant: MarketingButtonVariant;
  className?: string;
};

export function MarketingButtonLink({
  variant,
  className,
  ...props
}: MarketingButtonLinkProps) {
  return (
    <Link className={cn(variantClass[variant], className)} {...props} />
  );
}
