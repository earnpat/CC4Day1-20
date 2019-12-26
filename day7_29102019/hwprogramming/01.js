function grading(a,b,c) {
    let d = a+b+c;
    if(d>=80) return 'A';
    if(d>=75) return 'B+';
    if(d>=70) return 'B';
    if(d>=65) return 'C+';
    if(d>=60) return 'C';
    if(d>=55) return 'D+';
    if(d>=50) return 'D';
    else return 'F';
}

console.log(grading(25,25,30))