import { createFileRoute } from "@tanstack/react-router";
import { Fragment } from "react";
import { ExternalLink } from "~/components/link";

export const Route = createFileRoute(
  "/educational-process/results-of-textbook-selection",
)({
  component: RouteComponent,
  staticData: {
    title: "Результати вибору підручників",
  },
});

function RouteComponent() {
  return (
    <table className="table-border table-content-center mx-auto">
      <colgroup>
        <col className="w-0" />
        <col className="w-0" />
        <col className="w-60" />
        <col className="w-60" />
      </colgroup>
      <thead>
        <tr>
          <th className="font-bold">Клас</th>
          <th className="font-bold">Тип</th>
          <th className="font-bold">Результат вибору</th>
          <th className="font-bold">Протокол</th>
        </tr>
      </thead>
      <tbody>
        {data.map((v) => (
          <Fragment key={v.academicYear}>
            <tr>
              <td colSpan={4} className="text-center font-bold">
                {v.academicYear} н.р.
              </td>
            </tr>
            {v.items.map((item) => (
              <tr key={item.url}>
                <td>{item.class}</td>
                <td>
                  {item.kind === "order" ? " замовлення" : " дозамовлення"}
                </td>
                <td>
                  <ExternalLink href={item.url}>Посилання</ExternalLink>
                </td>
                <td>
                  {item.protocol && (
                    <ExternalLink href={item.protocol}>Посилання</ExternalLink>
                  )}
                </td>
              </tr>
            ))}
          </Fragment>
        ))}
      </tbody>
    </table>
  );
}

const data: Data[] = [
  {
    academicYear: "2025-2026",
    items: [
      {
        class: 1,
        kind: "order",
        url: "https://drive.google.com/file/d/1s7Eoo0Q_n2lXbYgY5A4PeQlUZWTYM2PJ/view",
        protocol:
          "https://drive.google.com/file/d/1vihs_WZLJ8qwFLiUEO9VEzB2ZFwsyVTX/view",
      },
      {
        class: 2,
        kind: "order",
        url: "https://drive.google.com/file/d/1c5lAOO2C87eQYuZSy28cV2BJpCgNLrwf/view",
        protocol:
          "https://drive.google.com/file/d/1vihs_WZLJ8qwFLiUEO9VEzB2ZFwsyVTX/view",
      },
      {
        class: 3,
        kind: "order",
        url: "https://drive.google.com/file/d/1LsGZhx1qgMROYhp85YtF05g2t_DhN45m/view",
        protocol:
          "https://drive.google.com/file/d/1_mhZcABsbGOZAot7m0T1Z2uCKPZwQ5va/view",
      },
      {
        class: 8,
        kind: "order",
        url: "https://drive.google.com/file/d/1C8jJUNHctehMEw1U8YU3PKtDRoHUxk_Q/view",
        protocol:
          "https://drive.google.com/file/d/1T9q0rMTL1kuP8J8GYMOzHweqg3c1j_X3/view",
      },
    ],
  },
  {
    academicYear: "2024-2025",
    items: [
      {
        class: 1,
        kind: "order",
        url: "https://drive.google.com/file/d/1-M-EYc6CB_vdLZsWn8RgyaJ9tYlkAKJi/view",
        protocol:
          "https://drive.google.com/file/d/1_iD9cq1KMcBiH_tZEa4YYb5bJNJkeUNO/view",
      },
      {
        class: 2,
        kind: "order",
        url: "https://drive.google.com/file/d/12rtgbcxAVfW4GhwEqdxLts3gnh8EXX7r/view",
        protocol:
          "https://drive.google.com/file/d/1kceNBiywDZGB1WOq7CXrtw1n-RKnbUjn/view",
      },
    ],
  },
  {
    academicYear: "2023-2024",
    items: [
      {
        class: 1,
        kind: "order",
        url: "https://drive.google.com/file/d/1rGgOg_gEWPhPTZ6MJxEyytWiBCHebx-L/view",
        protocol:
          "https://drive.google.com/file/d/1hCm0w_Vv7HQxw8TEbbkq-CL8vl6bIvEc/view",
      },
      {
        class: 6,
        kind: "order",
        url: "https://drive.google.com/file/d/19hbFa6B8t8JyczkaVrqzc6di0cglWYDk/view",
        protocol:
          "https://drive.google.com/file/d/1IHC1kCK5Xu9jQpu1EzOBuAaUzJ6ExL2-/view",
      },
    ],
  },
  {
    academicYear: "2022-2023",
    items: [
      {
        class: 5,
        kind: "order",
        url: "https://drive.google.com/file/d/1GLEUEbpjvJhqv1diT2n7iJ7GCIvkyQlA/view",
      },
      {
        class: 9,
        kind: "order",
        url: "https://drive.google.com/file/d/1-6jbhTG5gTVcjKyq4qfwbHGJED_49lEP/view",
      },
      {
        class: 9,
        kind: "additional-order",
        url: "https://drive.google.com/file/d/1ADBex813nDmueu_DClZq7N88Va0uFoGK/view",
      },
    ],
  },
  {
    academicYear: "2021-2022",
    items: [
      {
        class: 4,
        kind: "additional-order",
        url: "https://drive.google.com/file/d/1Hoc8yt7nnEl73NAcgEMkqKo50Jok0sxf/view",
      },
      {
        class: 8,
        kind: "order",
        url: "https://drive.google.com/file/d/1ZzPH9WTdZBe-QRDjWJQhUBMlYVj_5Evm/view",
      },
      {
        class: 8,
        kind: "additional-order",
        url: "https://drive.google.com/file/d/1tgzUHAIP7nj691WnS9FqhLZ7G61jw6FS/view",
      },
    ],
  },
];

type Data = {
  academicYear: string;
  items: {
    class: number;
    kind: "order" | "additional-order";
    url: string;
    protocol?: string;
  }[];
};
