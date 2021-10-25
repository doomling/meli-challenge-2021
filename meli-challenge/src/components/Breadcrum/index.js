import Search from "../Search";
import "./style.scss";

const Nav = ({ category, search }) => {
  return (
    <div className="breadcrum-container">
      {category} {search && `> ${search}`}
    </div>
  );
};

export default Nav;
