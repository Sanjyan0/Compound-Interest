let P = 10000;  // Principal amount
let r = 0.05;   // Annual interest rate in decimal
let n = 12;     // Number of times interest is compounded per year 
let t = 3;      // Time in years

let amount = P * ((1 + (r / n)) ** (n * t));

let compoundInterest = amount - P;

console.log(`The compound interest after ${t} years is: ${compoundInterest.toFixed(2)}`);