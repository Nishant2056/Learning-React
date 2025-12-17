import TodoUi from "./TodoUi";
import css from "./TodoItems.module.css";
import { TodoItemsStore } from "../store/TodoItemsStore";
import { useContext } from "react";
const TodoItems = () => {
  const { requiredData } = useContext(TodoItemsStore);
  return (
    <div className={css.todoItemsContainer}>
      {requiredData.map((item, index) => (
        <TodoUi key={index} task={item.task} date={item.date} />
      ))}
    </div>
  );
};

export default TodoItems;
