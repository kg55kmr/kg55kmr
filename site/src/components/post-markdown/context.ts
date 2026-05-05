import { createContext, useContext } from "react";
import { getPostFileUrl } from "~/lib/posts";

type PostContextProps = {
  type: string;
  id: string;
};

export const PostContext = createContext<PostContextProps>(undefined!);

export function usePostFile(url: string) {
  const { type, id } = useContext(PostContext);
  return getPostFileUrl(type, id, url);
}
