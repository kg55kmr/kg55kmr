import type { Section } from "./types";
import {
  Backpack,
  Blocks,
  BookOpen,
  Info,
  List,
  Lock,
  LockKeyhole,
  Map,
  Stars,
} from "lucide-react";

export const parentForum = [
  {
    title: "Загальна інформація",
    groups: [
      {
        groupTitle: "Загальна інформація",
        items: [
          { to: "/parent-forum", icon: Info },
          {
            to: "/parent-forum/preparing-5-year-olds-for-school",
            icon: Blocks,
          },
          { to: "/parent-forum/developmental-age-norms", icon: Stars },
          {
            to: "/parent-forum/50-essential-tasks-for-school-preparation",
            icon: List,
          },
          {
            to: "/parent-forum/sitemap",
            icon: Map,
          },
        ],
      },
    ],
  },
  {
    title: "Правила прийому до закладу",
    groups: [
      {
        groupTitle: "Правила прийому до закладу",
        items: [
          { to: "/parent-forum/admission-policy/grade-1", icon: Backpack },
          { to: "/parent-forum/admission-policy/grade-2-9", icon: Backpack },
        ],
      },
    ],
  },
  {
    title: "Батькам",
    groups: [
      {
        groupTitle: "Батькам",
        items: [
          { to: "/parent-forum/access-rules", icon: Lock },
          { to: "/parent-forum/access-control", icon: LockKeyhole },
          {
            to: "/parent-forum/about-personal-data-protection",
            icon: BookOpen,
          },
          { to: "/parent-forum/tips-for-parents", icon: List },
        ],
      },
    ],
  },
] satisfies Section;
