import image from "./1.jpg";

export const title = "Як виховати стійкість у воєнний час";

export const preview =
  "Практичні рекомендації для дорослих щодо підтримки дітей: чому важливо говорити, обмежувати потік новин, дотримуватися розпорядку дня, дбати про себе та вчасно помічати приховані ознаки тривоги і страху.";

export function Content() {
  return <img src={image} className="mx-auto w-148" />;
}
