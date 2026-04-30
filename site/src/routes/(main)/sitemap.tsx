import { createFileRoute } from "@tanstack/react-router";
import { SiteMap } from "~/components/sitemap";

export const Route = createFileRoute("/(main)/sitemap")({
  component: SiteMap,
  staticData: { title: "Карта сайту" },
});
