import "./style.scss";

const Item = ({ data }) => {
  const { id, title, description, picture, price, free_shipping, condition } =
    data;
  const { currency, amount, decimals } = price;

  console.log(data);
  return (
    <div>
      <img src={picture} />
      <div>
        <span>${amount}</span>
        <p>{title}</p>
      </div>
      <div>{free_shipping && "envio gratis"}</div>
    </div>
  );
};

export default Item;
