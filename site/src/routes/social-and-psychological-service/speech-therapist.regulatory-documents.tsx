import { createFileRoute } from "@tanstack/react-router";
import { RegulatoryDocuments } from "~/components/regulatory-documents";
import { speechTherapist } from "~/data/regulatory-documents/speech-therapist";

export const Route = createFileRoute(
  "/social-and-psychological-service/speech-therapist/regulatory-documents",
)({
  component: RouteComponent,
  staticData: {
    title: "Нормативні документи",
    dev: true,
  },
});

function RouteComponent() {
  return <RegulatoryDocuments items={speechTherapist} />;
}
