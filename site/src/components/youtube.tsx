import { cn } from "~/lib/utils";

export function YouTube(props: { videoId: string; className?: string }) {
  return (
    <iframe
      src={`https://youtube.com/embed/${props.videoId}`}
      className={cn("mx-auto aspect-video max-w-230 p-2", props.className)}
    />
  );
}
