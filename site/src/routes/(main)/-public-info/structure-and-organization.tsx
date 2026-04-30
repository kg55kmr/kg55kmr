import { Fragment } from "react";
import { Accordion } from "~/components/accordion";
import { Embed } from "~/components/embed";
import { ExternalLink } from "~/components/link";
import { employees } from "~/data/employees";
import { structureAndOrganization } from "~/data/structure-and-organization";
import { asset } from "~/lib/utils";

export function StructureAndOrganization() {
  return (
    <>
      <h1 className="mb-5 text-center text-2xl font-bold">
        Адміністрація закладу
      </h1>
      <Accordion className="mb-5">
        {structureAndOrganization.flatMap((v) => {
          const employeesList = employees.byJob(v.id);
          return employeesList.map((e) => (
            <Accordion.Item
              key={e.name}
              title={e.name}
              className="font-roboto-condensed"
            >
              <div>
                <img src={e.image} className="float-left mr-4 w-52" />
              </div>
              <div>
                <div className="font-bold">{e.post}</div>
                <div className="font-bold text-[#a716a7]">{e.name}</div>
                <div className="mt-7">
                  Контактна інформація:
                  <ul>
                    <li>
                      <ExternalLink href="mailto:kg55kmr@ukr.net">
                        kg55kmr@ukr.net
                      </ExternalLink>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="clear-left mb-20">
                {v.duty.map((d) => (
                  <Fragment key={d.title}>
                    <p className="py-4 font-bold">{d.title}</p>
                    <ul className="list-disc pl-8">
                      {d.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </Fragment>
                ))}
              </div>
            </Accordion.Item>
          ));
        })}
      </Accordion>
      <h1 className="text-center text-2xl font-bold">
        Структура органів управління відповідно до Статуту закладу
      </h1>
      <img
        src={asset("images/структура-органів-управління.jpg")}
        className="m-auto w-202"
      />
      <br />
      <h1 className="mb-5 text-center text-lg font-bold">
        Витяг зі статуту КГ №55 КМР
      </h1>
      <Embed src="https://drive.google.com/file/d/1qfxj5aP4t9g5_EPtMZBSclm0w0_WzSkN/preview" />
    </>
  );
}
