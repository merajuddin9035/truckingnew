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

      
 
    </>
  );
}

export default App;




