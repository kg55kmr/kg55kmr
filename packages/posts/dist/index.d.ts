type MetaPostContent = {
    items: MetaPost[];
    pinItems: MetaPost[];
};
type MetaPost = {
    id: string;
    title: string;
    pin?: boolean;
    date: {
        year: number;
        month: number;
        day: number;
    };
    noThumbnail?: boolean;
};
type Post = Omit<MetaPost, "id"> & {
    content: string;
    mtimeMs: number;
};
type AlbumPost = Omit<MetaPost, "id" | "pin" | "noThumbnail"> & {
    postIds: string[];
};
type PostsList = Record<string, MetaPostContent>;
type FullPosts = Record<string, Record<string, Post>>;
type AlbumPosts = Record<string, AlbumPost>;
type Posts = {
    posts: FullPosts;
    postsList: PostsList;
    latestPosts: PostsList;
    album: AlbumPosts;
    isUpToDate: boolean;
};

declare function getPosts(): Promise<Posts>;

type PostType = "news" | "announcements" | "useful" | "camp";

export { getPosts };
export type { AlbumPost, AlbumPosts, FullPosts, MetaPost, MetaPostContent, Post, PostType, Posts, PostsList };
