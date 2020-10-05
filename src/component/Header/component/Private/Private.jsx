import React from "react";
import Layout from "../Layout";
import LinkItem from "../LinkItem";
import SignInModal from "./components/SignInModal";
import SignUpModal from "./components/SignUpModal";
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
      user: null,
      // showSignInModal: false,
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
      <>
        <Layout>
          {user ? (
            <LinkItem href="/dashBoard">DashBoard</LinkItem>
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
                <SignInModal
                  onClose={this.showModal(MODAL.empty)}
                  onSignUp={this.showModal(MODAL.signUp)}
                  onSignInSuccess={this.setUser}
                />
              )}
              {showModal === MODAL.signUp && (
                <SignUpModal
                  onClose={this.showModal(MODAL.empty)}
                  onSignIn={this.showModal(MODAL.signIn)}
                  onSignUpSuccess={this.setUser}
                />
              )}
            </>
          )}
          <LinkItem linkType={"button"} href="/enroll">
            Become a Tradie
          </LinkItem>
        </Layout>
      </>
    );
  }
}

export default Private;
