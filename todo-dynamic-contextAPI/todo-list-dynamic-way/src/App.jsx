import InputPart from "./components/InputPart";
import TodoItems from "./components/TodoItems";
import WelcomeMessage from "./components/WelcomeMessage";
import "./App.css";
import { useState } from "react";
import { TodoItemsStore } from "./store/TodoItemsStore";

function App() {
  // let initialRequiredData = [
  //   { task: "Go to market", date: "2024-06-10" },
  //   { task: "Buy Groceries", date: "2024-06-11" },
  //   { task: "Complete React Project", date: "2024-06-12" },
  // ];

  const [requiredData, setRequiredData] = useState([]);

  const addNewItems = (task, date) => {
    // const newAddedItem = [...requiredData, { task, date }];
    setRequiredData((currentValue) => [...currentValue, { task, date }]);
  };

  const DeleteItem = (task) => {
    const updatedItems = requiredData.filter((item) => item.task !== task);
    setRequiredData(updatedItems);
  };

  return (
    <TodoItemsStore.Provider
      value={{
        requiredData: requiredData,
        setItems: addNewItems,
        deleteExistingItem: DeleteItem,
      }}
    >
      <center>
        <h1 className="heading">Todo-List</h1>
        <InputPart></InputPart>
        <WelcomeMessage />
        <TodoItems></TodoItems>
      </center>
    </TodoItemsStore.Provider>
  );
}

export default App;
