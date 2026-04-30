import i1 from "./1.webp";
import i2 from "./2.webp";

export const title =
  "Пам'ятка для батьків дітей з особливими освітніми потребами";

export function Content() {
  return (
    <div className="flex flex-wrap items-center justify-center">
      <img src={i1} className="w-160" />
      <img src={i2} className="w-160" />
    </div>
  );
}
