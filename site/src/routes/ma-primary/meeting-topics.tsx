import { createFileRoute } from "@tanstack/react-router";
import { Embed } from "~/components/embed";
import { Tabs } from "~/components/tabs";

export const Route = createFileRoute("/ma-primary/meeting-topics")({
  component: RouteComponent,
  staticData: {
    title: "Тематика засідань",
  },
});

function RouteComponent() {
  // TODO: add sheets data
  return (
    <Tabs>
      <Tabs.Tab title="2024-2025" id="2024-2025">
        <Embed src="https://drive.google.com/file/d/1WRAjppru-OcsbLn1tl5Wv_r7mLPPrmop/preview" />
      </Tabs.Tab>
      <Tabs.Tab title="2023-2024" id="2023-2024">
        <Embed src="https://drive.google.com/file/d/15LAieogCfP6bNM52OAHQC42-PgGMirOW/preview" />
      </Tabs.Tab>
      <Tabs.Tab title="2022-2023" id="2022-2023">
        <Embed src="https://drive.google.com/file/d/1FQ5RMhdf4ergU_a6MU61_7obX1FKz9a4/preview" />
      </Tabs.Tab>
    </Tabs>
  );
}
