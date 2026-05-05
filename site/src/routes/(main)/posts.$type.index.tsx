import type { Post, PostType } from "posts";
import { Accordion } from "@base-ui/react/accordion";
import { createFileRoute, stripSearchParams } from "@tanstack/react-router";
import { ChevronUp } from "lucide-react";
import { type ReactElement, useRef, useState } from "react";
import z from "zod";
import { Highlight } from "~/components/highlight";
import { Link } from "~/components/link";
import { NoResults } from "~/components/no-results";
import { Pagination } from "~/components/pagination";
import { useStickyOffset } from "~/hooks/use-sticky";
import { pagination } from "~/lib/pagination";
import { getPosts, getPostThumbnailUrl } from "~/lib/posts";
import { asset, cn } from "~/lib/utils";

export const Route = createFileRoute("/(main)/posts/$type/")({
  component: RouteComponent,
  validateSearch: z.object({
    page: z.number().default(1),
    search: z.string().default(""),
    year: z.string().optional(),
    month: z.string().optional(),
  }),
  search: {
    middlewares: [stripSearchParams({ page: 1, search: "" })],
  },
  loader: async () => ({
    groupedPosts: await getPosts(),
  }),
});

function RouteComponent() {
  const { groupedPosts } = Route.useLoaderData();
  const { type } = Route.useParams();
  const { page, search: searchText, year, month } = Route.useSearch();
  const navigate = Route.useNavigate();

  const itemsPerPage = 5;
  const mergedPosts = [...groupedPosts[type].pin, ...groupedPosts[type].items];
  const filteredPosts = filterPosts({
    posts: mergedPosts,
    year,
    month,
    searchText: searchText.toLowerCase(),
  });

  const { items, itemsPlaceholder } = pagination({
    items: filteredPosts,
    itemsPerPage,
    page: page - 1,
  });

  const el = useRef<HTMLInputElement>(null);
  const offset = useStickyOffset();
  const highlightItems = highlight(items, searchText.toLocaleLowerCase());

  return (
    <>
      <input
        ref={el}
        type="text"
        value={searchText}
        onChange={(e) => {
          navigate({
            search: { search: e.target.value },
            replace: true,
            resetScroll: false,
          });
        }}
        style={{ scrollMarginTop: `calc(${offset}px + 1rem)` }}
        className="input mb-4"
      />
      <div className="grid gap-5 sm:grid-cols-[1fr_auto]">
        <div className="relative flex flex-col gap-5">
          {highlightItems.length === 0 && <NoResults />}
          {highlightItems.map((post) => (
            <Item key={post.id} post={post} type={type} />
          ))}
          {itemsPlaceholder.map((_, i) => (
            <div key={i} />
          ))}
          {highlightItems.length > 0 && (
            <Pagination
              currentPage={page}
              itemsPerPage={itemsPerPage}
              onPageChange={(page) =>
                navigate({
                  search: (s) => ({ ...s, page }),
                  resetScroll: false,
                })
              }
              totalItems={filteredPosts.length}
              className="bottom-2 mx-auto rounded-md border border-slate-500 bg-blue-100/75 p-1 text-lg sm:sticky"
              buttonClassName="not-disabled:hover:bg-blue-200"
            />
          )}
        </div>
        <div>
          <Archive
            posts={mergedPosts}
            year={year}
            month={month}
            setFilter={(filter) => {
              navigate({ search: filter, resetScroll: false });
            }}
          />
        </div>
      </div>
    </>
  );
}

type PostHighlight = Omit<Post, "title"> & { title: ReactElement };

function Item(props: { post: PostHighlight; type: PostType }) {
  const { post, type } = props;
  return (
    <Link
      from={Route.fullPath}
      to="./$id"
      params={{ type, id: post.id }}
      className="block"
    >
      <div
        className={cn(
          "relative flex flex-col gap-3 rounded-lg border border-gray-300 bg-white p-2 drop-shadow-[7px_7px_7px] drop-shadow-black/10 hover:border-blue-500 hover:bg-blue-50 md:flex-row",
          post.pin && "border-2 border-red-500 bg-red-50",
        )}
      >
        {post.pin && (
          <img
            src={asset("icons/pin.png")}
            className="absolute right-0 size-8 translate-x-6 -translate-y-8"
          />
        )}

        <div className="mx-auto w-50 shrink-0 rounded-lg border border-gray-300 md:mx-0">
          {post.thumbnailExists ? (
            <img
              src={getPostThumbnailUrl(type, post.id)}
              className="block aspect-4/3 w-full rounded-lg object-cover"
            />
          ) : (
            <div className="aspect-4/3 w-full" />
          )}
        </div>
        <div className="relative">
          <div>{post.title}</div>
          <div className="text-blue-700">
            {post.date.day}.{post.date.month}.{post.date.year}
          </div>
        </div>
      </div>
    </Link>
  );
}

