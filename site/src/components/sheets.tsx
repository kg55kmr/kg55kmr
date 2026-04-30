import type { Sheet, SheetCell } from "~/server/sheets";
import { useGoogleSheets } from "~/hooks/use-queries";
import { cn } from "~/lib/utils";
import { ClientOnlySuspense } from "./client-only-suspense";
import { Loader } from "./loader";
import { Tabs } from "./tabs";

export type SheetItem =
  | {
      title: string;
      items: SheetItem[];
    }
  | { title: string; sheetId: string };

type CellStyleFn = { cellStyleFn?: (cell: SheetCell) => string | undefined };

export function Sheet(props: { sheetId: string } & CellStyleFn) {
  const data = useGoogleSheets(props.sheetId);
  const cellStyleFn = props.cellStyleFn || defaultCellStyle;
  return (
    <Tabs defaultValue={data[0].title}>
      {data.map((sheet) => {
        return (
          <Tabs.Tab key={sheet.title} title={sheet.title} id={sheet.title}>
            <SheetTable rows={sheet.rows} cellStyleFn={cellStyleFn} />
          </Tabs.Tab>
        );
      })}
    </Tabs>
  );
}

export function Sheets(props: { items: SheetItem[] } & CellStyleFn) {
  return (
    <Tabs defaultValue={props.items[0].title}>
      {props.items.map((v) => (
        <Tabs.Tab key={v.title} id={v.title} title={v.title}>
          {"sheetId" in v ? (
            <ClientOnlySuspense fallback={<Loader />}>
              <Sheet sheetId={v.sheetId} cellStyleFn={props.cellStyleFn} />
            </ClientOnlySuspense>
          ) : (
            <Sheets items={v.items} cellStyleFn={props.cellStyleFn} />
          )}
        </Tabs.Tab>
      ))}
    </Tabs>
  );
}

function SheetTable(props: { rows: SheetCell[][] } & Required<CellStyleFn>) {
  const { rows } = props;
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-center">
        <thead>
          <tr>
            {rows[0].map((v) => (
              <th
                key={v.value}
                rowSpan={v.rowSpan}
                colSpan={v.colSpan}
                className="border border-slate-300 bg-slate-100 p-1"
              >
                {v.value}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.slice(1).map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row
                .filter((v) => v)
                .map((v, colIndex) => (
                  <td
                    key={colIndex}
                    rowSpan={v.rowSpan}
                    colSpan={v.colSpan}
                    className={cn(
                      "border border-slate-300 p-1",
                      props.cellStyleFn?.(v),
                    )}
                  >
                    {v.value}
                  </td>
                ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function defaultCellStyle(cell: SheetCell) {
  return cn(cell.colSpan && cell.colSpan > 2 && "font-bold");
}
