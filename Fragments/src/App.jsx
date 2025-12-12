import FoodHeading from "./components/FoodHeading";
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";
import { useState } from "react";
function App() {
  // let fooditems = ["Dal", "Bhaat", "Chicken", "Salad", "Egg"];

  let [fooditems, setFoodItems] = useState(["Bhaat", "Chicken", "Egg"]);
  // let = displayingTextArr[0];
  // let displayingTextMethod = displayingTextArr[1];

  const handleOnKeyDown = (e) => {
    if (e.key === "Enter") {
      let newFoodItem = e.target.value;
      if (!newFoodItem) {
        alert("please enter the foodItems");
      } else {
        let updatedFoodItems = [...fooditems, newFoodItem];
        setFoodItems(updatedFoodItems);
        e.target.value = "";
      }
    }
  };
  return (
    <>
      <Container>
        <FoodHeading></FoodHeading>
        <FoodInput handleOnKeyDown={handleOnKeyDown}></FoodInput>
        <ErrorMessage data={fooditems}></ErrorMessage>
        <FoodItems data={fooditems}></FoodItems>
      </Container>

      {/* <Container>
        <p>
          This is the list of healthy food that are good for your health and
          well-being. So do follow these diet to make yourself a healthy person.
        </p>
      </Container> */}
    </>
  );
}

export default App;
