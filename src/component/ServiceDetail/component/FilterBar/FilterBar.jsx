import React from 'react';
import styled from 'styled-components';
// import FilterButton from './component/FilterButton';
import FilterDropdown from './component/FilterDropdown';

const Container = styled.div`
    width: 70vw;
    display: flex;
    align-items: center;
`;

const CONTENT = {
    "Distance": ["10km", "20km", "30km", "40km", "50km"],
    "Sort by rate": ["low to high", "high to low"],
    "Available Time": null,
};

const LINK = ["Distance", "Sort by rate", "Avalailable Time"];

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
            active: "",
        }

        this.handleClick=this.handleClick.bind(this);
    }

    handleClick(event) {
        event.preventDefault();
        const prev = this.state.active;
        const current = event.target.id;
        this.setState({

            active: (prev===current)?"":current,
        })
    }

    render() {
        const link = LINK;
        const active = this.state.active;
        const title = this.state.content;
        return(
            <Container>
                {link.map((item) => {
                    return <FilterDropdown content={CONTENT[item]} clickMethod={this.handleClick} active={active} title={item}>{item}</FilterDropdown>
                })}
            </Container>
        )
    }
}


export default FilterBar;