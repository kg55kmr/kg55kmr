import type { photoAsset } from "./utils";
import type { InferFilename } from "~/lib/utils";

export type Employee<TName extends string, TPos extends Position> = {
  name: TName;
  position: TPos;
  category?: Category;
  title?: Title;
  image: InferFilename<typeof photoAsset>;
  image2?: InferFilename<typeof photoAsset>;
  blog?: string;
};

export type Employee2<
  TName extends string,
  TPos extends Position = Position,
> = Omit<Employee<TName, TPos>, "image" | "image2"> & {
  initials: string;
  image: string;
  image2: string | undefined;
  postPrint: string;
};

export type Staff = {
  name: string;
  position: Position | Position[];
};

export type Position =
  | "директор"
  | "заступник директора з навчально-виховної роботи"
  | "заступник директора з виховної роботи"
  | "завідувач господарством"
  | "завідувач бібліотеки"
  | "практичний психолог"
  | "соціальний педагог"
  | "педагог-організатор"
  | "учитель початкових класів"
  | "учитель української мови та літератури"
  | "учитель трудового навчання"
  | "учитель англійської мови"
  | "учитель інформатики"
  | "учитель математики"
  | "учитель фізики"
  | "учитель географії та біології"
  | "учитель зарубіжної літератури"
  | "учитель музичного мистецтва"
  | "учитель фізичної культури"
  | "учитель-логопед"
  | "учитель історії"
  | "асистент учителя";

export type Category =
  | "спеціаліст вищої категорії"
  | "спеціаліст другої категорії"
  | "спеціаліст першої категорії"
  | "спеціаліст"
  | "10 тарифний розряд"
  | "11 тарифний розряд";

export type Title = "учитель-методист" | "старший учитель";
