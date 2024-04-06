import React, { useState } from 'react';
import './FinanceApplication.css';

const FinanceApplication = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [panCard, setPanCard] = useState("");
  const [aadhaarCard, setAadhaarCard] = useState("");
  const [age, setAge] = useState("");
  const [amount, setAmount] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted!");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Address:", address);
    console.log("PAN Card:", panCard);
    console.log("Aadhaar Card:", aadhaarCard);
    console.log("Age:", age);
    console.log("Amount:", amount);
    console.log("Message:", message);
    setName("");
    setEmail("");
    setAddress("");
    setPanCard("");
    setAadhaarCard("");
    setAge("");
    setAmount("");
    setMessage("");
  }

  return (
    <div className="finance-form-container">
      <h2>Finance Application Form</h2>
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
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="panCard">PAN Card Number:</label>
          <input
            type="text"
            id="panCard"
            value={panCard}
            onChange={(e) => setPanCard(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="aadhaarCard">Aadhaar Card Number:</label>
          <input
            type="text"
            id="aadhaarCard"
            value={aadhaarCard}
            onChange={(e) => setAadhaarCard(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            id="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="amount">Amount:</label>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>
        <button className='financebutton' type="submit">Submit</button>
      </form>
    </div>
  );
}

export default FinanceApplication;
