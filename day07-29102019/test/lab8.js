let a = [2,3,8,6];
let b=10,f=1;
for(let i=0;i<a.length-1;i++)
{
    for(let j=i+1;j<a.length;j++)
    {
        if(a[i]+a[j]==b)
        {
            f=0;
            break;
        }
    }
}
if(f==0) console.log(true)
if(f==1) console.log(false)