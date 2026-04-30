import { Fragment } from "react";

type Props = {
  text: string;
  highlight: string;
};

const prev = new Map<string, RegExp>();

export function Highlight(props: Props) {
  if (props.highlight.length === 0) return props.text;
  const reText = `(${props.highlight})`;

  let regex = prev.get(reText);
  if (!regex) {
    regex = new RegExp(reText, "gi");
    prev.clear();
    prev.set(reText, regex);
  }

  const parts = props.text.split(regex);

  return parts.map((v, i) => (
    <Fragment key={i}>
      {v.toLowerCase() === props.highlight.toLowerCase() ? <mark>{v}</mark> : v}
    </Fragment>
  ));
}
