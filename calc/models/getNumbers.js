function getNumbers(expression, indexOfOperator) {
  const firstNumber = Number(expression[indexOfOperator - 1]);
  const secondNumber = Number(expression[indexOfOperator + 1]);
  const operationIndex = {
    start: indexOfOperator - 1,
    end: 3,
  };
  return { firstNumber, secondNumber, operationIndex };
}

module.exports = getNumbers;
