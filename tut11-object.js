console.log("---------Declare--------");

let mySym = Symbol("******");

let myObject = {
    name: "Anshul",
    email: "pandeyanshul2004@gmail.com", 
    "my full name": "Anshul Pandey", 
    dob: new Date(2004, 6, 27).toDateString(),
    mySy: "*********"
}



console.log(myObject);


console.log("---------How_To_Access--------");
console.log(myObject.name);
console.log(myObject["name"]);
console.log(myObject["my full name"]);
console.log(myObject["mySy"]);

myObject.greeting = function(){
    return "Hy I am Anshul Pandey";
}

console.log(myObject.greeting());


// scope in objects

myObject.newGreeting = function(){
    return `Hey I am ${this["my full name"]}`;
}

console.log(myObject.newGreeting());



