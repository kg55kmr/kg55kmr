import { ClientOnly } from "@tanstack/react-router";
import { type FC, lazy } from "react";
import { Loader } from "./loader";

export function clientOnlyLazy<P extends object>(
  load: () => Promise<{ default: FC<P> }>,
) {
  const Lazy = lazy(load);

  return function ClientOnlyLazy(props: P) {
    return (
      <ClientOnly fallback={<Loader />}>
        <Lazy {...props} />
      </ClientOnly>
    );
  };
}
