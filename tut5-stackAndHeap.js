// stoed in stack -> all primitive
let str1 = "anshul";
let str2 = str1;
str2 = "pandey";


// stored in heap -> all non primitive
let detail1 = {
    name: "anshul", 
    mobileNo: "88516546"
}

let detail2 = detail1;

detail2.mobileNo = "8882322";

console.log(detail1);
console.log(detail2);

console.log(str1);
console.log(str2);






