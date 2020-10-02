import React from 'react';
import styled from 'styled-components';
import CardWrapper from './component/CardWrapper';

const Layout = styled.div`
    padding: 30px;
    width: 100vw;
    
`;

const Header = styled.h1`
    font-size: 1.2rem;
`;

const tradiesData = [
    {name: "Ian Yin", label: ["Cleaning", "Furniture Assembly", "House Moving", "Installation"], rating: 3},
    {name: "David", label: ["Cleaning", "Furniture Assembly", "House Moving"], rating: 5},
    {name: "Jinpei", label: ["Cleaning", "Furniture Assembly", "House Moving"], rating: 4},
    {name: "Ming", label: ["Cleaning", "Furniture Assembly"], rating: 5},
]

class ServiceContent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            current: "",
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        this.setState({
            current: event.target.innerHTML,
        });
        console.log(event.target.innerHTML);
    }

    render() {
        const title = this.props.title;
        const current = this.state.current;
        const handleClick = this.handleClick;

        return (
            <Layout>
                <Header>{` ${title} Recommendations:`}</Header>
                <CardWrapper current={current} data={tradiesData} handleClick={handleClick} />
            </Layout>
        )
    }
}

export default ServiceContent;
