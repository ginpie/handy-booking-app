import React, { Component } from "react";
import "./searchbar.css";

class SearchBar extends Component {
  render() {
    return (
      <section className="search-bar">
        <div className="search-bar__title-box">
          <h2 className="search-bar__title">Search Your Local Family Help</h2>
        </div>
        <div className="search-bar__container">
          <form className="form" id="addItemForm">
            <input
              type="text"
              className="input"
              id="addInput"
              placeholder="Search by business name..."
            />
            <button className="button" onClick={"" /* search function here */}>
              Search
            </button>
          </form>
        </div>
      </section>
    );
  }
}

export default SearchBar;
