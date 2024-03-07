function operationLogic(operation, numbers) {
  return numbers.reduce((accumResult, currentNumber) => {
    if (operation === "sum") return accumResult + currentNumber;
    else if (operation === "subtract") return accumResult - currentNumber;
    else if (operation === "multiply") return accumResult * currentNumber;
    else if (operation === "divide") return accumResult / currentNumber;
  }, 0);
}

module.exports = operationLogic;
