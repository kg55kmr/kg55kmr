export type Post = {
  kind: string;
  id: string;
  title: string;
  pin?: boolean;
  date: {
    year: string;
    month: string;
    day: string;
  };
  noThumbnail?: boolean;
};

export type Pin = {
  items: Post[];
  pin: Post[];
};

export type GroupedPosts = Record<string, Pin>;

export type Posts = {
  posts: GroupedPosts;
  latestPosts: GroupedPosts;
  album: Post[];
};
