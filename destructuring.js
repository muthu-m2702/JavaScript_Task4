// Destructuring (35–38)

(function () {

console.log("----- DESTRUCTURING TASK -----");

// 1. Array destructuring
let numbers = [10, 20, 30, 40];

let [num1, num2, num3, num4] = numbers;

console.log(num1, num2, num3, num4);


// 2. Object destructuring
let employee = {
    name: "",
    role: "Developer",
    salary: 40000
};

let {name, role, salary} = employee;

console.log(name, role, salary);


// 3. First and last element
let [first, , , last] = numbers;

console.log("First:", first);
console.log("Last:", last);


// 4. Nested array destructuring
let nestedArray = [1, 2, [3, 4]];

let [x, y, [p, q]] = nestedArray;

console.log(p, q);

})();