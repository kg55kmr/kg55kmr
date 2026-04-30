import { expect, test } from "vitest";
import { upperCaseComponents } from "./convert";

test("upperCaseComponents", () => {
  expect(upperCaseComponents('<slideshow id="123"></slideshow>')).toBe(
    '<Gallery id="123"></Gallery>',
  );
  expect(upperCaseComponents("<pre>text</pre>")).toBe("<Pre>text</Pre>");
});
