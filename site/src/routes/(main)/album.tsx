import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(main)/album")({
  staticData: {
    title: "Фотоальбом",
  },
  ssr: false,
});
