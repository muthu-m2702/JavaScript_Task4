// Function Types (16–18)

function namedExample(){
    console.log("Named Function Example");
}
namedExample();

let multiply = function(a,b){
    return a*b;
}
console.log(multiply(5,4));

let square = n => n*n;
console.log(square(6));