import React, {useState} from 'react';
import { store } from 'react-notifications-component';
import BoxContainer from '../../../BoxContainer';
import styled from 'styled-components';
import SetPasswordModal from '../SetPasswordModal';
import updateUserPassword from '../../../../../../apis//updateUserPassword';

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



const SignInAndSecurity = ({userData}) => {
    const [email] = useState(userData.email);
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState('')
    const [showModal, setShowModal] = useState(false)
    const [displayError, setDispalyError] = useState(false)

    const handleShowModal = (event) => {
        event.preventDefault();
        setShowModal(!showModal);
    }

    const handleUpdatePassword = async(event) => {
        event.preventDefault(event);
        if (password==="") {
            setDispalyError(true)
            return
        }
        if (password!==confirmPassword) {
            setDispalyError(true)
            return
        }
        const data = {
            password: password
        };
        await updateUserPassword(userData._id, data);
        setShowModal(!showModal);
        store.addNotification({
            title:"Succusful",
            message:"Your Password has been Updated",
            type:"info",
            container: "top-center",
            animationIn: ["animate__animated", "animate__zoomIn"],
            animationOut: ["animate__animated", "animate__zoomOut"],
            dismiss: {
              duration: 2000,
              onScreen: true
            }
          })
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
            {showModal && 
            <SetPasswordModal 
                onClose={handleShowModal}
                handleUpdatePassword={handleUpdatePassword}
                password={password}
                confirmPassword={confirmPassword}
                setPassword={setPassword}
                setConfirmPassword={setConfirmPassword}
                displayError={displayError}
            />}
        </Container>
     );
}
 
export default SignInAndSecurity;