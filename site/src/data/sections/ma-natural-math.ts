import type { Section } from "./types";
import { linkOptions } from "@tanstack/react-router";

export const maNaturalMath: Section = {
  items: [
    {
      title: "Методична робота",
      items: linkOptions([
        { to: "/ma-natural-math" },
        { to: "/ma-natural-math/members" },
        { to: "/ma-natural-math/meeting-topics" },
        { to: "/ma-natural-math/meeting-minutes" },
        { to: "/ma-natural-math/work-report" },
      ]),
    },
    {
      title: "Безпека в інтернеті",
      items: linkOptions([{ to: "/ma-natural-math/internet-safety" }]),
    },
  ],
};
