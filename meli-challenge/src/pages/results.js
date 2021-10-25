import { React, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axiosClient from "./../../utils/axiosClient.js";
import ItemList from "../components/ItemList";

const Results = (props) => {
  const location = useLocation();
  const { search } = location;
  const [data, setData] = useState();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState();

  useEffect(() => {
    getData(search);
  }, [search]);

  const getData = async (term) => {
    setError(false);
    setLoading(true);
    try {
      const response = await axiosClient.get(`/items${search}&limit=4`);
      if (response) {
        setData(response.data.items);

        const topCategory = response.data.categories.reduce(
          (prev, current) =>
            (prev = prev.results > current.results ? prev : current),
          0
        );

        setCategory(topCategory);
        setLoading(false);
      } else {
        setError("Intente nuevamente");
        setLoading(false);
      }
    } catch (e) {
      setLoading(false);
      setError("Se produjo un error");
    }
  };
  return (
    <section>
      {loading ? (
        <span>Buscando resultados...</span>
      ) : error ? (
        <span>{error}</span>
      ) : (
        data && <ItemList data={data} category={category} search={search} />
      )}
    </section>
  );
};

export default Results;
