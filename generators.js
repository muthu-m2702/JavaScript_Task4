// Generator Functions (27–28)

function* coupons(){
    yield "DISC10";
    yield "DISC20";
    yield "DISC30";
}

let c = coupons();

console.log(c.next().value);
console.log(c.next().value);
console.log(c.next().value);

function* motivation(){
    yield "Keep Coding";
    yield "Never Give Up";
    yield "Debug and Learn";
}

let m = motivation();

console.log(m.next().value);
console.log(m.next().value);
console.log(m.next().value);