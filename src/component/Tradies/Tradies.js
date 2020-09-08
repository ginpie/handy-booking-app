import React from "react";
import "./tradies.css";
import p4 from "./img/p4.jpg";

const Tradies = () => (
  <section className="tradies">
    <div className="tradies__title-box">
      <h3 className="tradies__title">Meet some tradies!</h3>
    </div>

    <div className="tradies__tabs">
      <div className="tabs-wrapper">
        <ul className="tabs">
          <li>
            <p className="tab active">Alice</p>
          </li>
          <li>
            <p className="tab">Benedict</p>
          </li>
          <li>
            <p className="tab">Catherine</p>
          </li>
          <li>
            <p className="tab">Dennis</p>
          </li>
        </ul>
      </div>
    </div>

    <div className="tradies__card">
      <div className="details">
        <div className="title">Alice</div>
        <div className="rating">
          <i className="fa fa-star checked" aria-hidden="false"></i>
          <i className="fa fa-star checked" aria-hidden="false"></i>
          <i className="fa fa-star checked" aria-hidden="false"></i>
          <i className="fa fa-star checked" aria-hidden="false"></i>
          <i className="fa fa-star" aria-hidden="false"></i>
        </div>
        <div className="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </div>
      </div>
      <div className="display">
        <img className="display__img" src={p4} alt="" />
      </div>
    </div>

    <button className="get-started">Become a tradie now</button>
  </section>
);

export default Tradies;
