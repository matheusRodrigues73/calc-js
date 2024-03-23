export default (inputValue, setInputValue, button) => {
  let expression = inputValue;
  let value = button.dataset.value;
  let lastValue = expression[expression.length - 1];

  if (Number(value) || value == "0") {
    if (lastValue == ")") {
      value = ` * ${value}`;
    }
  } else {
    if (expression === "" && value !== "( )" && value !== "√") {
      value = "";
    } else {
      switch (value) {
        case "√":
          if (Number(lastValue) || lastValue == "0") {
            expression += " * ";
          }
          value = `${value}(`;
          break;
        case "( )":
          const openBrackets = expression.match(/\(/g) || [];
          const closeBrackets = expression.match(/\)/g) || [];
          if (Number(lastValue) || lastValue == "0" || lastValue == "%") {
            if (
              expression.lastIndexOf("(") < expression.lastIndexOf(")") ||
              openBrackets.length == closeBrackets.length
            ) {
              expression += " * ";
              value = "(";
            } else {
              value = ")";
            }
          } else if (lastValue == ")") {
            if (openBrackets.length > closeBrackets.length) value = ")";
            else value = " * (";
          } else {
            value = "(";
          }
          break;
        case ".":
          if (Number(lastValue) || lastValue == "0") {
            const arrExpression = expression.split(" ");
            value = arrExpression[arrExpression.length - 1].includes(".")
              ? ""
              : value;
          } else {
            value = "";
          }
          break;
        default:
          if (lastValue == "(") {
            if (value !== "-" || value !== "=") {
              value = "";
            }
          } else {
            value = value === "%" || value === "=" ? value : ` ${value} `;
            if (lastValue == " ") {
              expression = expression.replace(/\s\D\s$/, "");
            } else if (lastValue == ",") {
              value = "";
            }
          }
          break;
      }
    }
  }
  expression += value;
  setInputValue(expression);
};
