import { compress } from "./compress";
import { convert } from "./convert";

const converted = await convert((p) =>
  process.stdout.write(`converting: ${p}%   \r`),
);
console.log(`converting: done (${converted})        `);

const compressed = await compress((p) =>
  process.stdout.write(`compressing: ${p}%   \r`),
);
console.log(`compressing: done (${compressed})            `);
