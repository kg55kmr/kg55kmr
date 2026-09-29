import { createFileRoute } from "@tanstack/react-router";
import { ExternalLink } from "~/components/link";
import { Tabs } from "~/components/tabs";

export const Route = createFileRoute("/(main)/textbooks")({
  component: RouteComponent,
  staticData: { title: "Електронні підручники" },
});

const textbooks: Class[] = [
  {
    className: "1 клас",
    textbooks: [
      {
        title: "Українська мова Буквар (у 2-х частинах)",
        author: "Пономарьова К.І.",
        url: [
          {
            url: "https://e.issuu.com/embed.html?d=bukvar-1-klas-ponomariova-2018-1&pageLayout=singlePage&u=kreidaros",
            text: "Частина 1",
          },
          {
            url: "https://e.issuu.com/embed.html?d=bukvar-1-klas-ponomariova-2018-2&pageLayout=singlePage&u=kreidaros",
            text: "Частина 2",
          },
        ],
      }, // TODO: find book
      // {
      //   title: "Англійська мова",
      //   author: "Будна Т.Б.",
      //   url: [
      //     {
      //       url: "https://e.issuu.com/embed.html?d=anglijska-mova-1-klas-budna-2018&pageLayout=singlePage&u=kreidaros",
      //     },
      //   ],
      // },
      {
        title: "Математика",
        author: "Скворцова С.О.",
        url: "https://e.issuu.com/embed.html?d=matematyka-1-klas-skvorcova-2018&pageLayout=singlePage&u=kreidaros",
      },
      {
        title: "Я досліджую світ (у 2-х частинах)",
        author: "Гільберг Т.Г.",
        url: "https://shkola.in.ua/2930-ya-doslidzhuyu-svit-1-klas-gil-berg-2023.html",
      },
      {
        title: "Мистецтво",
        author: "Масол Л.М.",
        url: "https://drive.google.com/file/d/1vLJNDbDyq11lPg3DbFypInaYkad-ahXK/view",
      },
    ],
  },
  {
    className: "2 клас",
    textbooks: [
      {
        title: "Українська мова та читання (у 2-х частинах)",
        author: "Пономарьова К.І.; Савченко О. Я.",
        url: [
          {
            url: "https://e.issuu.com/embed.html?d=ukrajinska-mova-2-klas-ponomarova-2019-1&pageLayout=singlePage&u=kreidaros",
            text: "Частина 1",
          },
          {
            url: "https://e.issuu.com/embed.html?d=ukrajinska-mova-2-klas-savchenko-2019-2&pageLayout=singlePage&u=kreidaros",
            text: "Частина 2",
          },
        ],
      }, // TODO: find book
      // {
      //   title: "Англійська мова",
      //   author: "Будна Т.Б.",
      //   url: "https://lib.imzo.gov.ua/wa-data/public/site/books2/pidruchnyky-2-klas-2019/03-inozemna-mova-angliyska-mova-2-klas/angliyska-2-kl-budna-bogdan/angliyska-mova-2-kl-budna-tb.pdf",
      // },
      {
        title: "Математика",
        author: "Лишенко Г.П.",
        url: "https://e.issuu.com/embed.html?d=matematika-2-klas-lyshenko-2019&pageLayout=singlePage&u=kreidaros",
      },
      {
        title: "Я досліджую світ (у 2-х частинах)",
        author: "Гільберг Т.Г.",
        url: [
          {
            url: "https://e.issuu.com/embed.html?d=ya-doslidzhuju-svit-2-klas-hilberh-2024-1&pageLayout=singlePage&u=kreidaros",
            text: "Частина 1",
          },
          {
            url: "https://e.issuu.com/embed.html?d=ya-doslidzhuju-svit-2-klas-hilberh-2024-2&pageLayout=singlePage&u=kreidaros",
            text: "Частина 2",
          },
        ],
      },
      {
        title: "Мистецтво",
        author: "Масол Л.М.",
        url: "https://e.issuu.com/embed.html?d=mystetstvo-2-klas-masol-2024&pageLayout=singlePage&u=kreidaros",
      },
    ],
  },
  {
    className: "3 клас",
    textbooks: [
      {
        title: "Українська мова та читання (у 2-х частинах)",
        author: "Пономарьова К.І.; Савченко О.Я.",
        url: [
          {
            url: "https://e.issuu.com/embed.html?d=ukrajinska-mova-3-klas-ponomariova-2020-1&pageLayout=singlePage&u=kreidaros",
            text: "Частина 1",
          },
          {
            url: "https://e.issuu.com/embed.html?d=ukrajinska-mova-3-klas-savchenko-2020-2&pageLayout=singlePage&u=kreidaros",
            text: "Частина 2",
          },
        ],
      },
      {
        // TODO: додати аудіосупровід
        title: "Англійська мова",
        author: "Будна Т.Б.",
        url: "https://e.issuu.com/embed.html?d=anhlijska-mova-3-klas-budna-2020&pageLayout=singlePage&u=kreidaros",
      },
      {
        title: "Математика (у 2-х частинах)",
        author: "Лишенко Г.П.",
        url: [
          {
            url: "https://e.issuu.com/embed.html?d=matematyka-3-klas-lyshenko-2020-1&pageLayout=singlePage&u=kreidaros",
            text: "Частина 1",
          },
          {
            url: "https://e.issuu.com/embed.html?d=matematyka-3-klas-lyshenko-2020-2&pageLayout=singlePage&u=kreidaros",
            text: "Частина 2",
          },
        ],
      },
      {
        title: "Я досліджую світ (у 2-х частинах)",
        author: "Гільберг Т.Г",
        url: [
          {
            url: "https://e.issuu.com/embed.html?d=ja-doslidzhuju-svit-3-klas-hilberh-2020-1&pageLayout=singlePage&u=kreidaros",
            text: "Частина 1",
          },
          {
            url: "https://e.issuu.com/embed.html?d=ja-doslidzhuju-svit-3-klas-hilberh-2020-2&pageLayout=singlePage&u=kreidaros",
            text: "Частина 2",
          },
        ],
      },
      {
        title: "Мистецтво",
        author: "Масол Л.М.",
        url: "https://e.issuu.com/embed.html?d=mystetstvo-3-klas-masol-2020&pageLayout=singlePage&u=kreidaros",
      },
    ],
  },
  {
    className: "4 клас",
    textbooks: [
      {
        title: "Українська мова (у 2-х частинах)",
        author: "Пономарьова К.І.",
        url: [
          {
            url: "https://drive.google.com/file/d/1SnL_q5FaJLingub9SWaXWOzUZGcpNFDB/preview",
            text: "Частина 1",
          },
          {
            url: "https://drive.google.com/file/d/1tEsprYOvmNumHMVnqEP1dl2effJcPPw1/preview",
            text: "Частина 2",
          },
        ],
      },
      {
        title: "Англійська",
        author: "Будна Т.В.",
        url: [
          {
            url: "https://drive.google.com/file/d/16A1YcWKcsjBV4RCZfa_6kIM48c3zkFcD/preview",
          },
          {
            url: "https://edodatok.com/upload/iblock/4fb/8wfl94xvac19bnn4kc6zjz4svw6j7tcp/Audio.zip",
            text: "Аудіосупровід",
          },
        ],
      },
      {
        title: "Математика (у 2-х частинах)",
        author: "Листопад Н.П.",
        url: [
          {
            url: "https://drive.google.com/file/d/1PaKOEotM-d0cDXe3ElJFYU0y7tvg6-dh/preview",
            text: "Частина 1",
          },
          {
            url: "https://drive.google.com/file/d/1YlbWe4RO9sY8iQdrQrH5CED8H1N2V6ht/preview",
            text: "Частина 2",
          },
        ],
      },
      {
        title: "Я досліджую світ (у 2-х частинах)",
        author: "Гільберг Т.Г.",
        url: [
          {
            url: "https://drive.google.com/file/d/1u7-rmhbJPs6oz4tVD8ro_rhY4allYKVy/preview",
            text: "Частина 1",
          },
          {
            url: "https://drive.google.com/file/d/1shUlr5b4HufeA-_BqEj-oIL28nm0CI-j/preview",
            text: "Частина 2",
          },
        ],
      },
      {
        title: "Інформатика",
        author: "Коршунова О.В.",
        url: "https://www.calameo.com/read/006191963b7b6d75f2599",
      },
      {
        title: "Дизайн і технології",
        author: "Агєєва О.В.",
        url: "https://drive.google.com/file/d/1kMoGTXIPcWyWriA06y1chMeEeoX32ce-/preview",
      },
    ],
  },
  {
    className: "5 клас",
    textbooks: [
      {
        title: "Здоров'я, безпека та добробут",
        author: "Воронцова Т.В.",
        url: "https://e.issuu.com/embed.html?d=5_zdorovia_voroncova_2022&pageLayout=singlePage&u=stankobog",
      },
      {
        title: "Українська мова",
        author: "Голуб Н.Б., Горошкіна О.М.",
        url: "https://e.issuu.com/embed.html?d=ukrainska-mova-5-klas-holub-2022&pageLayout=singlePage&u=kreidaros",
      },
      {
        title: "Українська література",
        author: "Яценко Т.О.",
        url: "https://e.issuu.com/embed.html?d=5_ukrlit_yacenko_2022&pageLayout=singlePage&u=stankobog",
      },
      {
        title: "Зарубіжна література",
        author: "Ніколенко О.М, Мацевко-Бакерська Л.В.",
        url: "https://e.issuu.com/embed.html?d=zarubizhna-literatura-5-klas-nikolenko-2022&pageLayout=singlePage&u=kreidaros",
      },
      {
        title: "Англійська мова (5-й рік навчання)",
        author: "Карпюк О.Д., Карпюк К.Т.",
        url: [
          {
            url: "https://e.issuu.com/embed.html?d=5_english_karpyuk&pageLayout=singlePage&u=stankobog",
          },
          {
            url: "https://drive.google.com/drive/folders/1LZplVUyeYI9EbuTi0sRVxldEN7kJvUHa",
            text: "Аудіосупровід",
          },
        ],
      },
      {
        title: "Математика",
        author: "Істер О.С.",
        url: "https://e.issuu.com/embed.html?d=matematyka-5-klas-ister-2022&pageLayout=singlePage&u=kreidaros",
      },
      {
        title: "Інформатика",
        author: "Ривкінд Й.Я., Лисенко Т.І",
        url: "https://e.issuu.com/embed.html?d=informatyka-5-klas-ryvkind-2022_1953c69c965896&pageLayout=singlePage&u=kreidaros",
      },
      {
        title: "Вступ до історії України та громадянської освіти",
        author: "Щупак І.Я., Бурлака О.В",
        url: "https://e.issuu.com/embed.html?d=ukraina-i-svit-5-klas-shchupak-2022&pageLayout=singlePage&u=kreidaros",
      },
      {
        title: "Мистецтво",
        author: "Масол Л.М.",
        url: "https://e.issuu.com/embed.html?d=mystetstvo-5-klas-masol-2022&pageLayout=singlePage&u=kreidaros",
      },
      {
        title: "Технології",
        author: "Ходзицька І.Ю.",
        url: "https://e.issuu.com/embed.html?d=tekhnolohii-5-klas-hodzytska-2022&pageLayout=singlePage&u=kreidaros",
      },
      {
        title: "Пізнаємо природу",
        author: "Біда Д.Д., Гільберг Т.Г.",
        url: "https://e.issuu.com/embed.html?d=piznaiemo-pryrodu-5-klas-bida-2022&pageLayout=singlePage&u=kreidaros",
      },
    ],
  },
  {
    className: "6 клас",
    textbooks: [
      {
        title: "Українська мова",
        author: "Онатій А.В., Ткачук Т.П.",
        url: "https://e.issuu.com/embed.html?d=ukrainska-mova-6-klas-onatii-2023&pageLayout=singlePage&u=kreidaros",
      },
      {
        title: "Українська література",
        author: "Яценко Т.О., Пахаренко В.І.",
        url: "https://e.issuu.com/embed.html?d=ukrainska-literatura-6-klas-yatsenko-2023&pageLayout=singlePage&u=kreidaros",
      },
      {
        title: "Зарубіжна література",
        author: "Ніколенко О.М., Мацевко-Бекерська Л.В.",
        url: "https://e.issuu.com/embed.html?d=zarubizhna-literatura-6-klas-nikolenko-2023_compre&pageLayout=singlePage&u=kreidaros",
      },
      {
        title: "Англійська мова (6-й рік навчання з аудіосупровідом)",
        author: "Мітчелл Г.К., Марінелі Малкогіанні",
        url: [
          { url: "https://online.flippingbook.com/view/818861536/" },
          {
            url: "https://www.mmpublications.com/Ukraine/DownloadFile/45",
            text: "Аудіосупровід",
          },
        ],
      },
      {
        title: "Математика (у 2-х частинах)",
        author: "Істер О.С.",
        url: "https://e.issuu.com/embed.html?d=matematyka-6-klas-ister-2023-1&pageLayout=singlePage&u=kreidaros",
      },
      {
        title: "Історія України. Всесвітня історія",
        author: "Щупак І.Я., Бурлака О.В.",
        url: "https://e.issuu.com/embed.html?d=istoriia-6-klas-schupak-2023&pageLayout=singlePage&u=kreidaros",
      },
      {
        title: "Здоров'я, безпека та добробут",
        author: "Воронцова Т.В.",
        url: "https://e.issuu.com/embed.html?d=zdorovya-6-klas-vorontsova-2023&pageLayout=singlePage&u=kreidaros",
      },
      {
        title: "Географія",
        author: "Гільберг Т.Г.",
        url: "https://e.issuu.com/embed.html?d=heohrafiia-6-klas-hilberh-2023&pageLayout=singlePage&u=kreidaros",
      },
      {
        title: "Пізнаємо природу",
        author: "Біда Д.Д.",
        url: "https://e.issuu.com/embed.html?d=piznaiemo-pryrodu-6-klas-bida-2023&pageLayout=singlePage&u=kreidaros",
      },
      {
        title: "Інформатика",
        author: "Ривкінд Й.Я.",
        url: "https://e.issuu.com/embed.html?d=informatyka-6-klas-ryvkind-2023_compressed&pageLayout=singlePage&u=kreidaros",
      },
      {
        title: "Мистецтво",
        author: "Масол Л.М.",
        url: "https://e.issuu.com/embed.html?d=mystetstvo-6-klas-masol-2023_compressed&pageLayout=singlePage&u=kreidaros",
      },
      {
        title: "Технології",
        author: "Ходзицька І.Ю.",
        url: "https://e.issuu.com/embed.html?d=technolohii-6-klas-khodzytska-2023&pageLayout=singlePage&u=kreidaros",
      },
    ],
  },
  {
    className: "7 клас",
    textbooks: [
      {
        title: "Інформатика",
        author: "Ривкінд Й.Я.",
        url: "https://e.issuu.com/embed.html?d=informatyka-7-klas-ryvkind-2020&pageLayout=singlePage&u=kreidaros",
      },
      {
        title: "Історія України",
        author: "Щупак І.Я.",
        url: "https://e.issuu.com/embed.html?d=istoriia-ukrainy-7-klas-dribnytsia-2020&pageLayout=singlePage&u=kreidaros",
      },
      {
        title: "Алгебра",
        author: "Істер О.С.",
        url: "https://e.issuu.com/embed.html?d=algebra-7-klas-ister&pageLayout=singlePage&u=kreidaros",
      },
      {
        title: "Англійська мова (7-й рік навчання)",
        author: "Мітчелл Г.К.",
        url: [
          {
            url: "https://e.issuu.com/embed.html?d=anhl-mova-7-klas-mitchell-2024&pageLayout=singlePage&u=kreidaros",
          },
          {
            url: "https://www.mmpublications.com/Ukraine/DownloadFile/50",
            text: "Аудіосупровід",
          },
        ],
      },
      {
        title: "Біологія",
        author: "Соболь В.І.",
        url: "https://e.issuu.com/embed.html?d=biologija-7-klas-sobol&pageLayout=singlePage&u=kreidaros",
      },
      {
        title: "Всесвітня історія",
        author: "Щупак І.Я.",
        url: "https://e.issuu.com/embed.html?d=vsesvitnia-istoriia-7-klas-shchupak-2015&pageLayout=singlePage&u=kreidaros",
      },
      {
        title: "Географія",
        author: "Гільберг Т.Г.",
        url: "https://e.issuu.com/embed.html?d=heografija-7-klas-hilberg-2015&pageLayout=singlePage&u=kreidaros",
      },
      {
        title: "Геометрія",
        author: "Істер О.С.",
        url: "https://e.issuu.com/embed.html?d=geometrija-7-klas-ister&pageLayout=singlePage&u=kreidaros",
      },
      {
        title: "Зарубіжна література",
        author: "Ніколенко О.М.",
        url: "https://e.issuu.com/embed.html?d=zarubizhna-literatura-7-klas-nikolenko-2015&pageLayout=singlePage&u=kreidaros",
      },
      {
        title: "Здоров'я, безпека та добробут",
        author: "Воронцова Т.В.",
        url: "https://e.issuu.com/embed.html?d=zdorovya-7-klas-vorontsova-2024&pageLayout=singlePage&u=kreidaros",
      },
      {
        title: "Мистецтво",
        author: "Масол Л.М.",
        url: "https://e.issuu.com/embed.html?d=mystetstvo-7-klas-haidamaka-2024&pageLayout=singlePage&u=kreidaros",
      },
      {
        title: "Технології",
        author: "Ходзицька І.Ю.",
        url: "https://e.issuu.com/embed.html?d=tehnologii-7-klas-hodzytska-2024&pageLayout=singlePage&u=kreidaros",
      },
      {
        title: "Українська література",
        author: "Яценко Т.О.",
        url: "https://e.issuu.com/embed.html?d=ukr-literatura-7-klas-yatsenko-2024-1&pageLayout=singlePage&u=kreidaros",
      },
      {
        title: "Українська мова",
        author: "Онатій А.В.",
        url: "https://e.issuu.com/embed.html?d=ukr-mova-7-klas-onatii-2024&pageLayout=singlePage&u=kreidaros",
      },
      {
        title: "Фізика",
        author: "Бар'яхтар В.Г.",
        url: "https://e.issuu.com/embed.html?d=fizyka-7-klas-bariakhtar-2015&pageLayout=singlePage&u=kreidaros",
      },
      {
        title: "Хімія",
        author: "Григорович О.В.",
        url: "https://e.issuu.com/embed.html?d=khimiia-7-klas-hrygorovych-2015&pageLayout=singlePage&u=kreidaros",
      },
    ],
  },
  {
    className: "8 клас",
    textbooks: [
      {
        title: "Українська мова",
        author: "Онатій А.В.",
        url: "https://e.issuu.com/embed.html?d=_8_2025_29cccc5f0dc7fa&pageLayout=singlePage&u=kreidaros",
      },
      {
        title: "Українська література",
        author: "Яценко Т.О.",
        url: "https://e.issuu.com/embed.html?d=_8_2025_19807ef78fb58f&pageLayout=singlePage&u=kreidaros",
      },
      {
        title: "Англійська мова (8-й рік навчання)",
        author: "Мітчелл Г.К.",
        url: "https://e.issuu.com/embed.html?d=_8_2025_ac6b422578c72b&pageLayout=singlePage&u=kreidaros",
      },
      {
        title: "Історія України",
        author: "Пометун О.І.",
        url: "https://e.issuu.com/embed.html?d=_8_2025_b64d87e8e1bcca&pageLayout=singlePage&u=kreidaros",
      },
      {
        title: "Всесвітня історія",
        author: "Щупак І.Я.",
        url: "https://e.issuu.com/embed.html?d=_8_2025_8f42c1b6025d95&pageLayout=singlePage&u=kreidaros",
      },
      {
        title: "Алгебра",
        author: "Істер О.С.",
        url: "https://e.issuu.com/embed.html?d=_8_2025_be8f9fb47fc2c9&pageLayout=singlePage&u=kreidaros",
      },
      {
        title: "Геометрія",
        author: "Істер О.С.",
        url: "https://e.issuu.com/embed.html?d=_8_2025_b370f8070a94d9&pageLayout=singlePage&u=kreidaros",
      },
      {
        title: "Хімія",
        author: "Григорович О.В.",
        url: "https://e.issuu.com/embed.html?d=_8_2025_1543299461666a&pageLayout=singlePage&u=kreidaros",
      },
      {
        title: "Фізика",
        author: "Бар'яхтар В.Г.",
        url: "https://e.issuu.com/embed.html?d=_8_2025_e89c1ec1ea6a3b&pageLayout=singlePage&u=kreidaros",
      },
      {
        title: "Інформатика",
        author: "Ривкінд Й.Я.",
        url: "https://e.issuu.com/embed.html?d=_8_2025_d67136721b94a2&pageLayout=singlePage&u=kreidaros",
      },
      {
        title: "Біологія",
        author: "Балан П.Г.",
        url: "https://e.issuu.com/embed.html?d=_8_2025_33f67f95b71adb&pageLayout=singlePage&u=kreidaros",
      },
      {
        title: "Здоров'я, безпека та добробут",
        author: "Воронцова Т.В.",
        url: "https://e.issuu.com/embed.html?d=_8_202_3437384aa34ead&pageLayout=singlePage&u=kreidaros",
      },
      {
        title: "Географія",
        author: "Гільберг Т.Г.",
        url: "https://e.issuu.com/embed.html?d=_8_2025_3fc8c4a36debc5&pageLayout=singlePage&u=kreidaros",
      },
      {
        title: "Мистецтво",
        author: "Масол Л.М.",
        url: "https://e.issuu.com/embed.html?d=_8_2025_95175cebe3bc21&pageLayout=singlePage&u=kreidaros",
      },
      {
        title: "Зарубіжна література",
        author: "Ніколенко О.М.",
        url: "https://e.issuu.com/embed.html?d=_8_2025_f4759109869b3a&pageLayout=singlePage&u=kreidaros",
      },
      {
        title: "Технології",
        author: "Ходзицька І.Ю.",
        url: "https://e.issuu.com/embed.html?d=_8_2025_2b3ceddf5694e4&pageLayout=singlePage&u=kreidaros",
      },
      {
        title: "Громадянська освіта",
        author: "Пометун О.І.",
        url: "https://e.issuu.com/embed.html?d=_8_2025_8800e7550fae91&pageLayout=singlePage&u=kreidaros",
      },
      {
        title: "Підприємництво і фінансова грамотність",
        author: "Пластун О.Л.",
        url: "https://e.issuu.com/embed.html?d=_8_6a4433fd9e9f69&pageLayout=singlePage&u=kreidaros",
      },
    ],
  },
  {
    className: "9 клас",
    textbooks: [
      {
        title: "Українська мова",
        author: "Онатій А.В.",
        url: "https://drive.google.com/file/d/1JVOQ1Q45_hXHeK6u4RDIz0RpbAiY0SFn/preview",
      },
      {
        title: "Українська література",
        author: "Яценко Т.О.",
        url: "https://drive.google.com/file/d/1GV8_HJQHXSWbW41XWinMYTo887gzyKdB/preview",
      },
      {
        title: "Англійська мова (9 рік навчання)",
        author: "Мітчелл Г.К.",
        url: "https://online.flippingbook.com/view/221454671",
      },
      {
        title: "Історія України",
        author: "Щупак І.Я.",
        url: "https://drive.google.com/file/d/1d5d-hefFM0E_R_K5mu0MbNIJZyfYXMQf/preview",
      },
      {
        title: "Всесвітня історія",
        author: "Щупак І.Я.",
        url: "https://drive.google.com/file/d/1nzyzPTvCihlBLtfgqefc962jdxBke4EL/preview",
      },
      {
        title: "Алгебра",
        author: "Істер О.С.",
        url: "https://drive.google.com/file/d/1MDHZWkiY5MsSuziTyb0xnATu0OM5wita/preview",
      },
      {
        title: "Геометрія",
        author: "Істер О.С.",
        url: "https://drive.google.com/file/d/1R0xMQIgyCNtNgmz52P2dOtivf3pkM9tU/preview",
      },
      // TODO: замінити посилання (еспертиза) на актуальне
      {
        title: "Хімія",
        author: "Григорович О.В.",
        url: "https://drive.google.com/file/d/1foKrwVc7h89iIyh9NWejle5o9troTGJx/preview",
      },
      {
        title: "Фізика",
        author: "Бар'яхтар В.Г.",
        url: "https://drive.google.com/file/d/1tURSpQXtkbzq8FnuW0tpkgyZV-eleh9Z/preview",
      },
      {
        title: "Інформатика",
        author: "Ривкінд Й.Я.",
        url: "https://drive.google.com/file/d/1cIOjomYIeFYYiHfRnyZ6-7-YgUUfM_5W/preview",
      },
      {
        title: "Біологія",
        author: "Балан П.Г.",
        url: "https://drive.google.com/file/d/1vhD5gLbC3YMJEnFVNeOkvwAOwqCSQeZr/preview",
      },
      {
        title: "Здоров'я, безпека та добробут",
        author: "Воронцова Т.В.",
        url: "https://drive.google.com/file/d/1MhM2jV9x1KKS_shCbSmU6V4fl0n0fcT6/preview",
      },
      {
        title: "Географія",
        author: "Гільберг Т.Г.",
        url: "https://drive.google.com/file/d/1OPF44Nm2mysEKEzV5CFFgIFyUQPyj8tZ/preview",
      },
      {
        title: "Мистецтво",
        author: "Масол Л.М.",
        url: "https://www.calameo.com/read/006191963c94439a70c44",
      },
      {
        title: "Зарубіжна література",
        author: "Ніколенко О.М.",
        url: "https://drive.google.com/file/d/15RMjP6jn6pWXFeHZLx9qHbK7z7gYsC67/preview",
      },
      {
        title: "Технології",
        author: "Ходзицька І.Ю.",
        url: "https://lms.e-school.net.ua/asset-v1:Ranok+Tekhnolohii_9_kl_Khodzytska+2025+type@asset+block/Pidruchnik_Texnologiy_dlya_9_klasy_ZSSO_avt_Hodzickaya_ta_in.pdf",
      },
      {
        title: "Правознавство",
        author: "Наровлянський О.Д.",
        url: "https://drive.google.com/file/d/1cjXWGY7NWOKCDTZS-_65yHwazpUksSNV/preview",
      },
      {
        title: "Громадянська освіта",
        author: "Пометун О.І.",
        url: "https://www.calameo.com/read/006191963561aa430a4c1",
      },
      {
        title: "Підприємництво і фінансова грамотність",
        author: "Пластун О.Л.",
        url: "https://drive.google.com/file/d/19fHY4axfTyERbWjGn7WUlqM5ESGUzOW_/preview",
      },
    ],
  },
];

