import type { Years } from "./types";
import { filenames } from "~/lib/utils";

export const data = filenames(
  import.meta.glob<Years>("./20??-20??.ts", {
    eager: true,
    import: "data",
  }),
).toReversed();
