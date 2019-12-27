function ascii(str)
{
    let char = str.split("", str.length)

    for(key in char)
    {
        char[key] = str.charCodeAt(key)+3;
        if(char[key]==91) char[key] = String.fromCharCode(65);
        else if(char[key]==92) char[key] = String.fromCharCode(66);
        else if(char[key]==93) char[key] = String.fromCharCode(67);
        else char[key] = String.fromCharCode(char[key]);
    }
    // console.log(char.join(""))
    return char.join("");
}
console.log(ascii('STUDENZ'))