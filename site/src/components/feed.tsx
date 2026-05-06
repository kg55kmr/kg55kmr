import { Dialog } from "@base-ui/react/dialog";
import { useSuspenseQuery } from "@tanstack/react-query";
import { BookOpenText } from "lucide-react";
import { type FC } from "react";

type Props = { items: Record<string, unknown> };

type FeedPost = {
  title?: string;
  Content: FC;
};

export function Feed(props: Props) {
  const { data: items } = useSuspenseQuery({
    queryKey: ["feed"],
    queryFn: () => toFeed(props.items),
  });
  return (
    <div className="">
      <div className="flex flex-col gap-10">
        {items.map((post, i) => (
          <FeedItem key={i} post={post} />
        ))}
      </div>
    </div>
  );
}

function FeedItem({ post }: { post: FeedPost }) {
  const item = (
    <>
      {post.title && (
        <div className="flex items-center gap-2 pb-5">
          <BookOpenText className="size-7 text-blue-700" />
          <div className="text-xl font-bold">{post.title}</div>
        </div>
      )}
      <post.Content />
    </>
  );
  return (
    <div className="rounded-md border border-gray-400 bg-white p-4 drop-shadow-[7px_7px_7px] drop-shadow-black/15">
      <div className="relative h-100 w-full overflow-y-clip mask-b-from-20% mask-b-to-100%">
        {item}
      </div>
      <Dialog.Root>
        <Dialog.Trigger className="mt-4 cursor-pointer rounded-md border border-sky-400 bg-sky-100 p-2 hover:bg-sky-200">
          Переглянути
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Backdrop className="fixed inset-x-0 inset-y-0 z-20 min-h-dvh bg-black opacity-50 transition-all duration-150 data-ending-style:opacity-0 data-starting-style:opacity-0" />
          <Dialog.Popup
            className={
              "fixed inset-10 z-20 overflow-y-auto rounded-lg bg-white p-2 text-gray-900 transition-all duration-150 " +
              "data-ending-style:scale-90 data-ending-style:opacity-0 data-starting-style:scale-90 data-starting-style:opacity-0"
            }
          >
            {item}
            <div className="sticky right-0 bottom-2 flex justify-end px-2">
              <Dialog.Close className="rounded-md border border-sky-400 bg-sky-100 p-2 hover:bg-sky-200">
                Закрити
              </Dialog.Close>
            </div>
          </Dialog.Popup>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
}

function toFeed(glob: Record<string, unknown>) {
  return Promise.all(
    Object.keys(glob)
      .toSorted((a, b) => a.localeCompare(b, "uk", { numeric: true }))
      .toReversed()
      .map((path) => {
        const post = glob[path];
        assertIsFeedPost(post, path);
        return post;
      }),
  );
}

function assertIsFeedPost(
  data: unknown,
  path: string,
): asserts data is FeedPost {
  if (typeof data === "object" && data && "Content" in data) return;
  throw new Error(`(${path}) is not a feed post`);
}
