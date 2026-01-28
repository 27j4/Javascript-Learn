// object destructuring

let myObj = {
    name: "anshul", 
    bank: "Bob",
    accountNum: "2341234213",
    IFSC:"532522"
}

// normal way
// let name1 = myObj.name;
// let bank1 = myObj.bank;
// console.log(name1, bank1);

let {name, bank, accountNum, IFSC} = myObj;
console.log(name, bank, accountNum, IFSC);

// renaming while destructuring
let {name: n, bank: b, accountNum: a, IFSC: i} = myObj;
console.log(n, b, a, i);

let {name: name1, bank: bank1} = myObj;
console.log(name1, bank1);

// default values
let {name: name2, bank: bank2, branch = "default branch"} = myObj;
console.log(name2, bank2, branch);  

