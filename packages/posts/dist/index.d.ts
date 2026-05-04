declare function extractSlideshows(kind: string, id: string, content: string): string[];

type PostType = "announcements" | "news" | "useful" | "camp";

type Post = {
    kind: string;
    id: string;
    title: string;
    titleLower: string;
    pin: boolean;
    date: {
        year: string;
        month: string;
        day: string;
    };
    thumbnailExists: boolean;
};
type Pin = {
    items: Post[];
    pin: Post[];
};
type GroupedPosts = Record<string, Pin>;
type Posts = {
    posts: GroupedPosts;
    latestPosts: GroupedPosts;
    album: Post[];
};

export { extractSlideshows };
export type { GroupedPosts, Pin, Post, PostType, Posts };
