import TodoUi from "./TodoUi";
import css from "./TodoItems.module.css";
const TodoItems = ({ todoItems, onDeleteItem }) => {
  return (
    <div className={css.todoItemsContainer}>
      {todoItems.map((item, index) => (
        <TodoUi
          key={index}
          task={item.task}
          date={item.date}
          onDeleteItem={onDeleteItem}
        />
      ))}
    </div>
  );
};

export default TodoItems;
