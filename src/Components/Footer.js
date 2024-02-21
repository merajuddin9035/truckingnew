// Footer.js
import React from "react";
import "./Footer.css"; // Import the Footer.css file
import CallIcon from "@mui/icons-material/Call";
import FacebookIcon from "@mui/icons-material/Facebook";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalShippingTwoToneIcon from "@mui/icons-material/LocalShippingTwoTone";
import EmailTwoToneIcon from "@mui/icons-material/EmailTwoTone";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer>
      <div class="footer-container">
        <div class="left-section">
          <div class="left-section-content">
            <div class="left-section-content-name">
              <h1>____</h1>
              <LocalShippingTwoToneIcon fontSize="large" />
              <h1>_Advait_Trucking_Automation</h1>
            </div>

            <div class="menu-list">
            <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/finance">Finance Application</Link>
            </li>
              <li>
              <Link to="/Contact">Contact us</Link>
            </li>
              <li>
              <Link to="/about">About us</Link>
            </li>
            </ul>
            </div>
            <p>Advait Trucking Automation &copy; All rights reserved.</p>
          </div>
        </div>

        <div class="second-section">
          <div class="second-section-content">
            <div class="second-section-content-name">
              <div className="content1">
                <CallIcon />
                <h1>+91 1234567890</h1>
              </div>
              <div className="content2">
                <EmailTwoToneIcon />
                <h1> XYZ@gmail.com</h1>
              </div>

              <div className="content3">
                <LocationOnIcon />
                <h1>1331 Masood ct Canton Mi 48188</h1>
              </div>
            </div>
          </div>
        </div>

        <div class="right-section">
          <div class="right-section-content">
            <h1>What we are providing you</h1>
            <p class="mt-5">
              Welcome to our trucking service provider app, where reliability
              meets efficiency on the road. Effortlessly book, track, and manage
              your shipments with our user-friendly trucking service app,
              putting control in your hands.
            </p>

            <div class="social-links mt-5">
              <a href="#" class="icon">
                <WhatsAppIcon />
              </a>
              <a href="#" class="icon">
                <InstagramIcon />
              </a>
              <a href="#" class="icon">
                <FacebookIcon />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
