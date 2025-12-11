import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import AddTodoOne from "./components/AddTodoOne";
import "./app.css";

function App() {
  let values = [
    {
      task: "Buy Milk",
      date: "2024-10-10",
    },
    {
      task: "Go to College",
      date: "2024-10-11",
    },
  ];
  return (
    <>
      <center>
        <AppName />
        <div class="todo-container">
          <AddTodo />
          <AddTodoOne data={values} />
        </div>
      </center>
    </>
  );
}

export default App;
