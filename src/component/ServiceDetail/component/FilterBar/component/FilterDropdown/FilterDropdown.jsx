import React from 'react';
import FilterButton from '../FilterButton';
import Dropdown from '../../../../../Header/component/Public/component/Dropdown';
import styled from 'styled-components';

const Wrapper = styled.div`
    position: relative;
    margin-left: 30px;
`;

class FilterDropdown extends React.Component {

    constructor(props){
        super(props);
    }
    // handleClick(event) {
    //     event.preventDefault();
    //     const prev = this.state.active;
    //     const current = event.target.id;
    //     this.setState({

    //         active: (prev===current)?"":current,
    //     })
    //     console.log(this.state);
    // }



    render() {
        const {content, children, active, clickMethod, title} = this.props;
        // console.log(active);
        const type = (content===undefined)?"calendar":"link";
        // console.log(type);

        return (
            <Wrapper>
                <FilterButton clickMethod={clickMethod} title={title}>{children}</FilterButton>
                {(children == active) && <Dropdown content={content} type={type}/>}
            </Wrapper>
        )
    }
}

export default FilterDropdown;