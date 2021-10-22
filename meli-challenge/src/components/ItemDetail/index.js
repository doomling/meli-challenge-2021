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

  useEffect(() => getData(id), [id]);

  const getData = async (term) => {
    setError(false);
    try {
      const response = await axios.get(
        `http://localhost:3001/api/items/${term}`
      );
      if (data) {
        setData(response.data.items);
      } else {
        setError(true);
      }
    } catch (e) {
      console.log(e);
    }
  };

  console.log(data);

  return <section className="item-list-container">hola</section>;
};

export default ItemDetail;
