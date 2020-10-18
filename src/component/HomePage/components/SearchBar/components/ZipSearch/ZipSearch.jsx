import React from "react";
import styled from "styled-components";

import Search from "../Search";
import zipcode from "../zipcode";

const DropList = styled.ul`
  width: 350px;
  margin: 0 auto;
  padding: 0;
  max-height: 390px;
  background-color: #fff;
  overflow-y: auto;
  border: 1px solid rgba(0, 0, 0, 0.5);
  border-radius: 3px;
  border-left: none;
  border-right: none;
  position: absolute;
  display: block;
  z-index: 90;
`;

const List = styled.li`
  width: 100%;
  list-style: none;
  background-color: #fff;
  padding: 10px 15px 10px 25px;
  margin: 0;
  border: 1px solid #ccc;

  box-shadow: inset 1px 1px 0 rgba(255, 255, 255, 0.5);
  box-sizing: border-box;
  cursor: pointer;

  &:hover {
    background-color: #eee;
  }
`;

class ZipSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      suggestions: [],
      text: "",
      focused: false,
    };
  }

  onInputChange = (e) => {
    const value = e.target.value;
    let suggestions = [];
    if (value.length > 0) {
      const regex = new RegExp(`^${value}`, "i");
      suggestions = zipcode
        .sort()
        .filter((v) => regex.test(v))
        .slice(0, 7);
    }

    this.setState(() => ({ suggestions, text: value }));
  };

  onBlured = () => {
    this.setState(() => ({ focused: false }));
  };

  onFocused = () => {
    this.setState(() => ({ focused: true }));
  };

  selectedText(value) {
    this.setState(() => ({
      text: value,
      suggestions: [],
    }));
    console.log("selected");
  }

  renderSuggestions = () => {
    let { suggestions, focused } = this.state;
    if (suggestions.length === 0 || !focused) {
      return null;
    }
    return (
      <DropList>
        {suggestions.map((item, index) => (
          <List key={index} onMouseDown={() => this.selectedText(item)}>
            {item}
          </List>
        ))}
      </DropList>
    );
  };

  render() {
    const { text } = this.state;

    return (
      <div>
        <Search
          placeholder="Enter postcode"
          icon="fas fa-map-marker-alt"
          onChange={this.onInputChange}
          value={text}
          id={"zipsearch"}
          onBlur={this.onBlured}
          onFocus={this.onFocused}
        ></Search>
        {this.renderSuggestions()}
      </div>
    );
  }
}

export default ZipSearch;
