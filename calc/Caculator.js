const operations = require("./modules/operations.js");

class Calculator {
  sum(...numbers) {
    return operations.sumOperation(numbers);
  }
}

module.exports = Calculator;
