import React from 'react';

const InputItem = (props) => (
    <div>
        <input placeholder={props.children} name={props.children} />
    </div>
);

export default InputItem;