import React from 'react';
import logo from './images/Ellipse 4.svg'

function Footer() {
  return (
    <div className='footer-container'>
      <img className="footer-logo" src={logo} alt="Logo" />
      <h1>Tiny Leaf Tea House</h1>
      <h6>Opening hours</h6>
         <p>Mon - Sat 11am - 12pm 
            Sun 11am - 11pm</p>
      <h6>Address</h6>
         <p>24 Brew Lane
            BR3 WL, CupTown</p>
      <h6>Contact</h6>
         <p>+44 12345 67890
            hello@yellowmoutain.com</p>
    </div>
  );
}

export default Footer;