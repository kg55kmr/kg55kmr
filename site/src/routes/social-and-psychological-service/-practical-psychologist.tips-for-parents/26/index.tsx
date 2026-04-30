import { ImageKitCarousel } from "~/components/carousel";

export const title = "5 технік психологічної самодопомоги для учнів 1-4 класів";

export function Content() {
  return (
    <div className="content">
      <p>
        Повітряні тривоги застають маленьких українців як удома, так і в школі.
        Хтось стійко сприймає це випробування, а комусь складно опанувати
        хвилювання. Тому існують техніки і практики самодопомоги, які допоможуть
        дітям різних вікових категорій дати раду емоціям під час загрози.
      </p>

      <ImageKitCarousel path="psychological-service/psychologist/5 технік психологічної самодопомоги для учнів 1-4 класів" />
    </div>
  );
}
