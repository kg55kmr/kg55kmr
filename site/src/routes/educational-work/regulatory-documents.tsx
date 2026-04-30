import { createFileRoute } from "@tanstack/react-router";
import { RegulatoryDocuments } from "~/components/regulatory-documents";
import { educationalWork } from "~/data/regulatory-documents/educational-work";

export const Route = createFileRoute("/educational-work/regulatory-documents")({
  component: RouteComponent,
  staticData: {
    title: "Нормативні документи",
  },
});

function RouteComponent() {
  return <RegulatoryDocuments items={educationalWork} />;
}
