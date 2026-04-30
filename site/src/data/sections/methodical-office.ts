import type { Section } from "./types";
import { linkOptions } from "@tanstack/react-router";

export const methodicalOffice: Section = {
  items: [
    {
      title: "Методичний кабінет",
      items: linkOptions([
        { to: "/methodical-office" },
        { to: "/methodical-office/recommendations" },
        { to: "/methodical-office/organization-of-methodical-work" },
        { to: "/methodical-office/methodical-work" },
        { to: "/methodical-office/teachers-methodological-achievements" },
      ]),
    },
    {
      title: "Методична рада",
      items: linkOptions([
        { to: "/methodical-office/methodical-council/committee-members" },
        { to: "/methodical-office/methodical-council/work-plan" },
        { to: "/methodical-office/methodical-council/regulatory-documents" },
      ]),
    },
    {
      title: "Атестація",
      items: linkOptions([
        { to: "/methodical-office/teacher-certification/long-term-plan" },
        {
          to: "/methodical-office/teacher-certification/indicative-professional-development-plan",
        },
        {
          to: "/methodical-office/teacher-certification/lists-of-teachers-under-certification",
        },
        {
          to: "/methodical-office/teacher-certification/qualitative-composition-of-teaching-staff",
        },
        {
          to: "/methodical-office/teacher-certification/regulatory-documents",
        },
      ]),
    },
  ],
};
