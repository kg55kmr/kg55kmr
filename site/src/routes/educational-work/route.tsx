import { createFileRoute, Outlet } from "@tanstack/react-router";
import { Layout } from "~/components/layout";
import { asset } from "~/lib/utils";

export const Route = createFileRoute("/educational-work")({
  component: RouteComponent,
  staticData: {
    title: "Виховна робота",
    section: {
      id: "/educational-work",
      thumbnail: asset("images/розділи/виховна-робота-мініатюра.jpg"),
    },
  },
});

function RouteComponent() {
  return (
    <Layout
      background={asset("images/розділи/виховна-робота.jpg")}
      aspectRatio="1408 / 600"
    >
      <Outlet />
    </Layout>
  );
}
