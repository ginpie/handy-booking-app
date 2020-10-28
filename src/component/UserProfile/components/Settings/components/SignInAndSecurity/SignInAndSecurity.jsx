import React, {useState} from 'react';
import BoxContainer from '../../../BoxContainer';
import styled from 'styled-components';
import SetPasswordModal from '../SetPasswordModal';

const Container = styled.div`
    width: 100%;
`;

const AccountSecuirtyWrapper = styled.div`
    height: 250px;
    width: 100%;
`;

const Row = styled.div`
    width: 90%;
    margin-top: 25px;
    display: flex;
    justify-content: space-between;
`;

const Login = styled.div`
    display: flex;
    justify-content: center;
    @media screen and (max-width: 769px) {
        flex-direction: column;
        align-items: flex-start;
    }
`;

const Title = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 20px;
`;

const Input  = styled.input`
    font-size: 16px;
    font-weight: 500;
    border: none;
    background-color: #f6f6f6;
`;

const EmailStatusButton = styled.button`
    padding: 8px 10px;
    background-color:#32c2ad;
    border-radius: 10px;
    font-weight: 500;
    color: white;
    border: none;
    cursor: pointer;
    &:focus {
        outline: 0;
    }
`;

const SetPassowrdButton = styled.button`
    border-width: thin;
    cursor: pointer;
    padding: 5px 15px;
    background: white;
    border-radius: 5px;
    &:focus {
        outline: 0;
    }
    &:hover {
        opacity:0.5;
    }
`;



const SignInAndSecurity = ({fakeUserData}) => {
    const [email, setEmail] = useState(fakeUserData.email);
    const [password, setPassword] = useState('')
    const [showModal, setShowModal] = useState(false)

    const handleShowModal = (event) => {
        event.preventDefault();
        setShowModal(!showModal);
    }

    return ( 
        <Container>
            <AccountSecuirtyWrapper>
                <BoxContainer title="Account Secuirty">
                    <Row>
                        <Login>
                            <Title>
                                Login:
                            </Title>
                            <Input
                                type="text"
                                value={email}
                                readOnly
                            >
                            </Input>
                        </Login>
                        <EmailStatusButton>
                            Verified
                        </EmailStatusButton>
                    </Row>
                    <Row>
                        <Login>
                            <Title>
                                Password:
                            </Title>
                            <Input
                                type="text"
                                value="xxxxxxxx"
                                readOnly
                            >
                            </Input>
                        </Login>
                    </Row>
                    <Row>
                        <SetPassowrdButton onClick={handleShowModal}>Set Password</SetPassowrdButton>
                    </Row>
                </BoxContainer>
            </AccountSecuirtyWrapper>
            {showModal && <SetPasswordModal onClose={handleShowModal}/>}
        </Container>
     );
}
 
export default SignInAndSecurity;