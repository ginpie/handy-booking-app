import React from 'react';
import InputItem from './InputItem';

class ContactInfo extends React.Component {
    constructor(props) {
        super(props);
        this.needInfo = ["ZIP Code", "Email", "Phone(Optional)", "Additional Information"];
        this.state = {
            needInfo : this.needInfo,
        };
    }

    render() {
        const info = this.state.needInfo;
        return (
            <div>
                {info.map((item) => (
                    <InputItem>{item}</InputItem>
                ))}
            </div>
        )
    }
}

export default ContactInfo;