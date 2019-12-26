function add(n) {
    // num = (n+1)*(n/2);
    // return num;

    if(n>0) return n + add(n-1);
    else return 0;
}

console.log(add(5))