import { createFileRoute, Outlet } from "@tanstack/react-router";
import { Layout } from "~/components/layout";
import { asset } from "~/lib/utils";

export const Route = createFileRoute("/ma-social-humanitarian")({
  component: RouteComponent,
  staticData: {
    title: "МО вчителів суспільно-гуманітарного циклу",
    section: {
      id: "/ma-social-humanitarian",
      thumbnail: asset(
        "images/розділи/мо-вчителів-суспільно-гуманітарного-циклу-мініатюра.jpg",
      ),
      dev: true,
    },
  },
});

function RouteComponent() {
  return (
    <Layout
      background={asset(
        "images/розділи/мо-вчителів-суспільно-гуманітарного-циклу.jpg",
      )}
    >
      <Outlet />
    </Layout>
  );
}
