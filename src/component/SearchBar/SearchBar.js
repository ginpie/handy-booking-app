import React, { Component } from "react";
import "./searchbar.css";

class SearchBar extends Component {
  render() {
    return (
      <section className="search-bar">
        <div className="search-bar__title-box">
          <h2 className="search-bar__title">NEED A HAND?</h2>
          <h3 className="search-bar__subtitle">
            The #1 tradie service in Australia
          </h3>
        </div>
        <div className="search-bar__container">
          <form className="form" id="addItemForm">
            <div className="input-box input-box--name">
              <i class="fas fa-search"></i>
              <input
                type="text"
                className="input"
                id="addInputName"
                placeholder="Search by trade or business name"
              />
            </div>
            <div className="input-box input-box--address">
              <i class="fas fa-map-marker-alt"></i>
              <input
                type="text"
                className="input"
                id="addInputAddress"
                placeholder="Enter postcode"
              />
            </div>
            <button className="button" onClick={"" /* search function here */}>
              Go
            </button>
          </form>
        </div>

        <button className="get-started">GET STARTED</button>
      </section>
    );
  }
}

export default SearchBar;
