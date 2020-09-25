import React from "react";
import img from "./img/card_cleaning.jpg";

const CategoryCleaning = () => (
  <div class="card">
    <div class="card__image-container">
      <img class="card__image" src={img} alt="cleaning" />
    </div>
    <div class="card__dbox">
      <h3 class="card__dbox__title">Cleaning</h3>
      <p class="card__dbox__description">
        House cleaning, end of lease cleaning...
      </p>
    </div>
    <div class="card__findmore">find more...</div>
    <div class="card__review">
      <div class="card__review__dot">·</div>
      <div class="card__review__number">1,377 reviews</div>
    </div>
  </div>
);

export default CategoryCleaning;
