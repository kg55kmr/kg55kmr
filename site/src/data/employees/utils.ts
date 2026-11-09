import type { Employee, Employee2 } from "./types";
import * as R from "rambda";
import { dirAsset } from "~/lib/utils";
import { staff } from "./staff";
import { type Position } from "./types";

export const photoAsset = dirAsset("images/працівники/");

export function define<TName extends string, TPos extends Position>(
  baseItems: Employee<TName, TPos>[],
) {
  const items2 = baseItems.map(transform);
  const byPost = R.pipe(
    items2,
    R.filter((v) => v.position !== undefined),
    R.groupBy((v) => v.position as Position),
  );

  const byName = R.pipe(items2, R.indexBy("name"));

  const byPositionFn = (post: Position): Employee2<TName, TPos>[] =>
    byPost[post] ?? [];
  const teachers = staff.map((e) => {
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
    byName: (name: TName) => byName[name],
    director: byPositionFn("директор")[0],
    teachingStaff: teachers,
  };
}

function transform<TName extends string, TPos extends Position>(
  e: Employee<TName, TPos>,
): Employee2<TName, TPos> {
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
