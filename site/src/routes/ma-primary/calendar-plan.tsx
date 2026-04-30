import { createFileRoute } from "@tanstack/react-router";
import { ExternalLink } from "~/components/link";
import { Tabs } from "~/components/tabs";

export const Route = createFileRoute("/ma-primary/calendar-plan")({
  component: RouteComponent,
  staticData: {
    title: "Календарне планування",
  },
});

const data = [
  {
    class: "1 клас",
    items: [
      {
        title: "Дизайн і технології",
        url: "https://docs.google.com/document/d/169R0A_E9uu13KumBw2FKd60KHje04HFw/view",
      },
      {
        title: "Математика",
        url: "https://docs.google.com/document/d/1L_4Nt3DTbbJT5RmuAoJ5kbBo90xFWBPJ/view",
      },
      {
        title: "Образотворче мистецтво",
        url: "https://docs.google.com/document/d/1rtYEzrp9l-wAZ7oqy1HY6ZIHnvDcdkG9/view",
      },
      {
        title: "Навчання грамоти (письмо)",
        url: "https://docs.google.com/document/d/1MiasJPgF4IHTLL2Kd9gejKrU6aZ_dmB6/view",
      },
      {
        title: "Навчання грамоти (читання)",
        url: "https://docs.google.com/document/d/13zPKhWZOBmMJ0y4o9L1sQdpffcI_dbsJ/view",
      },
      {
        title: "Фізична культура (1 семестр)",
        url: "https://docs.google.com/document/d/1LWDjjvKYjt_3aOmMBxuB8SWc7snqawQE/view",
      },
      {
        title: "Фізична культура (2 семестр)",
        url: "https://docs.google.com/document/d/1Vd5GpdpVt21R7tuaSXHs0RsYQIvi3K1j/view",
      },
      {
        title: "Я досліджую світ",
        url: "https://docs.google.com/document/d/1npHDCVs_TBO2LoNyuNUrGC_M6XreOgh3/view",
      },
    ],
  },
  {
    class: "2 клас",
    items: [
      {
        title: "Математика (1 семестр)",
        url: "https://docs.google.com/document/d/1kN_JQte4cDQd400bcJJBSzj-Z5MH8TQ0/view",
      },
      {
        title: "Образотворче мистецтво (1 семестр)",
        url: "https://docs.google.com/document/d/15zdXFsOyHdd5oxpcYk-VJvan6I8dJFIW/view",
      },
      {
        title: "Українська мова (1 семестр)",
        url: "https://docs.google.com/document/d/1c8OypNPT8Wgn0ZN3X6T4vdgf9NFF5H4b/view",
      },
      {
        title: "Фізична культура (1 семестр)",
        url: "https://docs.google.com/document/d/1AwhyYavgNByCOVJhjscQUhYkYry6qOhq/view",
      },
      {
        title: "Літературне читання (1 семестр)",
        url: "https://docs.google.com/document/d/1fenDgY5-FDM8Uzr9B1DyBLbEFpKjKS2-/view",
      },
      {
        title: "Я досліджую світ (1 семестр)",
        url: "https://docs.google.com/document/d/1P6-txNeoEG_x4caREcvy_c2bfIitXn04/view",
      },
      {
        title: "Математика (2 семестр)",
        url: "https://docs.google.com/document/d/1KWYv1-g8UBB7PflR3-B_dKCH7GEu4cj_/view",
      },
      {
        title: "Українська мова (2 семестр)",
        url: "https://docs.google.com/document/d/1kZtCL_i-1rDsoDefgmCEJph7KNUCVYY2/view",
      },
      {
        title: "Фізична культура (2 семестр)",
        url: "https://docs.google.com/document/d/16eAXqc5Hl61A5hPe1KaEFrCBMkRyCnPH/view",
      },
      {
        title: "Літературне читання (2 семестр)",
        url: "https://docs.google.com/document/d/1qkHEqpvccPQblqBGljTl6sgZuEGbBwE-/view",
      },
      {
        title: "Я досліджую світ (2 семестр)",
        url: "https://docs.google.com/document/d/1hLs7GoxfrX5Iic2VGYsMvE6HeYCHHGHB/view",
      },
    ],
  },
  {
    class: "3 клас",
    items: [
      {
        title: "Дизайн і технології (1 семестр)",
        url: "https://docs.google.com/document/d/11MSvydkZ7A_-MHBGAgDCPJiXGaZt0_Ls/view",
      },
      {
        title: "Математика (1 семестр)",
        url: "https://docs.google.com/document/d/1ukVGKDrcUt3LiG-y84E2PPt6kdA7MV4b/view",
      },
      {
        title: "Образотворче мистецтво (1 семестр)",
        url: "https://docs.google.com/document/d/1jsnYRI8SxcAvlyJKcyxIfeOGqgpU5EQE/view",
      },
      {
        title: "Українська мова (1 семестр)",
        url: "https://docs.google.com/document/d/1O_WK3hWq3ETwaF6eBlmbf9pnwKNmhro4/view",
      },
      {
        title: "Фізична культура (1 семестр)",
        url: "https://docs.google.com/document/d/1YD7eCutLEJzU8JsulvOA51edH-45QLEu/view",
      },
      {
        title: "Літературне читання (1 семестр)",
        url: "https://docs.google.com/document/d/1SgEKVfN1emuOOjgVwSWSB9pAUqatsCyg/view",
      },
      {
        title: "Я досліджую світ (1 семестр)",
        url: "https://docs.google.com/document/d/1l2i8H4iwHTp6Wf5iQlBC2ZLA-ExcW-aD/view",
      },
      {
        title: "Дизайн і технології (2 семестр)",
        url: "https://docs.google.com/document/d/18TbGvT-NNiX0eAhZSVPrFTfM7rt074bK/view",
      },
      {
        title: "Математика (2 семестр)",
        url: "https://docs.google.com/document/d/1NLotU-ER-z6Nc6JahY3OsPdwn6a3BNYY/view",
      },
      {
        title: "Образотворче мистецтво (2 семестр)",
        url: "https://docs.google.com/document/d/1jsnYRI8SxcAvlyJKcyxIfeOGqgpU5EQE/view",
      },
      {
        title: "Українська мова (2 семестр)",
        url: "https://docs.google.com/document/d/1Y2YCQtZG6CzE0AiZNL-3YwU-u-Raczn3/view",
      },
      {
        title: "Фізична культура (2 семестр)",
        url: "https://docs.google.com/document/d/1dBnFSf4JzQITSrQB-5fHk-wetIBj2Ur6/view",
      },
      {
        title: "Літературне читання (2 семестр)",
        url: "https://docs.google.com/document/d/1KWCVaHfQ4Vun7Bk5DW0JrtLSa9BCtepl/view",
      },
      {
        title: "Я досліджую світ (2 семестр)",
        url: "https://docs.google.com/document/d/1InB_AzAmQ95wvLwcgm7pVpyZ3vG1VM_Z/view",
      },
    ],
  },
  {
    class: "4 клас",
    items: [
      {
        title: "Дизайн і технології (1 семестр)",
        url: "https://docs.google.com/document/d/1uz14ZOfRNdEqmVboTjm9j0G3bkso71Bi/view",
      },
      {
        title: "Математика (1 семестр)",
        url: "https://docs.google.com/document/d/1lzigXokQhPnJePqziLl7xANkFIBMYBd3/view",
      },
      {
        title: "Образотворче мистецтво (1 семестр)",
        url: "https://docs.google.com/document/d/1LO5-0koOEkP3dX8FSgFwfobvl7zrJKNW/view",
      },
      {
        title: "Українська мова (1 семестр)",
        url: "https://docs.google.com/document/d/1Q-o54FxyLlQq5ywfgYZWnDrA8HOKP988/view",
      },
      {
        title: "Фізична культура (1 семестр)",
        url: "https://docs.google.com/document/d/1vWYX1umwMAAlDAx9WeKce1GPXVQjD14d/view",
      },
      {
        title: "Літературне читання (1 семестр)",
        url: "https://docs.google.com/document/d/1cmJOHuthmAOrAq9_IzechF0HJ1vZMJIZ/view",
      },
      {
        title: "Я досліджую світ (1 семестр)",
        url: "https://docs.google.com/document/d/1UwYB5Z3eNjiH5OS-nhhhl4rSEXE_CoeM/view",
      },
      {
        title: "Дизайн і технології (2 семестр)",
        url: "https://docs.google.com/document/d/1W88KmsSSBm-NBy5FhrXWyDGndSvKNtCY/view",
      },
      {
        title: "Дизайн і технології (до альбому Трудівничок) (2 семестр)",
        url: "https://docs.google.com/document/d/1eVFOhiwrBHyxIH0z5W1fruWIC6kZah5-/view",
      },
      {
        title: "Математика (2 семестр)",
        url: "https://docs.google.com/document/d/1tfo9NJqYzUUweVunDlyrZmdqsq7i48zE/view",
      },
      {
        title: "Образотворче мистецтво (2 семестр)",
        url: "https://docs.google.com/document/d/1MMjwch3fKhgdaNRl_dLC4YCZa6VjMOBk/view",
      },
      {
        title: "Українська мова (2 семестр)",
        url: "https://docs.google.com/document/d/1yF1YU5HPC3GhiYlxcKW-AbMKN9HFHn9S/view",
      },
      {
        title: "Фізична культура (2 семестр)",
        url: "https://docs.google.com/document/d/1vWYX1umwMAAlDAx9WeKce1GPXVQjD14d/view",
      },
      {
        title: "Літературне читання (2 семестр)",
        url: "https://docs.google.com/document/d/18BkSWlIp4_yn1IanA33KfWD-optwBZtL/view",
      },
      {
        title: "Я досліджую світ (2 семестр)",
        url: "https://docs.google.com/document/d/1vpqJvZXt8tj4X_zrPNt5yxYgCi2brPB1/view",
      },
    ],
  },
];

function RouteComponent() {
  return (
    <Tabs>
      {data.map((classData) => (
        <Tabs.Tab
          key={classData.class}
          title={classData.class}
          id={classData.class}
        >
          <ul className="ml-4 list-disc">
            {classData.items
              .toSorted((a, b) => a.title.localeCompare(b.title))
              .map((item) => (
                <li key={item.url}>
                  <ExternalLink href={item.url}>{item.title}</ExternalLink>
                </li>
              ))}
          </ul>
        </Tabs.Tab>
      ))}
    </Tabs>
  );
}
