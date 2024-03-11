module.exports = {
  sumOperation(a, b) {
    a = Number(a);
    b = Number(b);
    if (a === NaN || b === NaN) {
      throw new Error("invalid values for sum");
    }
    return a + b;
  },
  subtractOperator(a, b) {
    a = Number(a);
    b = Number(b);
    if (a === NaN || b === NaN) {
      throw new Error("invalid values for subtract");
    }
    return a - b;
  },
  multiplyOperator(a, b) {
    a = Number(a);
    b = Number(b);
    if (a === NaN || b === NaN) {
      throw new Error("invalid values for multiply");
    }
    return a * b;
  },
  divideOperator(a, b) {
    a = Number(a);
    b = Number(b);
    if (a === NaN || b === NaN) {
      throw new Error("invalid values for divide");
    } else if (b === 0) {
      throw new Error('Impossible divide for "0"');
    }
    return a / b;
  },
  powerOperator(a, b) {
    a = Number(a);
    b = Number(b);
    if (a === NaN || b === NaN) {
      throw new Error("invalid values for power");
    }
    return a ** b;
  },
  percentConvert(a) {
    a = Number(a);
    if (a === NaN) {
      throw new Error("invalid value for percent");
    }
    return a / 100;
  },
  radiateOperator(a) {
    a = Number(a);
    if (a === NaN) {
      throw new Error("invalid value for radiate");
    } else if (a < 0) {
      throw new Error("Cannot resolve this");
    }
    return Math.sqrt(a);
  },
};
