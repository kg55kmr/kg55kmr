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
    academicYear: "2026-2027",
    url: "https://drive.google.com/file/d/16Gri2Sgxzhlxlfmtl0yDWfMQENkwHASB/preview",
  },
  {
    academicYear: "2025-2026",
    url: "https://drive.google.com/file/d/1wpE2g0wW18w4lprCBrP2_21-7IA04V8X/preview",
  },
  {
    academicYear: "2024-2025",
    url: "https://drive.google.com/file/d/1VWtvfZ0Xw_qA3nioz6NCRLAnMBN1MGLf/preview",
  },
  {
    academicYear: "2023-2024",
    url: "https://drive.google.com/file/d/16q_VMrZ4knKLgMxIBIPxLRiILTcpQAaf/preview",
  },
  {
    academicYear: "2022-2023",
    url: "https://drive.google.com/file/d/19ireft87eCpEKFQ-8OiBdhlnVPrK5_jV/preview",
  },
  {
    academicYear: "2020-2021",
    url: "https://drive.google.com/file/d/1sQtTZ0hHAfmGwxqXsJ03UOJviKG1KjT4/preview",
  },
  {
    academicYear: "2019-2020",
    url: "https://drive.google.com/file/d/1-Zorni8ZXvxd4JOpBNA6FWlfMu1whf4H/preview",
  },
  {
    academicYear: "2018-2019",
    url: "https://drive.google.com/file/d/1Lv80oUqqMtJRG9albnR8zZaUbj9k43Zp/preview",
  },
  {
    academicYear: "2017-2018",
    url: "https://drive.google.com/file/d/1TBI_TWW-HHBG0bdFM2rPFKKoi-wpZggQ/preview",
  },
  {
    academicYear: "2016-2017",
    url: "https://drive.google.com/file/d/1CDpeQ7nHc5b1vxmhNQqyrqmTpsSzvdVg/preview",
  },
];
