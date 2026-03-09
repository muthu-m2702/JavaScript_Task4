// Scope (10–12)

var company="Stackly";

function showCompany(){
    console.log(company);
}
showCompany();

if(true){
    var a = 10;
    let b = 20;
    const c = 30;
}

console.log(a);

function testScope(){
    let x = 100;
}
testScope();
 console.log(x); //(Error)