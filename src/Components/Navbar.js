import React from "react";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { PopupButton } from "react-calendly";


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
          {/* <button className="" onClick={handleButtonClick}>
            Get Started
          </button> */}
       
        </div>
        <div className="ButtonName">
      <PopupButton
        url="https://calendly.com/mdmeraju784"
        /*
         * react-calendly uses React's Portal feature (https://reactjs.org/docs/portals.html) to render the popup modal. As a result, you'll need to
         * specify the rootElement property to ensure that the modal is inserted into the correct domNode.
         */
        rootElement={document.getElementById("root")}
        text="Schedule Meeting"
      
      />
    </div>
       
      </div>
    
   
    </div>

  );
};
