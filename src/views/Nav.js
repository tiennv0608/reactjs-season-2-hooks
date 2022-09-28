import "./Nav.scss";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div className="topnav">
      <NavLink to="/" activeClassName="active" exact>
        Home
      </NavLink>
      <NavLink activeClassName="active" to="/timer">
        Timer Apps
      </NavLink>
      <NavLink activeClassName="active" to="/todo">
        Todo Apps
      </NavLink>
      <NavLink activeClassName="active" to="/blog">
        Blog Apps
      </NavLink>
      <NavLink activeClassName="active" to="/secret">
        Secret
      </NavLink>
    </div>
  );
};

export default Nav;
