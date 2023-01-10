import React from 'react';
import logo from '../../images/Ellipse 4.svg';
import social from '../../images/Social.png';

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-logo">
        <img src={logo} alt="Logo" />
        <h1>Tiny Leaf Tea House</h1>
      </section>

      <div className="footer-info">
        <section>
          <h4>Opening hours</h4>
          <p>
            Mon - Sat 11am - 12pm<br></br>
            Sun 11am - 11pm
          </p>
        </section>

        <section>
          <h4>Address</h4>
          <p>
            24 Brew Lane<br></br>
            BR3 WL, CupTown
          </p>
        </section>

        <section>
          <h4>Contact</h4>
          <p>
            +44 12345 67890<br></br>
            hello@yellowmountain.com
          </p>
        </section>
      </div>

      <section className="social-logo">
        <img src={social} alt="" />
      </section>
    </div>
  );
}

export default Footer;