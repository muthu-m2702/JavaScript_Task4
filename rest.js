// Rest Operator (32–34)

(function () {

console.log("----- REST OPERATOR TASK -----");

// 1. Sum all numbers
function sumAllNumbers(...nums) {
    let total = 0;

    for (let n of nums) {
        total += n;
    }

    return total;
}

console.log("Sum:", sumAllNumbers(1, 2, 3, 4));


// 2. First argument and rest arguments
function showArguments(firstArg, ...otherArgs) {
    console.log("First:", firstArg);
    console.log("Rest:", otherArgs);
}

showArguments(10, 20, 30, 40);


// 3. Total bill calculation
function totalBillAmount(...prices) {

    let bill = 0;

    for (let price of prices) {
        bill += price;
    }

    return bill;
}

console.log("Total Bill:", totalBillAmount(100, 200, 300));

})();