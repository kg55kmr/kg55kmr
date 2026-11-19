import type { Post } from "~/components/posts";
import { createFileRoute } from "@tanstack/react-router";
import { Tabs } from "~/components/tabs";

export const Route = createFileRoute(
  "/occupational-safety/civil-protection/safety-abc",
)({
  component: RouteComponent,
  staticData: {
    title: "Абетка безпеки",
  },
});

const entries = import.meta.glob<Post>("./-civil-protection.safety-abc/*.tsx", {
  eager: true,
  import: "default",
});

const items = Object.values(entries).toReversed();

function RouteComponent() {
  return (
    <Tabs defaultValue={"0"}>
      {items.map((p, i) => (
        <Tabs.Tab key={i.toString()} title={p.title} value={i.toString()}>
          {p.content}
        </Tabs.Tab>
      ))}
    </Tabs>
  );
}
