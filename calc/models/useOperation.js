function useOperation(operation, numbers) {
  let index = 0;
  return numbers.reduce((accumResult, currentNumber) => {
    index++;
    if (index === 1 && numbers.length > 1) return currentNumber;
    else if (operation === "sum") return accumResult + currentNumber;
    else if (operation === "subtract") return accumResult - currentNumber;
    else if (operation === "multiply") return accumResult * currentNumber;
    else if (operation === "divide") {
      if (currentNumber === 0) {
        throw new Response("Invalid Expression");
      }
      return accumResult / currentNumber;
    } else if (operation === "power") return accumResult ** currentNumber;
    else if (operation === "percent") {
      if (numbers.length == 1) return currentNumber / 100;
      else {
        return (accumResult * currentNumber) / 100;
      }
    } else if (operation === "radiate") return Math.sqrt(currentNumber);
  }, numbers[0]);
}

module.exports = useOperation;
