import Markdown, { type MarkdownToJSX } from "markdown-to-jsx";
import { upperCaseComponents } from "~/lib/convert";
import { Embed } from "../embed";
import {
  Carousel,
  FBVideo,
  GalleryWrapper,
  Image,
  Link,
  PdfWrapper,
  Quote,
  YouTubeWrapper,
} from "./components";
import { PostContext } from "./context";

type Props = {
  type: string;
  id: string;
  content: string;
};

const components: MarkdownToJSX.Overrides = {
  YouTube: YouTubeWrapper,
  Carousel,
  Quote,
  Pdf: PdfWrapper,
  Embed,
  Gallery: GalleryWrapper,
  FBVideo: FBVideo,

  a: Link,
  img: Image,
};

export function PostMarkdown(props: Props) {
  const { type, id } = props;
  const content = upperCaseComponents(props.content);

  return (
    <PostContext value={{ type, id }}>
      <Markdown
        options={{
          overrides: components,
        }}
        children={content}
        className="content"
      />
    </PostContext>
  );
}
