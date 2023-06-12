"use strict";
// let employee = { };
// employee.name = "John"; //Compiler Error: Property 'name' does not exist on type '{}'
// employee.code = 123; //Compiler Error: Property 'code' does not exist on type '{}'
Object.defineProperty(exports, "__esModule", { value: true });
let obj1 = {};
let obj2 = {};
// Error, Type '20' is not assignable
// to type 'string & number'
// obj1.feauA = 20; // it is working if we write only one type feauA:String or number both are not working
// console.log(obj1.feauA);
obj2.feauB = "c";
console.log(obj2.feauB);
