import React from "react";
import Layout from "../Layout";
import LinkItem from "../LinkItem";
import SignInModel from "../SignInModel";

class Private extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showSignInModel: false,
    };

    this.toggleSignInModel = this.toggleSignInModel.bind(this);
  }

  toggleSignInModel(event) {
    event.preventDefault();

    this.setState((prevState) =>
      this.setState({
        showSignInModel: !prevState.showSignInModel,
      })
    );
  }

  render() {
    const { showSignInModel } = this.state;

    return (
      <>
        <Layout>
          <LinkItem
            href="/signUp"
            linkType={"text"}
            onClick={this.toggleSignInModel}
          >
            Sign Up
          </LinkItem>
          <LinkItem
            href="/logIn"
            linkType={"text"}
            onClick={this.toggleSignInModel}
          >
            Log In
          </LinkItem>
          <LinkItem
            href="/signUp"
            linkType={"button"}
            onClick={this.toggleSignInModel}
          >
            Become a Tradie
          </LinkItem>
        </Layout>
        {showSignInModel && <SignInModel />}
      </>
    );
  }
}

export default Private;
