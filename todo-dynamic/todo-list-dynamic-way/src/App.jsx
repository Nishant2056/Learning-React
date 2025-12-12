import InputPart from "./components/InputPart";
import TodoItems from "./components/TodoItems";
import "./App.css";
import { useState } from "react";

function App() {
  let initialRequiredData = [
    { task: "Go to market", date: "2024-06-10" },
    { task: "Buy Groceries", date: "2024-06-11" },
    { task: "Complete React Project", date: "2024-06-12" },
    { task: "Read a book", date: "2024-06-13" },
    { task: "Watch a movie", date: "2024-06-14" },
    { task: "Call a friend", date: "2024-06-15" },
    { task: "Attend a meeting", date: "2024-06-16" },
  ];

  const [requiredData, setRequiredData] = useState(initialRequiredData);

  const handleNewItem = (task, date) => {
    const newAddedItem = [...requiredData, { task, date }];
    setRequiredData(newAddedItem);
  };

  return (
    <center>
      <h1 className="heading">Todo-List</h1>
      <InputPart onNewItem={handleNewItem}></InputPart>
      <TodoItems todoItems={requiredData}></TodoItems>
    </center>
  );
}

export default App;
