import type { Responsible, TimelineType } from "~/components/timeline";
import { filenames } from "~/lib/utils";

export const data = filenames(
  import.meta.glob<TimelineType<Responsible>[]>("./20??-20??.ts", {
    eager: true,
    import: "data",
  }),
).toReversed();
