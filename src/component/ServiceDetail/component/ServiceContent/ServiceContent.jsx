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
            current: "Ian Yin",
            isChosen: false,
        }
    }

    render() {
        const title = this.props.title;
        const current = this.state.current;

        return (
            <Layout>
                <Header>{` ${title} Recommendations:`}</Header>
                <CardWrapper current={current} data={tradiesData}/>
            </Layout>
        )
    }
}

export default ServiceContent;
