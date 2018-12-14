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