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
        min-width: 30px;
        height: 40px;
        width: auto;
        padding: 6px 4px;
        margin: 0 20px;
        display: flex;
        align-items: center;
        border: 2px solid #ffffff;
        background-color: rgba(253, 219, 58, 0.1);
        color: #ffffff;
        box-sizing: border-box;
        border-radius: 6px;

        &:hover {
          color: #000000;
          border-color: #000000;
        }
      `,

      text: css`
        width: 80px;
        cursor: pointer;
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
