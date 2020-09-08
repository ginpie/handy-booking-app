import React from "react";
// import CategoryAssembly from "./components/CategoryAssembly";
// import CategoryCleaning from "./components/CategoryCleaning";
// import CategoryInstallation from "./components/CategoryInstallation";
// import CategoryMoving from "./components/CategoryMoving";
import "./categories.css";

const Categories = () => (
  <section className="categories">
    <div className="categories__title-box">
      <h3 className="categories__title">WHAT WE OFFER?</h3>
    </div>
    <div className="carousel" data-flickity='{ "autoPlay": true }'>
      <div className="carousel-cell">
        <div className="cell-wrapper">
          <a href="www.google.com">
            <i className="fas fa-hand-sparkles"></i>
            <p className="carousel-cell__job-title">Home Cleaning</p>
          </a>
        </div>
      </div>
      <div className="carousel-cell">
        <div className="cell-wrapper">
          <a href="www.google.com">
            <i className="fas fa-truck"></i>
            <p className="carousel-cell__job-title">Full House Removal</p>
          </a>
        </div>
      </div>
      <div className="carousel-cell">
        <div className="cell-wrapper">
          <a href="www.google.com">
            <i className="fas fa-tools"></i>
            <p className="carousel-cell__job-title">Handy Man</p>
          </a>
        </div>
      </div>
      <div className="carousel-cell">
        <div className="cell-wrapper">
          <a href="www.google.com">
            <i className="fas fa-couch"></i>
            <p className="carousel-cell__job-title">Furniture Assembly</p>
          </a>
        </div>
      </div>
      <div className="carousel-cell">
        <div className="cell-wrapper">
          <a href="www.google.com">
            <i className="fas fa-hammer"></i>
            <p className="carousel-cell__job-title">Installation</p>
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default Categories;
