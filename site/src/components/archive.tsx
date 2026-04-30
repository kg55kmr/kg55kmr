import type { ReactNode } from "react";
import { Tabs } from "./tabs";

type YearsProps<T> = {
  items: Array<{ k: string; v: T }>;
  children: (value: T) => ReactNode;
};
export function Archive<T>(props: YearsProps<T>) {
  return (
    <Tabs defaultValue={props.items[0].k}>
      {props.items.map(({ k, v }) => (
        <Tabs.Tab key={k} title={k} id={k}>
          {props.children(v)}
        </Tabs.Tab>
      ))}
    </Tabs>
  );
}
