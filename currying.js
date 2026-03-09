// Currying (23–24)

(function () {

 // Currying addition

    function addNumbers(a) {
    return function (b) {
        return function (c) {
            return a + b + c;
        };
    };
}

console.log("Addition:", addNumbers(2)(3)(4));


// Currying multiplication
 
function multiplyNumbers(a) {
    return function (b) {
        return function (c) {
            return a * b * c;
        };
    };
}

console.log("Multiplication:", multiplyNumbers(2)(3)(4));

})();