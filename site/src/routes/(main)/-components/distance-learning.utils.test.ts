import { expect, test } from "vitest";
import { buildLesson } from "./distance-learning.utils";

test("components", () => {
  expect(
    buildLesson({
      years: "2000-2001",
      className: "6",
      title: "12.03. Тема. 123",
    }),
  ).toEqual({
    date: "12.03.2001",
    fullClass: "6-А,Б",
    theme: "123",
  });

  expect(
    buildLesson({
      years: "2000-2001",
      className: "4",
      title: "13.09. 1 група. Тема. abc",
    }),
  ).toEqual({
    date: "13.09.2000",
    fullClass: "4-А,Б",
    group: "1",
    theme: "abc",
  });

  expect(
    buildLesson({
      years: "2000-2001",
      className: "9",
      title: "15.08. Something. 9-Б. 2 група. Тема. Test",
    }),
  ).toEqual({
    date: "15.08.2001",
    fullClass: "9-Б",
    group: "2",
    theme: "Test",
  });
});
