export const yearsList = ["2024-2025", "2023-2024", "2022-2023"];
export const primaryClasses = [
  "1-А",
  "1-Б",
  "2-А",
  "2-Б",
  "3-А",
  "3-Б",
  "4-А",
  "4-Б",
];

export const classes = ["5-А,Б", "6-А,Б", "7-А,Б", "8-А,Б", "9-А,Б"];

export function getClass(className: string) {
  const classNumber = Number.parseInt(className[0]);
  if (classNumber > 4) return classNumber.toString();
  return className;
}
