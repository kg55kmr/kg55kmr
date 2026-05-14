export function setCacheHeader(t: number) {
  return () => ({ "Cache-Control": `max-age=0, s-maxage=${t}` });
}
