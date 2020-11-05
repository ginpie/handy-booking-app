import React, {useState, Fragment} from 'react';
import styled from 'styled-components';
import Header from '../Header';
import InnerNavBar from '../InnerNavbar';
import General from './components/General';
import SignInAndSecuirty from './components/SignInAndSecurity';

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Top = styled.div`
    width: 90%;
    margin-top: 30px;
`;

const Nav = styled.div`
    width: 90%;
    margin-top: 30px;
`;

const Content = styled.div`
    width: 85%;
    margin-top: 30px;
`;



const Settings = ({fakeUserData, role}) => {
    const [currentInnerPage, setCurrentInnerPage] = useState('GENERAL');

    const innerNavItems = [
        {key:"GENERAL", value:"GENERAL", content:(<General fakeUserData={fakeUserData} role={role}/>)},
        {key:"SINGINANDSECURITY", value:"SING IN AND SECURITY", content:(<SignInAndSecuirty fakeUserData={fakeUserData}/>)},
    ]

    return ( 
        <Container>
            <Top>
                <Header>
                    <Header.Title>Settings</Header.Title>
                </Header>
            </Top>
            <Nav>
                <InnerNavBar 
                navItems={innerNavItems}
                currentInnerPage={currentInnerPage}
                setCurrentInnerPage={setCurrentInnerPage}
                />
            </Nav>
            <Content>
                {innerNavItems.map(item=>{
                    if(currentInnerPage!==item.value){
                        return null
                    }
                    return (
                        <Fragment key={item.key}>
                            {item.content}
                        </Fragment>
                    )
                })}
            </Content>
        </Container>
     );
}
 
export default Settings;