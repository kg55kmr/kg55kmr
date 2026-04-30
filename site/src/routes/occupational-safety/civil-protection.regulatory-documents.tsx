import { createFileRoute } from "@tanstack/react-router";
import { RegulatoryDocuments } from "~/components/regulatory-documents";
import { civilProtection } from "~/data/regulatory-documents/civil-protection";

export const Route = createFileRoute(
  "/occupational-safety/civil-protection/regulatory-documents",
)({
  component: RouteComponent,
  staticData: {
    title: "Нормативні документи",
  },
});

function RouteComponent() {
  return <RegulatoryDocuments items={[civilProtection]} />;
}
