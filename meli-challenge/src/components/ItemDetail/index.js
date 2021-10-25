import { React } from "react";
import Breadcrum from "./../Breadcrum";
import "./style.scss";
import { itemDetailData } from "../../tests/__mocks__/mockedData";

const ItemDetail = ({ data }) => {
  const {
    picture,
    condition,
    sold_quantity,
    title,
    price,
    description,
    category
  } = data;

  return (
    <section className="item-detail-wrapper">
      <Breadcrum category={category.name} search={title} />
      {data && (
        <div className="item-detail-box">
          <div className="item-detail-container">
            <img src={picture} />
            <div className="item-detail-information">
              <span className="item-subtitle">
                {condition === "new" ? "Nuevo" : "Usado"} | {sold_quantity}{" "}
                vendidos
              </span>
              <h1 className="item-detail-title">{title}</h1>
              <div className="item-detail-price">
                <span>$</span>
                <span>{price.amount}</span>
                <sup className="item-detail-decimals">{price.decimals}</sup>
              </div>
              <button>Comprar</button>
            </div>
          </div>
          <div className="item-detail-description">
            <h2>Descripción del producto</h2>
            <p>
              {description ??
                "no hay descripción para el producto seleccionado"}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default ItemDetail;
