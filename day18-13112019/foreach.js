let array = [1,2,3,4,5,6,7,8,9,10]
let sum = 0;
for(key in array)
{
    if(array[key]%2==0)
    {
        sum += array[key];
    }
}
console.log(sum)