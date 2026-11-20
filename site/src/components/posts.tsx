import { Link } from "@tanstack/react-router";
import { ArrowLeft, LucideExternalLink, MoveRight } from "lucide-react";
import { type PropsWithChildren, type ReactElement } from "react";
import { useSticky } from "~/hooks/use-sticky";
import { ExternalLink } from "./link";

type PostsProps = {
  items: Record<string, Post>;
  id?: number;
};

export function Posts(props: PostsProps) {
  const items = Object.entries(props.items)
    .sort((a, b) => b[0].localeCompare(a[0], undefined, { numeric: true }))
    .map((v) => v[1]);

  const itemsLen = items.length;
  const ref = useSticky();

  if (props.id) {
    const item = items[itemsLen - props.id];

    return (
      <div>
        <div
          ref={ref}
          className="z-1 -mx-(--main-offset) mb-5 flex items-center border-y bg-slate-100 p-2"
        >
          <Link to="." resetScroll={false} search={{ id: undefined }}>
            <ArrowLeft className="size-8" />
          </Link>
          <h1 className="font-roboto-condensed flex-1 text-center text-3xl">
            {item.title}
          </h1>
        </div>
        {item.content && <div className="content">{item.content}</div>}
      </div>
    );
  }

  return (
    <div className="grid-cols-auto-fit-80 grid gap-5">
      {items.map((post, i) => {
        const id = itemsLen - i;
        const text = post.content ? "Прочитати" : "Переглянути";
        const Icon = post.content ? MoveRight : LucideExternalLink;
        return (
          <DynamicLink key={post.title + id} post={post} id={id}>
            <div className="font-roboto-condensed text-lg font-bold">
              {post.title}
            </div>
            <div className="mb-5">{post.preview}</div>
            <div className="flex justify-between">
              <div className="font-bold text-blue-700">{text}</div>
              <Icon className="text-blue-700" />
            </div>
          </DynamicLink>
        );
      })}
    </div>
  );
}

function DynamicLink(props: PropsWithChildren<{ post: Post; id: number }>) {
  const className =
    "row-span-3 grid cursor-pointer grid-rows-subgrid gap-2 rounded-xl border border-gray-300 p-6 hover:border-blue-400";

  if (props.post.content)
    return (
      <Link
        to="."
        search={{ id: props.id }}
        resetScroll={false}
        className={className}
      >
        {props.children}
      </Link>
    );

  if (props.post.url)
    return (
      <ExternalLink href={props.post.url} className={className}>
        {props.children}
      </ExternalLink>
    );
}

export function definePost(post: Post) {
  return post;
}

export type Post = {
  title: string;
  preview: string;
  url?: string;
  content?: ReactElement;
};
