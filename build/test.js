"use strict";
//variable
let x = 10;
console.log(x);
const num = "ertuti";
console.log(num);
// functions
function add(n1, n2) {
    return n1 + n2;
}
let result = add(10, '20');
console.warn(result);
const person = {
    name: 'kirti koyani',
    age: 25,
    email: 'kirti34@gmail.com'
};
const user = {
    name: 'pisu koyani',
    age: 19,
    email: 'pisyd4@gmail.com'
};
console.warn(person.name);
console.warn(user.name);
console.warn(user.age);
console.warn(person.email);
//array
let arr = ["js", "java", "node", "vue"];
console.log(arr);
let role = ['admin', 'manager', 1, 4];
role.push(true);
role[1] = "user";
//enum
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["manager"] = 1] = "manager";
    Role[Role["Read_only_user"] = 2] = "Read_only_user";
})(Role || (Role = {}));
console.log(Role);
console.log(Role.Read_only_user);
//any-union
let data = [20];
function combine(a, b, type) {
    if (type === "as-number") {
        return (+a) + (+b);
    }
    else {
        return a.toString() + b.toString();
    }
}
console.warn(combine(10, 20, "as-number"));
console.warn(combine("kiti", "jkhfd", "as-string"));
let type = "as-string";
//unknown
let data1;
data1 = 20;
data1 = "kirti";
let item;
if (typeof data1 === 'string') {
    item = data1;
}
// item=data1; // you can't assign string type of var's value in unknown type of var
// if data1:any than it's possibal
//never
function err(msg, code) {
    throw { message: msg, code: code };
}
console.log(err("server err", 500));
