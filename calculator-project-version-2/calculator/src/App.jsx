import Display from "./components/displayPart.jsx";
import Buttons from "./components/ButtonsPart.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import css from "./App.module.css";
import { useState } from "react";
function App() {
  const [calVal, setCalVal] = useState("");
  const onButtonClick = (value) => {
    console.log(value);
    if (value === "=") {
      setCalVal(eval(calVal));
    } else if (value === "C") {
      setCalVal("");
    } else {
      let solution = calVal + value;
      setCalVal(solution);
    }
  };
  return (
    <>
      <div className={css.calculator}>
        <Display displayValue={calVal}></Display>
        <Buttons onButtonClick={onButtonClick}></Buttons>
      </div>
    </>
  );
}

export default App;
