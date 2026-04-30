import type { PostType } from "posts";
import { createFileRoute } from "@tanstack/react-router";
import { postType, postTypes } from "~/lib/posts";

export const Route = createFileRoute("/(main)/posts/$type")({
  params: {
    parse: ({ type }) => {
      assertIsPostType(type);
      return { type };
    },
  },
  ssr: false,
  staticData: {
    title: ({ params }): string => postTypes[(params as Params).type].title,
  },
});

type Params = typeof Route.types.params;

function assertIsPostType(post: string): asserts post is PostType {
  if (!postType.includes(post)) throw new Error(`Unknown post type: ${post}`);
}
