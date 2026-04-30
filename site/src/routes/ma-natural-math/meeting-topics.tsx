import { createFileRoute } from "@tanstack/react-router";
import { Embed } from "~/components/embed";
import { Tabs } from "~/components/tabs";

export const Route = createFileRoute("/ma-natural-math/meeting-topics")({
  component: RouteComponent,
  staticData: {
    title: "Тематика засідань",
  },
});

// TODO: add sheets data

function RouteComponent() {
  return (
    <Tabs>
      <Tabs.Tab title="2024-2025" id="2024-2025">
        <Embed src="https://drive.google.com/file/d/1JrbaYi34uSZX_X2rJ5V1qMwK72pCJrPY/preview" />
      </Tabs.Tab>
      <Tabs.Tab title="2023-2024" id="2023-2024">
        <Embed src="https://drive.google.com/file/d/1JAkL-zoilQ7iBsTWntqfUgWaQ51H4gGj/preview" />
      </Tabs.Tab>
    </Tabs>
  );
}
