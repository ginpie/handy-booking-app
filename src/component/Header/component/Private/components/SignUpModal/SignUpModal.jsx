import React from "react";
import PropTypes from "prop-types";
import Modal from "../../../Modal";
import NakedButton from "../../../NakedButton";

const SignUpModal = ({ onClose, onSignIn }) => (
  <Modal
    onClose={onClose}
    title="Sign-Up"
    content="THi is Body"
    footer={
      <>
        Already Member?&nbsp;
        <NakedButton variant="link" onClick={onSignIn}>
          Sign-In
        </NakedButton>
      </>
    }
  />
);
SignUpModal.propType = {
  onClose: PropTypes.func.isRequired,
  onSignIn: PropTypes.func.isRequired,
};
export default SignUpModal;
