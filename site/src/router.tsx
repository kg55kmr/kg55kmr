import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { setupRouterSsrQueryIntegration } from "@tanstack/react-router-ssr-query";
import { ErrorComponent } from "./components/error";
import { Loader } from "./components/loader";
import { type FileRouteTypes, routeTree } from "./routeTree.gen";

export function getRouter() {
  const queryClient = new QueryClient();
  const router = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreload: "intent",
    defaultPendingComponent: () => <Loader />,
    defaultErrorComponent: ErrorComponent,
    defaultNotFoundComponent: () => <p>Not found</p>,
  });

  setupRouterSsrQueryIntegration({ queryClient, router });

  return router;
}

declare module "@tanstack/react-router" {
  interface Register {
    router: ReturnType<typeof createRouter>;
  }

  interface StaticDataRouteOption {
    title?: string | TitleFn;
    shortTitle?: string;
    hasParent?: boolean;
    section?: {
      id: FileRouteTypes["id"];
      thumbnail: string;
      dev?: true;
    };
  }
}

type TitleFn = (data: { params?: unknown; search?: unknown }) => string;
