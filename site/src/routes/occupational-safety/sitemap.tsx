import { createFileRoute } from "@tanstack/react-router";
import { SiteMap } from "~/components/sitemap";

export const Route = createFileRoute("/occupational-safety/sitemap")({
  component: SiteMap,
  staticData: {
    title: "Карта сайту",
  },
});

