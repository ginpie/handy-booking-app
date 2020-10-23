import React from "react";
import styled from "styled-components";

import { CSSTransition } from "react-transition-group";
import "../../../Header/components/Private/styles.css";
import LinkItem from "../../../Header/components/LinkItem";
import Layout from "../../../Header/components/Layout";
import AuthenticationModals from '../../../Header/components/AuthenticationModals';
const Container = styled.div`
  margin-top: 70px;
  height: 600px;
  width: 100%;
  background: url(https://res.cloudinary.com/dr99oorie/image/upload/v1602050260/henry-co-3coKbdfnAFg-unsplash_genvg1.jpg),
    #f9f7e7;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h2`
  font-size: 25px;
  color: #fff;
  text-shadow: #888 1px 3px 6px;
`;

const Button = styled.button`
  margin: 10px 0;
  background: #ffda44;
  border: none;
  width: 140px;
  height: 40px;
  font-family: "Roboto Condensed", sans-serif;
  font-size: medium;
  outline: none;
  cursor: pointer;
`;

const Remark = styled.p`
  font-size: 10px;
  color: #eee;
`;



class Banner extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      authenticationModal: null,
      user: null,
    };
    this.setAuthenticationModal = this.setAuthenticationModal.bind(this);
    this.setUser = this.setUser.bind(this);
  }

  setUser(target) {
    this.setState({ user: target });
  }

  setAuthenticationModal(target) {
    return (event) => {
      if (event) {
        event.preventDefault();
      }

      this.setState({
        authenticationModal: target,
      });
    };
  }

  render() {
    const { authenticationModal, user } = this.state;

    return (
      <Layout>
        {user ? (
          <LinkItem href="/dashBoard">DashBoard</LinkItem>
        ) : (
          <Container>
            <Title>Earn up to $5,000 a month on HandyMan* </Title>
            <Button onClick={this.setAuthenticationModal('signUp')}>Join Tradie</Button>
            {authenticationModal && (
                <CSSTransition
                  in={!(authenticationModal === null)}
                  appear={true}
                  timeout={1000}
                  classNames="model"
                >
                  <AuthenticationModals
                    initialModal={authenticationModal}
                    onClose={this.setAuthenticationModal()}
                  />
                    </CSSTransition>
              )}
            <Remark>
              *Based on the median top 50 Tradie's monthly earnings.
            </Remark>
          </Container>
        )}
      </Layout>
    );
  }
}

export default Banner;
