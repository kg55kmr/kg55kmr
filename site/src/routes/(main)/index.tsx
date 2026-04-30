import type { PostType } from "posts";
import { useSuspenseQuery } from "@tanstack/react-query";
import { createFileRoute, linkOptions } from "@tanstack/react-router";
import { type ReactNode, Fragment } from "react";
import { ClientOnlySuspense } from "~/components/client-only-suspense";
import { ExternalLink, Link } from "~/components/link";
import { yearsList } from "~/data/distance-learning";
import { employees } from "~/data/employees";
import { postsSHAQuery, useYouTubeList } from "~/hooks/use-queries";
import { useSections } from "~/hooks/use-sections";
import {
  formatPostDate,
  getLatestPosts,
  getPostThumbnailUrl,
  postTypes,
} from "~/lib/posts";
import { asset, dirAsset } from "~/lib/utils";
import { type BlockItem, Blocks } from "./-components/blocks";
import { LatestPosts } from "./-components/latest-posts";

export const Route = createFileRoute("/(main)/")({
  component: RouteComponent,
  staticData: {
    title: "Головна",
  },
});

function RouteComponent() {
  const director = employees.director();
  return (
    <>
      <div className="grid sm:grid-cols-4">
        <div className="col-span-1">
          <img src={director.image} className="mx-auto w-40" />
          <div className="text-center">
            <b>{director.name}</b>
            <br />
            директор гімназії
          </div>
        </div>
        <article className="font-philosopher content text-xl sm:col-span-3">
          <p>
            Вітаємо на офіційному веб-сайті навчального закладу – Криворізької
            гімназії №55. Створюючи веб-сайт, намагалися дбати про його
            своєчасне та змістовне наповнення, зручність використання,
            забезпечення участі всіх учасників навчально-виховного процесу у
            діяльності закладу освіти.
          </p>
          <p>
            Наповнюючи сайт інформативними матеріалами, прагнули консолідації
            експертно-аналітичного, інтелектуального, організаційного,
            професійного педагогічного потенціалів та багаторічного практичного
            досвіду української педагогічної еліти, учителів навчального
            закладу, кращих педагогів-новаторів. Крім того, на веб-сайті
            використані матеріали українських Інтернет-сервісів,
            контент-провайдерів, електронних і традиційних засобів масової
            інформації.
          </p>
          <p>
            Намагаємося вчасно і систематично знайомити постійних відвідувачів
            веб-сайту з новинами в освітньому просторі гімназії, району, міста,
            України; систематично поновлюємо та поповнюємо нормативні документи;
            ділимося власними досягненнями у професійній діяльності закладу.
            Інформуємо, пропагуємо, висвітлюємо…
          </p>
          <p>
            На сторінках веб-сайту гімназії можна дізнатися про всі події, які
            відбуваються у нашій гімназії.
          </p>
          <p>
            Постійно осучаснюємо та змінюємо такі категорії: контент, зручність,
            динаміку, дизайн та технічні показники.
          </p>
          <p>
            Розміщуємо інформацію, яка може бути корисною та цікавою учням,
            батькам, учителям, громадським та професійним об’єднанням.
          </p>
          <p>
            Учителі нашого закладу не лише користуються передовим педагогічним
            досвідом, але й мають чим поділитися з власної педагогічної
            скарбниці. Мріємо, щоб наша гімназія була не лише кращою у
            Тернівському районі, але однією з кращих у рідному місті.
          </p>
          <p>
            Ми все робимо для того, щоб гімназія осучаснювалася, щоб з'являлися
            нові можливості розвитку учнів, підвищувалася якість освіти, щоб
            шкільне життя в гімназії було цікавим і яскравим. Це можливо, якщо
            ми об'єднаємо свої зусилля і будемо відкриті для обговорення всіх
            проблем.
          </p>
          <p>
            Ми бажаємо Вам успіхів в дуже складній і важливій справі – навчанні,
            вихованні та освіті дітей!
          </p>
          <p>
            З найкращими побажаннями педагогічний колектив Криворізької гімназії
            №55.
          </p>
        </article>
      </div>
      <Header>РОЗДІЛИ САЙТУ</Header>
      <Sections />
      <Header>
        <Link to="/distance-learning" className="text-[blue]">
          ДИСТАНЦІЙНЕ НАВЧАННЯ
        </Link>
      </Header>
      <DistanceLearning />
      <Header>КАРТКА КРИВОРІЖЦЯ</Header>
      <Card />
      <ClientOnlySuspense>
        <Posts hide={["camp"]} />
      </ClientOnlySuspense>
      <ClientOnlySuspense>
        <Playlists />
      </ClientOnlySuspense>
      <Header>КОРИСНІ САЙТИ</Header>
      <UsefulSites />
    </>
  );
}

function Sections() {
  const sections = useSections()
    .slice(1)
    .map((v) => ({
      title: v.title,
      image: v.thumbnail,
      to: v.to,
    })) satisfies BlockItem[];
  return <Blocks items={sections} className="h-16" />;
}

