import React from 'react';
import style from '../Order.module.scss';

const InputItem = (props) => (
    <div>
        <input placeholder={props.children} name={props.children} className={style.input_item}/>
    </div>
);

export default InputItem;