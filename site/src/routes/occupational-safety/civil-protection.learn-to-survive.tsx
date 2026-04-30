import { createFileRoute } from "@tanstack/react-router";
import { ExternalLink } from "~/components/link";

export const Route = createFileRoute(
  "/occupational-safety/civil-protection/learn-to-survive",
)({
  component: RouteComponent,
  staticData: {
    title: "Знати, щоб вижити",
  },
});

function RouteComponent() {
  return (
    <div className="content flex w-full flex-wrap justify-between gap-5 px-10">
      <div>
        <h1 className="text-xl">Алгоритми дій у надзвичайних ситуаціях</h1>
        <Links items={items1} />
      </div>
      <div>
        <h1 className="text-xl">
          Загальні правила безпеки при загрозі терористичного акту
        </h1>
        <Links items={items2} />
      </div>
      {/* TODO: embed playlist: https://www.youtube.com/playlist?list=PLUhNavUIrwxx0MI5WTkDMC9MAxGA6gsHl */}
    </div>
  );
}

function Links(props: { items: typeof items1 }) {
  return (
    <ul>
      {props.items.map((v) => (
        <li key={v.url}>
          <ExternalLink href={v.url}>{v.text}</ExternalLink>
        </li>
      ))}
    </ul>
  );
}

const items1 = [
  {
    text: "Дії під час артилерійського обстрілу житлових масивів",
    url: "https://docs.google.com/document/d/1J2mqmTKisYCHabIlGaopLN6nfaRo2r1o/view",
  },
  {
    text: "Ваші дії при захопленні автобуса (тролейбуса, трамвая)",
    url: "https://docs.google.com/document/d/1MIlXzQ406IShLThr-SGzm0QBmhzTuICQ/view",
  },
  {
    text: "Що робити під час евакуації",
    url: "https://docs.google.com/document/d/1nADuvlSOCN9nRa401NoirlF41_JcvmSo/view",
  },
  {
    text: "Якщо вас взяли у заручники",
    url: "https://docs.google.com/document/d/1Qop1ofd2f6KZ5hDwCh5PPqqbydJ0fC_E/view",
  },
  {
    text: "Пам’ятка населенню про евакуацію",
    url: "https://docs.google.com/document/d/1CFpZU8EoODSf9-i_aeARQoUifugz25mN/view",
  },
  {
    text: "Як поводити себе у натовпі",
    url: "https://docs.google.com/document/d/1JNV95m1Ny6KpAF0KwP4l4xyHVgFz3ZSr/view",
  },
  {
    text: "Набір для виживання",
    url: "https://docs.google.com/document/d/1VSJWopTAG5JwoxupGghyxj8GaajFj1Xy/view",
  },
  {
    text: "Перша допомога у разі поранення",
    url: "https://docs.google.com/document/d/1NgUpMslV1eM99Br4E7o5Twma7W8DrxHB/view",
  },
];

const items2 = [
  {
    text: "Сімейний план дій при надзвичайних обставинах",
    url: "https://docs.google.com/document/d/1GVOcCdXP9htCNKNEUk0PVQBIl7rZYHC3/view",
  },
  {
    text: "Поради психолога при поведінці у екстремальній ситуації",
    url: "https://docs.google.com/document/d/1eM_V8fwO4SSeXhVBHCQFB_7gExWOsb1j/view",
  },
  {
    text: "Як виявити терориста",
    url: "https://docs.google.com/document/d/15BFTR8s1BrOFn7LxrcshLm2HHc1NV7y9/view",
  },
  {
    text: "Дії під час артилерійського обстрілу",
    url: "https://docs.google.com/document/d/1hiAxYLXdhFtjnGB-vzvJM6i_6obJaMX-/view",
  },
];
