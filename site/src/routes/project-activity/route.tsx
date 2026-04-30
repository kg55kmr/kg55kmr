import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/project-activity")({
  component: RouteComponent,
  staticData: {
    title: "Проєктна діяльність",
    section: {
      id: "/project-activity",
      dev: true,
    },
  },
});

function RouteComponent() {
  return <div>Hello "/project-activity"!</div>;
}
