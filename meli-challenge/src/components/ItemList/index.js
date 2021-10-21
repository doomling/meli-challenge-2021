import { React, useEffect, useState } from "react";
import { useLocation } from "react-router";
import axios from "axios";
import Item from "./../Item";
import "./style.scss";

const ItemList = () => {
  const location = useLocation();
  const { search } = location;
  const [data, setData] = useState();
  const [error, setError] = useState(false);

  useEffect(() => getData(search), [search]);

  const getData = async (term) => {
    setError(false);
    const data = await axios.get(
      `http://localhost:3001/api/items${term}&limit=4`
    );
    if (data) {
      setData(data.data.items);
    } else {
      setError(true);
    }
  };

  console.log(data, error);

  return (
    <section className="item-list-container">
      {data ? (
        data.map((item) => {
          return <Item data={item} key={item.id} />;
        })
      ) : (
        <span>No hay resultados para tu búsqueda</span>
      )}
    </section>
  );
};

export default ItemList;
