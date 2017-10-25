import { User } from './user';

export interface Subject {
  title: string;
  description: string;
}

export class Course {
  owner: User;
  subject: Subject;
  title: string;
  overview: any;
  createdDate: number; // timestemp
  weight: number; //
}

export class CourseModule {
  course: Course;
  title: string;
  description: string;
  weight: number; //
}

export class Content {
  courseModule: CourseModule;
  title: string;
  item: ContentItemVideo | ContentItemImage | ContentItemFile | ContentItemText;
  weight: number; //
}

export class ContentItemVideo {
  [key: string]: any;
}

export class ContentItemImage {
  [key: string]: any;
}

export class ContentItemFile {
  [key: string]: any;
}

export class ContentItemText {
  [key: string]: any;
}
