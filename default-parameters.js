// Default Parameters (7–9)

function createEmployee(name, role="Trainee"){
    console.log(name + " - " + role);
}
createEmployee("Muthu");

function calculateDiscount(price, discount=10){
    return price - (price * discount / 100);
}
console.log(calculateDiscount(1000));

function orderFood(item, quantity=1){
    console.log(item + " x " + quantity);
}
orderFood("Pizza");