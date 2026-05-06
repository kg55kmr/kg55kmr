import { createFileRoute } from "@tanstack/react-router";
import { Content, title } from "./-practical-psychologist.tips-for-parents/30";

export const Route = createFileRoute(
  "/social-and-psychological-service/overcoming-panic-exercises-and-tips-on-how-to-stabilize-during-war",
)({
  component: Content,
  staticData: {
    title: title,
  },
});

