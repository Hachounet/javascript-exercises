const leapYears = function(year) {

    let result = false;
    if ( year % 4 === 0 && year % 100 !== 0) {
        return result = true;
        
    }
        else if ( year % 100 === 0 && year % 400 === 0){
            return result = true;
        }

    else {
        return result = false;
    }
console.log(typeof(result));
};

// Do not edit below this line
module.exports = leapYears;
