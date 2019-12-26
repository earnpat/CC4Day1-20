function minmax(arr) {
    arr.sort(function(a,b) { return a-b });
    return `${arr[0]}\n${arr[arr.length-1]}`
    }


console.log(minmax([1,2,3,4,5]))