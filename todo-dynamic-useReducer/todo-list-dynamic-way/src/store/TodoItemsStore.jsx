import { createContext } from "react";
import { useReducer } from "react";

export const TodoItemsStore = createContext({});

const todoItemsReducer = (currentTodoItems, action) => {
  if (action.type === "ADD_NEW_ITEM") {
    return [
      ...currentTodoItems,
      { task: action.payload.task, date: action.payload.date },
    ];
  } else if (action.type === "DELETE_ITEM") {
    return currentTodoItems.filter((item) => item.task !== action.payload.task);
  }
  return currentTodoItems;
};

const TodoItemsContextProvider = ({ children }) => {
  const [requiredData, dispatchRequiredData] = useReducer(todoItemsReducer, []);

  const addNewItems = (task, date) => {
    const newItemAddedAction = {
      type: "ADD_NEW_ITEM",
      payload: {
        task: task,
        date: date,
      },
    };

    dispatchRequiredData(newItemAddedAction);

    // const newAddedItem = [...requiredData, { task, date }];
    // setRequiredData((currentValue) => [...currentValue, { task, date }]);
  };

  const DeleteItem = (task) => {
    const deleteItemAction = {
      type: "DELETE_ITEM",
      payload: {
        task: task,
      },
    };
    // const updatedItems = requiredData.filter((item) => item.task !== task);
    // setRequiredData(updatedItems);
    dispatchRequiredData(deleteItemAction);
  };

  return (
    <TodoItemsStore.Provider
      value={{
        requiredData: requiredData,
        setItems: addNewItems,
        deleteExistingItem: DeleteItem,
      }}
    >
      {children}
    </TodoItemsStore.Provider>
  );
};

export default TodoItemsContextProvider;
