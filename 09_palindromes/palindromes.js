const palindromes = function (str) {

    let regex = /[^A-Za-z0-9]/g;
    str = str.toLowerCase().replace(regex, "")
    let len = str.length;

    for ( let i = 0; i < len /2; i++){
        if (str[i] !== str[len - 1 - i]){
            return false;
        }
    }
    return true;
    
    /*
    let cleanedStringToArray = cleanedString.split()
    let reversedArray = cleanedStringToArray.reverse()
    let rejoinArray = reversedArray.join()
    console.log(`rejoinArray = ${rejoinArray}`)
    console.log(`reversedArray = ${reversedArray}`)
    if ( rejoinArray === cleanedString){
        return true;
    }
    else {
        return false;
    } */
};

// Do not edit below this line
module.exports = palindromes;
