const sumAll = function (firstNumber, secondNumber) {
  let sum = 0;
  if (
    firstNumber < 0 ||
    secondNumber < 0 ||
    typeof firstNumber !== "number" ||
    typeof secondNumber !== "number" ||
    !Number.isInteger(firstNumber) ||
    !Number.isInteger(secondNumber)
  ) {
    return "ERROR";
  }
  const start = Math.min(firstNumber, secondNumber);
  const end = Math.max(firstNumber, secondNumber);
  for (let i = start; i <= end; i++) {
    sum += i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
