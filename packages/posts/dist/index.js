#!/usr/bin/env node
const reSlideshow = /<slideshow( id="(.*)")* \/>/g;
function extractSlideshows(kind, id, content) {
  const slideshows = [];
  let m;
  id = `${kind}/${id}`;
  while ((m = reSlideshow.exec(content)) !== null) {
    switch (true) {
      case m[2] === void 0:
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

export { extractSlideshows };
