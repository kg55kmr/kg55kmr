import { createFileRoute, Outlet } from "@tanstack/react-router";
import { Layout } from "~/components/layout";
import { asset } from "~/lib/utils";

export const Route = createFileRoute("/library")({
  component: RouteComponent,
  staticData: { section: { title: "Бібліотека", id: "/library", dev: true } },
});

function RouteComponent() {
  return (
    <Layout image={asset("images/розділи/бібліотека.jpg")}>
      <Outlet />
    </Layout>
  );
}
