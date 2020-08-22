import React from 'react';
import style from '../Order.module.scss';

class ItemButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            number: 0,
            maxNumber: 10,
            minNumber: 0
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
                <div>
                    <button onClick={this.handleMinus}>-</button>
                    <input value={number} name={name} id = {name} className={style.input_item}></input>
                    <button onClick={this.handleAdd}>+</button>
                </div>

            </div>
        )
    }

};

export default ItemButton;