import type { FC } from "react";

export type ReportItemWithItems = ReportItem & {
  items?: ReportItemWithItems[];
};

export type ReportItem = {
  title: string;
  shortTitle?: string;
  value?: string;
  href?: string;
  component?: FC;
};
