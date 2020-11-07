import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchForm = styled.form`
  margin: 10px 20px;
  position: relative;
  display: flex;
  align-items: center;
`;

const SearchWrapper = styled.button`
  outline: none;
  background: transparent;
  border: transparent;
  position: absolute;
  left: 150px;
`;

const SearchInput = styled.input`
  height: 30px;
  text-indent: 5px;
`;

const Search = () => (
  <SearchForm>
    <SearchInput placeholder="Furniture Assembly" />
    <SearchWrapper>
      <FontAwesomeIcon icon={faSearch} size="sm" />
    </SearchWrapper>
  </SearchForm>
);

export default Search;
