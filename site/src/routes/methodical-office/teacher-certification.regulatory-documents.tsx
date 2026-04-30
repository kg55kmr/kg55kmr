import { createFileRoute } from "@tanstack/react-router";
import { RegulatoryDocuments } from "~/components/regulatory-documents";
import { teacherCertification } from "~/data/regulatory-documents/teacher-certification";

export const Route = createFileRoute(
  "/methodical-office/teacher-certification/regulatory-documents",
)({
  component: RouteComponent,
  staticData: {
    title: "Нормативні документи",
  },
});

function RouteComponent() {
  return <RegulatoryDocuments items={[teacherCertification]} />;
}
