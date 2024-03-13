import React from "react";
import HeaderSocialMedias from "./components/HeaderSocialMedias.jsx";
import InputErrorPrevent from "./components/InputErrorPrevent/index.jsx";

export default () => {
  return (
    <>
      <HeaderSocialMedias
        title={"Calc.js"}
        instagram={"https://www.instagram.com/theuz_2104/"}
        github={"https://github.com/matheusRodrigues73"}
        linkedin={
          "https://www.linkedin.com/in/matheus-rodrigues-marino-151a77297/"
        }
      />
      <div id="inputOutputContent">
        <InputErrorPrevent id={"test"} disabled={true} />
        <div className="resultPrevious"></div>
      </div>
      <div id="calcButtonsContainer">
        <div className="calcBtn"></div>
      </div>
    </>
  );
};
