function bracketsLoader(expression) {
  let firstBrackets = expression.lastIndexOf("(");
  let lastBrackets = expression.indexOf(")");
  let bracketExpression = expression.slice(firstBrackets, lastBrackets + 1);
  return bracketExpression;
}

module.exports = bracketsLoader;
