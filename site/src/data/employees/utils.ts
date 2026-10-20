import * as R from "rambda";
import { type InferFilename, dirAsset } from "~/lib/utils";

const photoAsset = dirAsset("images/працівники/");

export function define<TPost extends Post>(baseItems: Employee<TPost>[]) {
  const items2 = baseItems.map(transform);
  const byPost = R.pipe(
    items2,
    R.filter((v) => v.post !== undefined),
    R.groupBy((v) => v.post as Post),
  );

  const byPostFn = (post: Post): Employee2<TPost>[] => byPost[post] ?? [];
  const admin = employeesList.адміністрація.flatMap((v) => byPostFn(v));

  return {
    byPost: byPostFn,
    teachingStaff: items2.filter((e) => e.post !== "завідувач господарством"),
    admin,
    director: byPostFn("директор")[0],
  };
}

function transform<TPost extends Post>(e: Employee<TPost>): Employee2<TPost> {
  const [surname, firstName, patronymic] = e.name.split(" ");
  const postPrint = e.post[0].toUpperCase() + e.post.slice(1);

  return {
    ...e,
    image: photoAsset(e.image),
    image2: e.image2 ? photoAsset(e.image2) : undefined,
    initials: `${surname} ${firstName[0]}. ${patronymic[0]}.`,
    postPrint,
  };
}

const employeesList: Record<Posts, Post[]> = {
  адміністрація: [
    "директор",
    "заступник директора з навчально-виховної роботи",
    "заступник директора з виховної роботи",
    "завідувач господарством",
    "соціальний педагог",
    "практичний психолог",
    "учитель-логопед",
    "педагог-організатор",
  ],
  "початкові класи": ["учитель початкових класів"],
};

type Employee<TPost extends Post> = {
  name: string;
  post: TPost;
  rank?: string;
  image: InferFilename<typeof photoAsset>;
  image2?: InferFilename<typeof photoAsset>;
  blog?: string;
};

type Employee2<TPost extends Post> = Omit<
  Employee<TPost>,
  "image" | "image2"
> & {
  initials: string;
  image: string;
  image2: string | undefined;
  postPrint: string;
};

export type Posts = "адміністрація" | "початкові класи";

export type Post =
  | "директор"
  | "заступник директора з навчально-виховної роботи"
  | "заступник директора з виховної роботи"
  | "завідувач господарством"
  | "бібліотекар"
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
  | "асистент вчителя";
