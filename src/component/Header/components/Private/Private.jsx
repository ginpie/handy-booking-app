import React from "react";
import Layout from "../Layout";
import LinkItem from "../LinkItem";
import { CSSTransition } from "react-transition-group";
import withFetch from '../../../withFetch'
import  { AuthenticationContext } from '../../../withAuthentication'
import Logout from './components/Logout'
import AuthenticationModals from '../AuthenticationModals';
import "./styles.css";



class Private extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      authenticationModal: null,
    };
    this.setAuthenticationModal = this.setAuthenticationModal.bind(this);
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
    const { authenticationModal } = this.state;
    return (
      <>
        <Layout>
          <AuthenticationContext.Consumer>
          {(Authentication)=>Authentication.user?(
            <>
            <LinkItem href="/user-profile" linkType={"text"} >DashBoard</LinkItem>
            <Logout />
              </>
          ) : (
            <>
              <LinkItem
                linkType={"text"}
                onClick={this.setAuthenticationModal('signUp')}>
                Sign Up
              </LinkItem>

              <LinkItem
                linkType={"text"}
                onClick={this.setAuthenticationModal('signIn')}>
                Sign In
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
