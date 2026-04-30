import * as R from "rambda";
import { type InferFilename } from "~/lib/utils";
import { dirAsset } from "~/lib/utils";

const photoAsset = dirAsset("images/працівники/");

export const employees = define([
  {
    name: "Горевич Людмила Володимирівна",
    post: "Директор Криворізької гімназії №55 КМР",
    rank: 'спеціаліст вищої категорії, "учитель-методист"',
    image: "горевич.jpg",
    isAdmin: true,
    job: "директор",
    isTech: false,
    // blog: "http://krschool55.wixsite.com/gorevichlv",
  },
  {
    name: "Лівак Вікторія Вікторівна",
    post: "Заступник директора з навчально-виховної роботи Криворізької гімназії №55 КМР",
    rank: 'спеціаліст вищої категорії, "старший учитель"',
    image: "лівак.jpg",
    isAdmin: true,
    job: "ЗДНВР",
    // blog: "http://livakviktoria.blogspot.com/p/blog-page_12.html",
  },
  {
    name: "Алтинбаєва Лариса Миколаївна",
    post: "Заступник директора з виховної роботи Криворізької гімназії №55 КМР",
    rank: 'спеціаліст вищої категорії, "учитель-методист"',
    image: "алтинбаєва.jpg",
    image2: "алтинбаєва-2.jpg",
    isAdmin: true,
    job: "ЗДВР",
    blog: "http://altinbaeva.blogspot.com/p/blog-page.html",
  },
  {
    name: "Шуть Клавдія Сергіївна",
    post: "Завідувач господарством Криворізької гімназії №55 КМР",
    image: "шуть.jpg",
    job: "завідувач-господарством",
    isAdmin: true,
    isTech: true,
  },
  {
    name: "Тельвак Наталія Василівна",
    post: "Соціальний педагог",
    image: "тельвак.jpg",
    isAdmin: true,
    job: "соціальний-педагог",
  },
  {
    name: "Гнатюк Андрій Степанович",
    post: "Практичний психолог",
    image: "гнатюк.jpg",
    isAdmin: true,
    job: "практичний-психолог",
  },
  //   {
  //     name: "Гудзовський Ігор Русланович",
  //     post: "Педагог-організатор Криворізької гімназії №55 КМР",
  // rank: "10-й тарифний розряд",
  //     image: "",
  //   },
  {
    name: "Соловйова Наталія Аркадівна",
    post: "Вчитель-логопед Криворізької гімназії №55 КМР",
    rank: "спеціаліст другої категорії",
    blog: "https://logopedschool55kr.blogspot.com",
    image: "соловйова.jpg",
    job: "логопед",
  },
  // {
  //   name: "",
  //   post: "Бібліотекар Криворізької гімназії №55 КМР",
  //   rank: "9-й тарифний розряд",
  //   image: ".jpg",
  //   job: "librarian",
  // },
  {
    name: "Мугак Ніна Іванівна",
    post: "Учитель початкових класів",
    rank: 'спеціаліст вищої категорії, "учитель-методист"',
    image: "мугак.jpg",
  },
  {
    name: "Довмат Ганна Василівна",
    post: "Учитель початкових класів",
    rank: 'спеціаліст першої категорії, "старший учитель"',
    image: "довмат.jpg",
    // blog: "http://annadovmat.blogspot.com/p/blog-page_23.html",
  },
  {
    name: "Половинкина Олена Адамівна",
    post: "Учитель початкових класів",
    rank: "спеціаліст першої категорії",
    image: "половинкина.jpg",
  },
  {
    name: "Старікова Наталя Анатоліївна",
    post: "Учитель початкових класів",
    rank: 'спеціаліст вищої категорії, "учитель-методист"',
    image: "старікова.jpg",
    // blog: "http://starikova1970.blogspot.com/p/blog-page.html",
  },
  {
    name: "Лисенко Олена Борисівна",
    post: "Учитель початкових класів",
    rank: "спеціаліст вищої категорії",
    image: "лисенко.jpg",
  },
  {
    name: "Фербей Вікторія Миколаївна",
    post: "Учитель початкових класів",
    rank: "спеціаліст першої категорії",
    image: "фербей.jpg",
  },
  {
    name: "Заярнюк Світлана Анатоліївна",
    post: "Учитель початкових класів",
    rank: "спеціаліст першої категорії",
    image: "заярнюк.jpg",
    certificates: ["заярнюк-1.jpg"],
  },
  {
    name: "Чудна Наталія Володимирівна",
    post: "Учитель початкових класів",
    rank: "спеціаліст вищої категорії",
    image: "чудна.jpg",
  },
  {
    name: "Стрембицька Леся Анатоліївна",
    post: "Учитель української мови та літератури",
    rank: 'спеціаліст вищої категорії, "старший учитель"',
    image: "стрембицька.jpg",
    // blog: "https://ukrlangstremb.blogspot.com/",
  },
  {
    name: "Добровольська Валерія Едуардівна",
    post: "Учитель української мови та літератури",
    rank: "спеціаліст вищої категорії",
    image: "добровольська.jpg",
  },
  {
    name: "Капуста Валентина Миколаївна",
    post: "Учитель трудового навчання",
    rank: "11 тарифний розряд",
    image: "капуста.jpg",
  },
  {
    name: "Таран Надія Вадимівна",
    post: "Учитель англійської мови",
    rank: "спеціаліст другої категорії",
    image: "таран.jpg",
  },
  {
    name: "Руда Дар'я Валеріївна",
    post: "Учитель англійської мови",
    rank: "спеціаліст",
    image: "руда.jpg",
  },
  {
    name: "Гнечко Єлизавета Олексіївна",
    post: "Учитель англійської мови",
    image: "гнечко.jpg",
  },
  // {
  //   name: "Кузьменко Юлія Григорівна",
  //   post: "Учитель математики",
  //   rank: "спеціаліст другої категорії",
  //   image: "кузьменко.jpg",
  // },
  {
    name: "Марченко Наталя Євгенівна",
    post: "Учитель математики",
    image: "марченко.jpg",
  },
  {
    name: "Кмітевич Олексій Володимирович",
    post: "Учитель фізики",
    rank: "спеціаліст першої категорії",
    image: "кмітевич.jpg",
  },
  {
    name: "Артемюк Наталія Анатоліївна",
    post: "Учитель інформатики",
    rank: "спеціаліст вищої категорії",
    blog: "https://nataliartemiuk2016.blogspot.com/",
    image: "артемюк.jpg",
  },
  {
    name: "Балагуряк Єлізавета Юріївна",
    post: "Учитель інформатики",
    rank: "спеціаліст другої категорії",
    image: "балагуряк.jpg",
  },
  {
    name: "Малютіна Людмила Миколаївна",
    post: "Учитель географія та біології",
    rank: "спеціаліст вищої категорії",
    image: "малютіна.jpg",
  },
  // {
  //   name: "Драєнко Ольга Іванівна",
  //   post: "Учитель географії",
  //   rank: "спеціаліст другої категорії",
  //   image: "драєнко.jpg",
  // },
  {
    name: "Лівак Ірина Олегівна",
    post: "Асистент вчителя",
    image: "лівак-і-о.jpg",
  },
  {
    name: "Рябоконь Наталя Олександрівна",
    post: "Учитель зарубіжної літератури",
    rank: 'спеціаліст вищої категорії, "старший вчитель"',
    image: "рябоконь.jpg",
  },
  {
    name: "Рзаєва Наталія Олександрівна",
    post: "Учитель історії",
    rank: "спеціаліст вищої категорії",
    image: "рзаєва.jpg",
  },
  {
    name: "Дубачинська Наталія Олександрівна",
    post: "Учитель музичного мистецтва",
    rank: "спеціаліст першої категорії",
    image: "дубачинська.jpg",
  },
  {
    name: "Давидов Ігор Іванович",
    post: "Учитель фізичної культури",
    rank: "спеціаліст першої категорії",
    image: "давидов.jpg",
  },
  {
    name: "Лопатін Даниіл Валерійович",
    post: "Учитель фізичної культури",
    image: "лопатін.jpg",
  },
  {
    name: "Масько Євгеній Віталійович",
    post: "Учитель фізичної культури",
    image: "масько.jpg",
  },
]);

