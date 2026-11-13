import { createFileRoute } from "@tanstack/react-router";
import { RegulatoryDocuments } from "~/components/regulatory-documents";
import { safeEducationalEnvironment } from "~/data/regulatory-documents/safe-educational-environment";

export const Route = createFileRoute(
  "/educational-work/safe-educational-environment/regulatory-documents",
)({
  component: RouteComponent,
  staticData: {
    title: "Нормативні документи",
  },
});

function RouteComponent() {
  return <RegulatoryDocuments items={safeEducationalEnvironment} />;
}

