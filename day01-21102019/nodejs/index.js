const _ = require('lodash');
const arr = [[1,2,3,4,5]];
console.log(_.flatten(arr));

const arr2 = arr.reduce(function(previousValue,currentValue) {
    return previousValue + currentValue
})

console.log(arr2);