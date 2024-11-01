const removeFromArray = function (numberGroup, ...toRemove) {
  return numberGroup.filter((number) => !toRemove.includes(number));

  //   used filter for the numberGroup array then use .includes to check if the number(variable you passed all the array value)
  //   is same as the toRemove array numbers. Then used ! to turn it true if the number is to remove.
  // note: used ... collects all additional arguments passed to the function into an array named toRemove
};

// Do not edit below this line
module.exports = removeFromArray;
