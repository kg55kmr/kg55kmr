import { QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import {
  createRootRouteWithContext,
  HeadContent,
  Outlet,
  Scripts,
} from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { postsSHAQuery } from "~/hooks/use-queries";
import styles from "~/styles/app.css?url";

type Context = {
  queryClient: QueryClient;
};

export const Route = createRootRouteWithContext<Context>()({
  component: RootComponent,
  loader: async ({ context }) => ({
    postsSHA: await context.queryClient.ensureQueryData(postsSHAQuery),
  }),
  head: () => ({
    meta: [
      {
        charSet: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
    ],
    links: [
      { href: styles, rel: "stylesheet" },
      { href: "https://fonts.googleapis.com", rel: "preconnect" },
      {
        href: "https://fonts.gstatic.com",
        rel: "preconnect",
        crossOrigin: "",
      },
      {
        href: "https://fonts.googleapis.com/css2?family=Philosopher&display=swap",
        rel: "stylesheet",
      },
      {
        href: "https://fonts.googleapis.com/css2?family=Roboto+Condensed&display=swap",
        rel: "stylesheet",
      },
      {
        href: "https://fonts.googleapis.com/css2?family=Open+Sans&display=swap",
        rel: "stylesheet",
      },
      {
        href: "https://fonts.googleapis.com/css2?family=Lobster&display=swap",
        rel: "stylesheet",
      },
    ],
    // scripts: [
    //   {
    //     src: "https://cdnjs.cloudflare.com/polyfill/v3/polyfill.min.js?version=4.8.0&features=default%2Ces2023%2Ces2022%2Ces2021%2Ces2020",
    //   },
    // ],
  }),
});

function RootComponent() {
  return (
    <html>
      <head>
        <HeadContent />
      </head>
      <body>
        <Outlet />
        <Scripts />
        <TanStackRouterDevtools position="bottom-right" />
        <ReactQueryDevtools buttonPosition="bottom-right" />
      </body>
    </html>
  );
}
