let n=1473,f=0;

for(let i=2;i<=Math.sqrt(n);i++)
{
    if(n%i==0)
    {
        f = 1;
        break;
    }
    else f = 0;
}

if(f==0) console.log(true)
if(f==1) console.log(false)