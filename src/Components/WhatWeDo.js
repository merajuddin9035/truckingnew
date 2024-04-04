import React from 'react'
import './Whatwedo.css'
import pointstruck from '../Assets/pointstruck.png';



const WhatWeDo = () => {
  return (
    <>
      <div className='whatwedo-container'> 
        <img className="whatwedo" src={pointstruck} alt="Truck" />
        </div>
    </>
  )
}

export default WhatWeDo