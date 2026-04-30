import { address } from "~/data/common";
import { useSectionMenu } from "~/hooks/use-sections";
import { asset } from "~/lib/utils";
import { Link } from "./link";

export function LayoutFooter() {
  const sections = useSectionMenu().at(-1)?.groups[0];
  return (
    <div className="font-philosopher grid justify-center gap-10 bg-blue-950 py-4 text-white md:grid-cols-3 md:gap-0 md:px-30">
      <div>
        <div className="mb-2 text-2xl">АДРЕСА</div>
        {address.map((v) => (
          <div key={v}>{v}</div>
        ))}
      </div>
      <div>
        <div className="mb-2 text-2xl">РОЗДІЛИ</div>
        <ul>
          {sections?.items.map((item) => (
            <li key={item.title}>
              <Link {...item} className="text-white hover:border-b-2">
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <img
        src={asset("images/емблема.webp")}
        className="w-40 place-self-center"
      />
    </div>
  );
}
