import { createFileRoute } from "@tanstack/react-router";
import { RegulatoryDocuments } from "~/components/regulatory-documents";
import { meals } from "~/data/regulatory-documents/meals";

export const Route = createFileRoute(
  "/occupational-safety/meals/regulatory-documents",
)({
  component: RouteComponent,
  staticData: {
    title: "Нормативні документи",
  },
});

function RouteComponent() {
  return <RegulatoryDocuments items={[meals]} />;
}
