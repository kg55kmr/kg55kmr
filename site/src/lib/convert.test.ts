import { expect, test } from "vitest";
import { upperCaseComponents } from "./convert";

test("upperCaseComponents", () => {
  expect(upperCaseComponents('<slideshow id="123"></slideshow>')).toBe(
    '<Carousel id="123"></Carousel>',
  );
  expect(upperCaseComponents("<pre>text</pre>")).toBe("<Pre>text</Pre>");
});
