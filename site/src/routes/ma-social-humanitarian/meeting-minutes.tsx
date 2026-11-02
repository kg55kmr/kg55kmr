import { createFileRoute } from "@tanstack/react-router";
import { Tabs } from "~/components/tabs";

export const Route = createFileRoute("/ma-social-humanitarian/meeting-minutes")(
  {
    component: RouteComponent,
    staticData: {
      title: "Протоколи засідань",
    },
  },
);

// TODO: add protocols

function RouteComponent() {
  return (
    <Tabs>
      <Tabs.Tab title="2023-2024" value="2023-2024">
        1
      </Tabs.Tab>
    </Tabs>
  );
}
