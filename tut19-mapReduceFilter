console.log("---------------------for each loop------------------");

// for each loop => it does not return anything

let myFavSupers = ["Superman", "Batman", "Flash", "Spiderman"];

myFavSupers.forEach((value) => {
  console.log(value);
  return value; // this return will not work
});

// map function => it returns a new array // this is a advancement of for each loop

console.log("---------------------map function------------------");

let myFavNumbers = [2, 3, 4, 5, 6];

let squaredNumbers = myFavNumbers.map((num) => {
  return num * num;
});

console.log(squaredNumbers); // [4, 9, 16, 25, 36]

console.log("---------------------filter function------------------");

// filter function => it returns a new array after filtering based on condition

let mixedNumbers = [10, 15, 20, 7, 3, 5, 25, 30, 35, 40, 23, 29, 31];

let nonPrimeNumbers = mixedNumbers.filter((num) => {
  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) {
      return true; // not a prime number
    }
  }
  return false; // prime number
});

console.log(nonPrimeNumbers); // [10, 15, 20, 25, 30, 35, 40]

console.log("---------------------reduce function------------------");

const numbersToReduce = [1, 2, 3, 4, 5, 10, 11];

let multiplicationResult = numbersToReduce.reduce((oldValue, currentValue) => {
  return oldValue * currentValue;
}, 1);

console.log(`multiplicationResult: ${multiplicationResult}`); // 13200
