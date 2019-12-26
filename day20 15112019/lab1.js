const numbers = [1, 2, 3, 4, 5]
const one = numbers.map((number, idx) => number-idx);
const two = numbers.map((number, idx) => number/number);
console.log(one);
console.log(two);