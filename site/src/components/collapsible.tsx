import type { ReactNode } from "react";
import { Collapsible as CollapsiblePrimitive } from "@base-ui/react/collapsible";
import { ChevronRight } from "lucide-react";
import { cn } from "~/lib/utils";

type Props = { title: string; className?: string; children: ReactNode };

export function Collapsible(props: Props) {
  return (
    <CollapsiblePrimitive.Root className={cn("flex flex-col", props.className)}>
      <CollapsiblePrimitive.Trigger className="group flex cursor-pointer items-center gap-1 rounded-sm border border-gray-300 bg-gray-50 px-2 py-1 hover:bg-gray-100 active:bg-blue-200 data-panel-open:border-blue-300 data-panel-open:bg-blue-100">
        <ChevronRight className="transition-all ease-out group-data-panel-open:rotate-90" />
        {props.title}
      </CollapsiblePrimitive.Trigger>
      <CollapsiblePrimitive.Panel className="flex h-(--collapsible-panel-height) flex-col justify-end overflow-hidden text-sm transition-all duration-300 ease-out data-ending-style:h-0 data-starting-style:h-0 [&[hidden]:not([hidden='until-found'])]:hidden">
        {props.children}
      </CollapsiblePrimitive.Panel>
    </CollapsiblePrimitive.Root>
  );
}
