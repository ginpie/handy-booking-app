import React from 'react';
import styled from 'styled-components';

const Layout = styled.div`
`;

const Table = styled.table`
    margin-top: 30px;
    margin-left: 10px;
    font-size: 0.8rem;
`;

const Row = styled.tr`
`;

const Head = styled.th``;

const Content = styled.td`
    padding-left: 10px;
    max-width: 250px;
    line-height: 2rem;
`;

const About = styled.p`
    font-size: 0.8rem;
    width: 70%;
    margin: 0 auto;
`;

const TradiesInfo = () => (
    <Layout>
        <Table>
            <Row>
                <Head>Name:</Head>
                <Content>Ian Yin</Content>
            </Row>
            <Row>
                <Head>Language</Head>
                <Content>English, Mandarin</Content>
            </Row>
            <Row>
                <Head>Skills:</Head>
                <Content>XXX, XXX, XXXX</Content>
            </Row>
            <Row>
                <Head>About:</Head>
            </Row>
        </Table>
        <About>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In iaculis eget 
            lectus dui. Neque duis id imperdiet amet. 
            Pulvinar massa varius ipsum adipiscing 
            tincidunt ultrices lectus libero. A arcu 
            aliquet lorem non metus.
        </About>
    </Layout>
);

export default TradiesInfo;