// TODO: add check for unknown fields
function define<const T extends EmployeeBase[]>(baseItems: T) {
  const items2 = baseItems.map(withData);
  const byName = R.pipe(
    items2,
    R.groupBy((v) => v.name),
    R.mapObject((v) => v![0]),
  );

  const byJob = R.pipe(
    items2,
    R.filter((v) => v.job !== undefined),
    R.groupBy((v) => v.job!),
  );

  return {
    byName: (name: T[number]["name"]) => byName[name],
    byJob: (job: EmployeeJob) => byJob[job] ?? [],
    teachingStaff: () => items2.filter((v) => !v.isTech),
    admin: () => items2.filter((v) => v.isAdmin),
    director: () => employees.byName("Горевич Людмила Володимирівна"),
  };
}

type EmployeeBase = {
  name: string;
  post: string;
  rank?: string;
  image: InferFilename<typeof photoAsset>;
  image2?: InferFilename<typeof photoAsset>;
  isAdmin?: boolean;
  job?: EmployeeJob;
  isTech?: boolean;
  blog?: string;
};

export type Employee = Omit<
  EmployeeBase,
  "image" | "image2" | "certificates"
> & {
  initials: string;
  image: string;
  image2: string | undefined;
};

export type EmployeeName = Parameters<typeof employees.byName>[0];

export type EmployeeJob =
  | "ЗДНВР"
  | "ЗДВР"
  | "директор"
  | "завідувач-господарством"
  | "бібліотекар"
  | "практичний-психолог"
  | "соціальний-педагог"
  | "логопед"
  | "педагог-організатор";

function withData(e: EmployeeBase): Employee {
  const [surname, firstName, patronymic] = e.name.split(" ");
  return {
    ...e,
    image: photoAsset(e.image),
    image2: e.image2 ? photoAsset(e.image2) : undefined,
    initials: `${surname} ${firstName[0]}. ${patronymic[0]}.`,
  };
}
