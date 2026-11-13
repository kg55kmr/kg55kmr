import { createFileRoute } from "@tanstack/react-router";
import { Feed } from "~/components/feed";
import { ExternalLink } from "~/components/link";
import { asset } from "~/lib/utils";

export const Route = createFileRoute(
  "/educational-work/safe-educational-environment/information-digest",
)({
  component: RouteComponent,
  staticData: {
    title: "Інформаційний дайджест",
  },
});

const entries = import.meta.glob("./-safe-educational-environment/*/*.tsx", {
  eager: true,
});

function RouteComponent() {
  return (
    <div className="content">
      <Feed items={entries} />
      <img src={asset("images/stop-bullying.jpg")} className="mx-auto w-80" />

      <ul>
        <li>
          <ExternalLink href="http://llt.multycourse.com.ua/ua/page/22/103#2">
            Про булінг
          </ExternalLink>
        </li>
        <li>
          <ExternalLink href="http://llt.multycourse.com.ua/ua/page/22/103#4">
            Жертви та ініціатори булінгу
          </ExternalLink>
        </li>
        <li>
          <ExternalLink href="http://llt.multycourse.com.ua/ua/page/22/103#5">
            Форми та види булінґу
          </ExternalLink>
        </li>
        <li>
          <ExternalLink href="http://llt.multycourse.com.ua/ua/page/22/103#6">
            Наслідки шкільного насилля
          </ExternalLink>
        </li>
        <li>
          <ExternalLink href="http://llt.multycourse.com.ua/ua/page/22/103#7">
            Як реагувати на цькування
          </ExternalLink>
        </li>
        <li>
          <ExternalLink href="http://llt.multycourse.com.ua/ua/page/22/103#8">
            Що можуть зробити батьки
          </ExternalLink>
        </li>
        <li>
          <ExternalLink href="http://llt.multycourse.com.ua/ua/page/22/103#9">
            Що можуть зробити вчителі
          </ExternalLink>
        </li>
        <li>
          <ExternalLink href="http://llt.multycourse.com.ua/ua/page/22/103#10">
            Навчання навичок протидії булінґу у закладі
          </ExternalLink>
        </li>
        <li>
          <ExternalLink href="https://minjust.gov.ua/m/str_19188">
            Захист прав дітей в україні з урахуванням міжнародних договорів з
            питань сімейного права
          </ExternalLink>
        </li>
        <li>
          <ExternalLink href="https://drive.google.com/drive/folders/1Dk39QXQTYicI1Ularf_iTY5eMykSDvM9">
            Методичні розробки, посібники
          </ExternalLink>
        </li>
        <li>
          <ExternalLink href="https://www.youtube.com/playlist?list=PLRRIw-HYRJOqp7tzV3Buwt7aZGfwj5ZHY">
            Відеоматеріали
          </ExternalLink>
        </li>
        <li>
          <ExternalLink href="https://drive.google.com/file/d/1bcWQUpJ490m-HQu4XjXzctAFOt-dgM7F/view">
            Інформація про відповідальність осіб, причетних до булінгу
          </ExternalLink>
        </li>
      </ul>
    </div>
  );
}

