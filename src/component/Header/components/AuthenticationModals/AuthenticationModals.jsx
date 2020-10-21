import React from 'react';
import PropTypes from 'prop-types';
import SignInModal from './components/SignInModal';
import SignUpModal from './components/SignUpModal';

class AuthenticationModals extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modal: props.initialModal,
    };

    this.setModal = this.setModal.bind(this);
    this.onClose = this.onClose.bind(this);
  }

  onClose() {
    const { onClose } = this.props;

    this.setModal();

    if (onClose) {
      onClose();
    }
  }

  setModal(target) {
    return (event) => {
      if (event) {
        event.preventDefault();
      }

      this.setState({
        modal: target,
      });
    };
  }

  render() {
    const { modal } = this.state;

    return {
      signIn: (
        <SignInModal
          onClose={this.onClose}
          onSignUp={this.setModal('signUp')}
        />
      ),
      signUp: (
        <SignUpModal
          onClose={this.onClose}
          onSignIn={this.setModal('signIn')}
        />
      ),
    }[modal];
  }
}

AuthenticationModals.defaultProps = {
  initialModal: 'signIn',
  onClose: undefined,
};

AuthenticationModals.propTypes = {
  initialModal: PropTypes.oneOf(['signIn', 'signUp']),
  onClose: PropTypes.func,
};

export default AuthenticationModals;