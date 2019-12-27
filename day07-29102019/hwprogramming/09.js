abc = (n1,n2,n3,abc) => {
    // let char = abc.split("",abc.length)
    let char = Array.from(abc);
    let arr = [n1,n2,n3];
    arr.sort(function(a,b) { return a-b });
    for(let i=0;i<arr.length;i++)
    {
        if(char[i]=='A') char[i] = arr[0];
        else if(char[i]=='B') char[i] = arr[1];
        else char[i] = arr[2];
    }
    return char.join(' ')
}

console.log(abc(6,4,2,'CAB'))