const user = {
    name: 'Alice',
    greet: function() {
        console.log('Hello, ' + this.name);
    }
}

user.greet(); // "Hello, Alice"
user.name = 'Bob';
user.greet(); // "Hello, Bob"


function multiply(a, b) {
    // console.log(this); // this will refer to the global object (window in browsers)
    return a * b;
}

const multiplyCopy = function(a, b){   
    // console.log(this);
    return a * b;
}


console.log(multiply(2, 3)); // 6
console.log(multiplyCopy(4, 5)); // 20


const addTwo = (num1, num2) => num1 + num2;
const addTwoCopy = (num1, num2) => {
    return num1 + num2;
}

console.log(addTwo(3, 4)); // 7
console.log(addTwoCopy(5, 6)); // 11