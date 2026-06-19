import type { AlbumPost } from "posts";
import { createFileRoute, stripSearchParams } from "@tanstack/react-router";
import z from "zod";
import { Highlight } from "~/components/highlight";
import { Link } from "~/components/link";
import { NoResults } from "~/components/no-results";
import { Pagination } from "~/components/pagination";
import { cacheHeader } from "~/lib/headers";
import { pagination } from "~/lib/pagination";
import { formatPostDate } from "~/lib/posts";
import { getAlbum } from "~/server/server-fn";

export const Route = createFileRoute("/(main)/album/")({
  component: RouteComponent,
  validateSearch: z.object({
    page: z.number().default(1),
    search: z.string().default(""),
  }),
  search: {
    middlewares: [stripSearchParams({ page: 1, search: "" })],
  },
  loader: async () => ({
    album: await getAlbum(),
  }),
  headers: cacheHeader(5),
});

type AlbumEntries = [string, AlbumPost][];

function RouteComponent() {
  const { album } = Route.useLoaderData();
  const { page, search } = Route.useSearch();
  const navigate = Route.useNavigate();

  const itemsPerPage = 20;
  const albumEntries = Object.entries(album).toSorted((a, b) =>
    b[0].localeCompare(a[0], undefined, { numeric: true }),
  );

  const filteredAlbum = searchInAlbum(albumEntries, search);
  const { items, itemsPlaceholder } = pagination({
    items: filteredAlbum,
    itemsPerPage,
    page: page - 1,
  });

  const highlightItems = highlight(items, search);
  return (
    <>
      <input
        type="text"
        value={search}
        onChange={(e) =>
          navigate({
            search: { search: e.currentTarget.value },
            resetScroll: false,
            replace: true,
          })
        }
        className="input mb-4"
      />
      <div className="relative">
        {items.length === 0 && <NoResults />}
        <table className="w-full">
          <colgroup>
            <col className="w-0" />
          </colgroup>
          <tbody>
            {highlightItems.map((item) => (
              <tr key={item.id} className="hover:bg-slate-200">
                <td className="pr-3 align-top font-bold">
                  <Link
                    params={{ id: item.id }}
                    to="/album/$id"
                    className="font-bold"
                  >
                    {formatPostDate(item.date)}
                  </Link>
                </td>
                <td>
                  <Link
                    params={{ id: item.id }}
                    to="/album/$id"
                    className="block"
                  >
                    {item.title}
                  </Link>
                </td>
              </tr>
            ))}
            {itemsPlaceholder.map((_, i) => (
              <tr key={i}>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Pagination
        currentPage={page}
        itemsPerPage={itemsPerPage}
        onPageChange={(page) =>
          navigate({
            search: (s) => ({ ...s, page }),
            resetScroll: false,
            replace: true,
          })
        }
        totalItems={filteredAlbum.length}
      />
    </>
  );
}

function searchInAlbum(album: AlbumEntries, searchText: string) {
  if (searchText === "") return album;

  const safe = RegExp.escape(searchText);
  const match = new RegExp(safe, "i");

  return album.filter(([, post]) => match.test(post.title));
}

function highlight(album: AlbumEntries, searchText: string) {
  return album.map(([id, p]) => ({
    ...p,
    id,
    title: <Highlight highlight={searchText} text={p.title} />,
  }));
}
