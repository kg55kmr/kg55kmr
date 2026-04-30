import { createFileRoute, Outlet } from "@tanstack/react-router";
import { Layout } from "~/components/layout";
import { asset } from "~/lib/utils";

export const Route = createFileRoute("/ma-social-humanitarian")({
  component: RouteComponent,
  staticData: {
    title: "МО вчителів суспільно-гуманітарного циклу",
    section: {
      id: "/ma-social-humanitarian",
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
