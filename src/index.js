"use strict";
exports.__esModule = true;
var Interfaces_1 = require("./Interfaces");
// console.log("hello world");
var isOpen = false;
var myName = 'Zach';
var myAge = 35;
var list = [0, 1, 2];
var me = ["Zach", 35, false];
var job = Interfaces_1["default"].WebDev;
var phone = "Galaxy";
var height = 75;
// Functions in TS
// '?' is for optional params
// const sayWord = (word?: string): string => {
//   console.log(word || 'hello');
//   return word || 'hello';
// };
// sayWord('Zach');
var sayWord = function (word) {
    if (word === void 0) { word = 'hello'; }
    var otherStuff = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        otherStuff[_i - 1] = arguments[_i];
    }
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
var makeMargin = function (x) {
    return "margin: " + x + "px";
};
makeMargin(10);
makeMargin('10');
// makeMargin(false);
// Null types
var dog = 'pupper';
dog = null;
dog = "juno";
dog = undefined;
var sayName = function (_a) {
    var name = _a.name, age = _a.age;
    console.log(name);
    return name;
};
// const sayName = ({ name, age }: Person): Person => {
//   console.log(name);
//   return { name, age };
// }
sayName({
    name: 'Zach',
    age: 35
});
sayName({
    age: 35,
    name: 'Zach'
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
var createContent = function (contentType) { };
createContent(Interfaces_1.Type.Quiz);
// Classes
var Team = /** @class */ (function () {
    // public teamName: string; // Same as above
    // private teamName: string; // Prevents outside usage
    // readonly teamName: string; // Prevents from being changed (only set in constructor)
    function Team(teamName) {
        this.teamName = teamName;
    }
    Team.prototype.score = function () {
        console.log(this.teamName);
        return 'goal';
    };
    return Team;
}());
var redWings = new Team('Red Wings');
redWings.score();
console.log(redWings.teamName);
