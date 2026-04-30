import { createFileRoute } from "@tanstack/react-router";
import { Embed } from "~/components/embed";
import { Neighborhood } from "../../components/neighborhood";

export const Route = createFileRoute(
  "/social-and-psychological-service/social-pedagogue/work-in-the-neighborhood",
)({
  component: RouteComponent,
  staticData: {
    title: "Робота в мікрорайоні",
  },
});

function RouteComponent() {
  return (
    <>
      <Neighborhood />
      <Embed src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1333.165643700775!2d33.50890899999999!3d48.065248!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40dae251ed90f41f%3A0xc524d2e0185e7957!2z0JrRgNC40LLQvtGA0ZbQt9GM0LrQsCDQt9Cw0LPQsNC70YzQvdC-0L7RgdCy0ZbRgtC90Y8g0YjQutC-0LvQsCDQhi3QhtCG0IYg0YHRgtGD0L_QtdC90ZbQsiDihJYgNTU!5e0!3m2!1sen!2sua!4v1429875322776" />
    </>
  );
}
