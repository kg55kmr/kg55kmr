const regex = /<\/*[^>\s]*/g;

// todo: hack. remove in future
export function upperCaseComponents(markdown: string) {
  return markdown.replace(regex, (s) => {
    const offset = s[1] !== "/" ? 1 : 2;
    return s.slice(0, offset) + replaceElement(s.slice(offset));
  });
}

function replaceElement(element: string) {
  switch (element) {
    case "slideshow":
      return "Carousel";

    case "youtube":
      return "YouTube";

    case "fbvideo":
      return "FBVideo";

    case "pdf":
      return "Pdf";

    case "pre":
      return "Pre";

    case "quote":
      return "Quote";

    case "embed":
      return "Embed";

    case "gallery":
      return "Gallery";

    case "br":
    case "img":
      return element;
  }

  throw new Error(`Unsupported element: ${element}`);
}
