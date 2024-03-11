const calcReduceLoader = require("./models/calcReduceLoader");
const useOperations = require("./models/useOperations");
class Calcjs {
  static sum(...numbers) {
    return calcReduceLoader(numbers, useOperations.sumOperation);
  }
  static subtract(...numbers) {
    return calcReduceLoader(numbers, useOperations.subtractOperator);
  }
  static multiply(...numbers) {
    return calcReduceLoader(numbers, useOperations.multiplyOperator);
  }
  static divide(...numbers) {
    return calcReduceLoader(numbers, useOperations.divideOperator);
  }
  static power(...numbers) {
    return calcReduceLoader(numbers, useOperations.powerOperator);
  }
  static percent(number) {
    return useOperations.percentConvert(number);
  }
  static radiate(number) {
    return useOperations.radiateOperator(number);
  }
  static resolve(expression) {
    expression = expression.split(" ");
    expression = expression.map((item) => {
      let percentIndex = item.indexOf("%");
      if (percentIndex !== -1) {
        item = item.replace(`${item[percentIndex]}`, " / 100");
      }
      return item;
    });
    expression = expression.join(" ");
    return eval(expression);
  }
}

module.exports = Calcjs;
