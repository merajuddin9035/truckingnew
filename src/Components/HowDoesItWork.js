import React from 'react'
import './HowDoesItWork.css'
import truckImage from '../Assets/truckimg.jpg';
import imagetruck from '../Assets/imagetruck.jpg';
import truckmen from '../Assets/truckmen.jpg';
import truckroad from '../Assets/truckroad.jpg';
import moneytruck from '../Assets/moneytruck.jpg';

export const HowDoesItWork = () => {
  return (
    <>
 
<h1 className='HowDoesItWork'>How Does It Work</h1>
       <div className='container'>
            

            <div className='box'>
                <h1 className='numbercounting'>1</h1>
                <h2>LOCATE TRUCK</h2>
                <p>We work hard to locate you a qualified truck based on our criteria. You then finance or purchase the truck cash.</p>
                <br />
                <img className="truck-images" src={truckImage} alt="Truck" width="300" height="250" />

            </div>

            <div className='box'>
                <h1 className='numbercounting'> 2</h1>
                <h2>LEGAL SETUP</h2>
                <p>We set up all the insurance, registration, permits, and list your truck under our trucking authority.</p>
                <br />
                <img className="truck-images" src={imagetruck} alt="Truck" width="300" height="250" />
            </div>

            <div className='box'>
                <h1 className='numbercounting'>3</h1>
                <h2>DRIVER ACQUISITION</h2>
                <p>We choose an experienced driver for your truck that is 100% certified and meets our high standards.</p>
                <br />
                <img className="truck-images" src={truckmen} alt="Truck" width="300" height="250"/>
            </div>

            <div className='box'>
                <h1 className='numbercounting'>4</h1>
                <h2>OTR</h2>
                <p>The goal is to get the truck on the road (OTR) within 90 days, but allow us up to 120 days.</p>
                <img className="truck-images" src={truckroad} alt="Truck" width="300" height="250" />
                
            </div>

            <div className='box'>
                <h1 className='numbercounting'>5</h1>
                <h2>GET PAID</h2>
                <p>10 days after the first month of the truck's operating, expect your first payout.</p>
                <br />
                <img className="truck-images" src={moneytruck} alt="Truck" width="300" height="250" />
            </div>
        </div>

    </>
  )
}
