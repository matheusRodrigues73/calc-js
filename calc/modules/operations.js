const operationLogic = require("./operationsLogic.js");

const operations = {
  sumOperation(numbers) {
    return operationLogic("sum", numbers);
  },
  subtractOperation(...numbers) {
    return a - b;
  },
  multiplyOperation(a, b) {
    return a * b;
  },
  divideOperation(a, b) {
    return a / b;
  },
  percentOperation(a, b) {
    if (b) {
      return (a * b) / 100;
    } else {
      return a / 100;
    }
  },
  powerOperation(a, b) {
    return a ** b;
  },
  radiateOperation(a) {
    return Math.sqrt(a);
  },
};

module.exports = operations;
