const sumAll = function(a,b) {

    let totalSum = b;
    if (typeof a === 'number' && a >= 0 && typeof b === 'number' && b >= 0) {
    if (a < b ) {
        for ( let i = a; i < b; i++) {
            totalSum += i
        }

    }
    else if ( a > b ) {
        for ( let i = a; i > b; i--)
        totalSum += i;
    }
    

return totalSum
}
else { 
    return totalSum = 'ERROR';
}
}

// Do not edit below this line
module.exports = sumAll;
