import React, { useState } from 'react';
import { Footer } from './Components/Footer';
import { Navbar } from './Components/Navbar';
import { Route, Routes } from 'react-router-dom';
import { Home } from './Home';
import About from './About';
import Contact from './Contact';
import './App.css';
import FinanceApplication from './Components/FinanceApplication';
import { BookCallPage } from './Components/BookCallPage';
// import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

function App() {
  // const [selectedPlace, setSelectedPlace] = useState(null);

  // const onMarkerClick = (props, marker, e) => {
  //   setSelectedPlace(props);
  // };

  // const onInfoWindowClose = () => {
  //   setSelectedPlace(null);
  // };

  return (
    <> 
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/finance" element={<FinanceApplication/>}/>
        <Route path="/BookCallPage" element={<BookCallPage/>}/>
      </Routes>
      
      <a href="#top" className="scroll-up">Back to top</a> {/* Scroll up button */}
      <Footer/>
 {/* <div className='mapstyle'></div>
      <Map
  google={props.google}
  style={{ width: "30%", height: "400px" }} // Adjust height as needed
  zoom={8} 
  initialCenter={{
    lat: 42.299530,
    lng: -83.433290
  }}
>
  <Marker onClick={onMarkerClick} name={'Current location'} />
  <InfoWindow onClose={onInfoWindowClose}>
    <div>
      <h1>{selectedPlace && selectedPlace.name}</h1>
    </div>
  </InfoWindow>
      </Map> */}
    </>
  );
}

// export default GoogleApiWrapper({
//   apiKey: "AIzaSyAOEWFoidy1TR1kMz4dCo30K7aHRgwPtRY"
// })(App);

export default App;
