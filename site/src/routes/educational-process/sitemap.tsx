import { createFileRoute } from "@tanstack/react-router";
import { SiteMap } from "~/components/sitemap";

export const Route = createFileRoute("/educational-process/sitemap")({
  component: SiteMap,
  staticData: {
    title: "Карта сайту",
  },
});

