import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/educational-process/")({
  beforeLoad: () => {
    throw redirect({ to: "/educational-process/work-plan" });
  },
  staticData: {
    title: "Освітній процес",
  },
});
