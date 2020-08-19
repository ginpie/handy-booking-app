import React from 'react';
import InformationPair from './InformationPair';
import Introduction from './Introduction';

class PersonalDetails extends React.Component {
    constructor(props) {
        super(props);
        this.content = [
            {key:"Name", value: "Ian Yin"},
            {key: "Title", value: "MSGraphicsTrust"},
            {key: "Gender", value: "Male"},
            {key: "Age", value: 27},
            {key: "Language", value: "English, Mandarin"},
        ];
        this.state = {
            details: this.content,
            introduction: "I am a React developer",
        }
    }

    render() {
        const details = this.state.details;
        const intro = this.state.introduction;
        return (
            <div>
                <table>
                    {details.map((content) => {
                        return (
                                <InformationPair content={content.value}>{content.key}</InformationPair>
                        )
                    })}
                </table>
                <Introduction>{intro}</Introduction>
            </div>
        )
    } 
}

export default PersonalDetails;