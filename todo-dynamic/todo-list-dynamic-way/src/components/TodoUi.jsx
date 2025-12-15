import css from "./TodoUi.module.css";
import { MdOutlineDeleteForever } from "react-icons/md";
const TodoUi = ({ task, date, onDeleteItem }) => {
  return (
    <div className="container">
      <div className="row kg-row justify-content-center">
        <div className="col-4">{task}</div>
        <div className="col-4">{date}</div>
        <div className="col-1">
          <button
            type="button"
            className={`${css.kgButton} btn btn-danger`}
            onClick={() => onDeleteItem(task)}
          >
            <MdOutlineDeleteForever />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoUi;
