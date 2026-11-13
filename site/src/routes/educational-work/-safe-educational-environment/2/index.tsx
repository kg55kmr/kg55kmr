import i1 from "./1.webp";
import i2 from "./2.webp";

export function Content() {
  return (
    <div>
      <img src={i1} className="w-full" />
      <img src={i2} className="w-full" />
    </div>
  );
}
