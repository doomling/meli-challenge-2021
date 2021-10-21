import Search from "../Search";
import "./style.scss";

const Nav = () => {
  return (
    <nav>
      <a href="/">
        <img
          src="https://doomvault.nyc3.digitaloceanspaces.com/challenge-meli/logo-small.png"
          className="logo"
          alt="Logo Mercado Libre"
        />
      </a>
      <Search />
    </nav>
  );
};

export default Nav;
