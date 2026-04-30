import type { Section } from "./types";
import { linkOptions } from "@tanstack/react-router";

export const maPrimary: Section = {
  items: [
    {
      title: "Методична робота",
      items: linkOptions([
        { to: "/ma-primary" },
        { to: "/ma-primary/members" },
        { to: "/ma-primary/meeting-topics" },
        { to: "/ma-primary/meeting-minutes" },
        { to: "/ma-primary/work-report" },
        { to: "/ma-primary/calendar-plan" },
      ]),
    },
    {
      title: "Методичні досягнення",
      items: linkOptions([
        { to: "/ma-primary/methodological-achievements/certificates" },
        { to: "/ma-primary/methodological-achievements/pupils-work" },
        {
          to: "/ma-primary/methodological-achievements/educational-activities",
        },
      ]),
    },
  ],
};
