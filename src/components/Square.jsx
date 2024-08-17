import React from 'react';
import './Square.css';

const Square = ({ value, onClick }) => {
    return (
        <button onClick={onClick} className="square">
            {value}
        </button>
    );
};
//`onClick = {onClick}` == `onClick = {()=>{onClick()}}`같은 뜻
export default Square;
