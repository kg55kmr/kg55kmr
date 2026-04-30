import { createFileRoute, Outlet } from "@tanstack/react-router";
import { Layout } from "~/components/layout";
import { asset } from "~/lib/utils";

export const Route = createFileRoute("/ma-natural-math")({
  component: RouteComponent,
  staticData: {
    title: "МО вчителів природничо-математичного циклу",
    section: {
      id: "/ma-natural-math",
      dev: true,
    },
  },
});

function RouteComponent() {
  return (
    <Layout
      image={asset(
        "images/розділи/мо-вчителів-природничо-математичного-циклу.jpg",
      )}
    >
      <Outlet />
    </Layout>
  );
}
