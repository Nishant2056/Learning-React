import InputPart from "./components/InputPart";
import TodoItems from "./components/TodoItems";
import WelcomeMessage from "./components/WelcomeMessage";
import "./App.css";
import { useState } from "react";

function App() {
  let initialRequiredData = [
    { task: "Go to market", date: "2024-06-10" },
    { task: "Buy Groceries", date: "2024-06-11" },
    { task: "Complete React Project", date: "2024-06-12" },
  ];

  const [requiredData, setRequiredData] = useState(initialRequiredData);

  const handleNewItem = (task, date) => {
    const newAddedItem = [...requiredData, { task, date }];
    setRequiredData(newAddedItem);
  };

  const handleDeleteItem = (task) => {
    const updatedItems = requiredData.filter((item) => item.task !== task);
    setRequiredData(updatedItems);
  };

  return (
    <center>
      <h1 className="heading">Todo-List</h1>
      <InputPart onNewItem={handleNewItem}></InputPart>
      {requiredData.length === 0 && <WelcomeMessage />}
      <TodoItems
        todoItems={requiredData}
        onDeleteItem={handleDeleteItem}
      ></TodoItems>
    </center>
  );
}

export default App;
