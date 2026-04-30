import type { Section } from "./types";
import {
  Backpack,
  Biohazard,
  Bomb,
  BookOpen,
  BookOpenCheck,
  BookText,
  Calendar1,
  CircleAlert,
  ClipboardCheck,
  ClipboardList,
  Droplets,
  HeartPulse,
  Lightbulb,
  ListTodo,
  Lock,
  LogOut,
  Map,
  Megaphone,
  NotebookPen,
  NotebookText,
  ShieldCheck,
  ShieldPlus,
  Siren,
  Sparkles,
  Stethoscope,
  Utensils,
  Workflow,
} from "lucide-react";

export const occupationalSafety = [
  {
    title: "Охорона праці",
    groups: [
      {
        groupTitle: "Загальна інформація",
        mobileGroupTitle: "Охорона праці",
        items: [
          { to: "/occupational-safety", icon: ClipboardCheck },
          { to: "/occupational-safety/regulatory-documents", icon: BookText },
          { to: "/occupational-safety/documentation", icon: BookOpen },
          {
            to: "/occupational-safety/health-and-safety-action-plan",
            icon: ListTodo,
          },
          {
            to: "/occupational-safety/sitemap",
            icon: Map,
          },
        ],
      },
      {
        groupTitle: "Правила безпеки та поведінки",
        items: [
          { to: "/occupational-safety/safety-guide", icon: Map },
          { to: "/occupational-safety/rules-of-conduct", icon: CircleAlert },
          {
            to: "/occupational-safety/procedure-for-educational-staff-and-participants-accident",
            icon: Workflow,
          },
        ],
      },
      {
        groupTitle: "Санітарія та гігієна",
        items: [
          { to: "/occupational-safety/sanitary-regulations", icon: Sparkles },
          {
            to: "/occupational-safety/health-and-hygiene-standards",
            icon: Droplets,
          },
        ],
      },
    ],
  },
  {
    title: "Цивільний захист",
    groups: [
      {
        groupTitle: "Загальні положення та документи",
        mobileGroupTitle: "Цивільний захист",
        items: [
          {
            to: "/occupational-safety/civil-protection/regulatory-documents",
            icon: BookText,
          },
          {
            to: "/occupational-safety/civil-protection/access-control",
            icon: ShieldCheck,
          },
          { to: "/occupational-safety/civil-protection/sesu", icon: Siren },
          {
            to: "/occupational-safety/health-and-safety-action-plan",
            icon: ListTodo,
          },
        ],
      },
      {
        groupTitle: "Інструкції з безпеки та виживання",
        items: [
          {
            to: "/occupational-safety/civil-protection/safety-abc",
            icon: BookOpenCheck,
          },
          {
            to: "/occupational-safety/civil-protection/safety-guide",
            icon: Map,
          },
          {
            to: "/occupational-safety/civil-protection/mine-safety",
            icon: Bomb,
          },
          {
            to: "/occupational-safety/civil-protection/learn-to-survive",
            icon: Backpack,
          },
        ],
      },
      {
        groupTitle: "Дії в надзвичайних ситуаціях",
        items: [
          {
            to: "/occupational-safety/civil-protection/population-actions-during-evacuation",
            icon: LogOut,
          },
          {
            to: "/occupational-safety/civil-protection/evacuation",
            icon: Megaphone,
          },
          {
            to: "/occupational-safety/civil-protection/hostage-taking",
            icon: Lock,
          },
        ],
      },
    ],
  },
  {
    title: "Медичне обслуговування",
    groups: [
      {
        groupTitle: "Загальна інформація",
        mobileGroupTitle: "Медичне обслуговування",
        items: [
          { to: "/occupational-safety/medical-care", icon: HeartPulse },
          {
            to: "/occupational-safety/medical-care/medical-examination-of-employees",
            icon: Stethoscope,
          },
          {
            to: "/occupational-safety/medical-care/vaccinations",
            icon: Calendar1,
          },
          { to: "/occupational-safety/medical-care/tips", icon: Lightbulb },
        ],
      },
      {
        groupTitle: "COVID-19",
        items: [
          { to: "/occupational-safety/covid-19", icon: Biohazard },
          { to: "/occupational-safety/covid-19/prevention", icon: ShieldPlus },
          {
            to: "/occupational-safety/covid-19/algorithm-of-actions",
            icon: ClipboardList,
          },
          {
            to: "/occupational-safety/covid-19/reminder-for-school-staff",
            icon: NotebookText,
          },
          {
            to: "/occupational-safety/covid-19/reminder-for-parents",
            icon: NotebookPen,
          },
        ],
      },
    ],
  },
  {
    title: "Харчування",
    groups: [
      {
        groupTitle: "Харчування",
        items: [
          { to: "/occupational-safety/meals", icon: Utensils },
          { to: "/occupational-safety/meals/useful-tips", icon: Lightbulb },
          {
            to: "/occupational-safety/meals/regulatory-documents",
            icon: BookText,
          },
        ],
      },
    ],
  },
] satisfies Section;