function DistanceLearning() {
  const items = [
    ...yearsList.map((years) => ({
      title: `Архів\n${years}`,
      image: `images/дистанційне-навчання-${years}.jpg`,
      ...linkOptions({
        to: "/distance-learning",
        search: { years },
      }),
    })),
    {
      title: "Електронні підручники",
      image: asset("images/електронні-підручники.jpg"),
      ...linkOptions({ to: "/textbooks" }),
    },
  ] satisfies BlockItem[];

  return <Blocks items={items} className="h-16" />;
}

function Card() {
  const items = [
    {
      title: "Інструкція\nщодо встановлення додатку\ne-school у Telegram",
      image: asset("images/картка-криворіжця.jpg"),
      href: "https://drive.google.com/file/d/1SRroINK98EnSIb3F10HJYk-I6te1Bayw/view",
    },
    {
      title: "Інструкція\nщодо поповнення карти криворіжція",
      image: asset("images/картка-криворіжця.jpg"),
      href: asset("documents/інструкція-картка-криворіжця.pdf"),
    },
  ] satisfies BlockItem[];

  return <Blocks items={items} className="h-24" />;
}

function Posts(props: { hide?: [PostType] }) {
  const { data: sha } = useSuspenseQuery(postsSHAQuery);
  const posts = useSuspenseQuery({
    queryKey: ["latest posts"],
    queryFn: () => getLatestPosts(sha),
  }).data;

  return Object.entries(postTypes)
    .filter(([type]) => !props.hide?.includes(type as PostType))
    .map(([type, { title, to, params }]) => {
      const items = [...posts[type].pin, ...posts[type].items].map((post) => ({
        title: post.title,
        date: formatPostDate(post.date),
        preview: getPostThumbnailUrl(type, post.id, sha),
        link: linkOptions({
          to: "/posts/$type/$id",
          params: { type: type as PostType, id: post.id },
        }),
        pin: post.pin,
      }));

      return (
        <Fragment key={title}>
          <Header>
            <Link to={to} params={params} className="text-[blue]">
              {title.toUpperCase()}
            </Link>
          </Header>
          <LatestPosts items={items} />
        </Fragment>
      );
    });
}

function Playlists() {
  const items = [
    { title: "УРОКИ АВРАМЕНКА", id: "PLEoEWGEBriPCTBIOQbXIIDzFFakriePu-" },
  ];

  const list = useYouTubeList(
    items.map((i) => i.id),
    1,
  );

  function buildPlaylistUrl(id: string) {
    return `https://www.youtube.com/playlist?list=${id}`;
  }

  return items.map((item, i) => {
    const posts = list[i].map((post) => ({
      title: post.title,
      date: formatPostDate(post.date),
      preview: post.thumbnail,
      link: { href: post.url },
    }));

    return (
      <Fragment key={i}>
        <Header>
          <ExternalLink
            href={buildPlaylistUrl(item.id)}
            className="text-[blue]"
          >
            {item.title}
          </ExternalLink>
        </Header>
        <LatestPosts items={posts} />
      </Fragment>
    );
  });
}

function UsefulSites() {
  type UsefulSite = {
    href: string;
    image: string;
    title: string;
  };

  const thumbnail = dirAsset("images/корисні-сайти/");

  const items: UsefulSite[] = [
    {
      href: "https://mon.gov.ua/",
      image: thumbnail("mon-gov-ua.jpg"),
      title: "Міністерство освіти і науки України",
    },
    {
      href: "https://don.kr.ua",
      image: thumbnail("don-kr-ua.jpg"),
      title: "Департамент освіти і науки виконкому Криворізької міської ради",
    },
    {
      href: "https://dneprtest.dp.ua/",
      image: thumbnail("dneprtest-dp-ua.jpg"),
      title: "Дніпропетровський регіональний центр оцінювання якості освіти",
    },
    {
      href: "https://kr.gov.ua/",
      image: thumbnail("kr-gov-ua.jpg"),
      title: "Виконавчий комітет Криворізької міської ради",
    },
    {
      href: "https://cprppkr.education/",
      image: thumbnail("cprppkr.jpg"),
      title: 'КЗ "ЦПРПП" КМР',
    },
    {
      href: "https://www.dano.dp.ua/",
      image: thumbnail("dano.jpg"),
      title: "Дніпровська академія неперервної освіти",
    },
    {
      href: "https://ternivvo.dnepredu.com/uk/site/golovna-storinka.html",
      image: thumbnail("ternivvo.jpg"),
      title: "Відділ освіти виконкому Тернівської районної у місті ради",
    },
    {
      href: "http://osvita.ua/",
      image: thumbnail("osvita-ua.jpg"),
      title: "Освіта в Україні та за кордоном",
    },
    {
      href: "https://disted.edu.vn.ua/media/bp/html/etusivu.htm",
      image: thumbnail("disted-edu-vn.jpg"),
      title: "On-ландія - безпечна веб-країна",
    },
    {
      href: "https://sqe.gov.ua/",
      image: thumbnail("sqe-gov-ua.jpg"),
      title: "Державна служба якості освіти",
    },
  ];
  return <Blocks items={items} className="h-24" />;
}

function Header(props: { children: ReactNode }) {
  return (
    <h1 className="font-philosopher mt-15 mb-4 text-center text-5xl">
      {props.children}
    </h1>
  );
}
