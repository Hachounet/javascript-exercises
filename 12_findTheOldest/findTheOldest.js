const findTheOldest = function(input) {


 return input.reduce((acc, currentValue) => {
    acc.push([currentValue.name] = currentValue.yearOfDeath - currentValue.yearOfBirth );
    return acc;
        }, []);


};

// Do not edit below this line
module.exports = findTheOldest;
