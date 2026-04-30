import { createFileRoute } from "@tanstack/react-router";
import { Embed } from "~/components/embed";

export const Route = createFileRoute("/parent-forum/access-control")({
  component: RouteComponent,
  staticData: {
    title: "Пропускний режим",
  },
});

function RouteComponent() {
  return (
    <Embed src="https://drive.google.com/file/d/1pxymNzHtjIa3U3C_HSv4ZNGdPDlKVjW6/preview" />
  );
}

