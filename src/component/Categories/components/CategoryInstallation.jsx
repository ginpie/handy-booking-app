import React from "react";
import img from "./img/card_installation.jpg";

const CategoryInstallation = () => (
  <div class="card">
    <div class="card__image-container">
      <img class="card__image" src={img} alt="installation" />
    </div>
    <div class="card__dbox">
      <h3 class="card__dbox__title">Installation</h3>
      <p class="card__dbox__description">
        Furniture installation, household equipment installation...
      </p>
    </div>
    <div class="card__findmore">find more...</div>
    <div class="card__review">
      <div class="card__review__dot">·</div>
      <div class="card__review__number">1,377 reviews</div>
    </div>
  </div>
);

export default CategoryInstallation;
