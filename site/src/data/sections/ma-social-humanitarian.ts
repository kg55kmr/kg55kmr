import type { Section } from "./types";
import { linkOptions } from "@tanstack/react-router";

export const maSocialHumanitarian: Section = {
  items: [
    {
      title: "Методична робота",
      items: linkOptions([
        { to: "/ma-social-humanitarian/members" },
        { to: "/ma-social-humanitarian/meeting-minutes" },
        { to: "/ma-social-humanitarian/work-report" },
      ]),
    },
  ],
};
