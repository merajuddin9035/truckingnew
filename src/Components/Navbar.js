import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="navbar">
      <h1 className="Advaitheading">ADVAIT TRUCKING AUTOMATION</h1>
      <div className="navbar-container">
        <div className="menu" style={{ display: showMenu ? "block" : "none" }}>
          <ul>
            <li className="active">
              <Link to="/" onClick={toggleMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/finance" onClick={toggleMenu}>
                Finance Application
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={toggleMenu}>
                About us
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={toggleMenu}>
                Contact us
              </Link>
            </li>
          </ul>
        </div>
        <div className="toggle-menu" onClick={toggleMenu}>
          &#9776;
        </div>
      </div>
    </nav>
  );
};
