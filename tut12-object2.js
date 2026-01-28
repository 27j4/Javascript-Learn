// singleton object 
let myObj = new Object({
    name: "anshul", 
    bank: "Bob",
    accountNum: "2341234213",
    IFSC:"532522"
})
console.log(myObj);


// non singleton object

// object combination is same as for array

let myOb1 = {
    1: "a",
    2: "b"
};

let myOb2 = {
    3: "a",
    4: "b"
};

// not a good practice
// let newObj = Object.assign(myOb1, myOb2);
// console.log(newObj);
// console.log(myOb1);



let newObj = Object.assign({}, myOb1, myOb2);
console.log(newObj);
console.log(myOb1);
console.log(myOb2);



let newObj2 = {...myOb1, ...myOb2};
console.log(newObj2);


// how to find all the keys -> give array
let keyArray = Object.keys(myObj);
console.log(keyArray);
console.log(keyArray);
console.log(Object.entries(myObj));


// to check if it has a property
console.log(myObj.hasOwnProperty('name')); // true
console.log(myObj.hasOwnProperty('names')); // false

