import { createFileRoute } from "@tanstack/react-router";
import { Embed } from "~/components/embed";
import { Tabs } from "~/components/tabs";

export const Route = createFileRoute("/ma-primary/meeting-minutes")({
  component: RouteComponent,
  staticData: {
    title: "Протоколи засідань",
  },
});

function RouteComponent() {
  // TODO: add sheets data
  return (
    <Tabs>
      <Tabs.Tab title="2024-2025" id="2024-2025">
        <Embed src="https://drive.google.com/file/d/1R975ycPJyOVeN8o5_nOW2FitZexh5Ox-/preview" />
      </Tabs.Tab>
      <Tabs.Tab title="2023-2024" id="2023-2024">
        <Embed src="https://drive.google.com/file/d/1wa2FfkWrq2AHoompyVYie8VOpFc6mEWY/preview" />
      </Tabs.Tab>
      <Tabs.Tab title="2022-2023" id="2022-2023">
        <Embed src="https://drive.google.com/file/d/14fQ-UR3LqI9cXwTON-_eqbyGWBrJ10Ju/preview" />
      </Tabs.Tab>
    </Tabs>
  );
}
