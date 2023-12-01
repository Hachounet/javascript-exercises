const repeatString = function(string, num) {

  string = "hey";
  result = "";
for ( num = 0; num < 10; num++ ) {
    if ( num === 3 ) {
        result = string.repeat(num);
    }
    else if ( num === 10) {
        string = string.repeat(num)
        
    }
    
}
} 



// Do not edit below this line
module.exports = repeatString;
