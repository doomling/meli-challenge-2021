import Search from "../Search";
import "./style.scss";

const Nav = () => {
  return (
    <nav>
      <img
        src="https://doomvault.nyc3.digitaloceanspaces.com/challenge-meli/logo-small.png"
        className="logo"
      />
      <Search />
    </nav>
  );
};

export default Nav;
