import { createFileRoute, stripSearchParams } from "@tanstack/react-router";
import z from "zod";
import { Highlight } from "~/components/highlight";
import { Link } from "~/components/link";
import { NoResults } from "~/components/no-results";
import { Pagination } from "~/components/pagination";
import { postsSHAQuery } from "~/hooks/use-queries";
import { pagination } from "~/lib/pagination";
import { type Album, formatPostDate, getAlbum } from "~/lib/posts";

export const Route = createFileRoute("/(main)/album/")({
  component: RouteComponent,
  validateSearch: z.object({
    page: z.number().default(1),
    search: z.string().default(""),
  }),
  search: {
    middlewares: [stripSearchParams({ page: 1, search: "" })],
  },
  loader: async ({ context }) => ({
    album: await getAlbum(
      await context.queryClient.ensureQueryData(postsSHAQuery),
    ),
  }),
});

function RouteComponent() {
  const { album } = Route.useLoaderData();
  const { page, search } = Route.useSearch();
  const navigate = Route.useNavigate();

  const itemsPerPage = 20;
  const filteredAlbum = searchInAlbum(album, search);
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

function searchInAlbum(album: Album, searchText: string) {
  if (searchText === "") return album;
  const st = searchText.toLocaleLowerCase();
  return album.filter((g) => g.titleLower.includes(st));
}

function highlight(album: Album, searchText: string) {
  const searchTextLower = searchText.toLowerCase();
  return album.map((p) => ({
    ...p,
    title: <Highlight highlight={searchTextLower} text={p.title} />,
  }));
}
