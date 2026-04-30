import { createFileRoute } from "@tanstack/react-router";
import { ExternalLink } from "~/components/link";
import { asset } from "~/lib/utils";

export const Route = createFileRoute("/educational-process/subject-weeks")({
  component: RouteComponent,
  staticData: {
    title: "Предметні тижні",
  },
});

function RouteComponent() {
  return (
    <>
      <div className="content">
        <h1>Терміни проведення предметних тижнів</h1>
        <div className="content flex flex-wrap items-center">
          <img src={asset("images/предметні-тижні.jpg")} className="h-80" />
          <ul>
            {data.map((item) => (
              <li key={item.academicYear}>
                <ExternalLink href={item.url}>
                  {item.academicYear} н.р.
                </ExternalLink>
              </li>
            ))}
          </ul>
        </div>
        <p>
          До системи позакласної роботи, що склалася в загальноосвітньому
          закладі, входять предметні тижні.
        </p>
        <p>
          Проведення предметних тижнів сьогодні є однією з основних форм
          проведення позакласної роботи в школі. Проведенню предметного тижня
          передує велика підготовча робота протягом тривалого часу.
        </p>
        <p>
          Метою організації і проведення різних заходів під час предметного
          тижня є:
        </p>
        <ul>
          <li>пропаганда знань;</li>
          <li>
            підвищення інтересу учнів до предметів, розвиток ініціативи,
            учнівської творчості;
          </li>
          <li>
            виховання в учнів потреби щодо використання науково-популярної
            літератури та інших джерел інформації для поповнення знань;
          </li>
          <li>поглиблення знань учнів;</li>
          <li>професійна орієнтація.</li>
        </ul>
        <p>
          Предметні тижні проводяться щорічно і переважно в один і той же час
          навчального року. Провідна роль в організації предметного тижня
          належить учням, але особливістю є те, що приймати участь повинні всі
          учні гімназії.
        </p>
      </div>
    </>
  );
}

const data = [
  {
    academicYear: "2025-2026",
    url: "https://docs.google.com/document/d/1SsiY_Bei7EZ5UkvmD9xXQ7tbrVHXDF6D/view",
  },
  {
    academicYear: "2024-2025",
    url: "https://docs.google.com/document/d/1Br8KRdKH_5ZNdOSgSV6EAz3mheflaQSO/view",
  },
  {
    academicYear: "2023-2024",
    url: "https://docs.google.com/document/d/15WuvWrkNC3EkU42k8Tq9_8iBPP2VS0GW/view",
  },
  {
    academicYear: "2022-2023",
    url: "https://docs.google.com/document/d/111S9T2kUOiEbAKhVtqAFnD6i5PhEUMRZ/view",
  },
  {
    academicYear: "2020-2021",
    url: "https://docs.google.com/document/d/15yYYSDBzZfA-ly1sDCcU6S5TD1wlZhKF/view",
  },
  {
    academicYear: "2019-2020",
    url: "https://docs.google.com/document/d/1XhSJGRNpHX-RzvSvM2SOIQelUbUAPOl8/view",
  },
  {
    academicYear: "2018-2019",
    url: "https://docs.google.com/document/d/1skDwKKqTdr9CJyLzXSHwZS5Y5EGcm841/view",
  },
  {
    academicYear: "2017-2018",
    url: "https://docs.google.com/document/d/1MmjxBYBAM7whiivOybFujOObL2tQiR64/view",
  },
  {
    academicYear: "2016-2017",
    url: "https://docs.google.com/document/d/1xqJDod-ViV4wFDt_fOtsjpjKZvJ1zC84/view",
  },
];
