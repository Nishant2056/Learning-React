import css from "../App.module.css";

const ButtonsPart = () => {
  let numbers = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "0",
    "=",
  ];
  return (
    <div className={css.buttonsContainer}>
      {numbers.map((num) => (
        <button className={css.buttons}>{num}</button>
      ))}
    </div>
  );
};

export default ButtonsPart;
