export interface Person {
  name: string;
  age?: number; // Optional param
}

enum Job { 
  WebDev,
  WebDesign,
  PM
};

export default Job;

export enum Type {
  Video = "VIDEO",
  BlogPost = "BLOG_POST",
  Quiz = "QUIZ",
};