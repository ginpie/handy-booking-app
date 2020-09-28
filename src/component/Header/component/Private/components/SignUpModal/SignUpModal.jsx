import React from "react";
import PropTypes from "prop-types";
import Modal from "../../../Modal";
import NakedButton from "../../../NakedButton";

const SignInModal = ({ onClose, onSignUp }) => (
  <Modal
    onClose={onClose}
    title="Sign-In"
    content="THi is Body"
    footer={
      <>
        Not a member yet?&nbsp;
        <NakedButton variant="link" onClick={onSignUp}>
          Sign-Up
        </NakedButton>
      </>
    }
  />
);
SignInModal.propType = {
  onClose: PropTypes.func.isRequired,
  onSignUp: PropTypes.func.isRequired,
};
export default SignInModal;
