declare function extractSlideshows(kind: string, id: string, content: string): string[];

type MetaPost = {
    id: string;
    title: string;
    pin?: boolean;
    date: {
        year: number;
        month: number;
        day: number;
    };
};
type MetaPostContent = {
    items: MetaPost[];
    pinItems: MetaPost[];
};
type Post = Omit<MetaPost, "id"> & {
    content: string;
};
type AlbumPost = Omit<MetaPost, "pin"> & {
    slideshows: string[];
};
type PostsList = Record<string, MetaPostContent>;
type FullPosts = Record<string, Record<string, Post>>;
type Posts = {
    posts: FullPosts;
    postsList: PostsList;
    latestPosts: PostsList;
    album: AlbumPost[];
};

type PostType = "news" | "announcements" | "useful" | "camp";

export { extractSlideshows };
export type { AlbumPost, FullPosts, MetaPost, MetaPostContent, Post, PostType, Posts, PostsList };
