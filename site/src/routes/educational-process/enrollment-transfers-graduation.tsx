import { createFileRoute } from "@tanstack/react-router";
import { Embed } from "~/components/embed";
import { Tabs } from "~/components/tabs";

export const Route = createFileRoute(
  "/educational-process/enrollment-transfers-graduation",
)({
  component: RouteComponent,
  staticData: {
    title: "Зарахування, переведення та випуск учнів",
  },
});

function RouteComponent() {
  return (
    <Tabs>
      <Tabs.Tab id="1" title="Про зарахування до 1 класу">
        <Embed src="https://drive.google.com/file/d/1RaPDoG_5bID0bqUyl3dUece-iu_mOq-3/preview" />
      </Tabs.Tab>
      <Tabs.Tab id="1-4" title="Про переведення учнів 1-4 класів">
        <Embed src="https://drive.google.com/file/d/1Slm3d9nlv1qII8rtEfbDsjQStN-qHqtg/preview" />
      </Tabs.Tab>
      <Tabs.Tab id="5-8" title="Про переведення учнів 5-8 класів">
        <Embed src="https://drive.google.com/file/d/1Z01pRdUJMrGMVBZjQwWRRV6kVPE58OEt/preview" />
      </Tabs.Tab>
      <Tabs.Tab id="9" title="Про випуск учнів 9 класів">
        <Embed src="https://drive.google.com/file/d/15ShexHVtCJ-9HHv5MIUH8kUkYkAqaCo0/preview" />
      </Tabs.Tab>
    </Tabs>
  );
}
