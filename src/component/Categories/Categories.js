import React from "react";
import CategoryAssembly from "./components/CategoryAssembly";
import CategoryCleaning from "./components/CategoryCleaning";
import CategoryInstallation from "./components/CategoryInstallation";
import CategoryMoving from "./components/CategoryMoving";
import "./categories.css";

const Categories = () => (
  <section className="categories">
    <CategoryAssembly />
    <CategoryCleaning />
    <CategoryInstallation />
    <CategoryMoving />
  </section>
);

export default Categories;
