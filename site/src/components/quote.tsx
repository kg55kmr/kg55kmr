export function Quote(props: { text: string; author: string }) {
  return (
    <div className="ml-auto max-w-150">
      <p className="text-justify italic">{props.text}</p>
      <p className="text-right font-bold">{props.author}</p>
    </div>
  );
}
