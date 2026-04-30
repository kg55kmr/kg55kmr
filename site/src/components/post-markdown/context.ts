import { useSuspenseQuery } from "@tanstack/react-query";
import { createContext, useContext } from "react";
import { postsSHAQuery } from "~/hooks/use-queries";
import { getPostFileUrl } from "~/lib/posts";

type PostContextProps = {
  type: string;
  id: string;
};

export const PostContext = createContext<PostContextProps>(undefined!);

export function usePostFile(url: string) {
  const { type, id } = useContext(PostContext);
  const { data: sha } = useSuspenseQuery(postsSHAQuery);
  return getPostFileUrl(type, id, url, sha);
}
