import { createFileRoute } from "@tanstack/react-router";
import { User } from "lucide-react";
import { Accordion } from "~/components/accordion";
import { ImageKitCarousel } from "~/components/carousel";

export const Route = createFileRoute(
  "/educational-work/career-guidance-work/new-challenges-and-prospects",
)({
  component: RouteComponent,
  staticData: {
    title: "Виховна робота та профорієнтація: нові виклики та перспективи",
    shortTitle: "Виховна робота та профорієнтація",
  },
});

function RouteComponent() {
  return (
    <Accordion className="font-roboto-condensed">
      {items.map((item) => (
        <Accordion.Item key={item.title} title={item.title}>
          <div className="my-2 ml-2 flex items-center gap-5">
            <User className="size-8 text-blue-700" />
            <div className="flex flex-col">
              <div className="text-gray-500">Автор презентації</div>
              <div className="text-lg font-bold">{item.author}</div>
            </div>
          </div>
          <ImageKitCarousel
            path={`educational-work/educational-work-and-career-guidance/${item.id}`}
          />
        </Accordion.Item>
      ))}
    </Accordion>
  );
}

const items = [
  {
    title:
      "Гендерночутливе освітнє середовище як складова сучасної виховної системи гімназії",
    author: "Чудна Н.В.",
    id: 1,
  },
  {
    title:
      "Формування гендерної культури учнівської молоді: роль учнівського самоврядування та практика проведення бездискримінаційних заходів",
    author: "Гудзовський І.Р.",
    id: 2,
  },
  {
    title:
      "Гендерночутливий клас: маленькі педагогічні рішення, які змінюють освітнє середовище",
    author: "Рябоконь Н.О.",
    id: 3,
  },
  {
    title:
      "Формування культури рівності та взаємоповаги серед учнів початкової школи",
    author: "Фербей В.М.",
    id: 4,
  },
  {
    title:
      "Гендерночутлива профорієнтація: формування у здобувачів освіти свідомого та неупередженого вибору майбутньої професії",
    author: "Гнатюк А.С.",
    id: 5,
  },
  {
    title:
      "Видимість жінок в історії та подолання андроцентричного підходу: від визвольних змагань XX століття до ролі жінок-захисниць у сучасній російсько-українській війні",
    author: "Неплях Є.О.",
    id: 6,
  },
  {
    title:
      "Від жарту до булінгу: як розпізнати гендерно зумовлені образи та приниження",
    author: "Тельвак Н.В.",
    id: 7,
  },
];
