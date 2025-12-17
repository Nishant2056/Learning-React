import { useContext } from "react";
import { TodoItemsStore } from "../store/TodoItemsStore";
import css from "./TodoUi.module.css";
import { FaTrashAlt } from "react-icons/fa";
const TodoUi = ({ task, date }) => {
  const contextObj = useContext(TodoItemsStore);
  const deleteExistingItem = contextObj.deleteExistingItem;

  return (
    <div className="container">
      <div className="row kg-row justify-content-center">
        <div className="col-4">{task}</div>
        <div className="col-4">{date}</div>
        <div className="col-1">
          <button
            type="button"
            className={`${css.kgButton} btn btn-danger`}
            onClick={() => deleteExistingItem(task)}
          >
            <FaTrashAlt />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoUi;
