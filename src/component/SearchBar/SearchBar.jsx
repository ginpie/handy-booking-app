import React from "react";
import styled from "styled-components";
import Search from "./components/Search";
import Text from "./components/Text";

const Container = styled.section`
  margin: auto;
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

const Button = styled.button`
  margin: 0 auto 0 0;
  background-color: #ffda44;
  border: none;
  width: 100px;
  height: 40px;
  font-family: "Roboto Condensed", sans-serif;
  font-size: medium;
  outline: none;
  cursor: pointer;
`;

const StartButton = styled(Button)`
  margin: 0 auto 0 10%;
  width: 150px;
`;

const SearchWrapper = styled.div`
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

const LongSearch = styled(Search)`
  width: 200px;
`;
const ShortSearch = styled(Search)`
  width: 40%;
`;

const SearchBar = () => (
  <Container>
    <Text
      title="NEED A HAND?"
      subtitle="The #1 tradie service in Australia"
    ></Text>
    <SearchWrapper>
      <Search
        icon="fas fa-search"
        placeholder="Search by trade or business name"
      ></Search>
      <Search
        icon="fas fa-map-marker-alt"
        placeholder="Enter postcode"
      ></Search>
      <Button /*onClick={  search function here }*/>Go</Button>
    </SearchWrapper>

    <StartButton>GET STARTED</StartButton>
  </Container>
);

export default SearchBar;
