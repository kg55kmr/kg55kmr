import type { FC } from "react";
import z from "zod";

export type ReportItemWithItems = ReportItem & {
  items?: ReportItemWithItems[];
};

export type ReportItem = {
  id?: ReportItemId;
  title: string;
  href?: string;
  component?: FC;
};

export type ReportItemId = z.output<typeof reportItemIdSchema>;

export const reportItemIdSchema = z.union([z.literal("catchment-area")]);
