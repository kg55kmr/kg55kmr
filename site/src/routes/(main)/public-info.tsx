import { createFileRoute } from "@tanstack/react-router";
import z from "zod";
import { publicInfo } from "~/data/public-info";
import { reportItemIdSchema } from "~/data/reports-types";
import { Reports } from "./-components/reports";

export const Route = createFileRoute("/(main)/public-info")({
  component: RouteComponent,
  validateSearch: z.object({
    id: reportItemIdSchema.optional().catch(undefined),
  }),
  staticData: {
    title: "Публічна інформація",
  },
});

function RouteComponent() {
  const { id } = Route.useSearch();
  return <Reports data={publicInfo} defaultId={id} />;
}
