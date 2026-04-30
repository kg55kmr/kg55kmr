import { createFileRoute } from "@tanstack/react-router";
import { SiteMap } from "~/components/sitemap";

export const Route = createFileRoute("/parent-forum/sitemap")({
  component: SiteMap,
  staticData: {
    title: "Карта сайту",
  },
});

