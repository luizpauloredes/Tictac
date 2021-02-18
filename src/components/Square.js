import React from 'react';
import './Square.css';


const Square = ({val, changeValue, positions, index}) => {
    const findSquare = ()=> {
        for (let i in positions ) {
            if (index == positions[i]) {
                changeValue()
            }
        }
    }

    return (
        <div onClick={()=>{findSquare()}}  className="square m-2 d-flex justify-content-center align-items-center col-3" >
            <h1 className="text-danger text-center">{val}</h1>
        </div>
    )
}

export default Square