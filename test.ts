//variable
let x=10;
console.log(x);

const num:String="ertuti";
console.log(num);

// functions
function add(n1:any,n2:any){
return n1+n2;
}

let result=add(10,'20');
console.warn(result);

//objects
type objtype={name:string,age:number,email:string}

const person:objtype={
name:'kirti koyani',
age:25,
email:'kirti34@gmail.com'
}

const user:objtype={
name:'pisu koyani',
age:19,
email:'pisyd4@gmail.com'
}

console.warn(person.name);
console.warn(user.name);
console.warn(user.age);
console.warn(person.email);

//array
let arr:string[]=["js","java","node","vue"];
console.log(arr);

let role:[string,string,number,number,boolean?]=['admin','manager',1,4];
role.push(true);
role[1]="user";

//enum
enum Role{
ADMIN,manager,Read_only_user
}
console.log(Role)
console.log(Role.Read_only_user);

//any-union
let data:any=[20];

function combine(a:number|string,b:number|string,type:"as-number"| "as-string"){
    if(type==="as-number"){
return (+a)+(+b);
    }
    else{
    return a.toString() + b.toString ();
}
}
console.warn(combine(10,20,"as-number"));

console.warn(combine("kiti","jkhfd","as-string"));

let type:"as-number"|"as-string"="as-string";

//unknown
let data1:unknown;
data1=20;
data1="kirti";

let item:string;

if(typeof data1 === 'string'){
    item=data1;
}
// item=data1; // you can't assign string type of var's value in unknown type of var
// if data1:any than it's possibal

//never
function err(msg:string,code:number):never{
throw{message:msg, code:code}
}
console.log(err("server err",500));
