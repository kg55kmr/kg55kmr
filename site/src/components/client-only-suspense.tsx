import { ClientOnly } from "@tanstack/react-router";
import { type ReactNode, Suspense } from "react";
import { Loader } from "./loader";

type Props = {
  children: ReactNode;
  fallback?: ReactNode;
};

export function ClientOnlySuspense(props: Props) {
  const fallback = props.fallback ?? <Loader />;
  return (
    <ClientOnly fallback={fallback}>
      <Suspense fallback={fallback}>{props.children}</Suspense>
    </ClientOnly>
  );
}
