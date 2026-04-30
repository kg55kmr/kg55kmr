import { useState } from "react";
import { cn } from "~/lib/utils";
import { Loader } from "./loader";

type Props = {
  src: string;
  className?: string;
};

export function Embed(props: Props) {
  const [loading, setLoading] = useState(true);
  return (
    <>
      {loading && <Loader />}
      <iframe
        src={props.src}
        onLoad={() => setLoading(false)}
        className={cn(
          "mx-auto aspect-4/3 w-230 max-w-full not-last-of-type:mb-2",
          loading && "invisible",
          !loading && "visible",
          props.className,
        )}
      />
    </>
  );
}
