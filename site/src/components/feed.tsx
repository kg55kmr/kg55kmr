import type { FC } from "react";
import { useSuspenseQuery } from "@tanstack/react-query";
import { BookOpenText } from "lucide-react";

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
          <div
            key={i}
            className="relative w-full rounded-md border border-gray-400 bg-white p-4 drop-shadow-[7px_7px_7px] drop-shadow-black/15"
          >
            {post.title && (
              <div className="flex items-center gap-2 pb-5">
                <BookOpenText className="size-7 text-blue-700" />
                <div className="text-xl font-bold">{post.title}</div>
              </div>
            )}
            <post.Content />
          </div>
        ))}
      </div>
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
