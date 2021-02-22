import React, { useEffect, useState } from 'react';
import Square from './Square';


const Board = () => {

    const [positions, setPositions] = useState(['0','0','0','0','0','0','0','0','0',])

    const [currentPlayer, setCurrentPlayer] = useState('B')
    const player1 = '5'
    const player2 = 'X'
    
    
   

    return (
        <div className="container p-3 bg-dark m-5 " >
            <div className="row ">
                {
                    positions && positions.map(
                        (item, index) =>{
                            console.log('clicou', index)
                            return(<div  key={index}  className="square m-2 d-flex justify-content-center align-items-center col-3" >
                            <h1 className="text-danger text-center">{item}</h1>
                        </div>)
                        }                        
                    )
                }
            </div>
        </div>
    )
}

export default Board

