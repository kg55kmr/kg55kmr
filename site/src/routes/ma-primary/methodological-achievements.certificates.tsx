import { createFileRoute } from "@tanstack/react-router";
import { Certificates } from "~/components/teachers";

export const Route = createFileRoute(
  "/ma-primary/methodological-achievements/certificates",
)({
  component: RouteComponent,
  staticData: {
    title: "Сертифікати",
  },
});

function RouteComponent() {
  return <Certificates ma="МО вчителів початкових класів" />;
}
