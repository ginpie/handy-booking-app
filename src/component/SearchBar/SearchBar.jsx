import React from "react";
import styled from "styled-components";
import Search from "./components/Search";
import Text from "./components/Text";

const Container = styled.section`
  margin: auto;
  margin-top: 70px;
  padding: 50px 0;
  width: 100%;
  height: 300px;
  background-image: url(https://res.cloudinary.com/dr99oorie/image/upload/v1601281233/background_f4alqf.jpg);
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
  margin: 0 auto 0 0;
  background-color: #ffda44;
  border: none;
  width: 100px;
  height: 40px;
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

const SearchBar = () => (
  <Container>
    <Text
      title="NEED A HAND?"
      subtitle="The #1 tradie service in Australia"
    ></Text>
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
      <Link /*onClick={  search function here }*/>Go</Link>
    </SearchBox>

    <GetStart href="/service">GET STARTED</GetStart>
  </Container>
);

export default SearchBar;
