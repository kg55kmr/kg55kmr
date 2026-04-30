import { Tabs as TabsPrimitive } from "@base-ui/react/tabs";
import { type ReactNode, Children, isValidElement } from "react";
import { cn } from "~/lib/utils";
import { Accordion } from "./accordion";
import { Responsive } from "./responsive";

type TabsProps = {
  orientation?: Orientation;
  defaultValue?: string;
  value?: string;
  onValueChange?: (value: string) => void;
  className?: string;
  listClassName?: string;
  children: ReactNode;
};

type TabProps = {
  title: ReactNode;
  id: string;
  children: ReactNode;
  className?: string;
};

type Orientation = "horizontal" | "vertical";

function Tabs(props: TabsProps) {
  const items = Children.toArray(props.children)
    .map((item) => {
      if (!isValidElement<TabProps>(item)) return null;
      return item.props;
    })
    .filter((v): v is NonNullable<typeof v> => v !== null);

  const orientation = props.orientation ?? "horizontal";

  return (
    <Responsive
      when="sm"
      render={<Desktop {...props} items={items} orientation={orientation} />}
      fallback={<Mobile items={items} />}
    />
  );
}

function Desktop(props: TabsProps & { items: TabProps[] }) {
  return (
    <TabsPrimitive.Root
      orientation={props.orientation}
      defaultValue={props.defaultValue}
      value={props.value}
      onValueChange={(v) => props.onValueChange?.(v)}
      className={cn(
        props.orientation === "vertical" && "grid grid-cols-[auto_1fr] gap-4",
        props.className,
      )}
    >
      <TabsPrimitive.List
        className={cn(
          props.orientation === "horizontal" && "flex flex-wrap gap-x-1 py-2",
          props.orientation === "vertical" && "flex flex-col gap-y-1",
          props.listClassName,
        )}
      >
        {props.items.map((item) => (
          <TabsPrimitive.Tab
            key={item.id}
            value={item.id}
            className={cn(
              "flex cursor-pointer rounded-md border border-transparent bg-transparent px-4 py-1 text-left select-none",
              "hover:border-slate-500 hover:bg-slate-200 data-active:border-blue-500 data-active:bg-blue-200",
              item.className,
            )}
          >
            {item.title}
          </TabsPrimitive.Tab>
        ))}
      </TabsPrimitive.List>
      {props.items.map((item) => (
        <TabsPrimitive.Panel
          key={item.id}
          value={item.id}
          className="w-full rounded-sm border border-slate-300 p-4"
        >
          {item.children}
        </TabsPrimitive.Panel>
      ))}
    </TabsPrimitive.Root>
  );
}

// TODO: add controlled component support

function Mobile(props: { items: TabProps[] }) {
  return (
    <Accordion>
      {props.items.map((item) => (
        <Accordion.Item key={item.id} title={item.title} id={item.id}>
          {item.children}
        </Accordion.Item>
      ))}
    </Accordion>
  );
}

function Tab(props: TabProps) {
  return props.children;
}

Tabs.Tab = Tab;

export { Tabs };
