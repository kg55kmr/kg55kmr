import type { Ref } from "react";
import { type Lesson, getLessonDate } from "distance-learning";

export type LessonData = {
  date: string;
  fullClass: string;
  group: string | undefined;
  theme: string;
};

export type LessonExt = {
  years: string;
  className: string;
  subject: string;
  ref?: Ref<HTMLTableRowElement>;
};

const reComponents =
  /(?:.*?(?<className>\d-\S))?(?:.*?(?<group>\d)\sгрупа)?.*(Тема\.\s)(?<theme>.*)/;

export function buildLesson(
  params: Pick<Lesson, "title"> & Pick<LessonExt, "className" | "years">,
): LessonData {
  const title = params.title;
  const date =
    title.slice(0, 6) + getLessonDate(title, params.years).getFullYear();
  const groups = title.slice(6).match(reComponents)?.groups;
  if (!groups) throw new Error(`Regex failed: ${title}`);

  const { className, group, theme } = groups as Record<
    string,
    string | undefined
  >;

  if (!theme) throw new Error(`Theme is undefined: \${title}`);

  return {
    date,
    fullClass: className ?? formatClass(params.className, params.years),
    group,
    theme,
  };
}

export function formatClass(className: string, years: string) {
  if (years === "2022-2023" && className === "8") return `${className}-А,Б,В`;
  return !isNaN(+className) ? `${className}-А,Б` : className;
}
