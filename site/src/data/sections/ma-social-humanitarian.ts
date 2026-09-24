import type { Section } from "./types";

export const maSocialHumanitarian = [
  {
    title: "1",
    groups: [
      {
        groupTitle: "1",
        items: [
          {
            to: "/ma-social-humanitarian/members",
          },
          {
            to: "/ma-social-humanitarian/meeting-minutes",
          },
          {
            to: "/ma-social-humanitarian/work-report",
          },
        ],
      },
    ],
  },
] satisfies Section;

// export const maSocialHumanitarian: Section = {
//   items: [
//     {
//       title: "Методична робота",
//       items: linkOptions([
//         { to: "/ma-social-humanitarian/members" },
//         { to: "/ma-social-humanitarian/meeting-minutes" },
//         { to: "/ma-social-humanitarian/work-report" },
//       ]),
//     },
//   ],
// };
