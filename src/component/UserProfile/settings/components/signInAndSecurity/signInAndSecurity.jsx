import React, { useState } from "react";
import BoxContainer from "../../../boxContainer/boxContainer";
import facebookIcon from "../../../icons/facebook.png";
import Avatar from "../../../avatar/avatar";
import "./signInAndSecurity.scss";

const SignInAndSecurity = ({ fakeUserData }) => {
  const [email] = useState(fakeUserData.email);
  const [password, setPassword] = useState("");
  return (
    <div className="signedAccountContainer">
      <BoxContainer title="Account">
        <div className="signedAccount">
          <div className="signedAccount__left">
            <div className="signedAccount__left--email">
              <div className="signedAccount__left--email--title">Login</div>
              <input
                type="text"
                className="signedAccount__left--email--input"
                value={email.address}
                readOnly
              />
            </div>
            <div className="signedAccount__left--password">
              <div className="signedAccount__left--password--title">
                Password
              </div>
              <input
                type="password"
                value={password}
                onChange={(event) => setPassword(event.currentTarget.value)}
                className="signedAccount__left--password--input"
                placeholder="xxxxxxxx"
              />
            </div>
            <div className="signedAccount__left--setPassword">Set Password</div>
          </div>
          <div className="signedAccount__right">
            <div className="signedAccount__right--facebook">
              <div className="signedAccount__right--facebook--icon-wrapper">
                <img
                  src={facebookIcon}
                  className="signedAccount__right--facebook--icon-wrapper"
                  alt="faceboxIcon"
                />
              </div>
              <div className="signedAccount__right--facebook--text">
                Link with Facebook
              </div>
            </div>
            <div className="signedAccount__right--google">
              <div className="signedAccount__right--google--avatar">
                <Avatar />
              </div>
              <div className="signedAccount__right--google--name">Google</div>
              <div className="signedAccount__right--google--status">Unlink</div>
            </div>
          </div>
        </div>
      </BoxContainer>
    </div>
  );
};

export default SignInAndSecurity;
