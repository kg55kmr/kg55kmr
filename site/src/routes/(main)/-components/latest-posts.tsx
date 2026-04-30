import { type LinkOptions } from "@tanstack/react-router";
import { Link } from "~/components/link";
import { asset, cn } from "~/lib/utils";

type Props = {
  items: ItemProps[];
};

export function LatestPosts(props: Props) {
  const items = props.items.slice(0, 5);
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 lg:grid-cols-5">
      {items.map((item, i) => (
        <PostItem key={i} {...item} />
      ))}
    </div>
  );
}

type ItemProps = {
  date: string;
  title: string;
  preview: string;
  link: LinkOptions;
  pin?: boolean;
};

function PostItem(props: ItemProps) {
  return (
    <Link
      {...props.link}
      className={cn(
        "group relative flex flex-col rounded-t-lg rounded-b-lg border border-gray-400 bg-gray-50 text-inherit hover:border-blue-500 hover:bg-blue-50",
        props.pin && "border-3 border-red-500 bg-red-50",
      )}
    >
      <div className="relative">
        <img
          src={props.preview}
          className="aspect-4/3 w-full rounded-t-lg object-cover"
        />
        <div className="absolute top-0 left-0 hidden size-full bg-blue-300/50 group-hover:block" />
      </div>

      {props.pin && (
        <img
          src={asset("icons/pin.png")}
          className="absolute left-0 size-8 -translate-x-4 -translate-y-5 -scale-x-100"
        />
      )}

      <div className="font-cambria p-1.5 text-xl">{props.title}</div>
      <div className="mt-auto p-1.5 text-slate-500">{props.date}</div>
    </Link>
  );
}
