const operationsLoader = require("../loaders/operationsLoader");

const operation = {
  sumOperation(numbers) {
    operationsLoader("sum", numbers);
  },
  subtractOperation(numbers) {
    operationsLoader("subtract", numbers);
  },
  multiplyOperation(numbers) {
    operationsLoader("multiply", numbers);
  },
  divideOperation(numbers) {
    operationsLoader("divide", numbers);
  },
  powerOperation(numbers) {
    operationsLoader("power", numbers);
  },
  percentOperation(numbers) {
    operationsLoader("percent", numbers);
  },
  radiateOperations(numbers) {
    operationsLoader("radiate", numbers);
  },
};
