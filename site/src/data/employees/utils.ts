import type { Employee, Employee2 } from "./types";
import * as R from "rambda";
import { dirAsset } from "~/lib/utils";
import { administration } from "./staff";
import { staff } from "./staff";
import { type Position } from "./types";

export const photoAsset = dirAsset("images/працівники/");

export function define<TPos extends Position>(baseItems: Employee<TPos>[]) {
  const items2 = baseItems.map(transform);
  const byPost = R.pipe(
    items2,
    R.filter((v) => v.position !== undefined),
    R.groupBy((v) => v.position as Position),
  );

  const byPositionFn = (post: Position): Employee2<TPos>[] =>
    byPost[post] ?? [];
  const ts = staff.map((e) => {
    const positions = Array.isArray(e.position)
      ? e.position.flatMap(byPositionFn)
      : byPositionFn(e.position);
    return {
      ...e,
      positions,
    };
  });

  return {
    byPosition: byPositionFn,
    teachingStaff: ts,
    admin: administration.flatMap(byPositionFn),
    director: byPositionFn("директор")[0],
  };
}

function transform<TPos extends Position>(e: Employee<TPos>): Employee2<TPos> {
  const [surname, firstName, patronymic] = e.name.split(" ");
  const postPrint = e.position[0].toUpperCase() + e.position.slice(1);

  return {
    ...e,
    image: photoAsset(e.image),
    image2: e.image2 ? photoAsset(e.image2) : undefined,
    initials: `${surname} ${firstName[0]}. ${patronymic[0]}.`,
    postPrint,
  };
}
