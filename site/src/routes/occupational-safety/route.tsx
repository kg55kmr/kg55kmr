import { createFileRoute, Outlet } from "@tanstack/react-router";
import { Layout } from "~/components/layout";
import { asset } from "~/lib/utils";

export const Route = createFileRoute("/occupational-safety")({
  component: RouteComponent,
  staticData: {
    title: "Охорона праці та безпека життєдіяльності",
    section: {
      id: "/occupational-safety",
      thumbnail: asset(
        "images/розділи/охорона-праці-та-безпека-життєдіяльності-мініатюра.jpg",
      ),
    },
  },
});

function RouteComponent() {
  return (
    <Layout
      background={asset(
        "images/розділи/охорона-праці-та-безпека-життєдіяльності.jpg",
      )}
      aspectRatio="1584 / 597"
    >
      <Outlet />
    </Layout>
  );
}