function highlight(posts: Post[], searchText: string) {
  return posts.map((p) => ({
    ...p,
    title: <Highlight highlight={searchText} text={p.title} />,
  }));
}

type ArchiveType = Record<
  string,
  Record<string, { count: number; monthName: string }>
>;

type ArchiveProps = {
  posts: Post[];
  year?: string;
  month?: string;
  setFilter: (value: Pick<ArchiveProps, "month" | "year">) => void;
};

// TODO: replace string to number in post.date
function Archive(props: ArchiveProps) {
  const [startYear] = useState(props.year);
  const items = props.posts.reduce((acc: ArchiveType, post) => {
    const { year, month } = post.date;
    const monthName = getMonth(month);

    if (year in acc) {
      if (month in acc[year]) acc[year][month].count++;
      else acc[year][month] = { monthName, count: 1 };
    } else acc[year] = {};
    return acc;
  }, {});
  const itemsKey = Object.keys(items).toReversed();

  return (
    <div className="font-cambria mx-auto w-fit rounded-md border border-gray-300 bg-gray-50 text-xl drop-shadow-[7px_7px_7px] drop-shadow-black/10">
      <h1 className="mb-4 rounded-t-md border-b border-gray-300 bg-gray-100 py-1 text-center text-2xl">
        Архів
      </h1>
      <Accordion.Root
        multiple={false}
        defaultValue={[startYear]}
        className="flex w-50 flex-col"
      >
        {itemsKey.map((year) => (
          <Accordion.Item key={year} value={year} className="group/item">
            <Accordion.Header>
              <Accordion.Trigger
                className={
                  "group relative flex w-full cursor-pointer justify-between gap-1 border-y border-transparent bg-gray-50 p-2 text-left " +
                  "group-last/item:rounded-b-md hover:border-gray-300 hover:bg-gray-100 data-panel-open:border-blue-500 data-panel-open:bg-blue-100"
                }
              >
                <div className="absolute left-1/2 -translate-x-1/2">{year}</div>
                <ChevronUp className="ml-auto transition-transform duration-300 not-group-data-panel-open:rotate-180" />
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Panel
              className={
                "h-(--accordion-panel-height) overflow-hidden border-t border-gray-300 transition-[height] " +
                "group-not-last/item:border-b data-ending-style:h-0 data-starting-style:h-0"
              }
            >
              {Object.keys(items[year])
                .toSorted((a, b) => b.localeCompare(a))
                .map((month) => {
                  const { monthName, count } = items[year][month];
                  return (
                    <button
                      key={month}
                      onClick={() => {
                        if (year === props.year && month === props.month)
                          props.setFilter({});
                        else props.setFilter({ year, month });
                      }}
                      className={cn(
                        "flex w-full gap-8 border-transparent px-2 not-first-of-type:border-t not-last-of-type:border-b hover:cursor-pointer hover:bg-slate-200",
                        props.year === year &&
                          props.month === month &&
                          "border-blue-500 bg-sky-100",
                      )}
                    >
                      <div className="text-left">{monthName}</div>
                      <div className="ml-auto">{count}</div>
                    </button>
                  );
                })}
            </Accordion.Panel>
          </Accordion.Item>
        ))}
      </Accordion.Root>
    </div>
  );
}

const months = [
  "Січень",
  "Лютий",
  "Березень",
  "Квітень",
  "Травень",
  "Червень",
  "Липень",
  "Серпень",
  "Вересень",
  "Жовтень",
  "Листопад",
  "Грудень",
];

function getMonth(month: string) {
  return months[Number.parseInt(month) - 1];
}

function filterPosts(args: {
  posts: Post[];
  year?: string;
  month?: string;
  searchText: string;
}) {
  const { posts, year, month, searchText } = args;
  if (searchText.length > 0) {
    return posts.filter((v) => {
      return v.titleLower.includes(searchText);
    });
  }

  if (year && month) {
    const p = posts.filter((v) => {
      return v.date.year === year && v.date.month === month;
    });
    if (p.length === 0) return posts;
    return p;
  }

  return posts;
}
