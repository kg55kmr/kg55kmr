import { createFileRoute } from "@tanstack/react-router";
import { RegulatoryDocuments } from "~/components/regulatory-documents";
import { mainDocuments } from "~/data/regulatory-documents";

export const Route = createFileRoute("/(main)/regulatory-documents")({
  component: RouteComponent,
  staticData: {
    title: "Нормативні документи",
  },
});

function RouteComponent() {
  return <RegulatoryDocuments items={mainDocuments} />;
}
