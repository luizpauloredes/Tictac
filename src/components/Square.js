import React from 'react';
import './Square.css';


const Square = ({val, changeValue}) => {
    return (
        <div onClick={changeValue} className="square m-2 d-flex justify-content-center align-items-center" >
            <h1 className="text-danger text-center">{val}</h1>
        </div>
    )
}

export default Square