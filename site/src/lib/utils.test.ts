import { expect, test } from "vitest";
import { filename } from "./utils";

test("filename", () => {
  expect(filename("./foo.bar.123")).toBe("foo.bar");
  expect(filename("./foo.bar")).toBe("foo");
  expect(filename("a/b/c/foo.bar")).toBe("foo");
  expect(filename("foo")).toBe("foo");
  expect(() => filename("")).toThrowError("Empty path");
});
