import styled, { css } from "styled-components";
import PropTypes from "prop-types";

const LinkItem = styled.a`
  text-decoration: none;
  padding: 10px;
  margin: 10px;
  color: black;
  transition: ease, 0.2s;

  &:hover {
    text-decoration: none;
  }

  ${(props) => {
    const style = {
      nav: css`
        text-transform: uppercase;
        &:hover {
          background-color: #ffffff;
          border-radius: 6px;
        }
      `,

      button: css`
        min-width: 140px;
        height: 40px;
        display: flex;
        align-items: center;
        border: 2px solid #ffffff;
        background-color: rgb(253, 219, 58);
        color: #ffffff;
        box-sizing: border-box;
        border-radius: 6px;
        padding: 6px 4px;
        &:hover {
          color: #000000;
          border-color: #000000;
        }
      `,

      text: css`
        width: 80px;
        &:hover {
          color: #ffffff;
        }
      `,
    }[props.linkType];

    return style;
  }}
`;

LinkItem.propTypes = {
  linkType: PropTypes.string,
};

export default LinkItem;
