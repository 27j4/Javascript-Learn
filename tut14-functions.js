// block scope
{
    let x = 10;
    const y = 20;
    var z = 30; // var is function-scoped, not block-scoped
    console.log("Inside block scope:", x, y);
}

// console.log(x); // Error: x is not defined
// console.log(y); // Error: y is not defined
console.log("Outside block scope, var z:", z); // z is accessible here

// function scope
function myFunction() {
    var a = 5;
    let b = 15;
    const c = 25;
    console.log("Inside function scope:", a, b, c);
}
myFunction();
// console.log(a); // Error: a is not defined
// console.log(b); // Error: b is not defined
// console.log(c); // Error: c is not defined

// global scope
var globalVar = "I am global";
let globalLet = "I am also global";
const globalConst = "I am globally constant";

console.log("Global scope:", globalVar, globalLet, globalConst);

function checkGlobalScope() {
    console.log("Accessing global variables inside function:", globalVar, globalLet, globalConst);
}
checkGlobalScope(); 



function function1(){
    console.log("This is function 1");
    const username = "user123";
    function function2(){
        console.log("This is function 2");
        console.log("Accessing username from function1:", username);
    }
    return function2;
}

const func2 = function1();
func2();
// console.log(func2.username); // undefined, username is not accessible here