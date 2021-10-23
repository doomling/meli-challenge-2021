import { React, useEffect, useState } from "react";
import { useLocation } from "react-router";
import axios from "axios";
import Item from "../Item";
import "./style.scss";

const ItemDetail = props => {
  const { id } = props.match?.params;
  const [data, setData] = useState();
  const [error, setError] = useState(false);

  console.log(id);

  useEffect(() => {
    getData(id);
  }, []);

  const getData = async term => {
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
    <section className="item-detail-container">
      {data && (
        <div className="item-detail">
          <img src={data.picture} />
          <div>
            {data.condition} - {data.sold_quantity}
            <h1>
              <span>$</span>
              <span>{data.price.amount}</span>
            </h1>
            <button>Comprar</button>
          </div>
        </div>
      )}
    </section>
  );
};

export default ItemDetail;