type Class = { className: string; textbooks: TextBook[] };
type TextBook = {
  title: string;
  author: string | string[];
  url: string | Url[];
};
type Url = { text?: string; url: string };

function RouteComponent() {
  return (
    <Tabs defaultValue="1 клас">
      {textbooks.map(({ className, textbooks }) => {
        return (
          <Tabs.Tab key={className} title={className} id={className}>
            <table className="table-responsive text-left">
              <colgroup>
                <col />
                <col />
                <col />
              </colgroup>
              <thead>
                <tr className="border-b border-slate-300">
                  <th>Назва підручника</th>
                  <th>Автор(и)</th>
                  <th>Посилання</th>
                </tr>
              </thead>
              <tbody>
                {sort(textbooks).map((b) => (
                  <tr key={b.title} className="align-top">
                    <td className="font-bold whitespace-nowrap md:font-normal">
                      {b.title}
                    </td>
                    <td className="whitespace-nowrap">
                      {Array.isArray(b.author)
                        ? b.author.map((a) => <div key={a}>{a}</div>)
                        : b.author}
                    </td>
                    <td>
                      {Array.isArray(b.url) ? (
                        b.url.map((u) => (
                          <ExternalLink key={u.url} href={u.url}>
                            {u.text ?? "Посилання"}
                            <br />
                          </ExternalLink>
                        ))
                      ) : (
                        <ExternalLink href={b.url}>Переглянути</ExternalLink>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Tabs.Tab>
        );
      })}
    </Tabs>
  );
}

function sort(textbooks: TextBook[]) {
  return textbooks.toSorted((a, b) => a.title.localeCompare(b.title, "uk"));
}
