import type { Position, Staff } from "./types";

export const administration: Position[] = [
  "директор",
  "заступник директора з навчально-виховної роботи",
  "заступник директора з виховної роботи",
  "завідувач господарством",
];

export const staff: Staff[] = [
  {
    name: "Адміністрація",
    position: administration,
    anchor: { id: "administration" },
  },
  {
    name: "Соціально-психологічна служба",
    position: ["соціальний педагог", "практичний психолог"],
    anchor: { id: "social-and-psychological-service" },
  },
  {
    name: "Учитель-логопед",
    position: "учитель-логопед",
    anchor: { id: "speech-therapist" },
  },
  {
    name: "Педагог-організатор",
    position: "педагог-організатор",
    anchor: { id: "activity-coordinator" },
  },
  {
    name: "Початкова школа",
    position: "учитель початкових класів",
    anchor: { id: "teachers", name: "Викладачі" },
  },
  {
    name: "Українська мова та література",
    position: "учитель української мови та літератури",
  },
  {
    name: "Зарубіжна література",
    position: "учитель зарубіжної літератури",
  },
  {
    name: "Англійська мова",
    position: "учитель англійської мови",
  },
  {
    name: "Історія",
    position: "учитель історії",
  },
  {
    name: "Математика",
    position: "учитель математики",
  },
  {
    name: "Фізика",
    position: "учитель фізики",
  },
  {
    name: "Інформатика",
    position: "учитель інформатики",
  },
  {
    name: "Географія та біологія",
    position: "учитель географії та біології",
  },
  {
    name: "Музичне мистецтво",
    position: "учитель музичного мистецтва",
  },
  {
    name: "Трудове навчання",
    position: "учитель трудового навчання",
  },
  {
    name: "Фізична культура",
    position: "учитель фізичної культури",
  },
  {
    name: "Асистент учителя",
    position: "асистент учителя",
    anchor: { id: "teaching-assistant" },
  },
] as const;
