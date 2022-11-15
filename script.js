console.log("1. Print odds 1-20");
for (var i = 1; i <= 20; ++i) {
    if (i % 2 == 1) {
        console.log(i);
    }
}
console.log();

console.log("2. Decreasing multiples of 3");
for (var i=100; i > 0; --i) {
    if (i % 3 == 0) {
        console.log(i);
    }
}
console.log();

console.log("3. Print the Sequence: (4, 2.5, 1, -0.5, -2, -3.5)");
var number = 5.5;
for (var i = 0; i < 6; ++i) {
    number -= 1.5;
    console.log(number);
}
console.log();

console.log("4. Sigma: Print the Sum of 1-100");
var sum = 0;
for (var i = 1; i <= 100; ++i) {
    sum += i;
}
console.log("Sum is: " + sum);
console.log();

console.log("5. Factorial: Total value of multiple 1-12");
var product = 1;
for (var i = 1; i <= 12; ++i) {
    product *= i;
}
console.log("Factorial of 12 (12!) is: " + product);