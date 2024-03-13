function firstOperators(expression) {
  if (
    expression.includes("%") ||
    expression.includes("^") ||
    expression.includes("√")
  ) {
    return {
      percentIndex: expression.indexOf("%"),
      powerIndex: expression.indexOf("^"),
      radIndex: expression.indexOf("√"),
    };
  } else return false;
}

module.exports = firstOperators;
