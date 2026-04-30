import { createFileRoute } from "@tanstack/react-router";
import { Embed } from "~/components/embed";
import { Tabs } from "~/components/tabs";

export const Route = createFileRoute("/ma-natural-math/meeting-minutes")({
  component: RouteComponent,
  staticData: {
    title: "Протоколи засідань",
  },
});

// TODO: add sheets data

function RouteComponent() {
  return (
    <Tabs>
      <Tabs.Tab title="2024-2025" id="2024-2025">
        <Embed src="https://drive.google.com/file/d/13ulE6DFQU9C1pQ_VSHURg_tAW8oaAB9w/preview" />
      </Tabs.Tab>
      <Tabs.Tab title="2023-2024" id="2023-2024">
        <Embed src="https://drive.google.com/file/d/1WBUt8-5BQI9RqPLAL0k_AmIgu2YqxQhK/preview" />
      </Tabs.Tab>
    </Tabs>
  );
}
