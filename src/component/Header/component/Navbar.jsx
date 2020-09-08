import React from "react";

const Navbar = () => (
  <nav className="navbar">
    <a href="www.google.com" className="navbar__logo-box">
      <div>
        <div className="navbar__logo"></div>
      </div>
    </a>
    <ul className="navbar__list">
      <li>
        <a href="www.google.com" className="navbar__link">
          Home
        </a>
      </li>
      <li>
        <a href="www.google.com" className="navbar__link">
          Service
        </a>
      </li>
      <li>
        <a href="www.google.com" className="navbar__link">
          Contact
        </a>
      </li>
      <li>
        <a href="www.google.com" className="navbar__link">
          Log In
        </a>
      </li>
    </ul>
    <ul className="navbar__log">
      <li>
        <a href="www.google.com" className="navbar__log-item">
          Sign up
        </a>
      </li>
      <li>
        <a href="www.google.com" className="navbar__log-item">
          Log in
        </a>
      </li>
      <li>
        <a href="www.google.com" className="navbar__become-tradie">
          Become a Tradie
        </a>
      </li>
    </ul>
  </nav>
);

export default Navbar;
