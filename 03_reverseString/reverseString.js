const reverseString = function(normalString) {

    
    let reverseStringresultat = "";

    for ( let i = normalString.length -1; i >= 0; i--) {
        reverseStringresultat += normalString[i];
    }
    return reverseStringresultat;


};

// Do not edit below this line
module.exports = reverseString;
