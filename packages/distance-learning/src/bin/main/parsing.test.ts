import { expect, test } from "vitest";
import { getLessonDate } from "./getLessonDate";
import { sortLessons } from "./parsing";

test("getLessonDate", () => {
  expect(getLessonDate("01.09. Test", "2024-2025").getTime()).toBe(
    new Date(2024, 8, 1).getTime(),
  );

  expect(getLessonDate("15.02. Test", "2024-2025").getTime()).toBe(
    new Date(2025, 1, 15).getTime(),
  );
});

test("sortLessons", () => {
  const lessons = [
    "01.02.",
    "09.09. Інформатика",
    "09.09. Англійська",
    "20.12.",
    "03.05.",
    "09.09. Зарубіжна",
  ].map((v) => ({
    title: v,
  }));

  expect(lessons.toSorted(sortLessons("2024-2025"))).toEqual(
    [
      "03.05.",
      "01.02.",
      "20.12.",
      "09.09. Англійська",
      "09.09. Зарубіжна",
      "09.09. Інформатика",
    ].map((v) => ({ title: v })),
  );
});
