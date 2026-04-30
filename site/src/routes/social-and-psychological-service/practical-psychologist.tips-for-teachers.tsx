import { createFileRoute } from "@tanstack/react-router";
import { Feed } from "~/components/feed";

export const Route = createFileRoute(
  "/social-and-psychological-service/practical-psychologist/tips-for-teachers",
)({
  component: RouteComponent,
  staticData: {
    title: "Поради вчителям",
  },
  ssr: false,
});

const data = import.meta.glob(
  "./-practical-psychologist.tips-for-teachers/*/*.tsx",
  { eager: true },
);
function RouteComponent() {
  return <Feed items={data} />;
}
