import axios from 'axios';
import { useState } from 'react';
import { InlineWidget } from "react-calendly";
import './BookCallPage.css';

export const BookCallPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/submit', { name, email, phone }); // Adjust the URL as needed
      console.log('User saved:', response.data);
      // Optionally, reset form fields after successful submission
      setName('');
      setEmail('');
      setPhone('');
    } catch (error) {
      console.error('Error saving user:', error);
    }
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

      <div className="calendly-widget">
        <InlineWidget url="https://calendly.com/mdmeraju784" />
      </div>
    </>
  );
};
