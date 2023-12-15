const add = function(a,b) {
  let sum = ( Number(a)+ Number(b));
	return sum;
};

const subtract = function(a,b){
  let substract = Number(a) - Number(b);
  return substract;
};

const sum = function(array) {
  let summing = array.reduce((acc, currentValue) => acc + currentValue, 0)
	return summing;
};

const multiply = function(array) {
  let multiply = array.reduce((acc, currentValue) => acc * currentValue)
  return multiply;
};

const power = function(a,b) {
	let power = Number(a) ** Number(b)
  return power;
};

const factorial = function(n) {
  return n > 1?n * factorial(n-1):1;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
