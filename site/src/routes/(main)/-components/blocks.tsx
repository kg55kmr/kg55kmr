import { type LinkOptions } from "@tanstack/react-router";
import { ExternalLink, Link } from "~/components/link";
import { cn } from "~/lib/utils";

type Item = LinkOptions | { href: string };
export type BlockItem = {
  title: string;
  image: string;
} & Item;

type Props = {
  items: Array<BlockItem>;
  className?: string;
};

export function Blocks(props: Props) {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
      {props.items.map((item) => (
        <Block key={item.title} item={item} className={props.className} />
      ))}
    </div>
  );
}

type BlockProps = {
  item: BlockItem;
  className?: string;
};

function Block(props: BlockProps) {
  return (
    <div className="group relative w-full rounded-md border border-gray-500">
      <img src={props.item.image} className="aspect-4/3 w-full rounded-t-md" />
      <div
        className={cn(
          "font-cambria flex items-center justify-center border-t border-gray-500 p-2 text-center text-xl whitespace-pre-wrap text-black",
          props.className,
        )}
      >
        {props.item.title}
      </div>

      <BlockItem item={props.item} />
    </div>
  );
}

function BlockItem({ item }: { item: BlockItem }) {
  if (item.href)
    return (
      <ExternalLink href={item.href}>
        <div className="absolute inset-0 hover:bg-blue-300/50" />
      </ExternalLink>
    );

  return (
    <Link {...item}>
      <div className="absolute inset-0 hover:bg-blue-300/50" />
    </Link>
  );
}
