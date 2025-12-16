import { useContext } from "react";
import { TodoItemsStore } from "../store/TodoItemsStore";

const WelcomeMessage = () => {
  const contextobj = useContext(TodoItemsStore);
  const requiredData = contextobj.requiredData;

  return (
    requiredData.length === 0 && (
      <p>There is no task left please enjoy your day.</p>
    )
  );
};

export default WelcomeMessage;
