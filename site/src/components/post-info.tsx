import { Calendar, TypeOutline } from "lucide-react";
import { useSticky } from "~/hooks/use-sticky";

type Props = {
  title: string;
  date: string;
};

export function PostInfo(props: Props) {
  const ref = useSticky({ offset: -1, className: "md:sticky" });
  const { title, date } = props;
  return (
    <div
      ref={ref}
      className="font-roboto-condensed z-1 -mx-(--main-offset) mb-6 border-y border-slate-500 bg-slate-100 px-4 py-2 text-lg"
    >
      <div className="flex gap-2">
        <TypeOutline className="size-5 shrink-0 translate-y-1 text-blue-500" />
        {title}
      </div>
      <div className="flex items-center gap-2">
        <Calendar className="size-5 shrink-0 -translate-y-0.5 text-red-500" />
        {date}
      </div>
    </div>
  );
}
