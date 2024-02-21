import React from 'react';
import './BusinessModel.css';
import { TypeAnimation } from './TypeAnimation';




const BusinessModel = () => {
    

    return (
        <>
            <h1 className='BusinessModelHeading'>Business Model</h1>

            <div className="containerz">
                
                <div className="box1">
                    <h1>WE SETUP ALL PERMITS FOR YOU</h1>
                </div>

                <div className="box2">
                    <h1>WE FIND YOU AN EXPERIENCED A CLASS DRIVER</h1>
                </div>

                <div className="box3">
                    <h1> WE AUTOMATE YOUR TRUCK 100% THROUGH OUR DISPATCH SERVICE</h1>
                </div>

                <div className="box4">
                    <h1>YOU SIT BACK AND COLLECT PASSIVE INCOME MONTHLY</h1>
                </div>

               
            </div>
            
            <div className='Whatmakepowerfulldev'>
            <h1 className='WhatMakePowerFull'>What Makes This opportunity so Powerful?</h1>
           
                   <TypeAnimation/>
                </div>
        </>
    )
}

export default BusinessModel;