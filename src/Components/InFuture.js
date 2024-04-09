import React from 'react'
import './InFuture.css'
import trucksss from '../Assets/trucksss.jpg';
import moneys from '../Assets/moneys.jpg';
import air from '../Assets/air.png';

export const InFuture = () => {
  return (
    <>
    <h1 className='Future'>What's in it for Our Future?</h1>


   <div className='futurecontainer'>


            {/* <div className='futurebox'> */}
            <img className="truck-imagess" src={trucksss} alt="Truck" width="400" height="350" />
            {/* <br />
             <h1>SCALE FIRST FLEET TO 250,000 TRUCKS</h1>
            </div> */}

            {/* <div className='futurebox'> */}
            <img className="truck-imagess" src={moneys} alt="Truck" width="400" height="350" />
            {/* <br />
            <h1>KEEP OUR CLIENTS PROFITING,AND OURSELVES OF COURSE</h1>
            </div> */}

            {/* <div className='futurebox'> */}
            <img className="truck-imagess" src={air} alt="Truck" width="400" height="350" />
            {/* <br />
            <h1>EXPAND TO SEA FREIGHT,AND AIR FREIGHT</h1>
            <br />
            </div> */}
            </div>
    </>
  )
}
