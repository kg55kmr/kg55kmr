import type { Section } from "./types";
import { linkOptions } from "@tanstack/react-router";

export const library: Section = {
  items: [
    {
      title: "Про бібліотеку",
      items: linkOptions([
        { to: "/library" },
        { to: "/library/annual-plan" },
        { to: "/library/portfolio" },
      ]),
    },
  ],
};
