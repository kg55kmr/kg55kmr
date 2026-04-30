declare function getLessonDate(title: string, yearsString: string): Date;

type Class = {
    name: string;
    subjects: Subject[];
};
type Subject = {
    name: string;
    lessons: Lesson[];
};
type Lesson = {
    title: string;
    sha?: never;
    ext?: never;
} | {
    title: string;
    sha: string;
    ext: string;
};

export { getLessonDate };
export type { Class, Lesson, Subject };
