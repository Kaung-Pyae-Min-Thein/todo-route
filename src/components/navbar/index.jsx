import { NavbarStyle } from "./navbarStyles";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <NavbarStyle>
      <h1>Todo App</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/add">Add Todo</Link>
        </li>
      </ul>
    </NavbarStyle>
  );
};
