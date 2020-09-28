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
      // showSignInModal: false,
    };
    this.showModal = this.showModal.bind(this);
  }
  showModal(target) {
    return (event) => {
      event.preventDefault();

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
          <LinkItem linkType={"text"} onClick={this.showModal(MODAL.signIn)}>
            Sign Up
          </LinkItem>
          <LinkItem linkType={"text"} onClick={this.showModal(MODAL.signUp)}>
            Log In
          </LinkItem>
          <LinkItem linkType={"button"} href="/enroll">
            Become a Tradie
          </LinkItem>
        </Layout>
        {showModal === MODAL.signIn && (
          <SignInModal
            onClose={this.showModal(MODAL.empty)}
            onSignUp={this.showModal(MODAL.signUp)}
          />
        )}
        {showModal === MODAL.signUp && (
          <SignUpModal
            onClose={this.showModal(MODAL.empty)}
            onSignIn={this.showModal(MODAL.signIn)}
          />
        )}
      </>
    );
  }
}

export default Private;
