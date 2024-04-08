import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  // Function to close the menu
  const closeMenu = () => {
    setShowMenu(false);
  };

  return (
    <nav className="navbar">
      <h1 className="Advaitheading">ADVAIT TRUCKING AUTOMATION</h1>
      <div className={`navbar-container ${showMenu ? "active" : ""}`}>
        <div className="menu">
          <ul className={showMenu ? "active" : ""}>
            <li>
              <Link to="/" onClick={closeMenu}> {/* Close menu when a link is clicked */}
                Home
              </Link>
            </li>
            <li>
              <Link to="/finance" onClick={closeMenu}>
                Finance Application
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={closeMenu}>
                Contact us
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={closeMenu}>
                About us
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
