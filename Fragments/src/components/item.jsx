import css from "./Item.module.css";
const Item = ({ foodItem, bought, handleBuyButton }) => {
  return (
    <li
      className={` ${css.listButtonWrapper} list-group-item ${
        bought && "active"
      }`}
    >
      {foodItem}
      <button
        className={`${css.buyButton} btn btn-info`}
        onClick={handleBuyButton}
      >
        Buy
      </button>
    </li>
  );
};
export default Item;
