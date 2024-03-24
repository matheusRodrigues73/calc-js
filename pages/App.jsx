import React, { useRef, useState } from "react";
import HeaderSocialMedias from "./components/HeaderSocialMedias/index.jsx";
import buttonsList from "./loaders/buttonsList.js";
import textInput from "./loaders/textInput.js";
import CalcInput from "./components/CalcInput/index.jsx";

export default () => {
  const [inputValue, setInputValue] = useState("");
  const calcInput = useRef(null);
  return (
    <div className="app">
      <HeaderSocialMedias
        title={"Calc.js"}
        classes={"header"}
        iconsClasses={"icons"}
        instagram={"https://www.instagram.com/theuz_2104/"}
        github={"https://github.com/matheusRodrigues73"}
        linkedin={
          "https://www.linkedin.com/in/matheus-rodrigues-marino-151a77297/"
        }
      />
      <CalcInput
        ref={calcInput}
        id={"calcInput"}
        inputValue={inputValue}
        setInputValue={setInputValue}
      />
      <div className="calcButtonsContainer">
        {buttonsList.map((button) => {
          return (
            <button
              key={button}
              id={`button-${button}`}
              className="calcBtn"
              data-value={button}
              onClick={(ev) => {
                textInput(inputValue, setInputValue, ev.target);
              }}
            >
              {button}
            </button>
          );
        })}
      </div>
    </div>
  );
};
