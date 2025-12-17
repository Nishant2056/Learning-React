import InputPart from "./components/InputPart";
import TodoItems from "./components/TodoItems";
import WelcomeMessage from "./components/WelcomeMessage";
import "./App.css";
import TodoItemsContextProvider from "./store/TodoItemsStore";

function App() {
  // let initialRequiredData = [
  //   { task: "Go to market", date: "2024-06-10" },
  //   { task: "Buy Groceries", date: "2024-06-11" },
  //   { task: "Complete React Project", date: "2024-06-12" },
  // ];

  // const [requiredData, setRequiredData] = useState([]);

  return (
    <TodoItemsContextProvider>
      <center>
        <h1 className="heading">Todo-List</h1>
        <InputPart></InputPart>
        <WelcomeMessage />
        <TodoItems></TodoItems>
      </center>
    </TodoItemsContextProvider>
  );
}

export default App;
