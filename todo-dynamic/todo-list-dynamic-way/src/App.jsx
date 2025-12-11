import InputPart from "./components/InputPart";
import TodoItems from "./components/TodoItems";
import "./App.css";

function App() {
  let requiredData = [
    { task: "Go to market", date: "2024-06-10", priority: "High" },
    { task: "Buy Groceries", date: "2024-06-11", priority: "Medium" },
    { task: "Complete React Project", date: "2024-06-12", priority: "High" },
    { task: "Read a book", date: "2024-06-13", priority: "Low" },
    { task: "Watch a movie", date: "2024-06-14", priority: "Low" },
    { task: "Call a friend", date: "2024-06-15", priority: "Medium" },
    { task: "Attend a meeting", date: "2024-06-16", priority: "High" },
  ];
  return (
    <center>
      <h1 className="heading">Todo-List</h1>
      <InputPart></InputPart>
      <TodoItems todoItems={requiredData}></TodoItems>
    </center>
  );
}

export default App;
