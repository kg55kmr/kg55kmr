import { createFileRoute } from "@tanstack/react-router";
import { SiteMap } from "~/components/sitemap";

export const Route = createFileRoute(
  "/social-and-psychological-service/sitemap",
)({
  component: SiteMap,
  staticData: {
    title: "Карта сайту",
  },
});

