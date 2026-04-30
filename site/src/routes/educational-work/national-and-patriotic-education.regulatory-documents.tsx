import { createFileRoute } from "@tanstack/react-router";
import { RegulatoryDocuments } from "~/components/regulatory-documents";
import { nationalAndPatrioticEducation } from "~/data/regulatory-documents/national-and-patriotic-education";

export const Route = createFileRoute(
  "/educational-work/national-and-patriotic-education/regulatory-documents",
)({
  component: RouteComponent,
  staticData: {
    title: "Нормативні документи",
  },
});

function RouteComponent() {
  return <RegulatoryDocuments items={[nationalAndPatrioticEducation]} />;
}
