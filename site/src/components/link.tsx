import type { AnchorHTMLAttributes } from "react";
import { type LinkComponent, createLink } from "@tanstack/react-router";
import { cn } from "~/lib/utils";

type AnchorProps = AnchorHTMLAttributes<HTMLAnchorElement>;

const BaseLink = createLink((props: AnchorProps) => {
  return <a {...props} className={styles(props.className)} />;
});

export const Link: LinkComponent<typeof BaseLink> = (props) => {
  return <BaseLink resetScroll={false} {...props} />;
};

export function ExternalLink(props: AnchorProps) {
  return (
    <a
      {...props}
      rel="noreferrer"
      target="_blank"
      className={styles(props.className)}
    />
  );
}

function styles(className?: string) {
  return cn(
    {
      "text-[blue] underline underline-offset-6":
        !className || className === "active",
    },
    className,
  );
}
