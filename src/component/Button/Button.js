import styled, { css } from "styled-components";
import NakedButton from "../NakedButton";

const Button = styled(NakedButton)`
  border-radius: 200px;

  ${(props) =>
    props.width &&
    css`
      width: ${props.width};
    `}
  ${(props) => {
    const style = {
      small: css`
        font-size: 14px;
        padding: 8px 18px;
      `,
      medium: css`
        font-size: 16px;
        padding: 12px 18px;
      `,

      large: css`
        font-size: 18px;
        padding: 16px 18px;
      `,
    }[props.size || "medium"];
    return style;
  }}

  ${(props) => {
    const style = {
      primary: css`
        background: #e0446d;
        color: white;
      `,
      secondary: css`
        background: #f5f8fd;

        color: #008fb4;
      `,

      success: css`
        background: #7db343;
        color: white;
      `,
    }[props.variant];
    return style;
  }}
`;
export default Button;
