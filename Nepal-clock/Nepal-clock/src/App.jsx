import ClockHeading from "./components/ClockHeading.jsx";
import ClockSlogan from "./components/ClockSlogan.jsx";
import ActualTime from "./components/ActualTime.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <center>
      <ClockHeading />
      <ClockSlogan />
      <ActualTime />
    </center>
  );
}

export default App;
