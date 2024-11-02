const convertToCelsius = function (numberToConvert) {
  celsius = ((numberToConvert - 32) * 5) / 9;

  return (roundedNumber = Math.round(celsius * 10) / 10);
};

const convertToFahrenheit = function (numberToConvert) {
  fahrenheit = (numberToConvert * 9) / 5 + 32;
  return (roundedNumber = Math.round(fahrenheit * 10) / 10);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
