const repeatString = function(string, num) {

  let returnString = "";

 if ( num === -1) {
    returnString = "ERROR"
    return returnString; }
else { 
for ( let i = 0; i < num; i++ ) {
    returnString = string.repeat(num);}
    return returnString;

}
 }



// Do not edit below this line
module.exports = repeatString;
