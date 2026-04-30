import { createFileRoute, Outlet } from "@tanstack/react-router";
import { Layout } from "~/components/layout";
import { asset } from "~/lib/utils";

export const Route = createFileRoute("/educational-process")({
  component: RouteComponent,
  staticData: {
    title: "Освітній процес",
    section: {
      id: "/educational-process",
      thumbnail: asset("images/розділи/освітній-процес-мініатюра.jpg"),
    },
  },
});

function RouteComponent() {
  return (
    <Layout
      aspectRatio="2103 / 819"
      background={asset("images/розділи/освітній-процес.jpg")}
    >
      <Outlet />
    </Layout>
  );
}
