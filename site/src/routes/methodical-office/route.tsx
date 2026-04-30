import { createFileRoute, Outlet } from "@tanstack/react-router";
import { Layout } from "~/components/layout";
import { asset } from "~/lib/utils";

export const Route = createFileRoute("/methodical-office")({
  component: RouteComponent,
  staticData: {
    title: "Методичний кабінет",
    section: {
      id: "/methodical-office",
      dev: true,
    },
  },
});

function RouteComponent() {
  return (
    <Layout image={asset("images/розділи/методичний-кабінет.jpg")}>
      <Outlet />
    </Layout>
  );
}
