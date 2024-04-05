import React from 'react';
import './TruckingInfo.css';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import FireTruckIcon from '@mui/icons-material/FireTruck';
import LocalShippingSharpIcon from '@mui/icons-material/LocalShippingSharp';
import HandshakeTwoToneIcon from '@mui/icons-material/HandshakeTwoTone';

export const TrucingInfo = () => {
  return (
    <div className='HeadContainer'>
      <div className='heading'>
        <h1 className="HeadingAutomation">What is Trucking Automation ??</h1>
      </div>

      <div className='item'>
        <div className="iconAndText">
          <div className="icon">
            <SettingsSuggestIcon fontSize="large"/> 
          </div>
          <div className="textContainer">
            <h1 className='HeadLine'>A COMPLETE DONE-FOR-YOU</h1>
           
            <p>Trucking Automation is a complete done-for-you service that automates the trucking industry for you.</p>
          </div>
        </div>
      </div>

      <div className='item'>
      <div className="iconAndText">
      <div className="icon">
        <FireTruckIcon fontSize="large"/>
      </div>
        <div className="textContainer">
          <h1 className='HeadLine'>We FIND YOUR TRUCK,</h1>
          <p>Your driver, and broker freight for You.you sit back and collecy the PROFITS!</p>
        </div>
      </div>
      </div>

      <div className='item'>
      <div className="iconAndText">
      <div className="icon">
        <LocalShippingSharpIcon fontSize="large"/>
      </div>
        <div className="textContainer">
          <h1 className='HeadLine'>WITH E-COMMERCE BOOMING</h1>
          <p>food shortage and constant need for goods the trucking industry is in bigger demand than ever.</p>
        </div>
      </div>
      </div>

      <div className='item'>
      <div className="iconAndText">
      <div className="icon">
        <HandshakeTwoToneIcon fontSize="large"/>
      </div>
        <div className="textContainer">
          <h1 className='HeadLine'>OUR AVERAGE CLIENT</h1>
          <p>nets between ₹70,000 - ₹1,00,000</p>
        </div>
      </div>
    </div>
    </div>
  );
}


