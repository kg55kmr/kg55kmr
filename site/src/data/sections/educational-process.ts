import type { Section } from "./types";
import {
  BookOpen,
  BookType,
  CalendarDays,
  CheckCircle2,
  Clock,
  Layers,
  LibraryBig,
  Map,
  Palette,
  Scroll,
  Sparkles,
  Table2,
  TrendingUp,
} from "lucide-react";

export const educationalProcess = [
  {
    title: "Організація навчання",
    groups: [
      {
        groupTitle: "Організація навчання",
        items: [
          { to: "/educational-process/work-plan", icon: BookOpen },
          { to: "/educational-process/educational-programs", icon: Layers },
          { to: "/educational-process/class-period", icon: Clock },
          { to: "/educational-process/network-of-pupils", icon: Table2 },
          {
            to: "/educational-process/instructional-methodological-recommendations",
            icon: BookType,
          },
          { to: "/educational-process/subject-weeks", icon: CalendarDays },
          {
            to: "/educational-process/gifted-pupils/сompetition-regulations",
            icon: Scroll,
          },
          { to: "/educational-process/sitemap", icon: Map },
        ],
      },
    ],
  },
  {
    title: "Якість освіти",
    groups: [
      {
        groupTitle: "Якість освіти",
        items: [
          {
            to: "/educational-process/evaluation-criteria",
            icon: CheckCircle2,
          },
          {
            to: "/educational-process/pupils-performance-monitoring",
            icon: TrendingUp,
          },
          {
            to: "/educational-process/results-of-textbook-selection",
            icon: LibraryBig,
          },
        ],
      },
    ],
  },
  {
    title: "Робота з учнями",
    groups: [
      {
        groupTitle: "Робота з учнями",
        items: [
          { to: "/educational-process/gifted-pupils", icon: Sparkles },
          {
            to: "/educational-process/gifted-pupils/scientific-research-work",
            icon: Palette,
          },
        ],
      },
    ],
  },
] satisfies Section;
