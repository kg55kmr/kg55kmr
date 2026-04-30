import type { ReactNode } from "react";
import { Accordion as AccordionPrimitive } from "@base-ui/react/accordion";
import { ChevronUp } from "lucide-react";
import { cn } from "~/lib/utils";

type Props = {
  defaultValue?: string;
  value?: string;
  onValueChange?: (value: string) => void;
  className?: string;
  children: ReactNode;
};

function Accordion(props: Props) {
  const value = props.value ? [props.value] : undefined;
  const defaultValue = props.defaultValue ? [props.defaultValue] : undefined;
  return (
    <AccordionPrimitive.Root
      multiple={false}
      defaultValue={defaultValue}
      value={value}
      onValueChange={(v) => {
        props.onValueChange?.(v.at(0) ?? "");
      }}
      className={cn("flex w-full flex-col", props.className)}
    >
      {props.children}
    </AccordionPrimitive.Root>
  );
}

type ItemProps = {
  title: ReactNode;
  id?: string;
  children: ReactNode;
  className?: string;
};

function AccordionItem(props: ItemProps) {
  return (
    <AccordionPrimitive.Item
      value={props.id}
      className="border-x border-b border-gray-300 first:border-t"
    >
      <AccordionPrimitive.Header>
        <AccordionPrimitive.Trigger className="group flex w-full cursor-pointer justify-between border-gray-300 bg-gray-50 p-2 text-left hover:bg-gray-100 data-panel-open:border-b">
          <div className="flex flex-wrap gap-2">{props.title}</div>
          <ChevronUp className="shrink-0 transition-transform duration-300 not-group-data-panel-open:rotate-180" />
        </AccordionPrimitive.Trigger>
      </AccordionPrimitive.Header>
      <AccordionPrimitive.Panel className="h-(--accordion-panel-height) overflow-hidden transition-[height] data-ending-style:h-0 data-starting-style:h-0">
        <div className={cn("p-2", props.className)}>{props.children}</div>
      </AccordionPrimitive.Panel>
    </AccordionPrimitive.Item>
  );
}

Accordion.Item = AccordionItem;

export { Accordion };
