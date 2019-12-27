function charcheck(str) {
    if(str == str.toLowerCase()) return 'All Small Letter';
    else if(str == str.toUpperCase()) return 'All Capital Letter';
    else return 'Mix';
}

console.log(charcheck('AbCdEfG'))