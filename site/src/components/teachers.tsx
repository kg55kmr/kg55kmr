import { type FC, Fragment } from "react";
import { type EmployeeName, employees } from "~/data/employees";
import {
  type MethodologicalAssociation,
  methodologicalAssociations,
} from "~/data/employees/methodological-association";
import { useImagesSize } from "~/hooks/use-queries";
import { ClientOnlySuspense } from "./client-only-suspense";
import { Gallery } from "./gallery";
import { ExternalLink } from "./link";
import { Loader } from "./loader";
import { Tabs } from "./tabs";

type ItemData<TContent> = {
  name: EmployeeName;
  content: TContent;
};

type TeachersContentProps<TItem extends ItemData<TContent>, TContent> = {
  data: TItem[];
  render: FC<{ item: TItem }>;
};

export function TeachersContent<TItem extends ItemData<TContent>, TContent>(
  props: TeachersContentProps<TItem, TContent>,
) {
  return (
    <Tabs defaultValue={props.data[0].name}>
      {props.data.map((person) => (
        <Tabs.Tab
          key={person.name}
          title={employees.byName(person.name).initials}
          id={person.name}
        >
          <props.render item={person} />
        </Tabs.Tab>
      ))}
    </Tabs>
  );
}

export function Certificates(props: { ma: MethodologicalAssociation }) {
  const data = methodologicalAssociations[props.ma]
    .filter((v) => v.certificates)
    .map((v) => ({ name: v.name as EmployeeName, content: v.certificates }));
  return (
    <TeachersContent
      data={data}
      render={({ item }) => (
        <ClientOnlySuspense fallback={<Loader />}>
          <LoadCertificates data={item.content ?? []} />
        </ClientOnlySuspense>
      )}
    />
  );
}

function LoadCertificates(props: { data: string[] }) {
  const images = useImagesSize(props.data);
  return <Gallery images={images} />;
}

export type LinksContent = {
  employee: EmployeeName;
  items: { title: string; url: string }[];
}[];

export function LinksContent(props: { data: LinksContent }) {
  return (
    <TeachersContent
      data={props.data.map((v) => ({ name: v.employee, content: v.items }))}
      render={({ item }) => (
        <ul className="ml-8 list-disc">
          {item.content
            .toSorted((a, b) => a.title.localeCompare(b.title))
            .map((v) => (
              <li key={v.url}>
                <ExternalLink href={v.url}>{v.title}</ExternalLink>
              </li>
            ))}
        </ul>
      )}
    />
  );
}

export function Members(props: { ma: MethodologicalAssociation }) {
  return (
    <div className="font-philosopher grid grid-cols-2 place-items-center gap-y-5 text-center text-lg">
      {methodologicalAssociations[props.ma].map((person) => {
        return (
          <Fragment key={person.name}>
            <div>
              <img src={person.image} className="w-40" />
            </div>
            <div>
              <div className="font-bold text-blue-800">{person.name}</div>
              <div>{person.post}</div>
              <div>{person.rank}</div>
            </div>
          </Fragment>
        );
      })}
    </div>
  );
}

export function WorkReport(props: { data: Record<string, FC> }) {
  const items = Object.entries(props.data)
    .toReversed()
    .map(([path, Content]) => (
      <Tabs.Tab key={path} title={`${getTitle(path)} н.р.`} id={path}>
        <Content />
      </Tabs.Tab>
    ));

  return <Tabs>{items}</Tabs>;
}

function getTitle(path: string) {
  return path.split("/").at(-1)?.split(".")[0];
}
