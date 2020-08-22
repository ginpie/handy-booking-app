import React from "react";
import img from "./img/card_assembly.jpg";

const CategoryAssembly = () => (
  <div class="card">
    <div class="card__image-container">
      <img class="card__image" src={img} alt="assembly" />
    </div>
    <div class="card__dbox">
      <h3 class="card__dbox__title">Assembly</h3>
      <p class="card__dbox__description">Furniture assembly...</p>
    </div>
    <div class="card__findmore">find more...</div>
    <div class="card__review">
      <div class="card__review__dot">·</div>
      <div class="card__review__number">1,377 reviews</div>
    </div>
  </div>
);

export default CategoryAssembly;
