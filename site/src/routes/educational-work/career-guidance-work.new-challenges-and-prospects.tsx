import { createFileRoute } from "@tanstack/react-router";
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
    <div className="content">
      <h1>
        Партнерство школи, родини й громади в професійному самовизначенні учнів.
        (Алтинбаєва Л.М.)
      </h1>
      <ImageKitCarousel path="educational-work/educational-work-and-career-guidance/1" />

      <h1>
        Формування професійного самовизначення учнів у нових умовах. (Гнатюк
        А.С.)
      </h1>
      <ImageKitCarousel path="educational-work/educational-work-and-career-guidance/2" />

      <h1>
        Профорієнтацію в контексті Нової української школи. (Лисенко О.Б.)
      </h1>
      <ImageKitCarousel path="educational-work/educational-work-and-career-guidance/3" />

      <h1>
        Формування готовності учнів до свідомого вибору професії. (Рябоконь
        Н.О.)
      </h1>
      <ImageKitCarousel path="educational-work/educational-work-and-career-guidance/4" />

      <h1>
        Гру як засіб формування в дітей уявлення про професії. (Таран Н.В.)
      </h1>
      <ImageKitCarousel path="educational-work/educational-work-and-career-guidance/5" />

      <h1>
        Формування творчих здібності учнів: інтерактивна профорієнтація через
        музичне мистецтво. (Дубачинська Н.О.)
      </h1>
      <ImageKitCarousel path="educational-work/educational-work-and-career-guidance/6" />
    </div>
  );
}
