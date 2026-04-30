import image from "./1.jpg";

export const title = "Пам'ятка для батьків у час воєнної небезпеки";

export function Content() {
  return <img src={image} className="mx-auto w-148" />;
}
