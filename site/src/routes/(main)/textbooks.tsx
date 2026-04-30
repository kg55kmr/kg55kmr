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
            url: "https://lib.imzo.gov.ua/wa-data/public/site/books/Pidruchnuk-1kl-2018-pdf/01_Ukr_mova_Bukvar_1kl/PonomaryovaKI/Bukvar_part1_1kl.pdf",
            text: "Частина 1",
          },
          {
            url: "https://lib.imzo.gov.ua/wa-data/public/site/books/Pidruchnuk-1kl-2018-pdf/01_Ukr_mova_Bukvar_1kl/PonomaryovaKI/Bukbar_part2_1kl.pdf",
            text: "Частина 2",
          },
        ],
      },
      {
        title: "Англійська мова",
        author: "Будна Т.Б.",
        url: [
          {
            url: "https://pidruchnyk.com.ua/2715-angliiska-mova-1-klas-budna-2023.html",
          },
          {
            url: "https://lib.imzo.gov.ua/wa-data/public/site/books/Pidruchnuk-1kl-2018-pdf/03_Inozemnamova_english_1kl/BelyayevaTY/ENGLISH%201kl_Belyayeva.rar",
            text: "Аудіосупровід",
          },
        ],
      },
      {
        title: "Математика",
        author: "Скворцова С.О.",
        url: "https://lib.imzo.gov.ua/wa-data/public/site/books/Pidruchnuk-1kl-2018-pdf/07_Matematyka_1kl/Matematyka_pidruchnyk%20dlia%201%20klasu%20ZZSO%20(Skvortsova%20S.%20O.,%20Onopriienko%20O.%20V.)%20.pdf",
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
        url: "https://lib.imzo.gov.ua/yelektronn-vers-pdruchnikv/2-klas/ukranska-mova-ta-chitannya-2-klas-/ukranska-mova-ta-chitannya-pdruchnik-dlya-2-klasu-zakladv-zagalno-seredno-osvti-u-2-kh-chastinakh-ponomarova-k-chastina-1-savchenko-o-ya-chastina-2/",
      },
      {
        title: "Англійська мова",
        author: "Будна Т.Б.",
        url: "https://lib.imzo.gov.ua/wa-data/public/site/books2/pidruchnyky-2-klas-2019/03-inozemna-mova-angliyska-mova-2-klas/angliyska-2-kl-budna-bogdan/angliyska-mova-2-kl-budna-tb.pdf",
      },
      {
        title: "Математика",
        author: "Лишенко Г.П.",
        url: "https://lib.imzo.gov.ua/wa-data/public/site/books2/pidruchnyky-2-klas-2019/07-matematyka-2-klas/lyshenko-mat-p-2ukr-086-18-s.pdf",
      },
      {
        title: "Я досліджую світ (у 2-х частинах)",
        author: "Гільберг Т.Г.",
        url: "https://pidruchnyk.com.ua/1285-ya-doslidzhuyu-svit-2-klas-glberg.html",
      },
      {
        title: "Мистецтво",
        author: "Масол Л.М.",
        url: "https://pidruchnyk.com.ua/71-mistectvo-masol-gaydamaka-ocheretyana-kolotilo-2-klas.html",
      },
    ],
  },
  {
    className: "3 клас",
    textbooks: [
      {
        title: "Українська мова та читання (у 2-х частинах)",
        author: "Пономарьова К.І.; Савченко О.Я.",
        url: "https://lib.imzo.gov.ua/yelektronn-vers-pdruchnikv/3-klas/ukranska-mova-ta-chitannya-pdruchnik-dlya-3-klasu-zakladv-zagalno-seredno-osvti-u-2-kh-chastinakh/ukranska-mova-ta-chitannya-pdruchnik-dlya-3-klasu-zakladv-zagalno-seredno-osvti-u-2-kh-chastinakh-chastina-1---ponomarova-k--gayova-l-a-chastina-2---savchenko-o-ya/",
      },
      {
        title: "Англійська мова",
        author: "Будна Т.Б.",
        url: "https://lib.imzo.gov.ua/wa-data/public/site/books2/pidruchnyky-3-klas-2020/3-English-3kl/English-3kl-Budna/english-3kl-budna-bohdan.pdf",
      },
      {
        title: "Математика (у 2-х частинах)",
        author: "Лишенко Г.П.",
        url: "https://lib.imzo.gov.ua/yelektronn-vers-pdruchnikv/3-klas/matematika-3-klas/matematika-pdruchnik-dlya-3-klasu-zakladv-zagalno-seredno-osvti-u-2-kh-chastinakh-lishenko-gp/",
      },
      {
        title: "Я досліджую світ (у 2-х частинах)",
        author: "Гільберг Т.Г",
        url: [
          {
            url: "https://pidruchnyk.com.ua/uploads/book/3-klas-ya-doslidzhuiu-svit-hilberh-2020-1.pdf",
            text: "Частина 1",
          },
          {
            url: "https://pidruchnyk.com.ua/uploads/book/3-klas-ya-doslidzhuiu-svit-hilberh-2020-2.pdf",
            text: "Частина 2",
          },
        ],
      },
      {
        title: "Мистецтво",
        author: "Масол Л.М.",
        url: "https://files.pidruchnyk.com.ua/uploads/book/3-klas-mystetstvo-masol-2020.pdf",
      },
    ],
  },
  {
    className: "4 клас",
    textbooks: [
      {
        title: "Українська мова та читання (у 2-х частинах)",
        author: "Пономарьова К.І.",
        url: "https://lib.imzo.gov.ua/yelektronn-vers-pdruchnikv/4-klas/1ukranska-mova-ta-chitannya-4-klas/7ukranska-mova-ta-chitannya-pdruchnik-dlya-4-klasu-zakladv-zagalno-seredno-osvti-u-2-kh-chastinakh/",
      },
      {
        title: "Англійська",
        author: "Будна Т.В.",
        url: [
          {
            url: "https://lib.imzo.gov.ua/wa-data/public/site/books2/pidruchnyky-4-klas-2021/10-English-4kl/English-4kl-Budna/Budna-English-4kl.pdf",
          },
          {
            url: "https://lib.imzo.gov.ua/wa-data/public/site/books2/pidruchnyky-4-klas-2021/10-English-4kl/English-4kl-Budna/Audiosuprovid-English-4%20kl-Budna.zip",
            text: "Аудіосупровід",
          },
        ],
      },
      {
        title: "Математика (у 2-х частинах)",
        author: "Лишенко Г.П.",
        url: "https://lib.imzo.gov.ua/yelektronn-vers-pdruchnikv/4-klas/7matematika/8matematika-pdruchnik-dlya-4-klasu-zakladv-zagalno-seredno-osvti-u-2-kh-chastinakh/",
      },
      {
        title: "Я досліджую світ (у 2-х частинах)",
        author: "Гільберг Т.Г.",
        url: "https://lib.imzo.gov.ua/yelektronn-vers-pdruchnikv/4-klas/8ya-dosldzhuyu-svt-4-klas/3ya-dosldzhuyu-svt-pdruchnik-dlya-4-klasu-zakladv-zagalno-seredno-osvti-u-2-kh-chastinakh/",
      },
      {
        title: "Інформатика",
        author: "Коршунова О.В.",
        url: "https://lib.imzo.gov.ua/wa-data/public/site/books2/pidruchnyky-4-klas-2021/16-Informatyka-4kl/4kl-Informatyka-Korshunova.pdf",
      },
      {
        title: "Мистецтво",
        author: "Масол Л.М.",
        url: "https://lib.imzo.gov.ua/wa-data/public/site/books2/pidruchnyky-4-klas-2021/17-Mystetstvo-4kl/Masol-Mystetstvo-4kl.pdf",
      },
    ],
  },
  {
    className: "5 клас",
    textbooks: [
      {
        title: "Здоров’я, безпека та добробут",
        author: "Воронцова Т.В.",
        url: "https://uchebniki-online.net/1204-zdorovia-bezpeka-ta-dobrobut-5-klas-voroncova-2022.html",
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
        url: "https://lib.imzo.gov.ua/wa-data/public/site/books2/5kl-nush/movno-litr-galuz/zar-lit/%D0%9D%D1%96%D0%BA%D0%BE%D0%BB%D0%B5%D0%BD%D0%BA%D0%BE%20%D0%97%D0%B0%D1%80%D1%83%D0%B1%D1%96%D0%B6%D0%BD%D0%B0%20%D0%BB%D1%96%D1%82%D0%B5%D1%80%D0%B0%D1%82%D1%83%D1%80%D0%B0%205%20%D0%BA%D0%BB%D0%B0%D1%81.pdf",
      },
      {
        title: "Англійська мова 5-й рік навчання",
        author: "Карпюк О.Д., Карпюк К.Т.",
        url: "https://e.issuu.com/embed.html?d=5_english_karpyuk&pageLayout=singlePage&u=stankobog",
      },
      {
        title: "Математика",
        author: "Істер О.С.",
        url: "https://www.geneza.ua/sites/default/files/ebooks/%D0%9C%D0%B0%D1%82%D0%B5%D0%BC%D0%B0%D1%82%D0%B8%D0%BA%D0%B0_5%20%D0%BA%D0%BB%D0%B0%D1%81_%D0%93%D0%B5%D0%BD%D0%B5%D0%B7%D0%B0.pdf",
      },
      {
        title: "Інформатика",
        author: "Ривкінд Й.Я., Лисенко Т.І",
        url: "https://drive.google.com/file/d/14_AxsiHEVMmR-SwCn4YLTxVgzAZXLohn/view",
      },
      {
        title: "Вступ до історії України та громадянської освіти",
        author: "Щупак І.Я., Бурлака О.В",
        url: "https://drive.google.com/file/d/1nzOqG1ev1LXMa4XDZdWBgbUIQIdYx7WO/view",
      },
      {
        title: "Мистецтво",
        author: "Масол Л.М.",
        url: "https://files.pidruchnyk.com.ua/uploads/book/5_mystetstvo_masol_2022.pdf",
      },
      {
        title: "Технології",
        author: "Ходзицька І.Ю.",
        url: "https://drive.google.com/file/d/1Zg-PY3R_iRsBhdBcfcqtj3U3jCSzn4Kp/view",
      },
      {
        title: "Пізнаємо природу",
        author: "Біда Д.Д., Гільберг Т.Г.",
        url: "https://pidruchnyk.com.ua/1718-piznaiemo-pryrodu-bida-5-klas.html",
      },
    ],
  },
  {
    className: "6 клас",
    textbooks: [
      {
        title: "Українська мова",
        author: "Онатій А.В., Ткачук Т.П.",
        url: "https://pidruchnyk.com.ua/2593-ukrmova-6-klas-onatii.html",
      },
      {
        title: "Українська література",
        author: "Яценко Т.О., Пахаренко В.І.",
        url: "https://pidruchnyk.com.ua/2611-ukralit-6-klas-yatsenko.html",
      },
      {
        title: "Зарубіжна література",
        author: "Ніколенко О.М., Мацевко-Бекерська Л.В.",
        url: "https://pidruchnyk.com.ua/2624-zaralit-6-klas-nikolenko-2023.html",
      },
      {
        title: "Англійська мова (6-й рік навчання з аудіосупровідом)",
        author: "Мітчелл Г.К., Марінелі Малкогіанні",
        url: "https://pidruchnyk.com.ua/2600-angliiska-6-klas-mitchell.html",
      },
      {
        title: "Математика (у 2-х частинах)",
        author: "Істер О.С.",
        url: "https://pidruchnyk.com.ua/2590-matematyka-6-klas-ister-2023.html",
      },
      {
        title: "Історія України. Всесвітня історія",
        author: "Щупак І.Я., Бурлака О.В.",
        url: "https://pidruchnyk.com.ua/2610-istoriia-6-klas-shchupak-2023.html",
      },
      {
        title: "Здоров'я, безпека та добробут",
        author: "Воронцова Т.В.",
        url: "https://pidruchnyk.com.ua/2644-zdorovia-6-klas-vorontsova-2023.html",
      },
      {
        title: "Географія",
        author: "Гільберг Т.Г.",
        url: "https://pidruchnyk.com.ua/2630-geografiia-6-klas-gilberg-2023.html",
      },
      {
        title: "Пізнаємо природу",
        author: "Біда Д.Д.",
        url: "https://pidruchnyk.com.ua/2653-piznaiemo-pryrodu-6-klas-bida.html",
      },
      {
        title: "Інформатика",
        author: "Ривкінд Й.Я.",
        url: "https://pidruchnyk.com.ua/2686-informatyka-6-klas-ryvkind-2023.html",
      },
      {
        title: "Мистецтво",
        author: "Масол Л.М.",
        url: "https://pidruchnyk.com.ua/2692-mystetstvo-6-klas-masol-2023.html",
      },
      {
        title: "Технології",
        author: "Ходзицька І.Ю.",
        url: "https://pidruchnyk.com.ua/2693-tehnologii-6-klas-hodzytska.html",
      },
    ],
  },
  {
    className: "7 клас",
    textbooks: [
      {
        title: "Інформатика",
        author: "Ривкінд Й.Я.",
        url: "https://pidruchnyk.com.ua/2809-informatyka-ryvkind-7-klas-2024.html",
      },
      {
        title: "Історія України",
        author: "Щупак І.Я.",
        url: "https://pidruchnyk.com.ua/2852-istoriia-ukrainy-shchupak-7-klas-2024.html",
      },
      {
        title: "Алгебра",
        author: "Істер О.С.",
        url: "https://pidruchnyk.com.ua/2889-algebra-ister-7-klas-2024.html",
      },
      {
        title: "Англійська мова (7-й рік навчання)",
        author: "Мітчелл Г.К.",
        url: "https://shkola.in.ua/3083-anhliiska-mova-7-klas-mitchell.html",
      },
      {
        title: "Біологія",
        author: "Соболь В.І.",
        url: "https://shkola.in.ua/266-biolohiia-7-klas-sobol.html",
      },
      {
        title: "Всесвітня історія",
        author: "Щупак І.Я.",
        url: "https://pidruchnyk.com.ua/2857-vsesvitnia-istoriia-shchupak-7-klas-2024.html",
      },
      {
        title: "Географія",
        author: "Гільберг Т.Г.",
        url: "https://pidruchnyk.com.ua/2830-geografiia-gilberg-7-klas-2024.html",
      },
      {
        title: "Геометрія",
        author: "Істер О.С.",
        url: "https://pidruchnyk.com.ua/2883-geometriia-ister-7-klas-2024.html",
      },
      {
        title: "Зарубіжна література",
        author: "Ніколенко О.М.",
        url: "https://pidruchnyk.com.ua/2862-zarubizhna-literatura-nikolenko-7-klas-2024.html",
      },
      {
        title: "Здоров’я, безпека та добробут",
        author: "Воронцова Т.В.",
        url: "https://shkola.in.ua/3128-zdorov-ia-bezpeka-ta-dobrobut-7-klas-vorontsova.html",
      },
      {
        title: "Мистецтво",
        author: "Масол Л.М.",
        url: "https://pidruchnyk.com.ua/2804-mystectvo-masol-7-klas-2024.html",
      },
      {
        title: "Технології",
        author: "Ходзицька І.Ю.",
        url: "https://pidruchnyk.com.ua/2799-tekhnologii-khodzycka-7-klas.html",
      },
      {
        title: "Українська література",
        author: "Яценко Т.О.",
        url: "https://pidruchnyk.com.ua/2868-ukrainska-literatura-iacenko-7-klas-2024.html",
      },
      {
        title: "Українська мова",
        author: "Онатій А.В.",
        url: "https://pidruchnyk.com.ua/2871-ukrainska-mova-onatii-7-klas-2024.html",
      },
      {
        title: "Фізика",
        author: "Бар'яхтар В.Г.",
        url: "https://pidruchnyk.com.ua/2823-fizyka-bariakhtar-7-klas-2024.html",
      },
      {
        title: "Хімія",
        author: "Григорович О.В.",
        url: "https://pidruchnyk.com.ua/2819-khimiia-grygorovych-7-klas-2024.html",
      },
    ],
  },
  {
    className: "8 клас",
    textbooks: [
      {
        title: "Українська мова",
        author: "Онатій А.В.",
        url: "https://pidruchnyk.com.ua/2903-ukrainska-mova-onatii-8-klas.html",
      },
      {
        title: "Українська література",
        author: "Яценко Т.О.",
        url: "https://pidruchnyk.com.ua/2963-ukrainska-literatura-iacenko-8-klas-2025.html",
      },
      {
        title: "Англійська мова (8-й рік навчання)",
        author: "Мітчелл Г.К.",
        url: "https://pidruchnyk.com.ua/2896-angliiska-mova-mitchell-8-klas.html",
      },
      {
        title: "Історія України",
        author: "Пометун О.І.",
        url: "https://pidruchnyk.com.ua/1618-istorya-ukrayini-8-klas-pometun-dudar.html",
      },
      {
        title: "Всесвітня історія",
        author: "Щупак І.Я.",
        url: "https://pidruchnyk.com.ua/1623-vsesvitnya-istoriya-8-klas-schupak.html",
      },
      {
        title: "Алгебра",
        author: "Істер О.С.",
        url: "https://pidruchnyk.com.ua/2905-algebra-ister-8-klas-2025.html",
      },
      {
        title: "Геометрія",
        author: "Істер О.С.",
        url: "https://pidruchnyk.com.ua/2911-geometriia-ister-8-klas-2025.html",
      },
      {
        title: "Хімія",
        author: "Григорович О.В.",
        url: "https://pidruchnyk.com.ua/2921-khimiia-grygorovych-8-klas-2025.html",
      },
      {
        title: "Фізика",
        author: "Бар'яхтар В.Г.",
        url: "https://lib.imzo.gov.ua/wa-data/public/site/books2/pidruchnyky-8klas-2021/12-fizyka-8kl/Fizyka-8kl-Baryakhtar.pdf",
      },
      {
        title: "Інформатика",
        author: "Ривкінд Й.Я.",
        url: "https://pidruchnyk.com.ua/3011-informatyka-ryvkind-8-klas-2025.html",
      },
      {
        title: "Біологія",
        author: "Балан П.Г.",
        url: "https://pidruchnyk.com.ua/2925-biologiia-balan-8-klas-2025.html",
      },
      {
        title: "Основи здоров'я",
        author: "Бех І.Д.",
        url: "https://pidruchnyk.com.ua/877-osnovy-zdorovya-8-klas-beh-2016-nova-programa.html",
      },
      {
        title: "Географія",
        author: "Гільберг Т.Г.",
        url: "https://pidruchnyk.com.ua/2984-geografiia-gilberg-8-klas-2025.html",
      },
      {
        title: "Мистецтво",
        author: "Масол Л.М.",
        url: "https://pidruchnyk.com.ua/2938-mystectvo-masol-8-klas-2025.html",
      },
      {
        title: "Зарубіжна література",
        author: "Ніколенко О.М.",
        url: "https://pidruchnyk.com.ua/2991-zarubizhna-literatura-nikolenko-8-klas-2025.html",
      },
      {
        title: "Технології",
        author: "Ходзицька І.Ю.",
        url: "https://pidruchnyk.com.ua/2951-tekhnologii-khodzycka-8-klas-2025.html",
      },
      {
        title: "Громадянська освіта",
        author: "Пометун О.І.",
        url: "https://pidruchnyk.com.ua/2989-gromadianska-osvita-pometun-8-klas-2025.html",
      },
    ],
  },
  {
    className: "9 клас",
    textbooks: [
      {
        title: "Українська мова",
        author: "Глазова О.П.",
        url: "https://lib.imzo.gov.ua/wa-data/public/site/books2/pidruchnyky-9-klas/01-ukrainska-mova-9-klas/ukrainska-mova-pidruchnyk-dlya-9-klasu-zagalnoosvitnih-navchalnyh-zakladiv-glazova-o-p.pdf",
      },
      {
        title: "Українська література",
        author: "Авраменко О.М.",
        url: "https://lib.imzo.gov.ua/wa-data/public/site/books2/pidruchnyky-9-klas/02-ukrainska-literatura-9-klas/gramota-ukrain-literatura-9-kl-avram-2017.pdf",
      },
      {
        title: "Англійська мова (9 рік навчання)",
        author: "Карпюк О.Д.",
        url: "https://lib.imzo.gov.ua/wa-data/public/site/books2/pidruchnyky-9-klas/17-inozemna-mova-angliyska-9-klas/english-9-karpyuk-aston-web56dpi.pdf",
      },
      {
        title: "Історія України",
        author: "Турченко Ф.Г.",
        url: "https://lib.imzo.gov.ua/wa-data/public/site/books2/pidruchnyky-9-klas/03-istoriya-ukrainy-9-klas/turchenko-isuk-p-9ukr-082-16-s.pdf",
      },
      {
        title: "Всесвітня історія",
        author: "Щупак І.Я.",
        url: "https://lib.imzo.gov.ua/wa-data/public/site/books2/pidruchnyky-9-klas/04-vsesvitnya-istoriya-9-klas/orion-9-istoriya-schupak.pdf",
      },
      {
        title: "Алгебра",
        author: "Істер О.С.",
        url: "https://lib.imzo.gov.ua/wa-data/public/site/books2/pidruchnyky-9-klas/05-algebra-9-klas/ister-algeb-p-9ukr-054-13-s.pdf",
      },
      {
        title: "Геометрія",
        author: "Істер О.С.",
        url: "https://lib.imzo.gov.ua/wa-data/public/site/books2/pidruchnyky-9-klas/06-geometriya-9-klas/ister-geom-p-9ukr-183-12-s.pdf",
      },
      {
        title: "Хімія",
        author: "Григорович О.В.",
        url: "https://lib.imzo.gov.ua/wa-data/public/site/books2/pidruchnyky-9-klas/09-himiya-9-klas/himiya-pidruchnyk-dlya-9-klasu-zagalnoosvitnih-navchalnyh-zakladiv-grygorovych-o-v.pdf",
      },
      {
        title: "Фізика",
        author: "Бар'яхтар В.Г.",
        url: "https://lib.imzo.gov.ua/wa-data/public/site/books2/pidruchnyky-9-klas/10-fizyka-9-klas/Fizika-baryakhtar-9kl.pdf",
      },
      {
        title: "Інформатика",
        author: "Ривкінд Й.Я.",
        url: "https://lib.imzo.gov.ua/wa-data/public/site/books2/pidruchnyky-9-klas/07-informatyka-9-klas/ryvkind-info-p-9ukr-101-16-s.pdf",
      },
      {
        title: "Біологія",
        author: "Межжерін С.В.",
        url: "https://shkola.in.ua/738-biolohiia-9-klas-mezhzherin-2017.html",
      },
      {
        title: "Основи здоров'я",
        author: "Бех И.Д.",
        url: "https://shkola.in.ua/814-osnovy-zdorov-ia-9-klas-bekh-2017.html",
      },
      {
        title: "Географія",
        author: "Бойко В.М.",
        url: "https://shkola.in.ua/753-heohrafiia-9-klas-boiko-2017.html",
      },
      {
        title: "Мистецтво",
        author: "Масол Л.М.",
        url: "https://lib.imzo.gov.ua/wa-data/public/site/books2/pidruchnyky-9-klas/14-mystectvo-9-klas/mystectvo-9-kl-klass.pdf",
      },
      {
        title: "Зарубіжна література",
        author: "Волощук Є.В.",
        url: "https://lib.imzo.gov.ua/wa-data/public/site/books2/pidruchnyky-9-klas/16-zarubizhna-literatura-9-klas/voloshuk-zl-p-9ukr-084-16-s.pdf",
      },
      {
        title: "Трудове навчання (обслуговуючі види праці)",
        author: "Ходзицька І.Ю.",
        url: "https://lib.imzo.gov.ua/wa-data/public/site/books2/pidruchnyky-9-klas/08-trudove-navchannya-9-klas/trudove-navchannya-obslugovuyuchi-vydy-praci-pidruchnyk-dlya-9-klasu-znz-hodzycka-i-yutymenko-v-pgorobec-o-vbeznosyuk-o-i.pdf",
      },
      {
        title: "Трудове навчання (технічні види праці",
        author: "Терещук А.І.",
        url: "https://lib.imzo.gov.ua/wa-data/public/site/books2/pidruchnyky-9-klas/08-trudove-navchannya-9-klas/litera-ltd-9-klas-trud-tekh-vyd-pratsi.pdf",
      },
      {
        title: "Основи правознавства",
        author: "Наровлянський О.Д.",
        url: "https://lib.imzo.gov.ua/wa-data/public/site/books2/pidruchnyky-9-klas/15-osnovy-pravoznavstva-9-klas/gramota-pravoznavstvo-9-kl-narovl.pdf",
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
