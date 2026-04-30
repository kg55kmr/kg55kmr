import { createFileRoute } from "@tanstack/react-router";
import { RegulatoryDocuments } from "~/components/regulatory-documents";
import { practicalPsychologist } from "~/data/regulatory-documents/practical-psychologist";

export const Route = createFileRoute(
  "/social-and-psychological-service/practical-psychologist/regulatory-documents",
)({
  component: RouteComponent,
  staticData: { title: "Нормативні документи" },
});

function RouteComponent() {
  return <RegulatoryDocuments items={[practicalPsychologist]} />;
}
