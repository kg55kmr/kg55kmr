import type { Sheet, SheetCell } from "~/server/sheets";
import { type CSSProperties, type JSX, Suspense } from "react";
import { useGoogleSheets } from "~/hooks/use-queries";
import { cn } from "~/lib/utils";
import { Loader } from "./loader";
import { Tabs } from "./tabs";

export type SheetItem =
  | {
      title: string;
      items: SheetItem[];
    }
  | { title: string; sheetId: string };

export function Sheet(props: { sheetId: string }) {
  const data = useGoogleSheets(props.sheetId);
  return (
    <Tabs defaultValue={data[0].title}>
      {data.map((sheet) => {
        return (
          <Tabs.Tab key={sheet.title} title={sheet.title} id={sheet.title}>
            <SheetTable rows={sheet.rows} />
          </Tabs.Tab>
        );
      })}
    </Tabs>
  );
}

export function Sheets(props: { items: SheetItem[] }) {
  return (
    <Tabs defaultValue={props.items[0].title}>
      {props.items.map((v) => (
        <Tabs.Tab key={v.title} id={v.title} title={v.title}>
          {"sheetId" in v ? (
            <Suspense fallback={<Loader />}>
              <Sheet sheetId={v.sheetId} />
            </Suspense>
          ) : (
            <Sheets items={v.items} />
          )}
        </Tabs.Tab>
      ))}
    </Tabs>
  );
}

function SheetTable(props: { rows: SheetCell[][] }) {
  const { rows } = props;
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-center">
        <tbody>
          {rows.slice(0).map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row
                .filter((c) => c)
                .map((c, colIndex) => (
                  <Cell key={colIndex} data={c} />
                ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Cell(props: { data: SheetCell }) {
  const { data } = props;
  const { bg } = data;

  const CellItem: keyof JSX.IntrinsicElements = data.bold ? "th" : "td";

  const style: CSSProperties = {};

  if (data.bold) {
    style.fontWeight = "bold";
  }

  if (bg.r < 255 || bg.g < 255 || bg.b < 255)
    style.backgroundColor = `rgb(${bg.r} ${bg.g} ${bg.b})`;

  return (
    <CellItem
      rowSpan={data.rowSpan}
      colSpan={data.colSpan}
      style={style}
      className={cn("border border-slate-300 p-1", data.bold && "bg-slate-100")}
    >
      {data.value}
    </CellItem>
  );
}
