import React, { useState, useRef } from 'react';
import axios from 'axios';
import emailjs from '@emailjs/browser';import { InlineWidget } from 'react-calendly';
import './BookCallPage.css';

export const BookCallPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [age, setAge] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [zip, setZip] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Send form data to backend API
      const response = await axios.post('http://localhost:5000/submit', { name, email, phone, age, zip, address, city});
      console.log('User saved:', response.data);

      // Send email using emailjs-com
      sendEmail();

      // Reset form fields after successful submission
      setName('');
      setEmail('');
      setPhone('');
      setAge('');
      setZip('');
      setAddress('');
      setCity('');
    } catch (error) {
      console.error('Error saving user:', error);
    }
  };

  const form = useRef();

  const sendEmail = () => {
    emailjs
      .sendForm('service_x8bvfgq', 'template_2ssr0br', form.current, 'zE94gTkIS_pgpHVU6')
      .then(
        (response) => {
          console.log('Email sent successfully:', response);
        },
        (error) => {
          console.error('Failed to send email:', error);
        }
      );
  };

  return (
    <>
      <div className="containersss">
        <h2>Please Submit Your Info</h2>
        <form onSubmit={handleSubmit} ref={form}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
            className='submitinfoinput'
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              className='submitinfoinput'
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone:</label>
            <input
              className='submitinfoinput'
              type="tel"
              id="phone"
              name="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="age">Age:</label>
            <input
              className='submitinfoinput'
              type="number"
              id="age"
              name="age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="address">Address:</label>
            <input
              className='submitinfoinput'
              type="text"
              id="address"
              name="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="city">City:</label>
            <input
              className='submitinfoinput'
              type="text"
              id="city"
              name="city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="zip">Zip:</label>
            <input
              className='submitinfoinput'
              type="number"
              id="zip"
              name="zip"
              value={zip}
              onChange={(e) => setZip(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="submit">
            Submit
          </button>
        </form>
      </div>

      <div className="calendly-widget">
        <InlineWidget url="https://calendly.com/mdmeraju784" />
      </div>
    </>
  );
};
