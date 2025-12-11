import Item from "./item";
import { useState } from "react";
const FoodItems = ({ data }) => {
  let [activeClass, setActiveClass] = useState([]);

  let onBuyButton = (item) => {
    let newItems = [...activeClass, item];
    setActiveClass(newItems);
  };
  return (
    <ul class="list-group">
      {data.map((food) => (
        <Item
          key={food}
          foodItem={food}
          bought={activeClass.includes(food)}
          handleBuyButton={() => onBuyButton(food)}
        />
      ))}
    </ul>
  );
};

export default FoodItems;
