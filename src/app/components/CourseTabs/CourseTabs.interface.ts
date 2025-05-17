export interface Course {
  title: string;
  type: string;
}

export interface Tab {
  title: string;
  courses: Course[];
}
