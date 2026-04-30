import { createFileRoute } from "@tanstack/react-router";
import { RegulatoryDocuments } from "~/components/regulatory-documents";
import { methodicalOffice } from "~/data/regulatory-documents/methodical-office";

export const Route = createFileRoute(
  "/methodical-office/methodical-council/regulatory-documents",
)({
  component: RouteComponent,
  staticData: {
    title: "Нормативні документи",
  },
});

function RouteComponent() {
  return <RegulatoryDocuments items={[methodicalOffice]} />;
}
