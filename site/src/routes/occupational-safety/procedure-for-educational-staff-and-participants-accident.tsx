import { createFileRoute } from "@tanstack/react-router";
import { Embed } from "~/components/embed";
import { ExternalLink } from "~/components/link";

export const Route = createFileRoute(
  "/occupational-safety/procedure-for-educational-staff-and-participants-accident",
)({
  component: RouteComponent,
  staticData: {
    title:
      "Алгоритм дій учасників освітнього процесу у разі нещасного випадку з учнями, що стався під час освітнього процесу",
    shortTitle: "Алгоритм дій учасників освітнього процесу",
  },
});

function RouteComponent() {
  return (
    <>
      <p>
        Даний алгоритм розроблено відповідно до Положення про порядок
        розслідування нещасних випадків, що сталися зі здобувачами освіти під
        час освітнього процесу, затвердженого{" "}
        <ExternalLink href="https://zakon.rada.gov.ua/laws/show/z0612-19">
          наказом МОН від 16.05.2019 р. №659
        </ExternalLink>
      </p>
      <Embed src="https://docs.google.com/document/d/1jJjEg6rz5Orrl3C58d_osU9foNn0wZ6e/preview" />
    </>
  );
}
