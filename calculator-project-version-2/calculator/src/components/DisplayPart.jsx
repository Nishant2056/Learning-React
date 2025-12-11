import css from "../App.module.css";

const DisplayPart = ({ displayValue }) => {
  return (
    <input className={css.display} type="text" value={displayValue} readOnly />
  );
};

export default DisplayPart;
