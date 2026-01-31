

// type1 -  Traditional IIFE
(function (){
    console.log("This is an IIFE example");
} )(); // we have to use (); to invoke the function immediately

// type2 - Arrow function IIFE
(() => {
    console.log("This is an arrow function IIFE example");
})();


// type3 - IIFE with parameters
(function (name){
    console.log("Hello, " + name);
})("Alice");

// type4 - Arrow function IIFE with parameters
((name) => {
    console.log("Hello, " + name);
})("Bob");
