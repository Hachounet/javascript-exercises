const removeFromArray = function(myArray, ...toRemove) {

    let newArray = [...toRemove];
    let result = [];

    for ( let i = 0; i < myArray.length; i++ ) {
       let match = false;
       for (let j = 0; j < newArray.length; j++) {
        if (myArray[i] === newArray[j] ) {
            match = true;
            break;

        }
       }
       if (!match) {
        result.push(myArray[i]);
       }
    }
    return result;
};

// Do not edit below this line
module.exports = removeFromArray;
