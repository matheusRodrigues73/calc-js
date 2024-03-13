import React from "react";
import { useRef } from "react";
import useInputErrorPrevent from "./useInputErrorPrevent.js";

export default ({ id, classes, errorClasses, disabled }) => {
  const { inputValue, inputErrorHandler } = useInputErrorPrevent(inputIndex);
  const inputIndex = useRef(null);
  return (
    <>
      <input
        ref={inputIndex}
        id={id ?? "index"}
        type="text"
        className={`class ${classes}`}
        value={inputValue}
        disabled={disabled ?? false}
        onChange={(ev) =>
          inputErrorHandler(
            inputIndex.current,
            ev.target.value,
            errorClasses ?? "class"
          )
        }
      />
    </>
  );
};
