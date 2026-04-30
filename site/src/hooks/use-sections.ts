import type {
  LocalItem,
  NavigationItem,
  Section,
  SectionItem,
  SectionType,
} from "~/data/sections/types";
import type { FileRoutesByFullPath, FileRouteTypes } from "~/routeTree.gen";
import {
  type StaticDataRouteOption,
  useChildMatches,
  useHydrated,
  useMatches,
  useRouter,
} from "@tanstack/react-router";
import { Globe } from "lucide-react";
import { sections } from "~/data/sections";

export function useSections() {
  const { routesById } = useRouter();

  return (Object.entries(sections) as [FileRouteTypes["id"], Section][])
    .filter(([id]) => {
      const dev = routesById[id].options.staticData?.section?.dev;
      return import.meta.env.DEV || !dev;
    })
    .map(([id]) => {
      const route = routesById[id];
      const section = route.options.staticData?.section;
      if (!section) throw new Error(`${id}: section is not defined`);

      const title = route.options.staticData?.title;
      if (!(typeof title === "string"))
        throw new Error(`${id}: title is not defined`);

      return {
        to: route.to === "" ? "/" : route.to,
        title,
        thumbnail: section.thumbnail,
      };
    });
}

export function useSection() {
  return useMatches({
    select: (s) => {
      const route = s.find((v) => v.staticData.section);
      if (!route || !route.staticData.section)
        throw new Error(`Route is not a section: ${s.at(-1)?.fullPath}`);

      return {
        ...route.staticData.section,
        title: getTitle({
          static: route.staticData,
          data: {
            params: route.params,
            search: route.search,
          },
        }),
      };
    },
    structuralSharing: true,
  });
}

export function useSectionMenu() {
  const section = useSection();
  const { routesById } = useRouter();
  const sectionsList = Object.keys(sections) as SectionType[];
  if (section.id === "/(main)") sectionsList.splice(0, 1);

  const items = [
    ...sections[section.id as SectionType],
    {
      title: "Розділи",
      groups: [
        {
          groupTitle: "Розділи",
          items: sectionsList.map((id) => {
            const route = routesById[id];
            const title = route.options.staticData?.title;
            if (!(typeof title === "string"))
              throw new Error(`No section title in: ${route.fullPath}`);

            const to = route.to;
            if (to === "") throw new Error("BUG"); // TODO: fix empty to
            return { to, title, icon: Globe };
          }),
        },
      ],
    } satisfies SectionItem,
  ];

  return items;
}

export function useRouteByPath() {
  const { routesByPath } = useRouter();

  return (item: NavigationItem) => {
    if (item.title) return { title: item.title };
    if (typeof item === "string")
      return getRoute({ routesByPath, data: { to: item } });
    if ("to" in item) return getRoute({ routesByPath, data: item });
    return { title: item.title };
  };
}

function getRoute(opts: {
  routesByPath: FileRoutesByFullPath;
  data: LocalItem;
}) {
  const route = opts.routesByPath[opts.data.to as FileRouteTypes["fullPaths"]];
  const parentStaticData = route.parentRoute.options.staticData;

  let title: string | undefined;

  switch (true) {
    case opts.data.isSection:
      title = getTitle({ static: parentStaticData, data: opts.data });
      break;

    case route.options.staticData?.title !== undefined:
      title = getTitle({
        static: route.options.staticData,
        useShortTitle: true,
        data: opts.data,
      });
      break;

    default:
      title = getTitle({ static: parentStaticData, data: opts.data });
  }

  return { title };
}

export function useRouteTitle() {
  const hydrated = useHydrated();
  return useChildMatches({
    select: (s) => {
      const route = s.at(-1);
      const parentRoute = s.at(-2);
      if (!route) return;
      if (!route.ssr && !hydrated) return;

      const title =
        route.loaderData && "title" in route.loaderData
          ? route.loaderData.title
          : route.staticData.title
            ? getTitle({
                static: route.staticData,
                data: {
                  params: route.params,
                  search: route.search,
                },
              })
            : getTitle({
                static: parentRoute?.staticData,
                data: {
                  params: route.params,
                  search: route.search,
                },
              });

      return title;
    },
  });
}

function getTitle(opts: {
  static?: Pick<StaticDataRouteOption, "title" | "shortTitle">;
  useShortTitle?: boolean;
  data: Omit<LocalItem, "to">;
}) {
  const title =
    opts.useShortTitle && opts.static?.shortTitle
      ? opts.static?.shortTitle
      : opts.static?.title;

  if (!title) return;
  return typeof title === "string" ? title : title(opts.data);
}
