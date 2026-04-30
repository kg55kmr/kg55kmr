export type Class = {
  name: string;
  subjects: Subject[];
};

export type Subject = {
  name: string;
  lessons: Lesson[];
};

export type Lesson =
  | { title: string; sha?: never; ext?: never }
  | { title: string; sha: string; ext: string };
