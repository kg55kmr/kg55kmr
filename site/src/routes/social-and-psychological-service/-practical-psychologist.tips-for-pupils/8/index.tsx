import i1 from "./1.jpg";
import i2 from "./2.jpg";

export const title = "COVID-19";

export function Content() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-5">
      <img src={i1} className="w-104" />
      <img src={i2} className="w-104" />
    </div>
  );
}
