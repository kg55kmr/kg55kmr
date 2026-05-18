export type Post = {
  kind: string;
  id: string;
  title: string;
  pin?: boolean;
  year: number;
  month: number;
  day: number;
  thumbnail?: boolean;
};

export type PostContent = { content: string };

export type Pin = {
  items: Post[];
  pinItems: Post[];
};

export type PostsList = Record<string, Pin>;
export type FullPosts = Record<string, Record<string, Post & PostContent>>;

export type Posts = {
  posts: FullPosts;
  postsList: PostsList;
  latestPosts: PostsList;
  album: Post[];
};
