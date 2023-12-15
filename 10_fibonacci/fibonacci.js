

const fibonacci = function(input) {
    let result = 0;
    input = parseInt(input)
    if ( input < 0){
        return input = "OOPS";
    }
    else if ( input === 1 || input === 2){
        return result = 1;
    }
    else {
        let fibonarray = [1, 1]
        console.log(`test, this is my fibonarray before forloop : ${fibonarray}`)
            for ( let i = 2; i < input; i++ ){
                
                fibonarray.push(fibonarray[i-1] + fibonarray[i-2])
                console.log(fibonarray)
            }
            result = fibonarray[input -2] + fibonarray[input -3]
            
        }
      return result
    }



// Do not edit below this line
module.exports = fibonacci;
