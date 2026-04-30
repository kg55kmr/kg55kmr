import { createFileRoute, Outlet } from "@tanstack/react-router";
import { Layout } from "~/components/layout";
import { asset } from "~/lib/utils";

export const Route = createFileRoute("/parent-forum")({
  component: RouteComponent,
  staticData: {
    title: "Батьківській форум",
    section: {
      id: "/parent-forum",
      thumbnail: asset("images/розділи/батьківський-форум-мініатюра.jpg"),
    },
  },
});

function RouteComponent() {
  return (
    <Layout
      background={asset("images/розділи/батьківський-форум.jpg")}
      aspectRatio="1500 / 722"
    >
      <Outlet />
    </Layout>
  );
}
