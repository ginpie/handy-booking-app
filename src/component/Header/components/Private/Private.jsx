import React from "react";
import Layout from "../Layout";
import LinkItem from "../LinkItem";
import SignInModal from "./components/SignInModal";
import SignUpModal from "./components/SignUpModal";
import { CSSTransition } from "react-transition-group";
import withFetch from '../../../withFetch'
import  { AuthenticationContext } from '../../../withAuthentication'
import Logout from './components/Logout'
import "./styles.css";

const MODAL = {
  signIn: "SIGN_IN",
  signUp: "SIGN_UP",
  empty: "",
};

class Private extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: MODAL.empty,
    };
    this.showModal = this.showModal.bind(this);
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
    const { showModal } = this.state;
    return (
      <>
        <Layout>
          <AuthenticationContext.Consumer>
          {(Authentication)=>Authentication.user?(
            <>
            <LinkItem href="/dashBoard" linkType={"text"} >DashBoard</LinkItem>
            <Logout />
              </>
          ) : (
            <>
              <LinkItem
                linkType={"text"}
                onClick={this.showModal(MODAL.signUp)}
              >
                Sign Up
              </LinkItem>

              <LinkItem
                linkType={"text"}
                onClick={this.showModal(MODAL.signIn)}
              >
                Sign In
              </LinkItem>
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
            </>
          )}
          </AuthenticationContext.Consumer>
          <LinkItem linkType={"button"} href="/join-us">
            Become a Tradie
          </LinkItem>
        </Layout>
      </>
    );
  }
}
const WithFetchPrivate = withFetch(Private);
export default WithFetchPrivate;
