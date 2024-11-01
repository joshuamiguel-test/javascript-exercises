const reverseString = function (string) {
  //   let reverseWord = "";
  //   for (let i = word.length - 1; i >= 0; i--) {
  //     reverseWord += word[i];
  //   }
  //   return reverseWord;

  return string.split("").reverse().join("");
};

// Do not edit below this line
module.exports = reverseString;
