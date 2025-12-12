import { useState } from "react";

const InputPart = ({ onNewItem }) => {
  const [todoTask, setTodoTask] = useState("");
  const [todoDate, setTodoDate] = useState("");

  const handleDataInput = (e) => {
    setTodoTask(e.target.value);
  };

  const handleDataDate = (e) => {
    setTodoDate(e.target.value);
  };

  const handleSuccessButtonClicked = () => {
    if (!todoTask || !todoDate) {
      alert("Invalid Input. Please fill the required field!!!");
      return;
    }
    onNewItem(todoTask, todoDate);
    setTodoTask("");
    setTodoDate("");
  };

  return (
    <div className="container text-center">
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
          <button
            type="button"
            className="btn btn-success"
            onClick={handleSuccessButtonClicked}
          >
            Success
          </button>
        </div>
      </div>
    </div>
  );
};

export default InputPart;
