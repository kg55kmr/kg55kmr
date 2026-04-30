import type { LinkOptions } from "@tanstack/react-router";
import type { LucideProps } from "lucide-react";
import type { FC } from "react";
import type { SetRequired } from "type-fest";
import type { FileRouteTypes } from "~/routeTree.gen";

export type Sections = Record<SectionType, Section>;
export type Section = SectionItem[];
export type SectionItem = {
  title: string;
  groups: GroupItem[];
};

export type NavigationItem = (LocalItem | ExternalItem) & {
  icon?: FC<LucideProps>;
};

export type LocalItem = SetRequired<
  Pick<LinkOptions, "to" | "params" | "search">,
  "to"
> & { title?: string; isSection?: boolean };

type ExternalItem = {
  title: string;
  href: string;
};

export type GroupItem = {
  image?: string;
  groupTitle: string;
  mobileGroupTitle?: string;
  items: NavigationItem[];
};

export type SectionType = ExtractUnion<
  FileRouteTypes["id"],
  | "/(main)"
  | "/educational-process"
  | "/educational-work"
  | "/methodical-office"
  | "/social-and-psychological-service"
  | "/library"
  | "/occupational-safety"
  | "/parent-forum"
  | "/ma-natural-math"
  | "/ma-primary"
  | "/ma-social-humanitarian"
>;

type ExtractUnion<T, K extends T> = Extract<T, K>;

export function getLocalLinkFromItem(item: LocalItem) {
  if (typeof item === "string") return { to: item };
  const { isSection: _, ...rest } = item;
  return rest;
}

export function getPathFromItem(item: NavigationItem) {
  if (isLocalItem(item)) return getLocalLinkFromItem(item).to;
  return item.href;
}

export function isLocalItem(item: NavigationItem): item is LocalItem {
  return "to" in item;
}
