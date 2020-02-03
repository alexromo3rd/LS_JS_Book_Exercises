let add = (a, b) => a + b;

let subtract = (a, b) => a - b;

let sum = add(20, 45);
// console.log(sum);

let difference = subtract(80, 10);
// console.log(difference);

let times = (num1, num2) => num1 * num2;

console.log(times(add(20, 45), subtract(80, 10)));