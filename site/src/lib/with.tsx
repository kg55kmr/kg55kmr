import { type FC, Suspense } from "react";
import { Loader } from "~/components/loader";

export function withSuspense<P extends object>(Component: FC<P>) {
  return function WithSuspense(props: P) {
    return (
      <Suspense fallback={<Loader />}>
        <Component {...props} />
      </Suspense>
    );
  };
}
