import React from 'react';
import ItemButton from './component/ItemButton';

class Order extends React.Component {
    constructor(props) {
        super(props);
        this.type = [
            {key: "Furniture Assembly", value: ["small furniture", "medium furniture", "large furniture"]},
            {key: "House Cleaning", value: ["beds", "baths"]},
            {key: "Moving Help", value: ["hours"]},
            {key: "Air Conditioning Installation", value: ["window units"]},
        ]
        this.state = {
            category: this.type,
        };
    }

    render() {
        const page = this.props.children;
        const orderType = this.state.category;
        return (
            <form>
                {
                    orderType.map((type) => {
                        if (type.key !== page) {
                            return null;

                        }
                        return (
                            type.value.map((item) => {
                                return (
                                    <ItemButton>{item}</ItemButton>
                                );
                            }) 
                        );
                    })}
            </form>
        );
    }
}

export default Order;