// Hoisting (13–15)

console.log(a);
var a = 5;

console.log(b);  //(Error)
let b = 10;

hello();

function hello(){
    console.log("Function Hoisting Works");
}