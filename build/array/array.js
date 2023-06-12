"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const arr1 = ["euew", "dhjfh"];
console.log(arr1);
// arr1.push("Jasack");; error in readyonly state if we try to change it's content
const numbers = [1, 2, 3]; // inferred to type number[]
numbers.push(4); // no error
console.log(numbers);
// if we don't get any type of arr then it contain it's value as it's type so if we assign anthor value in it, it getting error
// numbers.push("2"); // Error: Argument of type 'string' is not assignable to parameter of type 'number'.
let head = numbers[0]; // no error
console.log(head);
let newarr = [1, 2, 3, 4, 4];
console.log(newarr);
// array tuples
let ourTuple;
// initialize correctly
ourTuple = [5, false, 'Coding God was here'];
const ourTuple1 = [5, false, 'Coding God was here'];
