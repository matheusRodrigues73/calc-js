const Calculator = require("./Caculator.js");

class App {
  static #calc = new Calculator();
  static resolve(...expression) {
    return this.#calc.sum(...expression);
  }
}

module.exports = App;
