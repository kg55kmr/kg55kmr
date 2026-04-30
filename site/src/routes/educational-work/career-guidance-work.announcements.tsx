import { createFileRoute } from "@tanstack/react-router";
import { Embed } from "~/components/embed";

export const Route = createFileRoute(
  "/educational-work/career-guidance-work/announcements",
)({
  component: RouteComponent,
  staticData: {
    title: "Оголошення",
  },
});

function RouteComponent() {
  return (
    <div className="gap-2 md:columns-2">
      <Embed src="https://drive.google.com/file/d/1ta3aI9QgGvnnwdSUo4gkHTFCoTtpK183/preview" />
      <Embed src="https://drive.google.com/file/d/1rule4iQwWyDV2YXgQTvMxRHoVA6yS-qK/preview" />
      <Embed src="https://drive.google.com/file/d/1zkAdozoGbU0ielNHKxKP0rWKW6xaee0C/preview" />
    </div>
  );
}
