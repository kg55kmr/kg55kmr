import type { Section } from "./types";
import {
  FileClock,
  FileText,
  GlobeLock,
  Info,
  Lightbulb,
  Map,
  MapPinned,
  PhoneCall,
  PhoneForwarded,
  ShieldAlert,
  Sprout,
  UserRoundCog,
  UserRoundSearch,
} from "lucide-react";

export const socialAndPsychologicalService = [
  {
    title: "Соціально-психологічна служба",
    groups: [
      {
        groupTitle: "Соціально-психологічна служба",
        items: [
          { to: "/social-and-psychological-service", icon: Info },
          { to: "/social-and-psychological-service/sitemap", icon: Map },
        ],
      },
    ],
  },
  {
    title: "Соціальний педагог",
    groups: [
      {
        groupTitle: "Організаційна робота",
        mobileGroupTitle: "Соціальний педагог",
        items: [
          {
            to: "/social-and-psychological-service/social-pedagogue",
            icon: UserRoundCog,
          },
          {
            to: "/social-and-psychological-service/social-pedagogue/information-asc",
            icon: Info,
          },
          {
            to: "/social-and-psychological-service/social-pedagogue/work-in-the-neighborhood",
            icon: MapPinned,
          },
          {
            to: "/social-and-psychological-service/social-pedagogue/regulatory-documents",
            icon: FileText,
          },
        ],
      },
      {
        groupTitle: "Допомога та безпека",
        items: [
          {
            to: "/social-and-psychological-service/social-pedagogue/hotline-numbers",
            icon: PhoneCall,
          },
          {
            to: "/social-and-psychological-service/social-pedagogue/bullying",
            icon: ShieldAlert,
          },
          {
            to: "/social-and-psychological-service/social-pedagogue/safe-internet",
            icon: GlobeLock,
          },
        ],
      },
      {
        groupTitle: "Консультаційний пункт",
        items: [
          {
            to: "/social-and-psychological-service/social-pedagogue/tips-for-teachers",
            icon: Lightbulb,
          },
          {
            to: "/social-and-psychological-service/social-pedagogue/tips-for-teachers-on-working-with-families",
            icon: Lightbulb,
          },
          {
            to: "/social-and-psychological-service/social-pedagogue/tips-for-parents",
            icon: Lightbulb,
          },
        ],
      },
    ],
  },
  {
    title: "Практичний психолог",
    groups: [
      {
        groupTitle: "Професійна діяльність",
        mobileGroupTitle: "Практичний психолог",
        items: [
          {
            to: "/social-and-psychological-service/practical-psychologist",
            icon: UserRoundSearch,
          },
          {
            title: "Річний план роботи психолога",
            href: "https://drive.google.com/file/d/1PItEq2ossJhQksjwun9Hove0vD43k4O7/view",
            icon: FileClock,
          },
          {
            to: "/social-and-psychological-service/practical-psychologist/regulatory-documents",
            icon: FileText,
          },
        ],
      },
      {
        groupTitle: "Допомога та безпека",
        items: [
          {
            to: "/social-and-psychological-service/practical-psychologist/hotline-numbers",
            icon: PhoneForwarded,
          },
          {
            to: "/social-and-psychological-service/practical-psychologist/resilience-center",
            icon: Sprout,
          },
        ],
      },
      {
        groupTitle: "Психологічний супровід",
        items: [
          {
            to: "/social-and-psychological-service/practical-psychologist/tips-for-pupils",
            icon: Lightbulb,
          },
          {
            to: "/social-and-psychological-service/practical-psychologist/tips-for-parents",
            icon: Lightbulb,
          },
          {
            to: "/social-and-psychological-service/practical-psychologist/tips-for-teachers",
            icon: Lightbulb,
          },
        ],
      },
    ],
  },
  {
    title: "Логопед",
    groups: [
      {
        groupTitle: "Логопед",
        items: [
          {
            to: "/social-and-psychological-service/speech-therapist",
            icon: Info,
          },
        ],
      },
    ],
  },
] satisfies Section;
