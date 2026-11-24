import type { AnchorHTMLAttributes } from "react";
import { type LinkComponent, createLink } from "@tanstack/react-router";
import { cn } from "~/lib/utils";

type AnchorProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  unstyled?: boolean;
};

export const Link: LinkComponent<typeof BaseLink> = (props) => (
  <BaseLink resetScroll={false} {...props} />
);

export function ExternalLink({ unstyled, className, ...props }: AnchorProps) {
  return (
    <a
      {...props}
      rel="noreferrer"
      target="_blank"
      className={unstyled ? className : cn(defaultClassName, className)}
    />
  );
}

const BaseLink = createLink(
  ({ unstyled, className, ...props }: AnchorProps) => (
    <a
      {...props}
      className={unstyled ? className : cn(defaultClassName, className)}
    />
  ),
);

const defaultClassName = "text-blue-700 underline underline-offset-6";
