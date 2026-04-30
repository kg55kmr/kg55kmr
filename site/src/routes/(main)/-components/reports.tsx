import type { SetOptional } from "type-fest";
import type { ReportItem, ReportItemWithItems } from "~/data/reports-types";
import { Accordion } from "~/components/accordion";
import { Embed } from "~/components/embed";
import { Tabs } from "~/components/tabs";

export function Reports(props: { data: ReportItemWithItems[] }) {
  return (
    <Tabs orientation="vertical" className="lg:grid-cols-[30%_auto]">
      {props.data.map((item) => (
        <Tabs.Tab key={item.title} id={item.title} title={item.title}>
          <Content {...item} />
        </Tabs.Tab>
      ))}
    </Tabs>
  );
}

function Content(
  props: Pick<ReportItemWithItems, "href" | "items" | "component">,
) {
  if (props.href) return <Preview {...props} />;
  if (props.component && !props.items) return <props.component />;
  if (!props.items) return;

  return (
    <Accordion>
      {props.items.map((subItem) => (
        <Accordion.Item
          key={subItem.title}
          title={subItem.title}
          id={subItem.title}
        >
          <Previews {...subItem} />
        </Accordion.Item>
      ))}
    </Accordion>
  );
}

function Previews(props: ReportItemWithItems) {
  if (props.href) return <Preview {...props} />;
  if (props.component) return <props.component />;
  return props.items?.map((item) => <Preview key={item.title} {...item} />);
}

function Preview(props: SetOptional<ReportItem, "title">) {
  if (props.component) return <props.component />;

  return (
    <>
      {props.title && (
        <div className="border border-blue-500 bg-blue-100 text-center font-bold not-first:mt-10">
          {props.title}
        </div>
      )}
      {props.href && <Embed src={props.href} className="w-full" />}
    </>
  );
}
