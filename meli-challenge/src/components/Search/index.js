import { React, useState, useEffect } from "react";
import axios from "axios";
import "./style.scss";

const Search = () => {
  const [term, setTerm] = useState();

  const handleChange = e => {
    const { value } = e.target;
    setTerm(value);
  };

  const getData = async term => {
    const data = await axios.get(`http://localhost:3001/api/items?q=${term}`);
    console.log(data, 999);
    return data;
  };

  const handleClick = () => {
    getData(term);
  };

  const handleEnter = e => {
    const { keyCode } = e;
    if (keyCode !== 13) {
      return;
    } else {
      getData(term);
    }
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Nunca dejes de buscar"
        maxLength="120"
        onChange={handleChange}
        onKeyDown={handleEnter}
      />
      <div className="search-icon" onClick={handleClick}>
        <img src="https://doomvault.nyc3.digitaloceanspaces.com/challenge-meli/search-icon.png" />
      </div>
    </div>
  );
};

export default Search;
