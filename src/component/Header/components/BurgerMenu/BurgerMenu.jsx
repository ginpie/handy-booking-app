import React from "react";
import styled from "styled-components";
import { CSSTransition } from "react-transition-group";
import AuthenticationModals from "../AuthenticationModals";
import LinkItem from "../LinkItem";
import "./style.css";

const iconcolor = "#000";

const Container = styled.div`
  width: 43px;
  height: 39px;
  margin: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const Burger = styled.a`
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
`;

const BurgerItem = styled.div`
  width: 30px;
  height: 4px;
  background-color: ${iconcolor};
  border-radius: 3px;

  &::before,
  &::after {
    content: " ";
    width: 30px;
    height: 4px;
    background-color: ${iconcolor};
    position: absolute;
    border-radius: 3px;
  }
  &::before {
    transform: translateY(-10px);
  }
  &::after {
    transform: translateY(10px);
  }
`;

const Menu = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 70px;
  left: 0;
  background-color: rgba(230, 230, 230, 1);
  z-index: 100;
  text-align: center;
  opacity: 1;
`;

const List = styled.div`
  list-style: none;
  font-family: "Roboto", Helvetica, sans-serif;
  color: ${iconcolor};
  font-size: 20px;
  line-height: 3;
  margin: 30px auto;
  padding: 0;
  display: flex;
  flex-direction: column;
  &:hover {
    cursor: pointer;
  }
`;

class BurgerMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      authenticationModal: null,
      user: null,
      toggle: false,
    };

    this.handleClick = this.handleClick.bind(this);
    this.setAuthenticationModal = this.setAuthenticationModal.bind(this);
    this.setUser = this.setUser.bind(this);
  }

  handleClick() {
    this.setState((state) => ({
      toggle: !state.toggle,
    }));
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
      <Container>
        <Burger onClick={this.handleClick}>
          <BurgerItem className={this.state.toggle ? "open" : ""}></BurgerItem>
        </Burger>
        {this.state.toggle ? (
          <Menu>
            <List>
              <LinkItem linkType={"nav"} href="/service">
                Service
              </LinkItem>
              <LinkItem linkType={"nav"} href="/contact">
                Contact
              </LinkItem>
              <LinkItem
                linkType={"nav"}
                onClick={this.setAuthenticationModal("signIn")}
              >
                Sign in
              </LinkItem>
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
            </List>
          </Menu>
        ) : (
          <div></div>
        )}
      </Container>
    );
  }
}

export default BurgerMenu;
