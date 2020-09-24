import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const LinkItem = styled.a`
    text-decoration: none;
    margin: 20px;
    color: black;

    ${(props) => {
        const style = {
            nav: css`
                text-transform: uppercase; 
                & :hover: background-color: #ffffff;
            `,

            button: css`
                border: 2px solid #ffffff;
                background-color: rgb(253, 219, 58);
                color: #ffffff;
                box-sizing: border-box;
                border-radius: 6px;
                padding: 6px 4px;
            `,
        }[props.linkType];

        return style;
    }}
`;

LinkItem.propTypes = {
    linkType: PropTypes.string,
};

export default LinkItem;