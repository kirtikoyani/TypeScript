// let employee = { };
// employee.name = "John"; //Compiler Error: Property 'name' does not exist on type '{}'
// employee.code = 123; //Compiler Error: Property 'code' does not exist on type '{}'

// interface Employee {
//     name: string;
//     code: number;
// }

// let employee = <Employee> { };
// employee.name = "John"; // OK
// employee.code = 123; // OK

// interface a{
//     name:string,
//     age:number
// }
// interface b{
//     email:string,
//     age:number
// }
// interface c{
//    role:string
// }
// type obj_type = a & b;

// let obj:obj_type={};
// obj.name='kirti';
// console.log(obj)

interface A {
    feauA: string;
    feauB: string;
    }

    interface B {
    feauA: number;
    feauB: string;
    }

    type AB = A & B;


    let obj1=<AB>{};
    let obj2=<AB>{};

    // Error, Type '20' is not assignable
    // to type 'string & number'
    // obj1.feauA = 20; // it is working if we write only one type feauA:String or number both are not working
    // console.log(obj1.feauA);

    obj2.feauB = "c";
    console.log(obj2.feauB);
