import React from 'react';
import logo from '../../images/Ellipse 4.svg';
import social from '../../images/Social.png';

function Footer() {
  return (
    <div className='footer-container'>
      <img className="footer-logo" src={logo} alt="Logo" />
      <h1>Tiny Leaf Tea House</h1>

      <div className='footer-info'>
      <h3>Opening hours</h3>
         <p>Mon - Sat 11am - 12pm<br></br>
            Sun 11am - 11pm</p>
      <h3>Address</h3>
         <p>24 Brew Lane<br></br>
            BR3 WL, CupTown</p>
      <h3>Contact</h3>
         <p>+44 12345 67890<br></br>
            hello@yellowmountain.com</p>
      </div>

      <img className='social-logo' src={social} alt=''/>

    </div>
  );
}

export default Footer;