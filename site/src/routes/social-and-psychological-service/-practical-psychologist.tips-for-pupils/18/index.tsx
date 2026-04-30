import i1 from "./1.jpg";
import i2 from "./2.jpg";
import i3 from "./3.jpg";
import i4 from "./4.jpg";

export const title = "Булінг";

export function Content() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-6">
      <img src={i1} className="w-120" />
      <img src={i2} className="w-120" />
      <img src={i3} className="w-120" />
      <img src={i4} className="w-120" />
    </div>
  );
}
