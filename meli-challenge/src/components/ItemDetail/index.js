import { React, useEffect, useState } from "react";
import { useLocation } from "react-router";
import axios from "axios";
import Item from "../Item";
import "./style.scss";

const ItemDetail = (props) => {
  const { id } = props.match?.params;
  const [data, setData] = useState();
  const [error, setError] = useState(false);

  console.log(id);

  useEffect(() => {
    getData(id);
  }, []);

  console.log(data);

  const getData = async (term) => {
    setError(false);
    try {
      const response = await axios.get(
        `http://localhost:3001/api/items/${term}`
      );
      if (response) {
        setData(response.data.item);
      } else {
        setError(true);
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <section className="item-detail-wrapper">
      {data && (
        <div className="item-detail-box">
          <div className="item-detail-container">
            <img src={data.picture} />
            <div className="item-detail-information">
              <span className="item-subtitle">
                {data.condition === "new" ? "Nuevo" : "Usado"} |
                {data.sold_quantity} vendidos
              </span>
              <h1 className="item-detail-title">{data.title}</h1>
              <div className="item-detail-price">
                <span>$</span>
                <span>{data.price.amount}</span>
                <sup className="item-detail-decimals">
                  {data.price.decimals}
                </sup>
              </div>
              <button>Comprar</button>
            </div>
          </div>
          <div>
            <h2>Descripción del producto</h2>
            <p>{data.description}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default ItemDetail;
