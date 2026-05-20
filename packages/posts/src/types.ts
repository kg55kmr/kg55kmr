export type MetaPost = {
  id: string;
  title: string;
  pin?: boolean;
  date: { year: number; month: number; day: number };
};

export type MetaPostContent = {
  items: MetaPost[];
  pinItems: MetaPost[];
};

export type Post = Omit<MetaPost, "id"> & { content: string };

export type AlbumPost = Omit<MetaPost, "id" | "pin"> & {
  postIds: string[];
};

export type PostsList = Record<string, MetaPostContent>;
export type FullPosts = Record<string, Record<string, Post>>;
export type AlbumPosts = Record<string, AlbumPost>;

export type Posts = {
  posts: FullPosts;
  postsList: PostsList;
  latestPosts: PostsList;
  album: AlbumPosts;
};
