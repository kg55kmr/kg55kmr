import { ClientOnly } from "@tanstack/react-router";
import { type FC, lazy, Suspense } from "react";

export function clientOnlyLazy<P extends object>(
  load: () => Promise<{ default: FC<P> }>,
) {
  const LazyComponent = lazy(load);

  return (props: P) => {
    return (
      <ClientOnly>
        <Suspense>
          <LazyComponent {...props} />
        </Suspense>
      </ClientOnly>
    );
  };
}
