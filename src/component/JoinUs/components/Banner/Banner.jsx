import React from "react";
import styled from "styled-components";
import SignUpModal from "../../../Header/components/Private/components/SignUpModal";
import SignInModal from "../../../Header/components/Private/components/SignInModal";
import { CSSTransition } from "react-transition-group";
import "../../../Header/components/Private/styles.css";
import LinkItem from "../../../Header/components/LinkItem";
import Layout from "../../../Header/components/Layout";

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

const MODAL = {
  signIn: "SIGN_IN",
  signUp: "SIGN_UP",
  empty: "",
};

class Banner extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
      user: null,
    };
    this.showModal = this.showModal.bind(this);
    this.setUser = this.setUser.bind(this);
  }

  setUser(target) {
    this.setState({ user: target });
  }

  showModal(target) {
    return (event) => {
      if (event) {
        event.preventDefault();
      }

      this.setState({
        showModal: target,
      });
    };
  }

  render() {
    const { showModal, user } = this.state;

    return (
      <Layout>
        {user ? (
          <LinkItem href="/dashBoard">DashBoard</LinkItem>
        ) : (
          <Container>
            <Title>Earn up to $5,000 a month on HandyMan* </Title>
            <Button onClick={this.showModal(MODAL.signUp)}>Join Tradie</Button>
            {showModal === MODAL.signUp && (
              <CSSTransition
                in={!(showModal === MODAL.empty)}
                appear={true}
                timeout={1000}
                classNames="model"
              >
                <SignUpModal
                  onClose={this.showModal(MODAL.empty)}
                  onSignIn={this.showModal(MODAL.signIn)}
                  onSignUpSuccess={this.setUser}
                />
              </CSSTransition>
            )}
            {showModal === MODAL.signIn && (
              <CSSTransition
                in={!(showModal === MODAL.empty)}
                appear={true}
                timeout={1000}
                classNames="model"
              >
                <SignInModal
                  onClose={this.showModal(MODAL.empty)}
                  onSignUp={this.showModal(MODAL.signUp)}
                  onSignInSuccess={this.setUser}
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
