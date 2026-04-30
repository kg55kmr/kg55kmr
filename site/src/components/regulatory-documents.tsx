import { Fragment } from "react/jsx-runtime";
import {
  type RegulatoryDocumentSection,
  type RegulatoryDocuments as RegulatoryDocumentsType,
  isItem,
} from "~/data/regulatory-documents/types";
import { ExternalLink } from "./link";
import { Tabs } from "./tabs";

export function RegulatoryDocuments(props: { items: RegulatoryDocumentsType }) {
  if (props.items.length === 1) {
    return <Items section={props.items[0]} />;
  }

  return (
    <Tabs orientation="vertical" defaultValue={props.items[0].section}>
      {props.items.map((section) => (
        <Tabs.Tab
          key={section.section}
          title={section.section}
          id={section.section}
        >
          <Items section={section} />
        </Tabs.Tab>
      ))}
    </Tabs>
  );
}

function Items({ section }: { section: RegulatoryDocumentSection }) {
  if (isItem(section.items))
    return (
      <ul className="ml-8 list-disc">
        {section.items.map((v, i) => (
          <li key={i.toString()}>
            <ExternalLink href={v.url}>{v.title}</ExternalLink>
          </li>
        ))}
      </ul>
    );

  return section.items.map((item) => (
    <Fragment key={item.section}>
      <h1 className="my-4 font-bold first:mt-0">{item.section}</h1>
      <Items section={item} />
    </Fragment>
  ));
}
