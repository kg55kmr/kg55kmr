import { createFileRoute } from "@tanstack/react-router";
import { ExternalLink } from "~/components/link";
import { asset } from "~/lib/utils";

export const Route = createFileRoute(
  "/educational-process/gifted-pupils/сompetition-regulations",
)({
  component: RouteComponent,
  staticData: {
    title: "Положення конкурсів",
  },
});

function RouteComponent() {
  return (
    <div className="content">
      <img
        src={asset("images/положення-конкурсів.jpg")}
        className="float-right mb-4 ml-4 w-100"
      />
      <ul>
        {data.map((v) => (
          <li key={v.url}>
            <ExternalLink href={v.url}>{v.text}</ExternalLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

const data = [
  {
    text: 'Міський конкурс-захист творчих робіт "Проба пера" (І етап Всеукраїнського конкурсу-захисту науково-дослідницьких робіт учнів-членів МАН України, відділення літературознавства, фольклористики та мистецтвознавства, секція "Літературна творчість")',
    url: "https://docs.google.com/document/d/1iGPfPHGPZWaphzSQj9lCzJFEU4IOW7ZO/view",
  },
  {
    text: "Міський конкурс-захист науково-дослідницьких робіт з історії, історичного краєзнавства, етнології та археології (І етап Всеукраїнського конкурсу-захисту науково-дослідницьких робіт учнів-членів МАН України, відділення історії)",
    url: "https://docs.google.com/document/d/1YMT4gfZ7pscnAhjw49TUcXWyNcnaGHzF/view",
  },
  {
    text: 'Міський конкурс-захист науково-дослідницьких робіт "Юний філолог" (І етап Всеукраїнського конкурсу-захисту науково-дослідницьких робіт учнів-членів МАН України, відділення філології /українська мова/, літературознавства /українська література/, фольклористики та мистецтвознавства',
    url: "https://docs.google.com/document/d/1eTHJzEMq2G6wfPHhGsRdY8p2Bn5sISIW/view",
  },
  {
    text: 'Міський конкурс-захист науково-дослідницьких робіт "Лінгва" (І етап Всеукраїнського конкурсу-захисту науково-дослідницьких робіт учнів-членів МАН України, відділення філології /іноземні мови/, літературознавства / зарубіжна література/, фольклористики та мистецтвознавства)',
    url: "https://docs.google.com/document/d/12SNvEDYs_GYchKxbYSv8Yi2gPTpxdE1o/view",
  },
  {
    text: 'Міський конкурс-захист науково-дослідницьких робіт "Живана" (І етап Всеукраїнського конкурсу-захисту науково-дослідницьких робіт учнів-членів МАН України, відділення хімії та біології, наук про Землю, екології та аграрних наук)',
    url: "https://docs.google.com/document/d/1DydCzm_gJAettQGd134PDlEwQF0vC471/view",
  },
  {
    text: 'Міський конкурс-захист науково-дослідницьких робіт "Соціс" (І етап Всеукраїнського конкурсу-захисту науково-дослідницьких робіт учнів-членів МАН України, відділення філософії та суспільствознавства"',
    url: "https://docs.google.com/document/d/1Th9t_50gNDTdRgRcQZZh9eNPr2Cfi6r-/view",
  },
  {
    text: 'Міський конкурс-захист науково-дослідницьких робіт "Інфотехнос" (І етап Всеукраїнського конкурсу-захисту науково-дослідницьких робіт учнів-членів МАН України, відділення інформаційних технологій, інженерії та матеріалознавства',
    url: "https://docs.google.com/document/d/1pOvCvV1q4fAVUAoS2UdbzMeBGQjgV3oE/view",
  },
  {
    text: 'Міський конкурс-захист науково-дослідницьких робіт "Юний економіст" (І етап Всеукраїнського конкурсу-захисту науково-дослідницьких робіт учнів-членів МАН України, відділення економіки)',
    url: "https://docs.google.com/document/d/1_hH33GMaS8BO5PltAs-Hcww2XUtdSoDZ/view",
  },
  {
    text: 'Міський конкурс-захист науково-дослідницьких робіт "Едісони ХХІ століття" (І етап Всеукраїнського конкурсу-захисту науково-дослідницьких робіт учнів-членів МАН України, відділення математики, фізики та астрономії)',
    url: "https://docs.google.com/document/d/16TsSKPU4rmPOd1YfUm_4DZEpAmaA3mqd/view",
  },
  {
    text: 'Міський етап Всеукраїнського конкурсу експериментально-дослідницьких робіт "Юний дослідник"',
    url: "https://docs.google.com/document/d/1H4LOm5qcJo_QKft4O-k9E_Ird4iiH9xu/view",
  },
  {
    text: "Міський географічний турнір",
    url: "https://docs.google.com/document/d/1LGAGgdaxcxhNy4Q_KLaF1jkDP9H1Molk/view",
  },
  {
    text: "Міський турнір знавців біології",
    url: "https://docs.google.com/document/d/14ZsQY98KqDEVCe_rdEavi9aq2c76LZa8/view",
  },
  {
    text: "Міський конкурс «Я відкриваю світ науки» (4-6 класи)",
    url: "https://docs.google.com/document/d/1pKRvSeBvWg5mYw48zehJkQww5IT94h_O/view",
  },
  {
    text: "Міський турнір «Я відкриваю світ науки» (7-8 класи)",
    url: "https://docs.google.com/document/d/14SSFlYM3q2HHqbqMwKSPY7OVfaj6JBqu/view",
  },
  {
    text: 'Міський турнір "Хіміки-дослідники"',
    url: "https://docs.google.com/document/d/1DVcZVCUJ--r336gzi6rbH4pKu9DmzMdY/view",
  },
];
