// Functions (1–6)

function greetUser(name){
    console.log("Welcome to Stackly, " + name);
}
greetUser("Muthukumar");

function calculateSalary(basic, bonus){
    return basic + bonus;
}
console.log(calculateSalary(20000,5000));

function checkEvenOdd(num){
    return num % 2 === 0 ? "Even" : "Odd";
}
console.log(checkEvenOdd(7));

function findMax(a,b,c){
    return Math.max(a,b,c);
}
console.log(findMax(10,50,30));

function calculateGST(price){
    return price + (price*0.18);
}
console.log(calculateGST(1000));

function login(username,password){
    if(username === "admin" && password === "1234"){
        console.log("Login Successful");
    }else{
        console.log("Invalid Credentials");
    }
}

login("admin","1234");