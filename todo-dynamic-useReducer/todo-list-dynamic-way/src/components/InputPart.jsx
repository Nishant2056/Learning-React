import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import css from "./InputPart.module.css";
import { useContext } from "react";
import { TodoItemsStore } from "../store/TodoItemsStore";

const InputPart = () => {
  const contextobj = useContext(TodoItemsStore);
  const setItems = contextobj.setItems;
  const [todoTask, setTodoTask] = useState("");
  const [todoDate, setTodoDate] = useState("");

  const handleDataInput = (e) => {
    setTodoTask(e.target.value);
  };

  const handleDataDate = (e) => {
    setTodoDate(e.target.value);
  };

  const handleSuccessButtonClicked = (e) => {
    e.preventDefault();
    if (!todoTask || !todoDate) {
      alert("Invalid Input. Please fill the required field!!!");
      return;
    }
    setItems(todoTask, todoDate);
    setTodoTask("");
    setTodoDate("");
  };

  return (
    <form
      onSubmit={handleSuccessButtonClicked}
      className="container text-center"
    >
      <div className="row justify-content-center">
        <div className="col-4">
          <input
            type="text"
            placeholder="Enter Todo task"
            className={`${css.kgInput} form-control`}
            value={todoTask}
            onChange={handleDataInput}
          />
        </div>
        <div className="col-4">
          <input
            type="date"
            value={todoDate}
            className={`${css.kgInput} form-control`}
            onChange={handleDataDate}
          />
        </div>
        <div className="col-1">
          <button
            type="submit"
            className={`${css.successButton} btn btn-success`}
          >
            <FaPlus />
          </button>
        </div>
      </div>
    </form>
  );
};

export default InputPart;
