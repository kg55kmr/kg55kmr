import { createFileRoute, Outlet } from "@tanstack/react-router";
import { Layout } from "~/components/layout";
import { asset } from "~/lib/utils";

export const Route = createFileRoute("/social-and-psychological-service")({
  component: RouteComponent,
  staticData: {
    title: "Соціально-психологічна служба",
    section: {
      id: "/social-and-psychological-service",
      thumbnail: asset(
        "images/розділи/соціально-психологічна-служба-мініатюра.jpg",
      ),
    },
  },
});

function RouteComponent() {
  return (
    <Layout
      background={asset("images/розділи/соціально-психологічна-служба.jpg")}
      aspectRatio="1584 / 672"
    >
      <Outlet />
    </Layout>
  );
}
