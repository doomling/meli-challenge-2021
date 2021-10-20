import "./style.scss";

const Search = () => {
  return (
    <div className="search-container">
      <input type="text" placeholder="Nunca dejes de buscar" maxLength="120" />
      <div className="search-icon">
        <img src="https://doomvault.nyc3.digitaloceanspaces.com/challenge-meli/search-icon.png" />
      </div>
    </div>
  );
};

export default Search;
