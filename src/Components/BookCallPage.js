import React, { useState, useRef } from 'react';
import axios from 'axios';
import emailjs from '@emailjs/browser';import { InlineWidget } from 'react-calendly';
import './BookCallPage.css';

export const BookCallPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Send form data to backend API
      const response = await axios.post('http://localhost:5000/submit', { name, email, phone });
      console.log('User saved:', response.data);

      // Send email using emailjs-com
      sendEmail();

      // Reset form fields after successful submission
      setName('');
      setEmail('');
      setPhone('');
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
