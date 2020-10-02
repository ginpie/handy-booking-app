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

class ServiceContent extends React.Component {
    

    render() {
        return (
            <Layout>
                <Header>Recommendations:</Header>
                <CardWrapper />
            </Layout>
        )
    }
}

export default ServiceContent;
