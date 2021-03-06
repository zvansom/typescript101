import Job, { Person, Type } from './Interfaces';
// console.log("hello world");

const isOpen: boolean = false;
const myName: string = 'Zach';
const myAge: number = 35;
const list: number[] = [0, 1, 2];
const me: [string, number, boolean] = ["Zach", 35, false];



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
// makeMargin(false);

// Null types
let dog: string = 'pupper';
dog = null;
dog = "juno";
dog = undefined;

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


const createContent = (contentType: Type) => {};

createContent(Type.Quiz);

// Classes
class Team {
  teamName: string;
  // public teamName: string; // Same as above
  // private teamName: string; // Prevents outside usage
  // readonly teamName: string; // Prevents from being changed (only set in constructor)


  constructor(teamName) {
    this.teamName = teamName;
  }
  score(): string {
    console.log(this.teamName);
    return 'goal';
  }
}

const redWings = new Team('Red Wings');
redWings.score();
console.log(redWings.teamName);

// Generics
const outputInput = <T>(arg: T): T => {
  return arg;
};

const output: string = outputInput('hi');
outputInput(3);

// Duck Typing
class Dancer implements Person {
  name: string;
  age?: number;
}

let ElNino: Person = new Dancer();
const fake = {
  name: 'Zach',
  year: 35
}

ElNino = fake;