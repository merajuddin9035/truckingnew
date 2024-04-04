import React from "react";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";

export const Navbar = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/BookCallPage");
  };

  return (
    
    <div className="navbar">   
   <h1 className="Advaitheading">ADVAIT TRUCKING AUTOMATION</h1>
      <div className="navbar-container">
        <div className="menu">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/finance">Finance Application</Link>
            </li>
            <li>
              <Link to="/about">About us</Link>
            </li>
            <li>
              <Link to="/Contact">Contact us</Link>
            </li>
          </ul>
        </div>

        <div className="GetStartedButton">
          <button className="ButtonName" onClick={handleButtonClick}>
            Get Started
          </button>
        </div>

       
      </div>
    </div>
  );
};
