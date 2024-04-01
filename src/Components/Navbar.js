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

        <div className="language-dropdown">
          <select>
            <option value="en">English</option>
            <option value="es">Spanish</option>
            <option value="fr">French</option>
            <option value="de">German</option>
            <option value="it">Italian</option>
            <option value="pt">Portuguese</option>
            <option value="ru">Russian</option>
            <option value="ar">Arabic</option>
            <option value="zh">Chinese</option>
            <option value="ja">Japanese</option>
            <option value="ko">Korean</option>
            <option value="tr">Turkish</option>
          </select>
        </div>
      </div>
    </div>
  );
};
