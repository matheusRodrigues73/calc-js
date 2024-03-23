import React, { forwardRef, useEffect, useState } from "react";
import deleteFunction from "./deleteFunction.js";
import styles from "./styles.module.css";
import calc from "../../loaders/calc.js";

export default forwardRef((props, ref) => {
  const [previousResult, setPreviousResult] = useState("");
  const [inputStatus, setInputStatus] = useState("");
  useEffect(() => {
    const previous = calc(props.inputValue);
    if (Number(previous)) {
      setPreviousResult(previous);
    } else {
      setPreviousResult("");
    }
    if (String(props.inputValue)?.indexOf("=") !== -1) {
      props.setInputValue((currentValue) => {
        return String(calc(currentValue.replace("=", "")));
      });
    }
    if (String(props.inputValue)?.includes("Error")) {
      setInputStatus(`${styles.error}`);
    }
  }, [props.inputValue]);

  // const inputHandle = (value) => {
  //   console.log(value);
  //   if (value === "=") {
  //     const result = calc(props.inputValue);
  //     if (result instanceof Error) {
  //       setInputStatus(styles.error);
  //       alert(result.message);
  //     } else if (Number(result)) {
  //       props.setInputValue(result);
  //     }
  //   } else {
  //     if (inputStatus === styles.error) {
  //       setInputStatus("default");
  //       props.setInputValue("");
  //     } else {
  //       props.setInputValue((currentValue) => (currentValue += value));
  //     }
  //   }
  // };
  return (
    <div id={props.id ?? false}>
      <div>
        <input
          ref={ref ?? false}
          type="text"
          className={`${styles.calcInput} ${inputStatus}`}
          value={props.inputValue}
        />
        <button
          className={styles.backspaceBtn}
          onClick={() => deleteFunction(props.inputValue, props.setInputValue)}
        >
          <i className="bi bi-backspace"></i>
        </button>
      </div>
      <div className={styles.previousResult}>{previousResult}</div>
    </div>
  );
});
