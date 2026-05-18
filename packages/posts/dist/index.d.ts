declare function extractSlideshows(kind: string, id: string, content: string): string[];

type Post = {
    kind: string;
    id: string;
    title: string;
    pin?: boolean;
    year: number;
    month: number;
    day: number;
    thumbnail?: boolean;
};
type PostContent = {
    content: string;
};
type Pin = {
    items: Post[];
    pinItems: Post[];
};
type PostsList = Record<string, Pin>;
type FullPosts = Record<string, Record<string, Post & PostContent>>;
type Posts = {
    posts: FullPosts;
    postsList: PostsList;
    latestPosts: PostsList;
    album: Post[];
};

type PostType = "news" | "announcements" | "useful" | "camp";

export { extractSlideshows };
export type { FullPosts, Pin, Post, PostContent, PostType, Posts, PostsList };
