import { createFileRoute, Outlet } from "@tanstack/react-router";
import { Layout } from "~/components/layout";
import { asset } from "~/lib/utils";

export const Route = createFileRoute("/ma-primary")({
  component: RouteComponent,
  staticData: {
    title: "МО вчителів початкових класів",
    section: {
      id: "/ma-primary",
      dev: true,
    },
  },
});

function RouteComponent() {
  return (
    <Layout image={asset("images/розділи/мо-вчителів-початкових-класів.jpg")}>
      <Outlet />
    </Layout>
  );
}
