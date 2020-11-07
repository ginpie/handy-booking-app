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

const Head = styled.th`
    text-transform: uppercase;
    text-align: left;
`;

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

const getAvgRating = (orders) => {

    return orders && orders.length > 0 ? Math.round(orders.reduce((acc, val) => acc + val, 0) / orders.length) : 0;
}

const TableRows = (data) => {
    const validKeys = ["name", "language", "skills", "about"];
    let content = [];
    for (let key in data) {
        if (validKeys.includes(key)) {
            content.push(
                    <Row>
                        <Head>{key}</Head>
                        {key==="about"?null:<Content>{data[key]}</Content>}
                    </Row>
            );
        }
    }
    return content;
}

const TradiesInfo = (props) => {
    const name = `${props.data.first_name} ${props.data.last_name}`;
    const rating = getAvgRating(props.data.orders);
    const about = props.data.description;
    const data = {
        name,
        language: 'English',
        rating,
        about,
    }

    return (
        <Layout>
            <Table>
                {TableRows(data)}
            </Table>
            <About>
                {props.data.description}
            </About>
        </Layout>
    )
};

export default TradiesInfo;