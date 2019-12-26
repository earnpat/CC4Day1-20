function teneven(n) {
    if(n%2==0) return true;
    else return false;
}

function base16(n) {
    let s = n.split("",n.length);

    if(s[n.length]=='A') s[n.length] = 10;
    if(s[n.length]=='B') s[n.length] = 11;
    if(s[n.length]=='C') s[n.length] = 12;
    if(s[n.length]=='D') s[n.length] = 13;
    if(s[n.length]=='E') s[n.length] = 14;
    if(s[n.length]=='F') s[n.length] = 15;

    if(s[n.length]%2==0) return true;
    else return false;
}

function base9(n) {
    let sum=0;
    let s = n.split("",n.length);
    let j=s.length-1
    for(let i=0;i<s.length;i++)
    {
        s[i] = s[i]*Math.pow(9,j);
        j--;
    }

    for(let k=0;k<s.length;k++) sum += s[k];

    if(sum%2==0) return true;
    else return false;
}


console.log(teneven(5216));
console.log(base16('AB'));
console.log(base9('17'));