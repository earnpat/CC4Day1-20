function herman(r) {
    let a,b;
    a = Math.PI*Math.pow(r,2);
    b = 2*Math.pow(r,2);
    return `${a.toFixed(6)}\n${b.toFixed(6)}`
}

console.log(herman(21))