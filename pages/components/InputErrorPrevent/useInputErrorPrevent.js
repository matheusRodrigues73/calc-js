import { useState } from "react";

export default () => {
  const [inputValue, setInputValue] = useState("");

  const inputErrorHandler = (inputElement, value, classError) => {
    if (value instanceof Error) {
      inputElement.classList.add(classError);
      setInputValue(value.message);
    } else {
      if (inputElement.classList.contains(classError)) {
        inputElement.classList.remove(classError);
        setInputValue("");
      } else {
        setInputValue(value);
      }
    }
  };
  return { inputValue, inputErrorHandler };
};
