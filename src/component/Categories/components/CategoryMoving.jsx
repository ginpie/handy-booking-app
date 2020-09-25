import React from "react";
import img from "./img/card_moving.jpg";

const CategoryMoving = () => (
  <div class="card">
    <div class="card__image-container">
      <img class="card__image" src={img} alt="moving" />
    </div>
    <div class="card__dbox">
      <h3 class="card__dbox__title">Moving</h3>
      <p class="card__dbox__description">House moving, interstate moving...</p>
    </div>
    <div class="card__findmore">find more...</div>
    <div class="card__review">
      <div class="card__review__dot">·</div>
      <div class="card__review__number">1,377 reviews</div>
    </div>
  </div>
);

export default CategoryMoving;
