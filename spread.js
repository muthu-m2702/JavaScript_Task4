// Spread Operator (29–31)

let arr1=[1,2,3];
let arr2=[4,5,6];

let merged=[...arr1,...arr2];
console.log(merged);

let original=[10,20,30];
let clone=[...original];

console.log(clone);

let obj1={name:"John"};
let obj2={role:"Developer"};

let result={...obj1,...obj2};

console.log(result);