import React, {useState} from 'react';
import BoxContainer from '../../../boxContainer/boxContainer';
import './signInAndSecurity.scss';

const SignInAndSecurity = () => {
    const [email, setEmail] = useState('fakeUserDate.email');
    const [password, setPassword] = useState('')
    return ( 
        <div className="signedAccountContainer">
            <BoxContainer title="Account">
                <div className="signedAccount">
                    <div className="signedAccount__left">
                        <div className="signedAccount__left--email">
                            <div className="signedAccount__left--email--title"></div>
                            <input type="text" value={email.address}/>
                        </div>
                        <div className="signedAccount__left--password">
                            <div className="signedAccount__left--email--title"></div>
                            <input type="password" value={password} onChange={(event)=>setPassword(event.currentTarget.value)}/>
                        </div>
                        <div className="signedAccount__left--setPassword"></div>
                    </div>
                    <div className="signedAccount__right">

                    </div>
                </div>
            </BoxContainer>
        </div>
     );
}
 
export default SignInAndSecurity;