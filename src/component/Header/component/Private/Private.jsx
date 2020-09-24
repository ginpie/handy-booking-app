import React from 'react';
import Layout from '../Layout';
import LinkItem from '../LinkItem';

const Private = () => (
    <Layout>
        <LinkItem href="/signUp" linkType={"text"}>Sign Up</LinkItem>
                <LinkItem href="/logIn" linkType={"text"}>Log In</LinkItem>
                <LinkItem href="/logIn" linkType={"button"}>Become a Tradie</LinkItem>
    </Layout>
);

export default Private;