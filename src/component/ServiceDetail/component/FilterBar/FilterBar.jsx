import React from 'react';
import styled from 'styled-components';
import FilterSet from './component/FilterSet';

const Container = styled.div`
    width: 100vw;
    height: 70px;
    border-top: 1px solid #000000;
    border-bottom: 1px solid #000000;
    display: flex;
    align-items: center;
`;

const CONTENT = [
    "Distance",
    "Sort by price",
    "Available Time"
];

class FilterBar extends React.Component {
    constructor(props) {
        super(props);
        const content = [
            "Distance",
            "Sort by price",
            "Available Time"
        ];
        this.state = {
            content,
        }
    }

    render() {
        const content = CONTENT;

        return(
            <Container>
                {content.map((item) => {
                    return <FilterSet>{item}</FilterSet>
                })}
            </Container>
        )
    }
}


export default FilterBar;