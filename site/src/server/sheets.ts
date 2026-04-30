import { sheets } from "@googleapis/sheets";
import { serverEnv } from "~/config/env";

export async function getSheetContent(opts: { id: string }): Promise<Sheet[]> {
  const sheetsApi = sheets("v4");

  const { data } = await sheetsApi.spreadsheets.get({
    spreadsheetId: opts.id,
    includeGridData: true,
    key: serverEnv.GOOGLE_API_KEY,
  });

  if (!data.sheets) throw new Error(`No sheets in ${opts.id}`);

  const response = data.sheets.map((sheet) => {
    const title = sheet.properties?.title;
    if (!title) throw new Error(`No title in ${opts.id}`);

    const rowData = sheet.data?.[0].rowData;
    if (!rowData) throw new Error(`No rowData in ${opts.id}`);

    const merges = sheet.merges;

    const spans = merges?.reduce((a, b) => {
      const key = `${b.startRowIndex}${b.startColumnIndex}`;

      const rowSpan = (b.endRowIndex ?? 0) - (b.startRowIndex ?? 0);
      const colSpan = (b.endColumnIndex ?? 0) - (b.startColumnIndex ?? 0);
      a.set(key, { rowSpan, colSpan });

      return a;
    }, new Map<string, { rowSpan: number; colSpan: number }>());

    const rows: SheetCell[][] = [];
    const skip = new Map<string, number>();

    for (let rowIndex = 0; rowIndex < rowData.length; rowIndex++) {
      const row = rowData[rowIndex].values;
      if (!row) continue;

      for (let colIndex = 0; colIndex < row.length; ) {
        const skipColSpan = skip.get(`${rowIndex}${colIndex}`);
        if (skipColSpan) {
          colIndex += skipColSpan;
          continue;
        }

        const key = `${rowIndex}${colIndex}`;
        const spanItem = spans?.get(key);

        if (!rows[rowIndex]) rows[rowIndex] = [];

        const userEnteredValue = row[colIndex].userEnteredValue;
        const value =
          userEnteredValue?.stringValue ??
          userEnteredValue?.numberValue?.toString() ??
          "";

        if (!value) {
          colIndex++;
          continue;
        }

        rows[rowIndex][colIndex] = { value, ...spanItem };

        if (spanItem) {
          if (spanItem.rowSpan > 1) {
            for (let r = rowIndex + 1; r < rowIndex + spanItem.rowSpan; r++)
              skip.set(`${r}${colIndex}`, spanItem.colSpan);
          }

          colIndex += spanItem.colSpan;
          continue;
        }

        colIndex++;
      }
    }

    return { title, rows };
  });

  return response;
}

export type Sheet = {
  title: string;
  rows: SheetCell[][];
};

export type SheetCell = {
  value: string;
  rowSpan?: number;
  colSpan?: number;
};
