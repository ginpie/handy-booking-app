import React from "react";
import "./footer.css";

const Footer = () => (
  <footer className="footer">
    <div className="advantage">
      <p className="advantage__title">Our Advantage</p>
      <a className="advantage__item" href="www.google.com">
        WHY CHOOSE US?
      </a>
      <a className="advantage__item" href="www.google.com">
        Compare Trading Accounts
      </a>
      <a className="advantage__item" href="www.google.com">
        24 Support
      </a>
    </div>

    <div className="contact">
      <p className="contact__title">CONTACT US</p>
      <div className="contact__item-box">
        <p className="item">Call us</p>
        <p className="item">1400-000-000</p>
      </div>
      <div className="contact__item-box">
        <p className="item">Email us</p>
        <a className="item" href="mailto:info@mysite.com">
          info@mysite.com
        </a>
      </div>
    </div>

    <div className="social-icon">
      <p className="social-icon__title">FOLLOW US ON</p>
      <div className="social-icon__container">
        <a className="facebook" href="www.facebook.com">
          <i class="fab fa-facebook-square"></i>
        </a>
        <a className="twitter" href="www.twitter.com">
          <i class="fab fa-twitter-square"></i>
        </a>
        <a className="instagram" href="www.instagram.com">
          <i class="fab fa-instagram-square"></i>
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
