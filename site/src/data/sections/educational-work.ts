import type { Section } from "./types";
import {
  Baby,
  Book,
  BookOpen,
  BookText,
  Briefcase,
  Compass,
  FileCheck,
  FileText,
  Flag,
  Flower2,
  Handshake,
  Heart,
  History,
  IdCard,
  Info,
  Lightbulb,
  Map,
  Megaphone,
  Rainbow,
  Scale,
  Scroll,
  ShieldCheck,
  ShieldHalf,
  TrendingUp,
  Users,
  UsersRound,
  Zap,
} from "lucide-react";

export const educationalWork = [
  {
    title: "Виховний простір",
    groups: [
      {
        groupTitle: "Загальна інформація",
        items: [
          { to: "/educational-work", icon: Info },
          { to: "/educational-work/plan", icon: BookOpen },
          { to: "/educational-work/annual-summary", icon: Book },
          { to: "/educational-work/regulatory-documents", icon: BookText },
          { to: "/educational-work/sitemap", icon: Map },
        ],
      },
      {
        groupTitle: "Центр безпеки",
        items: [
          {
            to: "/educational-work/safe-educational-environment",
            icon: ShieldCheck,
          },
          { to: "/educational-work/safety-class", icon: ShieldHalf },
        ],
      },
      {
        groupTitle: "Співпраця та цінності",
        items: [
          {
            to: "/educational-work/memorandum-of-cooperation",
            icon: Handshake,
          },
          { to: "/educational-work/ma-class-teachers", icon: UsersRound },
          { to: "/educational-work/parental-responsibility", icon: Baby },
          { to: "/educational-work/rainbow", icon: Rainbow },
          {
            to: "/educational-work/year-of-statehood-in-key-dates",
            icon: History,
          },
        ],
      },
    ],
  },
  {
    title: "Вектори розвитку",
    groups: [
      {
        groupTitle: "Національно-патріотичне виховання",
        items: [
          {
            to: "/educational-work/national-and-patriotic-education",
            icon: Flag,
          },
          {
            to: "/educational-work/national-and-patriotic-education/report",
            icon: FileCheck,
          },
          {
            to: "/educational-work/national-and-patriotic-education/action-plans",
            icon: Map,
          },
          {
            to: "/educational-work/national-and-patriotic-education/heroes-live-forever",
            icon: Heart,
          },
          {
            to: "/educational-work/national-and-patriotic-education/regulatory-documents",
            icon: BookText,
          },
        ],
      },
      {
        groupTitle: "Профорієнтаційна робота",
        items: [
          { to: "/educational-work/career-guidance-work", icon: Briefcase },
          {
            to: "/educational-work/career-guidance-work/announcements",
            icon: Megaphone,
          },
          {
            to: "/educational-work/career-guidance-work/new-challenges-and-prospects",
            icon: TrendingUp,
          },
          {
            to: "/educational-work/career-guidance-work/useful-information",
            icon: Lightbulb,
          },
          {
            to: "/educational-work/career-guidance-work/student-career-guidance-card",
            icon: IdCard,
          },
        ],
      },
      {
        groupTitle: "«Сокіл» («Джура»)",
        items: [
          { to: "/educational-work/falcon-squire", icon: ShieldHalf },
          { to: "/educational-work/falcon-squire/regulation", icon: Scroll },
          { to: "/educational-work/falcon-squire/patrols", icon: Users },
        ],
      },
      {
        groupTitle: 'Дитяче об\'єднання "Первоцвіт"',
        items: [
          { to: "/educational-work/ca-primrose", icon: Flower2 },
          { to: "/educational-work/ca-primrose/charter", icon: FileText },
          { to: "/educational-work/ca-primrose/rules", icon: Scale },
          { to: "/educational-work/ca-primrose/directions", icon: Compass },
          {
            to: "/educational-work/ca-primrose/conditions-for-effectiveness",
            icon: Zap,
          },
        ],
      },
    ],
  },
] satisfies Section;
