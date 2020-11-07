import React from "react";
import styled from "styled-components";
import CardWrapper from "./component/CardWrapper";
import OrderLayout from "./component/OrderLayout";
import { getTradies } from "../../../../apis/getTradies/getTradies";

const Wrapper = styled.div``;

const Layout = styled.div`
  padding: 30px;
  max-width: 1024px;
  margin: 0 auto;
`;

const Header = styled.h1`
  font-size: 1.2rem;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 900px) {
    flex-direction: column;
  }
`;

const data = [
  {
    name: "Ian Yin",
    label: ["Cleaning", "Furniture Assembly", "House Moving", "Installation"],
    rating: 3,
  },
  {
    name: "David",
    label: ["Cleaning", "Furniture Assembly", "House Moving"],
    rating: 5,
  },
  {
    name: "Jinpei",
    label: ["Cleaning", "Furniture Assembly", "House Moving"],
    rating: 4,
  },
  { name: "Ming", label: ["Cleaning", "Furniture Assembly"], rating: 5 },
  { name: "katrina", label: ["Cleaning", "Furniture Assembly"], rating: 4 },
  { name: "Lightman", label: ["Cleaning", "Furniture Assembly"], rating: 4 },
  { name: "Mason", label: ["Installation"], rating: 5 },
];

class ServiceContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: "",
      isClicked: false,
      loaded: false,
      tradiesData: null,
      active: 0,
    };

    this.handleClick = this.handleClick.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  handleClick(data, event) {
    console.log(data, event);
    event.preventDefault();
    this.setState((prevState) => ({
      current: data,
      isClicked: !prevState.isClicked,
    }));
  }

  componentDidMount() {
    getTradies().then((res) => {
      this.setState({
        tradiesData: res,
        loaded: true,
      });
    });
  }

  render() {
    const title = this.props.title;
    const current = this.state.current;
    const isClicked = this.state.isClicked;
    const handleClick = this.handleClick;
    const tradiesData = this.state.tradiesData;

    return (
      <Wrapper>
        <Layout>
          <Header>{` ${title} Recommendations:`}</Header>
          {this.state.loaded ? (
            <Content isClicked={isClicked}>
              <CardWrapper
                current={current.tradieId}
                data={data}
                handleClick={handleClick}
                isClicked={isClicked}
                tradiesData={tradiesData}
              />
              <OrderLayout currentTradie={current} />
            </Content>
          ) : (
            <p>Loading</p>
          )}
        </Layout>
      </Wrapper>
    );
  }
}

export default ServiceContent;
