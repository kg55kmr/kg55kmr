import type { LinkOptions } from "@tanstack/react-router";
import type { FC } from "react";
import { type LucideProps, Folder } from "lucide-react";
import { useRouteByPath, useSectionMenu } from "~/hooks/use-sections";
import { ExternalLink, Link } from "./link";

export function SiteMap() {
  const getRouteTitle = useRouteByPath();
  const allGroups = useSectionMenu().flatMap((v) => v.groups);
  const items = allGroups.map((group) => {
    return {
      title: group.mobileGroupTitle ?? group.groupTitle,
      items: group.items.map((item) => {
        const { title } = getRouteTitle(item);
        if (!title) throw new Error("title is undefined");
        return { ...item, id: 0, title };
      }),
    };
  }) satisfies Item[];

  return <Tree items={items} />;
}

type Item = {
  title: string;
  href?: string;
  icon?: FC<LucideProps>;
  items?: Item[];
} & Pick<LinkOptions, "to" | "params" | "search">;

type TreeProps = { items: Item[]; nested?: true };

function Tree(props: TreeProps) {
  return (
    <ul className={props.nested && "mb-1 ml-8"}>
      {props.items.map((item) => (
        <TreeItem key={item.title} item={item} />
      ))}
    </ul>
  );
}

type TreeItemProps = {
  item: Item;
};

function TreeItem(props: TreeItemProps) {
  const item = props.item;
  if (item.items) {
    return (
      <li>
        <div className="flex items-center gap-1">
          <Folder className="size-6 shrink-0 text-orange-700" />
          {item.title}
        </div>
        <Tree items={item.items} nested />
      </li>
    );
  }

  const label = (
    <>
      {item.icon && <item.icon className="size-6 shrink-0 text-slate-500" />}
      <span className="text-blue-700 underline underline-offset-6">
        {item.title}
      </span>
    </>
  );

  if (item.href)
    return (
      <li>
        <ExternalLink href={item.href} className="flex items-center gap-1">
          {label}
        </ExternalLink>
      </li>
    );

  return (
    <li>
      <Link
        to={item.to}
        params={item.params}
        search={item.search}
        className="flex items-center gap-1"
      >
        {label}
      </Link>
    </li>
  );
}
