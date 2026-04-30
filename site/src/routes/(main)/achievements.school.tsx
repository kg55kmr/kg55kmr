import { createFileRoute } from "@tanstack/react-router";
import { Tabs } from "~/components/tabs";
import { data } from "~/data/achievements/school";

export const Route = createFileRoute("/(main)/achievements/school")({
  component: RouteComponent,
  staticData: {
    title: "Досягнення закладу",
  },
});

function RouteComponent() {
  return (
    <Tabs defaultValue={data[0].title}>
      {data.map((v) => (
        <Tabs.Tab key={v.title} title={v.title} id={v.title}>
          <ul className="ml-4 list-disc">
            {v.items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </Tabs.Tab>
      ))}
    </Tabs>
  );
}
