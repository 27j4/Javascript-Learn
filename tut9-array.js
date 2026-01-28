console.log("----------declare--------");


let arr1 = [1, 2, 3, 4];
let arr2 = new Array(1, 2, 3, 4);

// array makes shallow copy 
let arr3 = arr1;

console.log(arr1);
arr3[1] = 1000;
console.log(arr1);
 

console.log("----------methods--------");


// methods -> arr3 --> memory <--- arr1

arr3.push(10);
console.log(arr1);
arr3.pop();
console.log(arr1);
arr3.unshift(10000); // insert at the front of the array
console.log(arr1);
arr3.shift(); // remove the element from the front
console.log(arr1);

console.log(arr1.includes(1));;
console.log(arr1.indexOf(1000));
console.log(arr1.indexOf(-1000)); // -1 if not exist



// join 

const arrcheck1 = [1, 2, 3, 4];
const checkers = arrcheck1.join();
console.log(arrcheck1);
console.log(checkers);






// slice -> do not change the original array
// it gives a copy from [l, r) -> don't change the original array
console.log("----------slice--------");
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log("A: " + arr);

let narr = arr.slice(1, 4); // [l, r)
console.log(narr);
console.log("B: " + arr);




// it cuts [l , r] portion and returns it 
console.log("----------splice--------");
let arrr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log("A: " + arrr);

let narrr = arrr.splice(1, 4); // [l, r]
console.log(narrr);
console.log("B: " + arrr);



