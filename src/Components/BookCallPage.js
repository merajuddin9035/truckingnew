import React from 'react'
import  { useState } from 'react';
import './BookCallPage.css';
import { InlineWidget } from "react-calendly";

export const BookCallPage = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Here you can perform any action like submitting the form data to a server
        console.log('Form submitted with:', { name, email, phone });
      };
    
  return (
   <>
   <div className="containersss">
      <h2>Please Submit Your Info</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone:</label>
          <input
            type="tel"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        <button type="submit" className='submit'>Submit</button>
      </form>

    </div>

    <div className="App">
      <InlineWidget url="https://calendly.com/mdmeraju784" />
    </div>
   </>
  )
}
