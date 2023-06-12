export {};
let x: unknown = 'hello';
console.log((x as string).length);

// let y: unknown = 5;
// console.log((<string>y).length);
// console.log((y as string).length);

let anyVariable = 5;
console.log(typeof anyVariable);
console.log(typeof String(anyVariable));
console.log(anyVariable.toString());

// let num = 5.toString(); // it is not working becacuse compiler understood 5. is  decimal value in compiler
let num = (5).toString();
console.log(num);