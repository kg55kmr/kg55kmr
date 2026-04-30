import { createFileRoute } from "@tanstack/react-router";
import { RegulatoryDocuments } from "~/components/regulatory-documents";
import { occupationalSafety } from "~/data/regulatory-documents/occupational-safety";

export const Route = createFileRoute(
  "/occupational-safety/regulatory-documents",
)({
  component: RouteComponent,
  staticData: {
    title: "Нормативні документи",
  },
});

function RouteComponent() {
  return <RegulatoryDocuments items={occupationalSafety} />;
}
