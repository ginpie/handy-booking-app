import React from "react";
import "./reviews.css";
import p1 from "./img/p1.png";
import p3 from "./img/p3.png";

const Reviews = () => (
  <section className="reviews">
    <div className="reviews__title-box">
      <h3 className="reviews__title">See what the others are getting done</h3>
    </div>
    <div className="reviews__tabs">
      <div className="tabs-wrapper">
        <ul className="tabs">
          <li>
            <p className="tab active">Moving home</p>
          </li>
          <li>
            <p className="tab">Cleaning Service</p>
          </li>
          <li>
            <p className="tab">Furniture Assembly</p>
          </li>
          <li>
            <p className="tab">Gardening</p>
          </li>
        </ul>
      </div>
    </div>
    <div className="reviews__tasks">
      <div className="floating-tasks-container">
        {/* This is the 1st row */}
        <div className="floating-tasks-wrapper row1">
          {/* card 1 */}
          <a
            className="tasks-card task-card-animation"
            href="www.google.com"
            target="_blank"
          >
            <div className="tasks-card__header">
              <p className="title">Delivery</p>
              <div className="price">500</div>
            </div>
            <div className="tasks-card__body">
              <img className="img" src={p1} alt="" />
              <div className="description">Moving queen size bed</div>
            </div>
            <div className="tasks-card__rating">
              <i className="fa fa-star checked" aria-hidden="false"></i>
              <i className="fa fa-star checked" aria-hidden="false"></i>
              <i className="fa fa-star checked" aria-hidden="false"></i>
              <i className="fa fa-star checked" aria-hidden="false"></i>
              <i className="fa fa-star" aria-hidden="false"></i>
            </div>
          </a>
          {/* card 2 */}
          <a
            className="tasks-card task-card-animation"
            href="www.google.com"
            target="_blank"
          >
            <div className="tasks-card__header">
              <p className="title">Delivery</p>
              <div className="price">500</div>
            </div>
            <div className="tasks-card__body">
              <img className="img" src={p1} alt="" />
              <div className="description">Moving queen size bed</div>
            </div>
            <div className="tasks-card__rating">
              <i className="fa fa-star checked" aria-hidden="false"></i>
              <i className="fa fa-star checked" aria-hidden="false"></i>
              <i className="fa fa-star checked" aria-hidden="false"></i>
              <i className="fa fa-star checked" aria-hidden="false"></i>
              <i className="fa fa-star" aria-hidden="false"></i>
            </div>
          </a>
          {/* card 3 */}
          <a
            className="tasks-card task-card-animation"
            href="www.google.com"
            target="_blank"
          >
            <div className="tasks-card__header">
              <p className="title">Delivery</p>
              <div className="price">500</div>
            </div>
            <div className="tasks-card__body">
              <img className="img" src={p1} alt="" />
              <div className="description">Moving queen size bed</div>
            </div>
            <div className="tasks-card__rating">
              <i className="fa fa-star checked" aria-hidden="false"></i>
              <i className="fa fa-star checked" aria-hidden="false"></i>
              <i className="fa fa-star checked" aria-hidden="false"></i>
              <i className="fa fa-star checked" aria-hidden="false"></i>
              <i className="fa fa-star" aria-hidden="false"></i>
            </div>
          </a>
          {/* card 4 */}
          <a
            className="tasks-card task-card-animation"
            href="www.google.com"
            target="_blank"
          >
            <div className="tasks-card__header">
              <p className="title">Delivery</p>
              <div className="price">500</div>
            </div>
            <div className="tasks-card__body">
              <img className="img" src={p1} alt="" />
              <div className="description">Moving queen size bed</div>
            </div>
            <div className="tasks-card__rating">
              <i className="fa fa-star checked" aria-hidden="false"></i>
              <i className="fa fa-star checked" aria-hidden="false"></i>
              <i className="fa fa-star checked" aria-hidden="false"></i>
              <i className="fa fa-star checked" aria-hidden="false"></i>
              <i className="fa fa-star" aria-hidden="false"></i>
            </div>
          </a>
          {/* card 5 */}
          <a
            className="tasks-card task-card-animation"
            href="www.google.com"
            target="_blank"
          >
            <div className="tasks-card__header">
              <p className="title">Delivery</p>
              <div className="price">500</div>
            </div>
            <div className="tasks-card__body">
              <img className="img" src={p1} alt="" />
              <div className="description">Moving queen size bed</div>
            </div>
            <div className="tasks-card__rating">
              <i className="fa fa-star checked" aria-hidden="false"></i>
              <i className="fa fa-star checked" aria-hidden="false"></i>
              <i className="fa fa-star checked" aria-hidden="false"></i>
              <i className="fa fa-star checked" aria-hidden="false"></i>
              <i className="fa fa-star" aria-hidden="false"></i>
            </div>
          </a>

          {/* card 6 */}
          <a
            className="tasks-card task-card-animation"
            href="www.google.com"
            target="_blank"
          >
            <div className="tasks-card__header">
              <p className="title">Delivery</p>
              <div className="price">500</div>
            </div>
            <div className="tasks-card__body">
              <img className="img" src={p1} alt="" />
              <div className="description">Moving queen size bed</div>
            </div>
            <div className="tasks-card__rating">
              <i className="fa fa-star checked" aria-hidden="false"></i>
              <i className="fa fa-star checked" aria-hidden="false"></i>
              <i className="fa fa-star checked" aria-hidden="false"></i>
              <i className="fa fa-star checked" aria-hidden="false"></i>
              <i className="fa fa-star" aria-hidden="false"></i>
            </div>
          </a>
        </div>

        {/* This is the 2nd row */}
        <div className="floating-tasks-wrapper row2">
          {/* card 1 */}
          <a
            className="tasks-card task-card-animation"
            href="www.google.com"
            target="_blank"
          >
            <div className="tasks-card__header">
              <p className="title">Delivery</p>
              <div className="price">300</div>
            </div>
            <div className="tasks-card__body">
              <img className="img" src={p3} alt="" />
              <div className="description">
                Moving washing machine and dryer
              </div>
            </div>
            <div className="tasks-card__rating">
              <i className="fa fa-star checked" aria-hidden="false"></i>
              <i className="fa fa-star checked" aria-hidden="false"></i>
              <i className="fa fa-star checked" aria-hidden="false"></i>
              <i className="fa fa-star checked" aria-hidden="false"></i>
              <i className="fa fa-star checked" aria-hidden="false"></i>
            </div>
          </a>
          {/* card 2 */}
          <a
            className="tasks-card task-card-animation"
            href="www.google.com"
            target="_blank"
          >
            <div className="tasks-card__header">
              <p className="title">Delivery</p>
              <div className="price">300</div>
            </div>
            <div className="tasks-card__body">
              <img className="img" src={p3} alt="" />
              <div className="description">
                Moving washing machine and dryer
              </div>
            </div>
            <div className="tasks-card__rating">
              <i className="fa fa-star checked" aria-hidden="false"></i>
              <i className="fa fa-star checked" aria-hidden="false"></i>
              <i className="fa fa-star checked" aria-hidden="false"></i>
              <i className="fa fa-star checked" aria-hidden="false"></i>
              <i className="fa fa-star checked" aria-hidden="false"></i>
            </div>
          </a>

          {/* card 3 */}
          <a
            className="tasks-card task-card-animation"
            href="www.google.com"
            target="_blank"
          >
            <div className="tasks-card__header">
              <p className="title">Delivery</p>
              <div className="price">300</div>
            </div>
            <div className="tasks-card__body">
              <img className="img" src={p3} alt="" />
              <div className="description">
                Moving washing machine and dryer
              </div>
            </div>
            <div className="tasks-card__rating">
              <i className="fa fa-star checked" aria-hidden="false"></i>
              <i className="fa fa-star checked" aria-hidden="false"></i>
              <i className="fa fa-star checked" aria-hidden="false"></i>
              <i className="fa fa-star checked" aria-hidden="false"></i>
              <i className="fa fa-star checked" aria-hidden="false"></i>
            </div>
          </a>
          {/* card 4 */}
          <a
            className="tasks-card task-card-animation"
            href="www.google.com"
            target="_blank"
          >
            <div className="tasks-card__header">
              <p className="title">Delivery</p>
              <div className="price">300</div>
            </div>
            <div className="tasks-card__body">
              <img className="img" src={p3} alt="" />
              <div className="description">
                Moving washing machine and dryer
              </div>
            </div>
            <div className="tasks-card__rating">
              <i className="fa fa-star checked" aria-hidden="false"></i>
              <i className="fa fa-star checked" aria-hidden="false"></i>
              <i className="fa fa-star checked" aria-hidden="false"></i>
              <i className="fa fa-star checked" aria-hidden="false"></i>
              <i className="fa fa-star checked" aria-hidden="false"></i>
            </div>
          </a>
          {/* card 5 */}
          <a
            className="tasks-card task-card-animation"
            href="www.google.com"
            target="_blank"
          >
            <div className="tasks-card__header">
              <p className="title">Delivery</p>
              <div className="price">300</div>
            </div>
            <div className="tasks-card__body">
              <img className="img" src={p3} alt="" />
              <div className="description">
                Moving washing machine and dryer
              </div>
            </div>
            <div className="tasks-card__rating">
              <i className="fa fa-star checked" aria-hidden="false"></i>
              <i className="fa fa-star checked" aria-hidden="false"></i>
              <i className="fa fa-star checked" aria-hidden="false"></i>
              <i className="fa fa-star checked" aria-hidden="false"></i>
              <i className="fa fa-star checked" aria-hidden="false"></i>
            </div>
          </a>
          {/* card 6 */}
          <a
            className="tasks-card task-card-animation"
            href="www.google.com"
            target="_blank"
          >
            <div className="tasks-card__header">
              <p className="title">Delivery</p>
              <div className="price">300</div>
            </div>
            <div className="tasks-card__body">
              <img className="img" src={p3} alt="" />
              <div className="description">
                Moving washing machine and dryer
              </div>
            </div>
            <div className="tasks-card__rating">
              <i className="fa fa-star checked" aria-hidden="false"></i>
              <i className="fa fa-star checked" aria-hidden="false"></i>
              <i className="fa fa-star checked" aria-hidden="false"></i>
              <i className="fa fa-star checked" aria-hidden="false"></i>
              <i className="fa fa-star checked" aria-hidden="false"></i>
            </div>
          </a>
        </div>
      </div>
    </div>
    <button className="get-started">Get started now</button>
  </section>
);

export default Reviews;
