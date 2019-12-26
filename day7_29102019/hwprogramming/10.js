let ball=1;
let str='AB';
let char = str.split("",str.length)

for(let i=0;i<char.length;i++)
{
    if(ball==1 && char[i]=='A') ball = 2;
    else if(ball==2 && char[i]=='A') ball = 1;
    else if(ball==2 && char[i]=='B') ball = 3;
    else if(ball==3 && char[i]=='B') ball = 2;
    else if(ball==3 && char[i]=='C') ball = 1;
}

console.log(ball)