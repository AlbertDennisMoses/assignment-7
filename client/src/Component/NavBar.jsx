import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <nav className="navbar">
        <ul>
          <NavLink exact to="/">
            <li>Home</li>
          </NavLink>
          <NavLink to="/login">
            <li>Sign in</li>
          </NavLink>
          <NavLink to="/signup">
            <li> Sign up</li>
          </NavLink>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
