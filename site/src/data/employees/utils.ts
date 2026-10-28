import * as R from "rambda";
import { type InferFilename, dirAsset } from "~/lib/utils";
import {
  type Category,
  type Position,
  type Title,
  administration,
} from "./staff";
import { staff } from "./staff";

const photoAsset = dirAsset("images/працівники/");

export function define<TPos extends Position>(baseItems: Employee<TPos>[]) {
  const items2 = baseItems.map(transform);
  const byPost = R.pipe(
    items2,
    R.filter((v) => v.position !== undefined),
    R.groupBy((v) => v.position as Position),
  );

  const byPositionFn = (post: Position): Employee2<TPos>[] =>
    byPost[post] ?? [];
  const ts = staff.map((e) => ({
    name: e.name,
    positions: Array.isArray(e.position)
      ? e.position.flatMap(byPositionFn)
      : byPositionFn(e.position),
  }));

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

type Employee<TPos extends Position> = {
  name: string;
  position: TPos;
  category?: Category;
  title?: Title;
  image: InferFilename<typeof photoAsset>;
  image2?: InferFilename<typeof photoAsset>;
  blog?: string;
};

export type Employee2<TPos extends Position = Position> = Omit<
  Employee<TPos>,
  "image" | "image2"
> & {
  initials: string;
  image: string;
  image2: string | undefined;
  postPrint: string;
};

export type Staff = {
  name: string;
  position: Position | Position[];
};
