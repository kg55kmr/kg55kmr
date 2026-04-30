import { createFileRoute } from "@tanstack/react-router";
import { type ComponentType } from "react";
import { Tabs } from "~/components/tabs";

export const Route = createFileRoute(
  "/occupational-safety/civil-protection/safety-abc",
)({
  component: RouteComponent,
  staticData: {
    title: "Абетка безпеки",
  },
});

type PostProps = {
  title: string;
  id: string;
  Content: ComponentType;
};

const data = import.meta.glob<PostProps>(
  "./-civil-protection.safety-abc/*.tsx",
  {
    eager: true,
  },
);

const items = Object.keys(data)
  .toSorted((a, b) => a.localeCompare(b, "uk", { numeric: true }))
  .map((k) => data[k]);

function RouteComponent() {
  return (
    <Tabs defaultValue={items[0].id}>
      {items.map((v) => (
        <Tabs.Tab key={v.id} title={v.title} id={v.id}>
          <v.Content />
        </Tabs.Tab>
      ))}
    </Tabs>
  );
}
