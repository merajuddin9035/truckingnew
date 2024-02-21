import React from 'react';
import './Header.css';
import {  useNavigate } from "react-router-dom";
import truckingImage from './Assets/trucklogo3.jpg'; // Use forward slashes or double backslashes for path separators

const Header = () => {

    const navigate = useNavigate();
    const handleButtonClick = () => {
        navigate("/BookCallPage");
      };
    return (
        <>
            <div className="headerTop">
                 <img className="img" src={truckingImage} alt="Trucking" />
                <h1 className="HeaderLine">Earn up to $7,000<br/> monthly with trucking!</h1>
                <h1 className="ParaLine">We find your truck, your driver, and broker freight for<br/> you while you sit back and collect passive income</h1>
               
                <button className="bookcall" onClick={handleButtonClick}>BOOK A CALL</button>
            </div>
        </>
    )
}

export default Header;
