import styles from "./FoodInput.module.css";

const FoodInput = ({ handleOnKeyDown }) => {
  return (
    <input
      type="text"
      className={styles.customInput}
      placeholder="Enter your desired food"
      onKeyDown={handleOnKeyDown}
    />
  );
};

export default FoodInput;
