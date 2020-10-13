import React from "react";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";

import Search from "./components/Search";
import Text from "./components/Text";

const Container = styled.section`
  margin: auto;
  padding: 120px 0 50px 0;
  width: 100%;
  height: 400px;
  background-image: url(https://res.cloudinary.com/dr99oorie/image/upload/v1602135049/samantha-gades-BlIhVfXbi9s-unsplash_v4cxij.jpg);
  background-size: cover;
  background-position: center;
  display: flex;
  justify-items: center;
  justify-content: space-around;
  flex-direction: column;
  font-family: "Roboto Condensed", sans-serif;
  font-weight: bold;
`;

const Link = styled.a`
  margin: 0;
  background-color: #ffda44;
  border: none;
  width: 100%;
  height: 100%;
  font-family: "Roboto Condensed", sans-serif;
  font-size: medium;
  font-weight: 400;
  color: #000;
  cursor: pointer;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-decoration: none;
`;

const GetStart = styled(Link)`
  margin: 0 auto 0 10%;
  width: 150px;
  height: 40px;
`;

const SearchBox = styled.div`
  margin: 0 auto 0 10%;
  width: 60%;
  min-width: 500px;
  max-width: 700px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const SearchWrapper1 = styled.div`
  width: 60%;
  margin: 0 1px;
`;

const SearchWrapper2 = styled.div`
  width: 40%;
  margin: 0 1px;
`;
const SearchWrapper3 = styled.div`
  width: 100px;
  height: 40px;
`;

const SearchBoxMobile = styled.div`
  margin: 0 auto;
  width: 90%;
  height: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const SearchWrapperMobile = styled.div`
  width: 100%;
  height: 40px;
  margin: 3px auto;
`;

const SearchBar = () => {
  // Responsive layout
  const isBigScreen = useMediaQuery({ query: "(min-width:900px" });
  const isSmallScreen = useMediaQuery({ query: "(max-width: 900px)" });

  return (
    <Container>
      <Text
        title="NEED A HAND?"
        subtitle="The #1 tradie service in Australia"
      ></Text>
      {isBigScreen && (
        <>
          <SearchBox>
            <SearchWrapper1>
              <Search
                icon="fas fa-search"
                placeholder="Search by trade or business name"
              ></Search>
            </SearchWrapper1>
            <SearchWrapper2>
              <Search
                icon="fas fa-map-marker-alt"
                placeholder="Enter postcode"
              ></Search>
            </SearchWrapper2>
            <SearchWrapper3>
              <Link /*onClick={  search function here }*/>Go</Link>
            </SearchWrapper3>
          </SearchBox>
          <GetStart href="/service">GET STARTED</GetStart>
        </>
      )}
      {isSmallScreen && (
        <SearchBoxMobile>
          <SearchWrapperMobile>
            <Search
              icon="fas fa-search"
              placeholder="Search by trade or business name"
            ></Search>
          </SearchWrapperMobile>
          <SearchWrapperMobile>
            <Search
              icon="fas fa-map-marker-alt"
              placeholder="Enter postcode"
            ></Search>
          </SearchWrapperMobile>
          <SearchWrapperMobile>
            <Link /*onClick={  search function here }*/>Go</Link>
          </SearchWrapperMobile>
        </SearchBoxMobile>
      )}
    </Container>
  );
};

export default SearchBar;
