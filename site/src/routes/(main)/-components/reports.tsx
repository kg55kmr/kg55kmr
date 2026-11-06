import type { SetOptional } from "type-fest";
import type { ReportItem, ReportItemWithItems } from "~/data/reports-types";
import { Accordion } from "~/components/accordion";
import { Embed } from "~/components/embed";
import { Tabs } from "~/components/tabs";

type Props = {
  data: ReportItemWithItems[];
  defaultValue?: string;
  value?: string;
  onValueChange?: (value: string) => void;
  scrollIntoView?: boolean;
};

export function Reports(props: Props) {
  const { data, ...rest } = props;
  return (
    <Tabs orientation="vertical" {...rest}>
      {data.map((item) => (
        <Tabs.Tab
          key={item.title}
          value={item.value ?? item.title}
          title={item.title}
        >
          <Content {...item} />
        </Tabs.Tab>
      ))}
    </Tabs>
  );
}

type ContentProps = Pick<ReportItemWithItems, "href" | "items" | "component">;

function Content(props: ContentProps) {
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
