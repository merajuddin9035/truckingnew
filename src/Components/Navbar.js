import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { PopupButton } from "react-calendly";


export const Navbar = () => {


 

  return (
    
    <div className="navbar">   
   <h1 className="Advaitheading">ADVAIT TRUCKING AUTOMATION</h1>
      <div className="navbar-container">
      <div className="menu">
      <ul>
        <li className="active"> {/* Add 'active' class here */}
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

        
       
      </div>
    
   
    </div>

  );
};
