console.log("------------WrongMerging---------");
let arr1 = [1, 2, 3, 4, 5];
let arr2 = [2, 3, 4];
arr1.push(arr2); // it will push the whole array like an element
console.log(arr1);

arr1.pop();

console.log("------------RightMerging_Log1---------");
// it returns a new array
let mergedarray1 = arr1.concat(arr2);
console.log(mergedarray1);


console.log("------------RightMerging_Log2_Spread---------");
// changes are performed on the same array
arr1.push(...arr2);
console.log(arr1);



console.log("------------RightMerging_Log2_Spread_New_Array---------");
let check1 = [0,9,8];
let check2 = [0,7,6];

let mergedArray = [...check1, ...check2]
console.log(mergedArray);



console.log("------------Array.from()---------");
let myName = "Anshul_Pandey";
let myNameArray = Array.from(myName);
console.log(myNameArray);

let myDetail = {
    name: "ansh", 
    pass : "pan"
}

let myDetArray = Array.from(myDetail);  // special case to learn
console.log(myDetArray);


