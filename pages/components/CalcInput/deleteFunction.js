export default (inputValue, setInputValue) => {
  let expression = inputValue;
  if (expression[expression.length - 1] == " ") {
    expression = expression.replace(/\s\D\s$/, "");
  } else if (expression[expression.length - 2] == "√") {
    expression = expression.replace(/..$/, "");
  } else {
    expression = expression.replace(/.$/, "");
  }
  setInputValue(expression);
};
