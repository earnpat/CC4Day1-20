function max(a,b,c) {
    let arr = [a,b,c];
    max = -9999;
    for(let i=0;i<arr.length;i++)
    {
        (arr[i]>max) ? max=arr[i] : max=max ;
    }
    return max;

}

console.log(max(5,8,7))