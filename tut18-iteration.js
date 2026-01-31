// console.log('anshul pandey');

// for of loop on arrays
let colors = ['red', 'green', 'blue', 'yellow'];

for (let color of colors) {
    console.log(color);
}

// for of loop on strings
let message = "Hello";

for (let char of message) {
    console.log(char);
}

// for of loop on Maps
let capitals = new Map();
capitals.set('USA', 'Washington D.C.');
capitals.set('France', 'Paris');
capitals.set('Japan', 'Tokyo');


for(key of capitals){
    console.log(key);
}

for([key, value] of capitals){
    console.log(key + " : " + value);
}

for (let [country, city] of capitals) {
    console.log(`${country}: ${city}`);
}

// for of loop on Sets
let uniqueNumbers = new Set([1, 2, 3, 4, 5]);

for (let number of uniqueNumbers) {
    console.log(number);
}



// for of loop with break and continue
let numbers = [10, 20, 30, 40, 50];

for (let number of numbers) {
    if (number === 30) {
        continue; // Skip the number 30
    }
    if (number === 50) {
        break; // Stop the loop when number is 50
    }
    console.log(number);
}


console.log("---------------------iteration on objects ------------------");


// loops on object

let programmingLanguage = {
    js : "JavaScript",
    py : "Python",
    rb : "Ruby",
    java : "Java",
    go: "Golang"
};

// we use for in loop to iterate over objects

for(let key in programmingLanguage){
    console.log(key + " : " + programmingLanguage[key]);
}

// for in loop on arrays

const names = ["anshul", "amit", "arpit", "ankit", "aditya"];

for(let index in names){
    console.log(index + " : " + names[index]);
}


console.log("---------------------for each loop------------------");

const superHeroes = ["Ironman", "Spiderman", "Hulk", "Thor", "Captain America"];

function printHero(hero, index){
    console.log(index + " : " + hero);
}

superHeroes.forEach(printHero);
superHeroes.forEach(function(hero, index){
    console.log(index + " => " + hero);
});

superHeroes.forEach((hero, index) => { // it can take 3 parameters hero, index, array
    console.log(`${index} -> ${hero}`);
}); 
superHeroes.forEach(hero => console.log(hero));



// object in arrays

const users = [
    {name: "Anshul", age: 22},
    {name: "Amit", age: 21},
    {name: "Arpit", age: 23},
    {name: "Ankit", age: 21}    
]

users.forEach(user => console.log(`${user.name} is ${user.age} years old.`));