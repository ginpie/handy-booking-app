import React from 'react';
import styled from 'styled-components';
import CardWrapper from './component/CardWrapper';

const Wrapper = styled.div`
`;

const Layout = styled.div`
    padding: 30px;
    max-width: 960px;
    margin: 0 auto;
`;

const Header = styled.h1`
    font-size: 1.2rem;
`;

const OrderLayout =  styled.div``;

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
            isClicked: false,
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(name, event) {
        event.preventDefault();
        this.setState({
            current: name,
            isClicked: true,
        });
        console.log(name);
    }

    render() {
        const title = this.props.title;
        const current = this.state.current;
        const isClicked = this.state.isClicked;
        const handleClick = this.handleClick;

        return (
            <Wrapper>
                <Layout>
                    <Header>{` ${title} Recommendations:`}</Header>
                    <CardWrapper current={current} data={tradiesData} handleClick={handleClick} isClicked={isClicked} />
                    
                </Layout>
            </Wrapper>

        )
    }
}

export default ServiceContent;
