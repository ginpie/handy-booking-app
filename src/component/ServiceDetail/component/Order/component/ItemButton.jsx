import React from 'react';

class ItemButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            number: 0,
            maxNumber: 10,
            minNumber: 0,
        };

        this.getNumber = this.getNumber.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
        this.handleMinus = this.handleMinus.bind(this)
    }

    getNumber() {
        return this.state.number;
    }

    setMaxNumber(number) {
        this.setState({
            maxNumber: number
        });
    }

    setMinNumber(number) {
        this.setState({
            minNumber: number
        });
    }

    handleAdd(event) {
        event.preventDefault();
        const currentNumber = this.state.number;
        if (currentNumber < this.state.maxNumber) {
            this.setState({
                number: currentNumber + 1
            });
        }
    }

    handleMinus(event) {
        event.preventDefault();
        const currentNumber = this.state.number;
        if (currentNumber > this.state.minNumber) {
            this.setState({
                number: currentNumber - 1
            });
        }
    }

    render() {
        const number = this.getNumber();
        const name = this.props.children;

        return (
            <div>
                <label>{name}</label>
                <button onClick={this.handleMinus}>-</button>
                <input value={number}></input>
                <button onClick={this.handleAdd}>+</button>
            </div>
        )
    }

};

export default ItemButton;