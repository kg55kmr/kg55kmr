import i1 from "./1.jpg";
import i2 from "./2.jpg";

export const title = "Правила безпечної поведінки в мережі Інтернет";

export function Content() {
  return (
    <div className="flex flex-wrap items-center justify-center">
      <img src={i1} className="w-160" />
      <img src={i2} className="w-140" />
    </div>
  );
}
