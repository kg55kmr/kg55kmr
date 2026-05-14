import { setResponseHeaders } from "@tanstack/react-start/server";

export function setPostsCacheHeader() {
  setResponseHeaders(new Headers({ "Cache-Control": "max-age=0, s-maxage=5" }));
}
