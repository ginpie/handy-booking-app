import React from "react";
import CategoryAssembly from "./components/CategoryAssembly";
import CategoryCleaning from "./components/CategoryCleaning";
import CategoryInstallation from "./components/CategoryInstallation";
import CategoryMoving from "./components/CategoryMoving";
import "./categories.css";

const Categories = () => (
  <section className="categories">
    <div className="categories__title-box">
      <h3 className="categories__title">All Categories</h3>
    </div>
    <div className="card-box">
      <CategoryAssembly />
      <CategoryCleaning />
      <CategoryInstallation />
      <CategoryMoving />
    </div>
  </section>
);

export default Categories;
