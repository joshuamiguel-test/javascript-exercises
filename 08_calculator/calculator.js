const add = function (firstNumber, secondNumber) {
  return firstNumber + secondNumber;
};

const subtract = function (firstNumber, secondNumber) {
  return firstNumber - secondNumber;
};

const sum = function (arrayNumber) {
  return arrayNumber.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
};

const multiply = function (arrayNumber) {
  return arrayNumber.reduce(
    (accumulator, currentValue) => accumulator * currentValue
  );
};

const power = function (a, b) {
  return Math.pow(a, b);
};

const factorial = function (number) {
  let result = 1;
  for (i = number; i >= 1; i--) {
    result *= i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
