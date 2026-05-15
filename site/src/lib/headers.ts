export function cacheHeader(t: number) {
  return () => ({ "Cache-Control": `max-age=0, s-maxage=${t}` });
}
