import React from 'react';
import { Footer } from './Components/Footer';
import { Navbar } from './Components/Navbar';
import { Route, Routes } from 'react-router-dom';
import { Home } from './Home';
import About from './About';
import Contact from './Contact';
import './App.css';
import FinanceApplication from './Components/FinanceApplication';
import { BookCallPage } from './Components/BookCallPage';
import { PopupWidget } from "react-calendly";



function App() {
 

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
      
      <a href="#top" className="scroll-up">Back to top</a> 
      <Footer/>
      <div className="App">
      <PopupWidget
        url="https://calendly.com/mdmeraju784"
        /*
         * react-calendly uses React's Portal feature (https://reactjs.org/docs/portals.html) to render the popup modal. As a result, you'll need to
         * specify the rootElement property to ensure that the modal is inserted into the correct domNode.
         */
        rootElement={document.getElementById("root")}
        text="Click here to schedule!"
        textColor="#ffffff"
        color="#00a2ff"
      />
    </div>
      
 
    </>
  );
}

export default App;




