// Explicit
let firstName: string;
firstName = "kirti";
// firstName = 23; // it getting error at compille time
console.log(firstName);

// Implicit : Having TypeScript "guess" the type of a value is called infer.
let firstName1;
firstName1 = "kirti";
firstName1 = 23; // it is not getting error at compille time
console.log(firstName1);

let firstName2="kejre"; // if we assign value without write datatype then it consider it's type according given val of it
// firstName2 = true; // it is  getting error at compille time
console.log(firstName2);

// Special types
let firstName3 : any ="kejre"; // if we assign value without write datatype then it consider it's type according given val of it
firstName3 = true; // it is  getting error at compille time
console.log(firstName3);
