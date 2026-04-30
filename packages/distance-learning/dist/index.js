#!/usr/bin/env node
function getLessonDate(title, yearsString) {
  const years = yearsString.split("-").map((v) => Number.parseInt(v));
  const itemDate = title.slice(0, 5);
  const [day, month] = itemDate.split(".").map((v) => Number.parseInt(v));
  const year = month < 9 ? years[1] : years[0];
  return new Date(year, month - 1, day);
}

export { getLessonDate };
