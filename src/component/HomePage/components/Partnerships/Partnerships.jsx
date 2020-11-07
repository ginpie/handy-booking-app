import React from "react";
import styled from "styled-components";

import "../../../../assets/fonts.css";

const Container = styled.section`
  min-height: 600px;
  width: auto;
  padding: 20px 0 20px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background-color: #f9f7e7;
  background-size: cover;
  font-family: "Roboto Condensed", sans-serif;
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 900px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const Title = styled.h3`
  width: 100%;
  text-align: left;
  padding-left: 20px;
  font-size: 28px;
  font-family: "Roboto Condensed", sans-serif;
`;

const Box = styled.div`
  width: 100%;
  min-height: 400px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
`;

const Column = styled.div`
  width: 50%;
  min-width: 200px;
  height: 100%;
  min-height: 280px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Icons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
`;

const Icon = styled.p`
  font-size: 30px;
  margin: 10px 20px;
  opacity: 0.5;
  cursor: pointer;

  &:hover {
    opacity: 1;
  }
`;

const Contents = styled.div`
  height: 100%;
  min-height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-end;
`;

const Text = styled.p`
  min-height: 100px;
`;

const Button = styled.div`
  margin: 20px auto;
  background-color: #ffda44;
  border: none;
  border-radius: 20px;
  width: 140px;
  height: 50px;
  font-family: "Roboto Condensed";
  font-size: medium;
  color: #000;
  cursor: pointer;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-decoration: none;
`;

const ImgWrap = styled.div`
  width: 350px;
  height: 400px;
  overflow: hidden;
  border-radius: 0 0 50% 50%;
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: flex-end;

  @media screen and (max-width: 600px) {
    width: 280px;
    height: 320px;
  }
`;

const Circle = styled.div`
  width: 350px;
  height: 350px;
  border-radius: 50%;
  background-color: #aaa;
  @media screen and (max-width: 600px) {
    width: 280px;
    height: 280px;
  }
`;

const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
  position: absolute;
  margin: auto;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  @keyframes up {
    0% {
      transform: translateY(300px);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;

const data = [
  {
    icon: "fab fa-adn",
    name: "Amarket",
    font: "'Rubik Mono One', sans-serif",
    text:
      "Got the flat-pack but no time to assemble? Find someone on Handyman to take the load off and piece it together quick-smart!",
    img:
      "https://res.cloudinary.com/dr99oorie/image/upload/v1604587782/beer_kzqnph.png",
  },
  {
    icon: "fab fa-buy-n-large",
    name: "Bmall",
    font: "'Orbitron', sans-serif",
    text:
      "Got unused clutter to sell? Find someone on Handyman to help you sort through it all and sell it on bBay.",
    img:
      "https://res.cloudinary.com/dr99oorie/image/upload/v1604587779/cloths_u3xt3u.png",
  },
  {
    icon: "fab fa-cuttlefish",
    name: "Cyard",
    font: "'Plaster', sans-serif",
    text:
      "Need some groceries but no time to go to the shops? Get a Tradie to pick them up for you and stay in touch with them every step of the way!",
    img:
      "https://res.cloudinary.com/dr99oorie/image/upload/v1604587773/chair_kmhbgj.png",
  },
];

class Partnerships extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 0,
      style: {},
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.setState({ active: e, style: { animation: "up 200ms ease-out" } });
  }

  render() {
    return (
      <Container>
        <Wrapper>
          <Title>Some of our partnerships</Title>
          <Box>
            <Column>
              <Icons>
                {data.map((i, e) => {
                  return (
                    <Icon
                      onClick={this.handleClick.bind(this, e)}
                      style={{
                        fontFamily: i.font,
                        opacity: this.state.active === e && 1,
                      }}
                      key={e}
                    >
                      {i.name}
                    </Icon>
                  );
                })}
              </Icons>
              <Contents>
                <Text>{data[this.state.active].text}</Text>
                <Button href="/blog">Get it done</Button>
              </Contents>
            </Column>
            <Column>
              <ImgWrap>
                <Circle />
                <Image
                  src={data[this.state.active].img}
                  style={this.state.style}
                  onAnimationEnd={() => this.setState({ style: {} })}
                />
              </ImgWrap>
            </Column>
          </Box>
        </Wrapper>
      </Container>
    );
  }
}

export default Partnerships;
