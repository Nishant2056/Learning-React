import { useState } from "react";
import { IoMdAddCircle } from "react-icons/io";

const InputPart = ({ onNewItem }) => {
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
    onNewItem(todoTask, todoDate);
    setTodoTask("");
    setTodoDate("");
  };

  return (
    <form
      onSubmit={handleSuccessButtonClicked}
      className="container text-center"
    >
      <div className="row">
        <div className="col-4">
          <input
            type="text"
            placeholder="Enter Todo task"
            value={todoTask}
            onChange={handleDataInput}
          />
        </div>
        <div className="col-4">
          <input type="date" value={todoDate} onChange={handleDataDate} />
        </div>
        <div className="col-1">
          <button className="btn btn-success">
            <IoMdAddCircle />
          </button>
        </div>
      </div>
    </form>
  );
};

export default InputPart;
