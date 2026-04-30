import i1 from "./1.jpg";
import i2 from "./2.jpg";
import i3 from "./3.jpg";

export function Content() {
  return (
    <div className="flex flex-col gap-5">
      <img src={i1} />
      <img src={i2} />
      <img src={i3} />
    </div>
  );
}
