import React from "react";
import styled from "styled-components";
import fakeAvatar from "../icons/users.png";

const AvatarWrapper = styled.div`
  width: 100%;
  border-radius: 50%;
`;

const Photo = styled.img`
  width: 100%;
  border-radius: 50%;
`;

const Avatar = ({ avatar }) => {
  return (
    <AvatarWrapper>
      <Photo src={avatar || fakeAvatar} alt="avatar" />
    </AvatarWrapper>
  );
};

export default Avatar;
