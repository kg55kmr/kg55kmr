const reSlideshow = /<slideshow( id="(.*)")* \/>/g;

export function extractSlideshows(kind: string, id: string, content: string) {
  const slideshows = [];
  let m;

  id = `${kind}/${id}`;

  while ((m = reSlideshow.exec(content)) !== null) {
    switch (true) {
      case m[2] === undefined:
        slideshows.push(id);
        break;

      case m[2].startsWith("*"):
        slideshows.push(`${id}-${m[2].slice(1)}`);
        break;

      default:
        slideshows.push(m[2]);
    }
  }

  return slideshows;
}
