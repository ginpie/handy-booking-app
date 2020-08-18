import React from 'react';

class ItemButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            number: 0,
            maxNumber: 10,
            minNumber: 0
        };

        this.getNumber = this.getNumber.bind(this);
    }

    getNumber() {
        return this.state.number;
    }

    setMaxNumber(number) {
        this.setState = {
            maxNumber: number
        };
    }

    setMinNumber(number) {
        this.setState = {
            minNumber: number
        };
    }

    render() {

        return (
            <div>
            </div>
        )
    }

};

export default ItemButton;