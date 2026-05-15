import { setResponseHeaders } from "@tanstack/react-start/server";

export function setCacheHeader(age: number) {
  setResponseHeaders(
    new Headers({ "Cache-Control": `max-age=0, s-maxage=${age}` }),
  );
}
