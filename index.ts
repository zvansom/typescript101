// console.log("hello world");

const isOpen: boolean = false;
const myName: string = 'Zach';
const myAge: number = 35;
const list: number[] = [0, 1, 2];
const me: [string, number, boolean] = ["Zach", 35, false];

enum Job { 
  WebDev,
  WebDesign,
  PM
};

const job: Job = Job.WebDev;
const phone: any = "Galaxy";
const height: any = 75;

// Functions in TS
// '?' is for optional params
// const sayWord = (word?: string): string => {
//   console.log(word || 'hello');
//   return word || 'hello';
// };

// sayWord('Zach');

const sayWord = (word = 'hello', ...otherStuff: string[]): string => {
  console.log(otherStuff);
  return word;
};

sayWord('Zach', 'Lindsay');

// Implicit Types
// let newName = 'Zach';
// newName = 'Lindsay';

// let newNameTwo = newName;
// newNameTwo = 2;

// Union types
// let newName: string | number = 'Zach';
// newName = 'Lindsay';
// newName = 10;

// Union types in a function
const makeMargin = (x: string | number): string => {
  return `margin: ${x}px`;
};

makeMargin(10);
makeMargin('10');
makeMargin(false);

// Null types
let dog: string = 'pupper';
dog = null;
dog = "juno";
dog = undefined;

// Interfaces
interface Person {
  name: string;
  age?: number; // Optional param
}

const sayName = ({ name, age }: Person): string => {
  console.log(name);
  return name;
}
// const sayName = ({ name, age }: Person): Person => {
//   console.log(name);
//   return { name, age };
// }

sayName({
  name: 'Zach', 
  age: 35,
});
sayName({
  age: 35,
  name: 'Zach', 
});

// Enums
// Numeric enum
// enum Type {
//   Video, // 0
//   BlogPost, // 1
//   Quiz, // 2
// };

// const createContent = (contentType: Type) => {};

// createContent(Type.Quiz);
// String enum
enum Type {
  Video = "VIDEO",
  BlogPost = "BLOG_POST",
  Quiz = "QUIZ",
};

const createContent = (contentType: Type) => {};

createContent(Type.Quiz);