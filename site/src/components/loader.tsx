import { LoaderCircle } from "lucide-react";
import { cn } from "~/lib/utils";

export function Loader(props: { className?: string }) {
  return (
    <div className={cn("flex items-center justify-center", props.className)}>
      <LoaderCircle className="m-5 size-12 animate-spin" />
    </div>
  );
}
