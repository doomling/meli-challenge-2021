import "./style.scss";
import { useHistory } from "react-router-dom";

const Item = ({ data }) => {
  const { id, title, picture, price, free_shipping } = data;
  const { currency, amount, decimals } = price;
  const history = useHistory();

  const handleClick = () => {
    history.push(`/items/${id ?? ""}`);
  };

  return (
    <div className="item-container" onClick={handleClick}>
      <img src={picture} className="item-picture" />
      <div className="item-details">
        <div className="item-price">
          $ {amount}
          <sup>{decimals}</sup>
          {free_shipping && (
            <img
              className="item-shipping"
              src="https://doomvault.nyc3.digitaloceanspaces.com/challenge-meli/shipping.png"
            />
          )}
        </div>
        <p>{title}</p>
      </div>
      <div className="item-like">
        <img src="https://doomvault.nyc3.digitaloceanspaces.com/challenge-meli/heart.png" />
      </div>
    </div>
  );
};

export default Item;
