import { SearchX } from "lucide-react";

export function NoResults() {
  return (
    <div className="absolute flex w-full justify-center opacity-15">
      <SearchX className="size-40" />
    </div>
  );
}
