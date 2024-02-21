import React from 'react'
import './Whatwedo.css'
import truckImage from '../Assets/truck.jpg';
import ForwardIcon from '@mui/icons-material/Forward';


const WhatWeDo = () => {
  return (
    <>
  <div className="image-container">
  <img className="truck-image" src={truckImage} alt="Truck" />
  <h1 className='WhatweDoHeading'>What we do for you</h1>
  <div className="overlay-text">

   <div className='ArrowLine'>
   <div className='itemflex'>
   <ForwardIcon/><p>Help Locate your truck</p>
   </div>
   
    <div className='itemflex'>
    <ForwardIcon/><p>Help Conduct Prepurchase inspection</p>
    </div>
    <div className='itemflex'>
    <ForwardIcon/><p>Help Secure Fuel Cards</p>
    </div>
    <div className='itemflex'>
    <ForwardIcon/><p>Get Qualified Drivers and replace if Needed</p>
    </div>
    <div className='itemflex'>
    <ForwardIcon/><p>Onboard and Handle Driver Orientation</p>
    </div>
    <div className='itemflex'>
    <ForwardIcon/><p>integrate Management Software </p>
    </div>
    <div className='itemflex'>
    <ForwardIcon/><p>Accuire Driver Onboarding Equipment</p>
    </div>
    <div className='itemflex'>
    <ForwardIcon/><p>Ongoing Driver Management</p>
    </div>
    <div className='itemflex'>
    <ForwardIcon/><p>Help Secure IFTA Accounts</p>
    </div>
    <div className='itemflex'>
    <ForwardIcon/><p>Respond to Safetu Audits</p>
    </div>
    <div className='itemflex'>
    <ForwardIcon/><p>Help Secure Truck Registration</p>
    </div>
    <div className='itemflex'>
    <ForwardIcon/><p>Assist with Preventing Maintenance</p>
    </div>
    <div className='itemflex'>
    <ForwardIcon/><p>Handle Safety Reports</p>
    </div>
    <div className='itemflex'>
    <ForwardIcon/><p>Help Distribute Payroll</p>
    </div>
    <div className='itemflex'>
    <ForwardIcon/><p>Generate Performance Reports</p>
    </div>
    <div className='itemflex'>
    <ForwardIcon/><p>Locate High Paying Loads</p>
    </div>
    <div className='itemflex'>
    <ForwardIcon/><p>Get Your Truck Profitable</p>
    </div>
    <div className='itemflex'>
    <ForwardIcon/><p>Handle Complaint Calls</p>
    </div>
    <div className='itemflex'>
    <ForwardIcon/><p>And Much Much More....</p>
    </div>
   </div>
   </div>
</div>


    </>
  )
}

export default WhatWeDo