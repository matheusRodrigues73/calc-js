module.exports = function calcReduceLoader(numbersArray, operation) {
  let index = 0;
  return numbersArray.reduce((accumResult, currentNumber) => {
    index++;
    if (index === 1) {
      return currentNumber;
    } else {
      return operation(accumResult, currentNumber);
    }
  }, 0);
};
