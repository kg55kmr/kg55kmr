import type { ReportItemWithItems } from "./reports-types";
import { Neighborhood } from "~/components/neighborhood";
import { AdditionalServices } from "~/routes/(main)/-public-info/additional-services";
import { Bullying } from "~/routes/(main)/-public-info/bullying";
import { СonditionsOfAvailability } from "~/routes/(main)/-public-info/conditions-of-availability";
import { LanguageOfInstruction } from "~/routes/(main)/-public-info/language-of-instruction";
import { LicensedCapacity } from "~/routes/(main)/-public-info/licensed-capacity";
import { MaintanceAndRepairs } from "~/routes/(main)/-public-info/maintenance-and-repairs";
import { RulesOfAdmission } from "~/routes/(main)/-public-info/rules-of-admission";
import { StructureAndOrganization } from "~/routes/(main)/-public-info/structure-and-organization";
import { Vacancies } from "~/routes/(main)/-public-info/vacancies";
import { qualityOfEducation } from "./quality-of-education";

export const publicInfo: ReportItemWithItems[] = [
  {
    title: "Статут закладу освіти",
    href: "https://drive.google.com/file/d/19_0NVsaaXaTVWaR43qsApN3YQindMYwz/preview",
  },
  {
    title: "Виписка з ЄДРПОУ",
    href: "https://drive.google.com/file/d/130YKpDWtXQwY37jd_aSwncfyzJOUcZLa/preview",
  },
  {
    title: "Ліцензії на впровадження освітньої діяльності",
    items: [
      {
        title: "Ліцензія на впровадження освітньої діяльності",
        href: "https://drive.google.com/file/d/1czvQbGiPQDY56SBctUXD6cUtjfeVxL3p/preview",
      },
      {
        title:
          "Ліцензований обсяг та фактична кількість осіб, які навчаються в закладі освіти",
        component: LicensedCapacity,
      },
      {
        title: "Свідоцтво про атестацію закладу",
        href: "https://drive.google.com/file/d/1N_7mF0m0tGK05VSNba_NEqfQLC4cjlf2/preview",
      },
      {
        title: "Інформаційна довідка про заклад",
        href: "https://drive.google.com/file/d/1l4XOBmIAHWAN9W30hiep_2T3C8RwsG2e/preview",
      },
      {
        title: "Кількісні та якісні показники кадрового забезпечення",
        href: "https://drive.google.com/file/d/1Qt5FgISO3Lt8lBKxagU0oyRg9Ee1IvY8/preview",
      },
      {
        title: "Мережа класів",
        href: "https://drive.google.com/file/d/1ri2hb9gHpnLWNqgE-sw2qATEO9YGwGYg/preview",
      },
    ],
  },
  {
    title: "Матеріально-технічне забезпечення закладу освіти",
    items: [
      {
        title: "Матеріально-технічне забезпечення закладу освіти",
        href: "https://drive.google.com/file/d/1zF4A26xzD8BbDOUM7PiSIF81dAgPCGED/preview",
      },
      {
        title: "Забезпечення комп'ютерною технікою",
        href: "https://drive.google.com/file/d/1BNW6KwlXKWh1VvYhPDzUUuSH_E2xPoGA/preview",
      },
    ],
  },
  {
    title: "Структура та органи управління закладу освіти",
    component: StructureAndOrganization,
  },
  {
    title: "Освітня програма",
    items: [
      {
        title: "на 2024-2025 н.р.",
        href: "https://drive.google.com/file/d/1Ug31EW_Aq8Aw81Q3Ekct8Ztd9KEngvJj/preview",
      },
      {
        title: "на 2023-2024 н.р.",
        href: "https://drive.google.com/file/d/1QWW1HNAPtH2THqRr2xFiWxNL1Z8kQi6f/preview",
      },
      {
        title: "на 2022-2023 н.р.",
        href: "https://drive.google.com/file/d/1-CKhb81UupB2UmxuIAYEzqtVY6n0Bn2M/preview",
      },
      {
        title: "на 2021-2022 н.р.",
        href: "https://drive.google.com/file/d/1BBR1YbwrF6GCZ-tW-n9yUhOPE5IXb1PS/preview",
      },
      {
        title: "на 2020-2021 н.р.",
        href: "https://drive.google.com/file/d/1TwSBllrKXSGn1WOohVhvnlluiFngHjsK/preview",
      },
      {
        title: "на 2019-2020 н.р.",
        href: "https://drive.google.com/file/d/10dpH0z5Wky1lC1in3ez-N4xVyVi-KBdw/preview",
      },
      {
        title: "на 2018-2019 н.р.",
        href: "https://drive.google.com/file/d/1P_0dSeRKIrEGQfPYNsXDWhNq5wPFaTvp/preview",
      },
    ],
  },
  {
    title: "Стратегія розвитку",
    href: "https://drive.google.com/file/d/1WnIaJIZLq3LxE0eJclyK1wITgn3rkBcE/preview",
  },
  {
    title:
      "Положення про академічну доброчесність учасників освітнього процесу",
    href: "https://drive.google.com/file/d/19bU3m8RkEaAufmTVsj9HOr5-ZDFIOyB6/preview",
  },
  {
    title: "Положення про внутрішню систему забезпечення якості освіти",
    href: "https://drive.google.com/file/d/1ZH22yA3RhauI10UuJRXA3kBTnWlFjSmz/preview",
  },
  {
    title:
      "Територія обслуговування, закріплена за закладом освіти його засновником",
    component: Neighborhood,
    id: "catchment-area",
  },
  {
    title:
      "Наявність вакантних посад, порядок і умови проведення конкурсу на їх заміщення",
    component: Vacancies,
  },
  {
    title: "Результати моніторингу якості освіти",
    items: qualityOfEducation,
  },
  {
    title: "Річний план роботи закладу освіти",
    items: [
      {
        title: "на 2024-2025 н.р.",
        href: "https://drive.google.com/file/d/12-PD2xfi7YBT7F6qwq6pN_cD1V91aVGX/preview",
      },
      {
        title: "на 2023-2024 н.р.",
        href: "https://drive.google.com/file/d/1kDbm2Ah1FTKrVS8e-_Eqx_z9RZZbV5rD/preview",
      },
      {
        title: "на 2022-2023 н.р.",
        href: "https://drive.google.com/file/d/1UZPNFBjUNvkio9Jz-xKKwyNAUJuDm_DX/preview",
      },
      {
        title: "на 2021-2022 н.р.",
        href: "https://drive.google.com/file/d/16frRnUYUE28QYtQUGpljwTFrVB7-jqeD/preview",
      },
    ],
  },
  {
    title: "Річний звіт про діяльність закладу освіти",
    items: [
      {
        title: "2024-2025 н.р.",
        items: [
          {
            title: "звіт директора",
            href: "https://drive.google.com/file/d/1P-UFSN8uhNiDSs8goRZiHA6GlN5TZ-TH/preview",
          },
        ],
      },
      {
        title: "2023-2024 н.р.",
        items: [
          {
            title: "звіт директора",
            href: "https://drive.google.com/file/d/1Xl-0bdf02ZIBPhIfgqgpomodkmC4LGCB/preview",
          },
        ],
      },
      {
        title: "2022-2023 н.р.",
        items: [
          {
            title: "звіт директора",
            href: "https://drive.google.com/file/d/1j1Cd13ol0JaN3n11tW7H89z08sw4HlQn/preview",
          },
        ],
      },
      {
        title: "2021-2022 н.р.",
        items: [
          {
            title: "звіт директора",
            href: "https://drive.google.com/file/d/1_tG0rleFul8sD6Nzrx104foBUVUvLjsF/preview",
          },
        ],
      },
      {
        title: "2020-2021 н.р.",
        items: [
          {
            title: "звіт директора",
            href: "https://drive.google.com/file/d/1v71bAE_aAsB7CXxaUsDIaxKxXXQW6dKu/preview",
          },
          {
            title: "презентація до звіту директора",
            href: "https://drive.google.com/file/d/12ZXqeOsRi3BuDlxCRXFwBzRWjvITzZg-/preview",
          },
        ],
      },
      {
        title: "2019-2020 н.р.",
        items: [
          {
            title: "звіт директора",
            href: "https://drive.google.com/file/d/1Nk-hTxAFtz5EdO6ZvEYGqQNnQxhrPIau/preview",
          },
          {
            title: "презентація до звіту директора",
            href: "https://drive.google.com/file/d/1DnUtdWFdxAXV_bk64cn8PbJQJLMHpMhs/preview",
          },
        ],
      },
      {
        title: "2018-2019 н.р.",
        items: [
          {
            title: "звіт директора",
            href: "https://drive.google.com/file/d/1tw0yG4Sn560k7QCztfLWvaCx-WnAP_08/preview",
          },
          {
            title: "презентація до звіту директора",
            href: "https://drive.google.com/file/d/19YY3GMYdR6X4bPJmZoNp_Lyw6q9yl6QE/preview",
          },
        ],
      },
      {
        title: "2017-2018 н.р.",
        items: [
          {
            title: "звіт директора",
            href: "https://drive.google.com/file/d/10QXsafOolIY67JeB71ELEd7Qbs8W7EAg/preview",
          },
          {
            title: "презентація до звіту директора",
            href: "https://drive.google.com/file/d/1MhaGElf2qzDJTmnAW4REvhRK6a2v1P7F/preview",
          },
        ],
      },
      {
        title: "2016-2017 н.р.",
        items: [
          {
            title: "звіт директора",
            href: "https://drive.google.com/file/d/11fh9D6dCCrR3yCshT3KIrxnnBYERtav1/preview",
          },
          {
            title: "презентація до звіту директора",
            href: "https://drive.google.com/file/d/1FpRQXTEjSOXUlFVrAv2lNeajf0GISnq8/preview",
          },
        ],
      },
      {
        title: "2015-2016 н.р.",
        items: [
          {
            title: "звіт директора",
            href: "https://drive.google.com/file/d/1zkOmCpLMO6J8xuHx3F39nV26CivKq4ly/preview",
          },
          {
            title: "презентація до звіту директора",
            href: "https://drive.google.com/file/d/1zDHfQ4IIDRfmc41IDc01wTN8EJdrY7DD/preview",
          },
        ],
      },
      {
        title: "2014-2015 н.р.",
        items: [
          {
            title: "звіт директора",
            href: "https://drive.google.com/file/d/1a8Nj5AlvIuNalQStvQRHfIoyrnunqtbq/preview",
          },
        ],
      },
    ],
  },
  {
    title: "Благоустрій та ремонт закладу",
    component: MaintanceAndRepairs,
  },
  {
    title: "Пропозиції до проекту бюджету",
    items: [
      {
        title: "2021 р.",
        href: "https://drive.google.com/file/d/1la2EBti0qCwyOjKRM2O8Y279lJ_y55xA/preview",
      },
    ],
  },
  {
    title: "Штатний розпис",
    href: "https://docs.google.com/spreadsheets/d/1DrBUa_NAAxKYeoL8xwGBBCR1NcGcIIlf/preview",
  },
  {
    title: "Правила прийому до закладу освіти",
    component: RulesOfAdmission,
  },
  {
    title: "Положення про організацію пропускного режиму у закладі",
    href: "https://drive.google.com/file/d/1pxymNzHtjIa3U3C_HSv4ZNGdPDlKVjW6/preview",
  },
  {
    title:
      "Умови доступності закладу освіти для навчання осіб з особливими освітніми потребами",
    component: СonditionsOfAvailability,
  },
  {
    title: "Булінг (цькування). Безпечне освітнє середовище",
    component: Bullying,
  },
  {
    title: "Перелік додаткових освітніх та інших послуг",
    component: AdditionalServices,
  },
  {
    title: "Мова освітнього процесу",
    component: LanguageOfInstruction,
  },
  {
    title: "Установчі документи",
    items: [
      {
        title: "Свідотство про державну реєстрацію юридичної особи",
        href: "https://drive.google.com/file/d/1o8XNxVypjYLEZH38S5LvFDPvvmpJdm7P/preview",
      },
      {
        title: "Правила внутрішнього трудового розпорядку",
        href: "https://drive.google.com/file/d/1k5ijBRozR1svyMa-2y87YoE5EUwESQfI/preview",
      },
      {
        title: "Колективний договір",
        href: "https://drive.google.com/file/d/1ecIPOHdMskfnfXMWRi3xCZ5XOZSu_J0U/preview",
      },
    ],
  },
];
