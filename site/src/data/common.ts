export const address = [
  "50047",
  "Україна",
  "Дніпропетровська область",
  "м. Кривий Ріг",
  "вулиця Сергія Колачевського, 108А",
  "kg55kmr@ukr.net",
  "(096) 095-04-11, (0564) 94-84-01",
];

export const academicYear = {
  start: 2025,
  end: 2026,
  get toSlash() {
    return `${this.start}/${this.end}`;
  },
  get toLine() {
    return `${this.start}-${this.end}`;
  },
};

export const nextAcademicYear = {
  start: academicYear.start + 1,
  end: academicYear.end + 1,
  get toSlash() {
    return `${this.start}/${this.end}`;
  },
  get toLine() {
    return `${this.start}-${this.end}`;
  },
};
