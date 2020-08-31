import React from 'react';

const Comments = (props) => (
    <div>
        {props.rating.map((item) => {
            return (
                <div>
                    <p>{item.comment}</p>
                </div>
            )
        })}
    </div>
);

export default Comments;