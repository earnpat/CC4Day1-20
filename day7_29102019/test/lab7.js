let arr = [3, 5, 4, 2, 1];
let max=-9999,index,sum=0;
arr.forEach(function(x,y) {
    sum += x;
    if(max<x)
    {
        max = x;
        index = y;
    }
})
console.log(`sum = ${sum} | max = ${max} | index = ${index+1}`)