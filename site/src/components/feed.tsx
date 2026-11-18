import { Dialog } from "@base-ui/react/dialog";
import { Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  BookOpenText,
  CircleX,
  LucideExternalLink,
  MoveRight,
} from "lucide-react";
import { type FC, type PropsWithChildren, useState } from "react";
import { useMutative } from "use-mutative";
import { useSticky } from "~/hooks/use-sticky";
import { pagination } from "~/lib/pagination";
import { ExternalLink } from "./link";
import { Pagination } from "./pagination";

type Props = {
  items: Record<string, unknown>;
};

export function Feed(props: Props) {
  const itemsPerPage = 5;
  const [page, setPage] = useState(1);
  const [state, setState] = useMutative({
    open: false,
    post: null as FeedPost | null,
  });
  const items = toFeed(props.items);
  const pageItems = pagination({
    items,
    itemsPerPage,
    page: page - 1,
  });

  return (
    <div className="relative">
      <div className="flex flex-col gap-10">
        {pageItems.items.map((post, i) => (
          <FeedItem
            key={i}
            post={post}
            onClick={() => {
              setState((s) => {
                s.post = post;
                s.open = true;
              });
            }}
          />
        ))}
      </div>
      <Pagination
        currentPage={page}
        itemsPerPage={itemsPerPage}
        totalItems={items.length}
        onPageChange={setPage}
        desktopSticky
      />
      <Dialog.Root
        open={state.open}
        onOpenChange={(open) =>
          setState((s) => {
            s.open = open;
          })
        }
      >
        <Dialog.Portal>
          <Dialog.Backdrop className="fixed inset-0 z-20 bg-black opacity-50 transition-all duration-200 data-ending-style:opacity-0 data-starting-style:opacity-0" />
          <Dialog.Popup
            className={
              "fixed inset-5 z-20 rounded-lg bg-white p-2 text-gray-900 transition-all duration-200" +
              "data-ending-style:scale-90 data-ending-style:opacity-0 data-starting-style:scale-90 data-starting-style:opacity-0"
            }
          >
            <div className="grid h-full grid-rows-[auto_1fr] gap-2">
              <div className="flex gap-2">
                <Dialog.Close className="cursor-pointer">
                  <CircleX />
                </Dialog.Close>
                <div className="text-xl font-bold">{state.post?.title}</div>
              </div>
              <div className="overflow-y-auto">
                {state.post?.Content && <state.post.Content />}
              </div>
            </div>
          </Dialog.Popup>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
}

function FeedItem(props: { post: FeedPost; onClick: () => void }) {
  const { post } = props;
  return (
    <div
      className={
        "group/feed relative rounded-md border border-gray-400 bg-slate-100 p-2 drop-shadow-[7px_7px_7px] drop-shadow-black/15 " +
        " hover:border-blue-400 hover:bg-blue-50"
      }
    >
      <div
        onClick={props.onClick}
        className="relative h-100 w-full cursor-pointer overflow-y-clip"
      >
        {post.title && (
          <div className="mb-5 flex gap-2">
            <BookOpenText className="size-7 translate-y-0.5 text-blue-700" />
            <div className="text-xl font-bold">{post.title}</div>
          </div>
        )}
        <post.Content />
        <div className="absolute inset-0 hidden bg-blue-50/50 group-hover/feed:block" />
      </div>
    </div>
  );
}

function toFeed(glob: Record<string, unknown>) {
  return Object.keys(glob)
    .toSorted((a, b) => b.localeCompare(a, "uk", { numeric: true }))
    .map((path) => {
      const post = glob[path];
      assertIsFeedPost(post, path);
      return post;
    });
}

function assertIsFeedPost(
  data: unknown,
  path: string,
): asserts data is FeedPost {
  if (typeof data === "object" && data && "Content" in data) return;
  throw new Error(`(${path}) is not a feed post`);
}

export type FeedPost = {
  title?: string;
  Content: FC;
};

type Feed2Props = {
  items: Record<string, FeedPost2>;
  id?: number;
};

export function Feed2(props: Feed2Props) {
  const items = Object.values(props.items).toReversed();
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
        {item.Content && (
          <div className="content">
            <item.Content />
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="grid-cols-auto-fit-80 grid gap-5">
      {items.map((post, i) => {
        const id = itemsLen - i;
        const text = post.Content ? "Прочитати" : "Переглянути";
        const Icon = post.Content ? MoveRight : LucideExternalLink;
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

function DynamicLink(
  props: PropsWithChildren<{ post: FeedPost2; id: number }>,
) {
  const className =
    "row-span-3 grid cursor-pointer grid-rows-subgrid gap-2 rounded-xl border border-gray-300 p-6 hover:border-blue-400";

  if (props.post.Content)
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

export type FeedPost2 = {
  title: string;
  preview: string;
  url?: string;
  Content?: FC;
};
