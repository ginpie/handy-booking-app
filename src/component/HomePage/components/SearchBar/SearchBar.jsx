import React from "react";
import styled from "styled-components";
import MediaQuery from "react-responsive";
import { withRouter } from "react-router-dom";

import Search from "./components/Search";
import Text from "./components/Text";
import ZipSearch from "./components/ZipSearch";
import ServiceSearch from "./components/ServiceSearch";

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
  height: 50px;
`;

const SearchBox = styled.div`
  margin: 0 auto 0 10%;
  width: 60%;
  min-width: 500px;
  max-width: 700px;
  height: 80px;
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
  height: 50px;
`;

const SearchBoxMobile = styled.div`
  margin: 0 auto;
  width: 90%;
  height: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const SearchWrapperMobile = styled.div`
  width: 100%;
  height: 50px;
  margin: 3px auto;
`;

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.searchRef = React.createRef();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    // get search input element
    const inputValue = this.searchRef.current.ref.current.props.value;
    this.props.history.push("/" + inputValue.toLowerCase().replace(/\s/g, ""));
  };

  render() {
    return (
      <Container>
        <Text
          title="NEED A HAND?"
          subtitle="The #1 tradie service in Australia"
        ></Text>

        <MediaQuery minWidth={900}>
          <SearchBox>
            <SearchWrapper1>
              <ServiceSearch ref={this.searchRef} />
            </SearchWrapper1>
            <SearchWrapper2>
              <ZipSearch />
            </SearchWrapper2>
            <SearchWrapper3>
              <Link onClick={this.handleClick}>Go</Link>
            </SearchWrapper3>
          </SearchBox>
          <GetStart href="/service">GET STARTED</GetStart>
        </MediaQuery>
        <MediaQuery maxWidth={900}>
          <SearchBoxMobile>
            <SearchWrapperMobile>
              <ServiceSearch ref={this.searchRef} />
            </SearchWrapperMobile>
            <SearchWrapperMobile>
              <ZipSearch />
            </SearchWrapperMobile>
            <SearchWrapperMobile>
              <Link onClick={this.handleClick}>Go</Link>
            </SearchWrapperMobile>
          </SearchBoxMobile>
        </MediaQuery>
      </Container>
    );
  }
}

export default withRouter(SearchBar);
