export default (expression) => {
  if (expression.match(/\/ 0/g)) {
    return new Error("impossible to divide by 0");
  }
  if (expression.includes("√")) {
    expression = expression.replace(/√/g, "Math.sqrt");
  }
  if (expression.includes("^")) {
    expression = expression.replace(" ^ ", " ** ");
  }
  if (expression.includes("%")) {
    expression = expression.replace("%", " / 100");
  }
  try {
    const result = eval(expression);
    return result;
  } catch (err) {
    return new Error("Invalid Expression");
  }
};
