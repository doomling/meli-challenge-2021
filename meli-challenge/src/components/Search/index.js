import { React, useState } from "react";
import { useHistory } from "react-router";
import axios from "axios";
import "./style.scss";

const Search = (props) => {
  const history = useHistory();
  const [term, setTerm] = useState();
  const [results, setResults] = useState("");

  const handleChange = (e) => {
    const { value } = e.target;
    setTerm(value);
  };

  const getData = async (term) => {
    console.log(history);
    history.push(`/items/?q=${term ?? ""}`);
  };

  const handleClick = () => {
    if (term) {
      getData(term);
    }
  };

  const handleEnter = (e) => {
    if (term) {
      const { keyCode } = e;
      if (keyCode !== 13) {
        return;
      } else {
        getData(term);
      }
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
