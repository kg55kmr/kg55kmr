import { createFileRoute } from "@tanstack/react-router";
import { Feed } from "~/components/feed";

export const Route = createFileRoute("/parent-forum/tips-for-parents")({
  component: RouteComponent,
  staticData: {
    title: "Поради батькам",
  },
});

const data = import.meta.glob("./-tips-for-parents/*/*.tsx", { eager: true });

function RouteComponent() {
  return <Feed items={data} />;
}
