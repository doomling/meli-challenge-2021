import { React, useEffect, useState } from "react";
import ItemDetail from "../components/ItemDetail";
import axiosClient from "./../../utils/axiosClient.js";

const Results = (props) => {
  const { id } = props.match?.params;
  const [data, setData] = useState();
  const [error, setError] = useState(false);

  useEffect(() => {
    getData(id);
  }, [id]);

  const getData = async (term) => {
    setError(false);
    try {
      const response = await axiosClient.get(`/items/${term}`);
      if (response) {
        setData(response.data.item);
      } else {
        setError(true);
      }
    } catch (e) {
      setError("Hubo un error");
    }
  };

  return <section>{data && <ItemDetail data={data} />}</section>;
};

export default Results;
