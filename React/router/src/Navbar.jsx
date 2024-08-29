import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/" className={({ isActive }) => isActive && "active"}>
            Home
          </NavLink>
          {/* a tagı => preventDefault */}
        </li>
        <li>
          {" "}
          <NavLink
            to="/about"
            className={({ isActive }) => isActive && "active"}
          >
            About
          </NavLink>{" "}
          {/* window.set() */}
          {/* state setter */}
        </li>
        <li>
          <li>
            {" "}
            <NavLink
              to="/contact"
              className={({ isActive }) => isActive && "active"}
            >
              Contact
            </NavLink>{" "}
          </li>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
