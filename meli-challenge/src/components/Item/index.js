import "./style.scss";

const Item = ({ data }) => {
  const { id, title, description, picture, price, free_shipping, condition } =
    data;
  const { currency, amount, decimals } = price;

  console.log(data);
  return (
    <div className="item-container">
      <img src={picture} className="item-picture" />
      <div className="item-details">
        <span className="item-price">${amount}</span>
        {free_shipping && (
          <img src="https://doomvault.nyc3.digitaloceanspaces.com/challenge-meli/shipping.png" />
        )}
        <p>{title}</p>
      </div>
      <div className="item-like">
        <img src="https://doomvault.nyc3.digitaloceanspaces.com/challenge-meli/heart.png" />
      </div>
    </div>
  );
};

export default Item;
