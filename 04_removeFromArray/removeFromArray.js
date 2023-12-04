const removeFromArray = function(myArray, ...toRemove) {

    let newArray = [...toRemove];
    let result = [];

    for ( let i = 0; i < myArray.length; i++ ) {
        if ( myArray[i] !== newArray[i] ) {
            result.push(myArray[i])
        }
    }
    return result;

};

// Do not edit below this line
module.exports = removeFromArray;
