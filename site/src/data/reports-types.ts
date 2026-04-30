import type { FC } from "react";

export type ReportItemWithItems = ReportItem & {
  items?: ReportItemWithItems[];
};

export type ReportItem = {
  title: string;
  href?: string;
  component?: FC;
};
