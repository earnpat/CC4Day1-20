// function base10tobase2(n) {
    
// }
// console.log(base10tobase2('9'));

let num=25,i=0;
let arr = [];

while(num>0) {
    arr[i] = num%2    
    i++;
    num = parseInt(num/2);
}

console.log(arr.reverse())