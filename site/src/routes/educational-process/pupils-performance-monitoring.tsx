import { createFileRoute } from "@tanstack/react-router";
import { Embed } from "~/components/embed";
import { Tabs } from "~/components/tabs";
import { qualityOfEducation } from "~/data/quality-of-education";

export const Route = createFileRoute(
  "/educational-process/pupils-performance-monitoring",
)({
  component: RouteComponent,
  staticData: {
    title: "Моніторинг успішності учнів",
  },
});

function RouteComponent() {
  return (
    <Tabs defaultValue={qualityOfEducation[0].title}>
      {qualityOfEducation.map((v) => (
        <Tabs.Tab key={v.title} id={v.title} title={v.title}>
          <Embed src={v.href} />
        </Tabs.Tab>
      ))}
    </Tabs>
  );
}
