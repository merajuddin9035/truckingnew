import React from 'react';
import Subscribe from './Components/Subscribe';
 import './Home.css';
import Header from './Header';
import { TrucingInfo } from './TrucingInfo';
import BusinessModel from './Components/BusinessModel';
import WhatWeDo from './Components/WhatWeDo';
import { CostToStart } from './Components/CostToStart';
import { HowDoesItWork } from './Components/HowDoesItWork';
import { WeCommitTo } from './Components/WeCommitTo';
import { InFuture } from './Components/InFuture';

export const Home = () => {
  return (
    <>
    
     <Header/>
     <TrucingInfo/>
     <BusinessModel/>
     <WhatWeDo/>
     <CostToStart/>
     <HowDoesItWork />
     <WeCommitTo />
     <InFuture/>   
      <Subscribe />
  
    </>
  );
};

