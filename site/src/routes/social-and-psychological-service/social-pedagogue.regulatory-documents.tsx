import { createFileRoute } from "@tanstack/react-router";
import { RegulatoryDocuments } from "~/components/regulatory-documents";
import { socialPedagogue } from "~/data/regulatory-documents/social-pedagogue";

export const Route = createFileRoute(
  "/social-and-psychological-service/social-pedagogue/regulatory-documents",
)({
  component: RouteComponent,
  staticData: {
    title: "Нормативні документи",
  },
});

function RouteComponent() {
  return <RegulatoryDocuments items={socialPedagogue} />;
}
