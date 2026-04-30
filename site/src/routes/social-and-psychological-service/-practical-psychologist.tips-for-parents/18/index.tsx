import image1 from "./1.jpg";
import image2 from "./2.jpg";

export const title = "Всесвітній день психічного здоров'я";

export function Content() {
  return (
    <div className="content">
      <div className="flex flex-wrap justify-center gap-3">
        <img src={image1} className="w-120" />
        <img src={image2} className="w-120" />
      </div>
    </div>
  );
}
