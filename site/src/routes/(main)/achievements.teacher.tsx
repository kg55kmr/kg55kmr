import { createFileRoute } from "@tanstack/react-router";
import { Sheet } from "~/components/sheets";

export const Route = createFileRoute("/(main)/achievements/teacher")({
  component: RouteComponent,
  staticData: {
    title: "Досягнення вчителів",
  },
});

function RouteComponent() {
  return <Sheet sheetId="11kJdJ2bozx1wvWR4JejbH5GCBWqXH3Z8i9tiSkm_oJs" />;
}
