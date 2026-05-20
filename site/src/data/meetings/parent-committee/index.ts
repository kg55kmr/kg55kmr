import type { Responsible, ChronologyGroup } from "~/components/chronology";
import { filenames } from "~/lib/utils";

export const data = filenames(
  import.meta.glob<ChronologyGroup<Responsible>[]>("./20??-20??.ts", {
    eager: true,
    import: "data",
  }),
).toReversed();
