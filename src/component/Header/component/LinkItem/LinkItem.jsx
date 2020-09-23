import styled, { css } from 'styled-components';

const LinkItem = styled.a`
    text-decoration: none;
    margin: 20px;
    color: black;

    ${(props) => {
        const style = {
            nav: css`
                text-transform: uppercase;
            `,

            button: css`
                border: 2px solid rgb(253, 219, 58);
                background-color: rgb(253, 219, 58);
                color: black;
                box-sizing: border-box;
                border-radius: 6px;
                padding: 6px;

            `,
        }[props.linkType];

        return style;
    }}
`;

export default LinkItem;