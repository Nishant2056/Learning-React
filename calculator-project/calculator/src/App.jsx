import Display from "./components/displayPart.jsx";
import Buttons from "./components/ButtonsPart.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import css from "./App.module.css";
function App() {
  return (
    <>
      <div className={css.calculator}>
        <Display></Display>
        <Buttons></Buttons>
      </div>
    </>
  );
}

export default App;
