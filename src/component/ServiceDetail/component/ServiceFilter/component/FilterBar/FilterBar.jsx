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
    "distance": ["10km", "20km", "30km", "40km", "50km"],
    "rate": ["low to high", "high to low"],
    "time": "",
};

const LINK = ["distance", "rate", "time"];

class FilterBar extends React.Component {
    constructor(props) {
        super(props);
        const content = {
            distance: "Distance",
            rate: "Sort by date",
            time: "Available Time"
        };
        this.state = {
            content,
            active: "",
        }

        this.handleClick=this.handleClick.bind(this);
        this.handleClickDropdown = this.handleClickDropdown.bind(this);
    }

    handleClick(event) {
        event.preventDefault();
        const prev = this.state.active;
        const current = event.target.id;
        this.setState({
            active: (prev===current)?"":current,
        })
    }

    handleClickDropdown(event) {
        event.preventDefault();
        const name = event.target.innerHTML;
        const currentOpen = this.state.active;
        let newContent = this.state.content;
        newContent[currentOpen] = name;
        this.setState({
            content: newContent,
            active: "",
        });
        // console.log(this.state.content[currentOpen]);
    }

    render() {
        const link = LINK;
        const active = this.state.active;
        const title = this.state.content;
        const handleClick = this.handleClick;
        const handleClickDropdown = this.handleClickDropdown;

        return(
            <Container>
                {link.map((item) => {
                    return <FilterDropdown content={CONTENT[item]} clickMethod={handleClick} active={active} title={item} clickTicket={handleClickDropdown}>{title[item]}</FilterDropdown>
                })}
            </Container>
        )
    }
}


export default FilterBar;