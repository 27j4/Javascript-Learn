// string interpolation
const name = "anshul";
console.log(`hey i am ${name} pandey`) // we generally use this now a days

console.log(name[0]);


// another way of declaring string in js
// this will be like a key value pair
let myName = new String("Anshul Pandey");
console.log(myName);
console.log(myName.__proto__); // all the methods are defined here for strings
console.log(myName.toLocaleLowerCase());

// this will not change the original array
let newStr = myName.concat(" .I am from ayodhya.");
console.log(newStr);



// accessing the element and finding a particular character
console.log(myName.charAt(0));
console.log(myName.indexOf('l'));


// slice . substr . substring 

let sub1 = myName.slice(1, 6);
let sub2 = myName.substring(1, 6);
let sub3 = myName.substr(1, 6); // deprecated

// console.table([sub1, sub2, sub3, myName])
console.log(sub1);
console.log(sub2);
console.log(sub3);
console.log(myName);


// trim method

let stringName = "    Anshul   ";
console.log(stringName.length); // 13
stringName = stringName.trim(); // trim and return a new string
console.log(stringName);
console.log(stringName.length); // 6

// trimStart
// trimEnd

// replace method

let stringName2 = " Anshul Pandey hi hi tum ho";
console.log(stringName2.replace("hi", ""));
console.log(stringName2.replaceAll("hi", ""));


// includes
console.log(stringName2.includes("Anshul")); // returns a boolean value


// split method

const statement = "The quick brown fox jumps over the lazy dog.";
let words = statement.split(' ');
console.log(words.length);
console.log(words);










