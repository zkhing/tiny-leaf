import React from 'react';
import logo from '../../images/Ellipse 4.svg';
import social from '../../images/Social.png';

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-logo">
        <img src={logo} alt="Logo" />
        <h2>Tiny Leaf Tea House</h2>
      </div>

      <div className="footer-info">
        <div className="footer-text">
          <h4>Opening hours</h4>
          <p>Mon - Sat 11am - 12pm 
            Sun 11am - 11pm</p>
        </div>

        <div className="footer-text">
          <h4>Address</h4>
          <p>24 Brew Lane BR3 WL, CupTown</p>
        </div>

        <div className="footer-text">
          <h4>Contact</h4>
          <p>+44 12345 67890 hello@yellowmountain.com</p>
        </div>
      </div>

      <div className="social-logo">
        <img src={social} alt="Social Media" />
      </div>
    </div>
  );
}

export default Footer;