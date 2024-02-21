import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <>
     <div class="conatiner1">
     <div id="top">
      
      </div> {/* Anchor point for scrolling */}
      <div className="container">
        <div className="contact">
          <h1>Feel Free To Reach US !!</h1>
          <p>
            For any inquiries, please call or email us today. Our team is ready to assist you with any questions or concerns you may have.
          </p>
          <div className="contact-info">
            <div>
              <h2>Phone</h2>
              <p> 1-800-123-4567</p>
            </div>
            <div>
              <h2>Email</h2>
              <p>Advait123@gmail.com </p>
            </div>
            <div>
              <h2>Address</h2>
              <p>1331 Masood ct Canton Mi 48188</p>
            </div>
          </div>
        </div>
      </div>

      
      <div className="contact-form">
        <h2>Get in Touch With Us , We are happy to Assist you </h2>
        <form>
          <div>
            <input type="text" placeholder="Full Name" />
          </div>
          <div>
            <input type="text" placeholder="Email" />
          </div>
          <div>
            <textarea placeholder="Message"></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
      
     </div>
    </>
  );
};

export default Contact;
