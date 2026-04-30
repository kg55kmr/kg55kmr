import { dirAsset } from "~/lib/utils";
import { type EmployeeName, employees } from ".";

const cert = dirAsset("images/сертифікати-вчителів/");

type methodologicalAssociations = Record<
  MethodologicalAssociation,
  ReturnType<typeof define>
>;

export const methodologicalAssociations: methodologicalAssociations = {
  "МО вчителів початкових класів": define([
    { teacher: "Горевич Людмила Володимирівна" },
    {
      teacher: "Мугак Ніна Іванівна",
      certificates: cert([
        "мугак-1.jpg",
        "мугак-2.jpg",
        "мугак-3.jpg",
        "мугак-4.jpg",
      ]),
    },
    { teacher: "Довмат Ганна Василівна" },
    {
      teacher: "Старікова Наталя Анатоліївна",
      certificates: cert([
        "старікова-1.jpg",
        "старікова-2.jpg",
        "старікова-3.jpg",
      ]),
    },
    {
      teacher: "Заярнюк Світлана Анатоліївна",
      certificates: cert(["заярнюк-1.jpg"]),
    },
    { teacher: "Чудна Наталія Володимирівна" },
  ]),
  "МО вчителів природничо-математичного циклу": define([
    { teacher: "Артемюк Наталія Анатоліївна" },
    { teacher: "Лівак Вікторія Вікторівна" },
    { teacher: "Кмітевич Олексій Володимирович" },
    { teacher: "Малютіна Людмила Миколаївна" },
    { teacher: "Капуста Валентина Миколаївна" },
    { teacher: "Давидов Ігор Іванович" },
  ]),
  "МО вчителів суспільно-гуманітарного циклу": define([
    { teacher: "Рзаєва Наталія Олександрівна" },
  ]),
};

type Member = {
  teacher: EmployeeName;
  certificates?: string[];
};

function define(members: Member[]) {
  return members.map((v) => {
    const e = employees.byName(v.teacher);
    return { ...e, certificates: v.certificates };
  });
}
export type MethodologicalAssociation =
  | "МО вчителів початкових класів"
  | "МО вчителів природничо-математичного циклу"
  | "МО вчителів суспільно-гуманітарного циклу";
