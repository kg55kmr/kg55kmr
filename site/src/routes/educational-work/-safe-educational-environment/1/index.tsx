import i1 from "./1.webp";
import i2 from "./2.webp";
import i3 from "./3.webp";

export const title = "Як відрізнити булінг від звичайного конфлікту?";

export const preview =
  "Не кожна сварка чи образа у школі є цькуванням. Розбираємо на наочних прикладах головні ознаки булінгу та чим він відрізняється від звичайного підліткового конфлікту.";

export function Content() {
  return (
    <div>
      <img src={i1} className="w-full" />
      <img src={i2} className="w-full" />
      <img src={i3} className="w-full" />
    </div>
  );
}
