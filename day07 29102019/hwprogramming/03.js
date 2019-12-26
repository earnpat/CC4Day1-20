function matrix(mat1,mat2) {
    let sum = [[]];
    if(mat1.length!=mat2.length) console.log(`${mat1.length} + ${mat2.length}`)
    else {
        for(let i=0;i<mat1.length;i++)
        {
            for(let j=0;j<mat2.length;j++)
            {
                mat1[i][j] += mat2[i][j];
            }
        }
    }
    return mat1
}

let sum = matrix([[1,2,3],[3,2,1],[1,3,2]],[[1,1,1],[1,1,1],[1,1,1]]);

for(let i=0;i<sum.length;i++)
{
    console.log(sum[i])
}