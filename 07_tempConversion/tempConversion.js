const convertToCelsius = function(a) {

  let inFah
  let inCelsius

  (inCelsius = (a -32) * (5/9) )
  inCelsius = inCelsius.toFixed(1);
  return parseFloat(inCelsius) 







};

const convertToFahrenheit = function(b) {

  let inFah

  inFah = (b * (9/5) + 32 ) 
  inFah = inFah.toFixed(1);
  return parseFloat(inFah)



};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
