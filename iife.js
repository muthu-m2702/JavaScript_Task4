// IIFE (25–26)

console.log("---- IIFE Example ----");

// First IIFE
;(function () {
    console.log("Website Loaded");
})();


// Second IIFE
;(function (price) {
    let discount = price * 0.10;
    let finalPrice = price - discount;

    console.log("Price after discount:", finalPrice);
})(1000);