
if(true){
    console.log("This is true");
}

let age = 20;
if(age >= 18){
    console.log("You are an adult.");
} else {
    console.log("You are a minor.");
}

let score = 85;

if(score >= 90){
    console.log("Grade: A");
} else if(score >= 80){
    console.log("Grade: B");
} else if(score >= 70){
    console.log("Grade: C");
} else {
    console.log("Grade: F");
}

let day = 3;
let dayName;

switch(day){
    case 1:
        dayName = "Monday";
        break;
    case 2:
        dayName = "Tuesday";        
        break;
    case 3:
        dayName = "Wednesday";        
        break;
    case 4:
        dayName = "Thursday";        
        break;
    case 5:
        dayName = "Friday";        
        break;
    case 6:
        dayName = "Saturday";        
        break;
    case 7:
        dayName = "Sunday";        
        break;
    default:
        dayName = "Invalid day";        
}

console.log("Day:", dayName);

for(let i = 1; i <= 5; i++){
    console.log("For Loop iteration:", i);
}

let count = 1;
while(count <= 5){
    console.log("While Loop iteration:", count);
    count++;
}

let num = 1;
do {
    console.log("Do-While Loop iteration:", num);
    num++;
} while(num <= 5);

let fruits = ["Apple", "Banana", "Cherry"];
for(let fruit of fruits){
    console.log("Fruit:", fruit);
}

let person = {name: "John", age: 30, city: "New York"};
for(let key in person){
    console.log(key + ": " + person[key]);
}

// Nested if-else
let marks = 75;
if(marks >= 50){
    if(marks >= 75){
        console.log("Distinction");
    } else {
        console.log("Pass");
    }
} else {
    console.log("Fail");
}

// Switch statement with fall-through
let color = "red";
switch(color){
    case "red":
    case "blue":
    case "green":
        console.log("Primary Color");
        break;
    case "yellow":
    case "purple":
        console.log("Secondary Color");
        break;
    default:
        console.log("Unknown Color");
}

// Loop with break and continue
for(let i = 1; i <= 10; i++){
    if(i === 5){
        console.log("Skipping number 5");
        continue; // Skip the rest of the loop when i is 5
    }
    if(i === 8){
        console.log("Breaking the loop at number 8");
        break; // Exit the loop when i is 8
    }
    console.log("Current number:", i);
}

// Labeled statement with nested loops
outerLoop: for(let i = 1; i <= 3; i++){
    for(let j = 1; j <= 3; j++){
        if(i === 2 && j === 2){
            console.log("Breaking out of outer loop");
            break outerLoop; // Breaks out of the outer loop
        }
        console.log("i:", i, "j:", j);
    }
}

// Ternary operator
let isMember = true;
let discount = isMember ? 0.1 : 0.05;
console.log("Discount:", discount);

// Nested ternary operator
let temperature = 30;
let weather = temperature > 30 ? "Hot" : temperature >= 20 ? "Warm" : "Cold";
console.log("Weather:", weather);

// Switch statement with expressions
let expressionValue = 10 + 5;
switch(expressionValue){
    case 10:
        console.log("Value is 10");
        break;
    case 15:
        console.log("Value is 15");
        break;
    case 20:
        console.log("Value is 20");
        break;
    default:
        console.log("Value is something else");
}

// For loop with array length
let colors = ["Red", "Green", "Blue", "Yellow"];
for(let i = 0; i < colors.length; i++){
    console.log("Color:", colors[i]);
}

// While loop with decrement
let countdown = 5;
while(countdown > 0){
    console.log("Countdown:", countdown);
    countdown--;
}

// Do-while loop to ensure at least one execution
let attempt = 1;
do {
    console.log("Attempt number:", attempt);
    attempt++;
} while(attempt <= 3);

// For-of loop with string
let message = "Hello";
for(let char of message){
    console.log("Character:", char);
}

// For-in loop with array
let numbers = [10, 20, 30];
for(let index in numbers){
    console.log("Index:", index, "Value:", numbers[index]);
}

// If-else with logical operators
let a = 10;
let b = 20;
if(a > 5 && b > 15){
    console.log("Both conditions are true");
} else {
    console.log("At least one condition is false");
}

// Switch statement with boolean
let loggedIn = true;
switch(loggedIn){
    case true:
        console.log("User is logged in");
        break;
    case false:
        console.log("User is not logged in");
        break;
    default:
        console.log("Unknown login status");
}

// Loop through object properties
let car = {make: "Toyota", model: "Camry", year: 2020};
for(let prop in car){
    console.log(prop + ": " + car[prop]);
}

// Nested loops with conditional break
for(let x = 1; x <= 3; x++){
    for(let y = 1; y <= 3; y++){
        if(x === y){
            console.log("Breaking inner loop when x equals y:", x);
            break; // Breaks the inner loop
        }
        console.log("x:", x, "y:", y);
    }
}

// Ternary operator with function call
let userAge = 25;
let access = userAge >= 18 ? "Granted" : "Denied";
console.log("Access:", access);

// Nested ternary operator for multiple conditions
let marksObtained = 88;
let result = marksObtained >= 90 ? "A+" : marksObtained >= 80 ? "A" : marksObtained >= 70 ? "B" : "C";
console.log("Result Grade:", result);   