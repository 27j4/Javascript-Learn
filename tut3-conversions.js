
let number1 = 33;
let number2 = "33";
let number3 = "33abc";
let number4 = undefined;
let number5 = null;

let check1 = Number(number2);
let check2 = Number(number3);
let check3 = Number(number4);
let check4 = Number(number5);


console.log(check1); // numericString -> number
console.log(check2); // string -> Nan
console.log(check3); // undefined -> NaN
console.log(check4); // null -> 0


console.log(typeof check1)
console.log(typeof check2)
console.log(typeof check3)
console.log(typeof check4)





