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
    if (String(props.inputValue)?.includes("=")) {
      props.setInputValue((currentValue) => {
        return String(calc(currentValue.replace("=", "")));
      });
    }
    if (inputStatus === `${styles.error}`) {
      props.setInputValue("");
      setInputStatus("");
    }
    if (String(props.inputValue)?.includes("Error")) {
      setInputStatus(`${styles.error}`);
    }
  }, [props.inputValue]);

  return (
    <div id={props.id ?? false}>
      <div>
        <input
          ref={ref ?? false}
          type="text"
          className={`${styles.calcInput} ${inputStatus}`}
          disabled={true}
          value={props.inputValue}
          onChange={(ev) => props.setInputValue(ev.target.value)}
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
