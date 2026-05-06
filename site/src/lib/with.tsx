import { ClientOnly } from "@tanstack/react-router";
import { type FC, Suspense } from "react";
import { Loader } from "~/components/loader";

export function withClientOnlySuspense<P extends object>(Component: FC<P>) {
  return function WithClientOnlySuspense(props: P) {
    return (
      <ClientOnly>
        <Suspense fallback={<Loader />}>
          <Component {...props} />
        </Suspense>
      </ClientOnly>
    );
  };
}

export function withClientOnly<P extends object>(Component: FC<P>) {
  return function WithClientOnly(props: P) {
    return (
      <ClientOnly>
        <Component {...props} />
      </ClientOnly>
    );
  };
}
