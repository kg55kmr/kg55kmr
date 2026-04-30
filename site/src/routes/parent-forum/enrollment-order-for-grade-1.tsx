import { createFileRoute } from "@tanstack/react-router";
import { Embed } from "~/components/embed";

export const Route = createFileRoute(
  "/parent-forum/enrollment-order-for-grade-1",
)({
  component: RouteComponent,
  staticData: {
    title: "Наказ про зарахування до 1 класу",
  },
});

function RouteComponent() {
  return (
    <Embed src="https://drive.google.com/file/d/1RaPDoG_5bID0bqUyl3dUece-iu_mOq-3/preview" />
  );
}
