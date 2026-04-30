import {
  Award,
  BookAlert,
  BookImage,
  BookOpen,
  BookText,
  Coins,
  Crown,
  FileText,
  Home,
  Info,
  Landmark,
  Laptop,
  Library,
  ListTodo,
  Mail,
  Map,
  Megaphone,
  MonitorPlay,
  Newspaper,
  Rainbow,
  Speech,
  Star,
  Trophy,
  TvMinimalPlay,
  Users,
  UsersRound,
} from "lucide-react";
import { type Section } from "./types";

export const main = [
  {
    title: "Заклад",
    groups: [
      {
        groupTitle: "Загальна інформація",
        items: [
          { to: "/", icon: Home },
          { to: "/about", icon: Info },
          { to: "/history", icon: BookText },
          { to: "/graduates", icon: Users },
          {
            title: "Ми у прессі",
            href: "https://www.youtube.com/playlist?list=PLRRIw-HYRJOqvwF8B4qVAviOnmN5iY3Xn",
            icon: TvMinimalPlay,
          },
          { to: "/feedback", icon: Mail },
          { to: "/sitemap", icon: Map },
        ],
      },
      {
        groupTitle: "Колектив",
        items: [
          { to: "/administration", icon: UsersRound },
          { to: "/teaching-staff", icon: Users },
        ],
      },
      {
        groupTitle: "Управління",
        items: [
          { to: "/pedagogical-councils", icon: Speech },
          { to: "/meetings-with-director", icon: Speech },
          { to: "/methodological-organizational-meetings", icon: Speech },
          { to: "/parent-committee", icon: Speech },
          { to: "/informant-letters", icon: BookAlert },
          { to: "/regulatory-documents", icon: BookText },
        ],
      },
    ],
  },
  {
    title: "Освітній простір",
    groups: [
      {
        groupTitle: "Події",
        items: [
          {
            to: "/posts/$type",
            params: { type: "news" },
            icon: Newspaper,
          },
          {
            to: "/posts/$type",
            params: { type: "announcements" },
            icon: Megaphone,
          },
          {
            to: "/posts/$type",
            params: { type: "useful" },
            icon: BookOpen,
          },
          {
            to: "/posts/$type",
            params: { type: "camp" },
            icon: Rainbow,
          },
          { to: "/album", icon: BookImage },
        ],
      },
      {
        groupTitle: "Навчання",
        items: [
          { to: "/distance-learning", icon: Laptop },
          { to: "/textbooks", icon: Library },
          {
            href: "https://www.youtube.com/playlist?list=PLEoEWGEBriPCTBIOQbXIIDzFFakriePu-",
            title: "Уроки Авраменка",
            icon: MonitorPlay,
          },
        ],
      },
      {
        groupTitle: "Досягнення",
        items: [
          { to: "/achievements/pupil", icon: Star },
          { to: "/achievements/school-pride", icon: Crown },
          { to: "/achievements/teacher", icon: Award },
          { to: "/achievements/school", icon: Trophy },
        ],
      },
    ],
  },
  {
    title: "Звітність",
    groups: [
      {
        groupTitle: "Публічна інформація",
        items: [{ to: "/public-info", icon: FileText }],
      },
      {
        groupTitle: "Фінансова звітність",
        items: [
          { to: "/budget-funds", icon: Landmark },
          { to: "/non-budget-funds", icon: Coins },
          { to: "/needs", icon: ListTodo },
        ],
      },
    ],
  },
] satisfies Section;
